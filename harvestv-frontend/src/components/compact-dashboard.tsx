"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useFarm } from "@/lib/farm-context";
import { useLanguage } from "@/lib/language";
import type { WeatherData } from "@/lib/live-types";
import type { RotationResponse } from "@/lib/rotation";
import { ClimateHistory } from "@/components/live-dashboard";

const assets = "/figma/dashboard-compact";
function Icon({ name, alt = "" }: { name: string; alt?: string }) { return <img src={`${assets}/${name}.svg`} alt={alt} />; }
function formatDate(value: string, language: string) { return new Date(`${value}T12:00:00Z`).toLocaleDateString(language === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "short", timeZone: "UTC" }); }

export default function CompactDashboard() {
  const { farm, farms, loading: farmLoading } = useFarm();
  const { language, t } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherError, setWeatherError] = useState(false);
  const [rotation, setRotation] = useState<RotationResponse | null>(null);
  useEffect(() => {
    if (!farm) { setWeather(null); setWeatherError(false); return; }
    const controller = new AbortController(); setWeatherError(false);
    fetch(`/api/weather?latitude=${farm.latitude}&longitude=${farm.longitude}`, { signal: controller.signal }).then(async response => { if (!response.ok) throw new Error(); setWeather(await response.json()); }).catch(error => { if (error.name !== "AbortError") setWeatherError(true); });
    return () => controller.abort();
  }, [farm?.id, farm?.latitude, farm?.longitude]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/rotation", { signal: controller.signal, cache: "no-store" }).then(async response => { if (!response.ok) throw new Error(); setRotation(await response.json()); }).catch(() => {});
    return () => controller.abort();
  }, [farm?.id]);
  const details = farm?.details ?? {};
  const plantedAt = details.plantingDate ? Date.parse(`${details.plantingDate}T00:00:00Z`) : NaN;
  const harvestAt = details.harvestDate ? Date.parse(`${details.harvestDate}T00:00:00Z`) : NaN;
  const elapsed = Number.isFinite(plantedAt) ? Math.max(0, Math.floor((Date.now() - plantedAt) / 86400000)) : null;
  const duration = Number.isFinite(plantedAt) && Number.isFinite(harvestAt) && harvestAt > plantedAt ? Math.ceil((harvestAt - plantedAt) / 86400000) : null;
  const progress = duration && elapsed !== null ? Math.min(100, Math.max(0, Math.round(elapsed / duration * 100))) : null;
  const number = (value: number | null | undefined, maximumFractionDigits = 1) => value == null ? "—" : new Intl.NumberFormat(language === "bn" ? "bn-BD" : "en-GB", { maximumFractionDigits }).format(value);
  const nextRain = useMemo(() => weather?.days.find(day => (day.rain ?? 0) > 0), [weather]);
  const plan = rotation?.plans.find(item => item.id === rotation.savedPlanId) ?? rotation?.plans[0];
  const nextCrop = plan?.crops[0];
  return (
    <div className="compact-dashboard" data-node-id="136:6">
      <section className="compact-plot-strip" aria-label={t("Active Plot")}><div className="compact-dashboard-width"><div className="compact-plot-details"><span className="compact-dot" /><span>{t("Active Plot")}:</span><strong>{farm?.name ?? t(farmLoading ? "Loading farm…" : "No farm selected")}</strong>{farm && <small>{[details.area && `${details.area} ${t("Bigha")}`, details.district || farm.label].filter(Boolean).join(" • ")}</small>}</div><Link href="/my-farm" className="compact-outline-button"><Icon name="switch" />{t(farms.length > 1 ? "Switch Plot" : "Edit farm")}<Icon name="chevron" /></Link></div></section>
      <main className="compact-dashboard-main">
        {!farm ? <section className="compact-empty-state"><p className="compact-kicker">{t("FARM DASHBOARD")}</p><h1>{t("Add your farm to see live conditions")}</h1><p>{t("Confirm a farm location and basic field details before loading weather and crop planning information.")}</p><Link href="/my-farm" className="compact-primary-button">{t("Add your farm")}</Link></section> : <>
          <section className="compact-crop-card">
            <div className="compact-crop-copy"><div className="compact-title-row"><h1>{details.crop ? t(details.crop) : t("Current crop not set")}</h1><span>{t("SAVED FARM RECORD")}</span></div><div className="compact-progress-copy"><strong>{elapsed === null ? t("Add planting date") : `${t("Day")} ${number(elapsed, 0)}${duration ? ` ${t("of")} ${number(duration, 0)} (${number(progress, 0)}%)` : ""}`}</strong><span>{details.harvestDate ? `${t("Harvest")}: ${formatDate(details.harvestDate, language)}` : t("Harvest date not set")}</span></div><div className="compact-progress" aria-label={t("Planned season progress")}><span style={{ width: `${progress ?? 0}%` }} /></div>
              <div className="compact-directives"><article><span className="compact-icon-tile"><Icon name="water" /></span><div><small>{t("WATER SUPPLY")}</small><strong>{details.water ? t(details.water) : t("Not set")}</strong><p>{t("From your saved farm record")}</p></div></article><article><span className="compact-icon-tile warm"><Icon name="calendar" /></span><div><small>{t("PLANNED HARVEST")}</small><strong>{details.harvestDate ? formatDate(details.harvestDate, language) : t("Not set")}</strong><p>{t("Entered by you—not a forecast")}</p></div></article></div>
              <div className="compact-actions"><button type="button" data-action="Log Field Action" className="compact-primary-button"><Icon name="log" />{t("Log Activity")}</button><Link href="/policies#soil" className="compact-outline-button"><Icon name="guide" />{t("Soil & fertilizer guide")}</Link></div></div>
            <figure className="compact-crop-image"><img src={`${assets}/farmers-planting.jpg`} alt={t("Farmers planting rice in a field")} /><figcaption><strong>{t("Satellite crop health is not connected")}</strong></figcaption></figure>
          </section>
          <section className="compact-metrics">
            <article><div><small>{t("WEATHER & RAIN")}</small><p><strong>{weatherError ? "—" : `${number(weather?.current.temperature)}°C`}</strong><span>{weatherError ? t("Unavailable") : t("Live area estimate")}</span></p><p className="compact-card-note"><Icon name="rain" />{nextRain ? `${formatDate(nextRain.date, language)} · ${number(nextRain.rain)} mm` : t("No forecast rain shown")}</p></div><span className="compact-metric-icon"><Icon name="sun" /></span></article>
            <article><div><small>{t("SOIL RECORD")}{details.soil ? ` (${t(details.soil)})` : ""}</small><p><strong>{t("Moisture not connected")}</strong></p><p className="compact-card-note">{t("pH")}: <b>{details.ph || t("Not set")}</b></p></div><span className="compact-metric-icon"><Icon name="soil" /></span></article>
            <article><div><small>{t("PEST SURVEILLANCE")}</small><p><span className="compact-muted-dot" /><strong>{t("Not connected")}</strong></p><p className="compact-card-note">{t("No sensor or expert feed connected")}</p></div><span className="compact-metric-icon"><Icon name="pest" /></span></article>
          </section>
          <section className="compact-rotation-card"><span className="compact-rotation-icon"><Icon name="rotation" /></span><div><small>{t("NEXT CROP ROTATION")}</small><h2>{nextCrop ? t(nextCrop) : t("Choose a crop plan")}</h2><p>{t("Planning option—not a guaranteed prescription. Review the full limits before saving.")}</p></div><Link href="/crop-rotation" className="compact-outline-button">{t("View Crop Plan")}<Icon name="arrow" /></Link></section>
          <details className="compact-nasa-section"><summary>{t("NASA climate history")}</summary><ClimateHistory /></details>
        </>}
      </main>
      <footer className="compact-dashboard-footer"><div className="compact-dashboard-width"><span><span className="app-navbar-logo"><Icon name="logo" /></span><strong>HarvestV</strong><small>• {t("Agronomy planning for Bangladesh")}</small></span><span><Icon name="phone" />{t("Helpline")}: 16123</span><span>© 2026 HarvestV</span></div></footer>
    </div>
  );
}
