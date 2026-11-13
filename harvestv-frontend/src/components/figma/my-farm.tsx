"use client";

import Link from "next/link";
import FarmAddressField from "@/components/farm-address-field";
import { FarmLocation } from "@/components/farm-location";
import { useFarm } from "@/lib/farm-context";
import { useLanguage } from "@/lib/language";

const assets = "/figma/my-farm";

type SectionProps = { number: number; title: string; description: string; icon: string; children: React.ReactNode };

function FarmSection({ number, title, description, icon, children }: SectionProps) {
  const { t } = useLanguage();
  return <section className="my-farm-card" id={title.toLowerCase()}>
    <header className="my-farm-card-header">
      <div className="my-farm-card-heading"><span className="my-farm-step" aria-hidden="true">{number}</span><div><h2>{t(title)}</h2><p>{t(description)}</p></div></div>
      <img src={`${assets}/${icon}`} alt="" />
    </header>
    <div className="my-farm-card-body">{children}</div>
  </section>;
}

function FieldLabel({ children }: { children: React.ReactNode }) { return <span className="my-farm-field-label">{children}</span>; }

export default function MyFarmHarvestV() {
  const { t } = useLanguage();
  const { details, setDetails } = useFarm();
  const setField = (key: string, value: string) => setDetails({ ...details, [key]: value });
  const crops = ["Rice", "Mustard", "Mungbean", "Jute", "Potato", "Maize", "Other"];
  const soils = ["Silt Loam", "Clay Loam", "Sandy Loam"];
  const waterSources = ["Deep Tube Well", "Shallow Tube Well", "Canal / Pond", "Rainfed"];

  return <div className="my-farm-modern" data-node-id="95:4404">
    <main className="my-farm-main">
      <div className="my-farm-title-row">
        <h1>{t("My Farm")}</h1>
        <div className="my-farm-page-actions">
          <button type="button" className="my-farm-button secondary" data-action="Cadastral Export"><img src={`${assets}/2e66f.svg`} alt="" />{t("Download")}</button>
          <button type="button" className="my-farm-button primary" data-action="Register New Field"><img src={`${assets}/75a42.svg`} alt="" />{t("Register New Field")}</button>
        </div>
      </div>

      <div className="my-farm-sections">
        <FarmSection number={1} title="Location" description="We use your location to recommend crops suited to your local weather and soil." icon="d3fae.svg">
          <div className="my-farm-location-actions">
            <button type="button" className="my-farm-button primary" data-action="Use my current location"><img src={`${assets}/78ce3.svg`} alt="" />{t("Use my current location")}</button>
            <button type="button" className="my-farm-button secondary" data-action="Manual entry"><img src={`${assets}/37d49.svg`} alt="" />{t("Manual entry")}</button>
          </div>
          <div className="my-farm-address-grid">
            <label><FieldLabel>{t("Division")}</FieldLabel><FarmAddressField field="division" /></label>
            <label><FieldLabel>{t("District")}</FieldLabel><FarmAddressField field="district" /></label>
            <label><FieldLabel>{t("Mauza / CS Plot Number (optional)")}</FieldLabel><FarmAddressField field="plot" /></label>
          </div>
          <div className="my-farm-map-block"><FieldLabel>{t("Farm location map")}</FieldLabel><FarmLocation compact /></div>
          <div className="my-farm-note"><img src={`${assets}/8be80.svg`} alt="" /><p>{t("GPS coordinates will not overwrite your manual entries if connection drops.")}</p></div>
        </FarmSection>

        <FarmSection number={2} title="Crops" description="Tell us what is growing now and what you planted before." icon="cf258.svg">
          <div className="my-farm-two-column">
            <label className="my-farm-control"><FieldLabel>{t("Current crop")}</FieldLabel><select name="crop" value={details.crop || ""} onChange={(event) => setField("crop", event.target.value)}><option value="">{t("I don't know")}</option>{crops.map((crop) => <option key={crop} value={crop}>{t(crop)}</option>)}</select></label>
            <label className="my-farm-control"><FieldLabel>{t("Previous Crops")}</FieldLabel><input name="cropHistory" value={details.cropHistory || ""} onChange={(event) => setField("cropHistory", event.target.value)} placeholder={t("e.g. Rice, Mustard")} /></label>
          </div>
          <details className="my-farm-optional"><summary>{t("Optional crop details")}</summary><div className="my-farm-three-column">
            <label className="my-farm-control"><FieldLabel>{t("Planting date")}</FieldLabel><input name="plantingDate" type="date" value={details.plantingDate || ""} onChange={(event) => setField("plantingDate", event.target.value)} /></label>
            <label className="my-farm-control"><FieldLabel>{t("Planned harvest date (optional)")}</FieldLabel><input name="harvestDate" type="date" value={details.harvestDate || ""} onChange={(event) => setField("harvestDate", event.target.value)} /></label>
            <label className="my-farm-control"><FieldLabel>{t("Land area (bigha)")}</FieldLabel><input name="area" type="number" min="0" step="0.01" value={details.area || ""} onChange={(event) => setField("area", event.target.value)} /></label>
          </div></details>
        </FarmSection>

        <FarmSection number={3} title="Soil" description="Choose the closest soil type. Leave it blank if you are not sure." icon="d54dc.svg">
          <fieldset className="my-farm-choice-group"><legend className="sr-only">{t("Primary Soil Texture")}</legend>{soils.map((soil) => <label className={`my-farm-choice ${details.soil === soil ? "selected" : ""}`} key={soil}><input type="radio" name="soil" value={soil} checked={details.soil === soil} onChange={(event) => setField("soil", event.target.value)} /><span>{t(soil)}</span></label>)}</fieldset>
          <details className="my-farm-optional"><summary>{t("Add soil test value (optional)")}</summary><label className="my-farm-control my-farm-ph"><FieldLabel>{t("Soil pH (optional)")}</FieldLabel><input name="ph" type="number" min="0" max="14" step="0.1" value={details.ph || ""} onChange={(event) => setField("ph", event.target.value)} /></label></details>
        </FarmSection>

        <FarmSection number={4} title="Water" description="Select the main water source you use for this field." icon="e0b87.svg">
          <fieldset className="my-farm-water-grid"><legend className="sr-only">{t("Water supply")}</legend>{waterSources.map((water) => <label className={`my-farm-water-choice ${details.water === water ? "selected" : ""}`} key={water}><input type="radio" name="water" value={water} checked={details.water === water} onChange={(event) => setField("water", event.target.value)} /><span>{t(water)}</span></label>)}</fieldset>
        </FarmSection>

        <div className="my-farm-save-bar"><div><img src={`${assets}/e7598.svg`} alt="" /><span>{t("Farm details are saved when you select Save Farm.")}</span></div><div className="my-farm-save-actions"><button type="button" className="my-farm-button text" data-action="Discard changes">{t("Discard changes")}</button><button type="button" className="my-farm-button primary" data-action="Save Farm">{t("Save Farm")}</button></div></div>
      </div>
    </main>

    <footer className="my-farm-footer"><div className="my-farm-footer-grid">
      <div><strong>HarvestV</strong><p>{t("Simple crop planning for Bangladeshi farmers.")}</p></div>
      <div><strong>{t("Emergency & Support")}</strong><a href="tel:16123">16123</a><p>{t("National Agricultural Extension Call Center")}</p></div>
      <div><strong>{t("Reference Institutions")}</strong><p>BARI · BRRI</p></div>
      <div><strong>{t("Useful links")}</strong><Link href="/policies#privacy">{t("Privacy & Field Data Rights")}</Link><Link href="/policies#soil">{t("Soil Health Guidelines")}</Link></div>
    </div></footer>
  </div>;
}
