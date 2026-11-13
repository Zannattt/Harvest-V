"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/language";

const pages = [
  ["home", "/", "Home"],
  ["dashboard", "/dashboard", "Dashboard"],
  ["my-farm", "/my-farm", "My Farm"],
  ["crop-rotation", "/crop-rotation", "Crop Rotation"],
  ["information-check", "/information-check", "Information Check"],
  ["feedback", "/feedback", "Feedback"],
] as const;

export default function AppNavbar({ active = "" }: { active?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const selectedPage = active === "profile" ? "/profile" : pages.find(([key]) => key === active)?.[1] || "/";
  return (
    <header className="app-navbar">
      <div className="app-navbar-inner">
        <Link href="/" className="app-navbar-brand" aria-label="HarvestV home">
          <span className="app-navbar-logo"><img src="/figma/dashboard-compact/logo.svg" alt="" /></span>
          <span>HarvestV</span>
        </Link>
        <nav className="app-navbar-links" aria-label={language === "bn" ? "মূল মেনু" : "Main navigation"}>
          {pages.map(([key, href, label]) => <Link key={key} href={href} className={active === key ? "active" : ""} aria-current={active === key ? "page" : undefined}>{t(label)}</Link>)}
        </nav>
        <div className="app-navbar-actions">
          <label className="app-navbar-mobile-select">
            <span className="sr-only">{t("Go to page")}</span>
            <select value={selectedPage} onChange={(event) => router.push(event.target.value)} aria-label={t("Go to page")}>
              {pages.map(([key, href, label]) => <option key={key} value={href}>{t(label)}</option>)}
              <option value="/profile">{t("Edit profile")}</option>
            </select>
          </label>
          <div className="app-navbar-language" role="group" aria-label="Language / ভাষা">
            <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} lang="en">EN</button>
            <button type="button" onClick={() => setLanguage("bn")} aria-pressed={language === "bn"} lang="bn">বাংলা</button>
          </div>
          <Link href="/profile" className="app-navbar-profile" aria-label={t("Edit profile")}>
            <span className="app-navbar-avatar"><img src="/figma/dashboard/59e02.svg" alt="" /></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
