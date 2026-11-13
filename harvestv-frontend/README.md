# HarvestV frontend

A responsive Next.js implementation of the **Home – HarvestV** Figma frame (`40:29715`). Uses the App Router, React, TypeScript, and plain CSS.

## Run locally

Requires Node.js 24 or later. The local backend uses the built-in `node:sqlite` module. Vercel requires a managed PostgreSQL database.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000.

```sh
npm run typecheck
npm run build
npm run start
```

## Included

- Responsive home page matching the selected Figma frame, with the original farm image and all 23 SVG assets.
- Locally served Poppins for headings, taglines, navigation, and buttons; Lora for body text, with Noto Sans Bengali for Bangla glyphs.
- English and Bangla interfaces, including the interactive panels.
- Expandable, keyboard-accessible FAQs and mobile navigation.
- Farm editor, example rotation preview, saved-plan dashboard, searchable example crop catalog, feedback, and profile/policy dialogs.
- Local SQLite saving of confirmed farm coordinates, farm details, and feedback; browser-local language and example-plan preferences.
- Download of the saved example plan as a text file.

## Added Figma pages

| Route | Figma frame |
| --- | --- |
| `/dashboard` | `95:4092` |
| `/my-farm` | `95:4404` |
| `/information-check` | `95:5078` |
| `/crop-rotation` | `126:976` |
| `/feedback` | `115:719` |

The five screens use the original design layers and assets, converted into scoped plain CSS. All pages support Bangla and English through one shared language preference, including navigation, forms, descriptions, placeholders, and status messages. Switching languages preserves entered information. User-entered reports, names, and file names are kept as entered.

Run `node scripts/check-localization.mjs` to check translation coverage across the generated pages and interaction messages. Page generation retains localization through `scripts/localize-figma.mjs`.

Confirmed farm profiles and feedback save through Next.js route handlers into local SQLite. Example plan selection still uses browser storage. Photo attachments are selected locally and are not uploaded. Information checks return an explicit unavailable-evidence message because reference retrieval is not connected. Research cards and previous expert replies are sample content from Figma.

Generated page components are in `src/components/figma/`. The offline generator `scripts/generate-figma-pages.mjs` reads the captured design context in `design/figma-context.json`; interaction code is in `page-interactions.tsx` and mobile refinements in `figma-responsive.css`.

## Scope

The homepage and five supplied additional frames are implemented as routes. Live weather, historical NASA climate data, location search, an interactive OpenStreetMap map, and local farm/feedback persistence are connected. The homepage crop catalog and profile remain dialogs. Account authentication, expert replies, personalized crop recommendations, SMS, satellite NDVI, and PDF services are not connected. Remaining rotation/research cards are explicitly demonstrations.

The backend uses a random, HttpOnly, SameSite session cookie to separate browser records. This is anonymous local-session storage, not an account system. Clearing cookies loses access to that browser session's saved records. Browser storage uses the `harvestv-` prefix for preferences and caches.

## Activate location and weather

1. Start `npm run dev` and open `/my-farm`.
2. Select **Use my current location** and allow browser permission, search for a place, select a point on the map, or enter latitude and longitude.
3. Enter a farm name and select **Confirm farm location**. Device tracking does not automatically move the confirmed farm.
4. Enter crop history, optional planting/harvest dates, soil, and water information, then **Save Farm**.
5. Open `/dashboard` for current weather, a seven-day forecast, past-week rainfall, and optional **Load NASA history**.

GPS tracking is user initiated and has a Stop button. It stops on leaving My Farm, hiding the tab, or confirming a location. No track history is stored. Browser geolocation uses HTTPS in production or localhost during development; permission denial and unavailable GPS leave manual location selection usable. Real device GPS accuracy depends on the browser, device, and OS settings.

Weather uses Open-Meteo model estimates, includes source/model timestamps, and is cached for 30 minutes. NASA POWER supplies the latest requested 60-day historical period ending seven days before today, cached for 24 hours. Missing NASA observations are excluded and coverage is shown. These are area estimates, not plot sensors or soil tests. Coordinates sent to these services are rounded to two decimal places. NASA climate history is loaded on demand.

## Local backend

| Endpoint | Purpose |
| --- | --- |
| `GET /api/weather?latitude=...&longitude=...` | Current weather, seven-day forecast, and recent rainfall |
| `GET /api/climate?latitude=...&longitude=...` | NASA POWER historical temperature, rain, humidity, and solar radiation |
| `GET /api/locations?q=...` | Place search through Open-Meteo geocoding |
| `GET /api/farms`, `PUT /api/farms` | Current anonymous session's confirmed farm and details |
| `GET /api/feedback`, `POST /api/feedback` | Current anonymous session's saved observations |

SQLite lives in `../.harvestv-data/harvestv.sqlite`, outside the watched frontend folder to avoid development reload loops. It is excluded from the root Git repository. Set `HARVESTV_DATA_DIR` to an absolute writable directory if needed. Preserve this directory for backups.

For Vercel, connect a managed PostgreSQL database through Vercel Storage and set its pooled connection string as `DATABASE_URL` in the frontend project's environment variables. Redeploy after setting the variable. The app creates its tables on first access. If `DATABASE_URL` is absent on Vercel, storage endpoints return `STORAGE_UNAVAILABLE`; a local SQLite file cannot persist there. Local development continues using SQLite when `DATABASE_URL` is unset. Existing local SQLite data is not automatically moved to the production database. The anonymous cookie is still the record identifier; account authentication and cross-device access are separate future work.

No API key is needed for the currently used public endpoints. Check provider usage terms before commercial deployment: [Open-Meteo](https://open-meteo.com/en/terms), [NASA POWER](https://power.larc.nasa.gov/docs/).

Run `node scripts/check-backend.mjs` with the local server running to check storage isolation, cross-origin writes, coordinate validation, live weather, and NASA history. Tests use public Mymensingh coordinates and their own anonymous sessions.

## Project structure

- `src/app/page.tsx`: home route.
- `src/app/layout.tsx`: metadata and local font imports.
- `src/app/globals.css`: design tokens, layout, responsive styles, and interactive states.
- `src/components/harvest-home.tsx`: reusable page components and browser-local interactions.
- `src/lib/content.ts`: English and Bangla copy.
- `public/figma/`: original static assets downloaded from Figma; no temporary asset URLs are used at runtime.

## Design reference

https://www.figma.com/design/bMsYhRZdcioa81IKI9FGDc/Untitled?node-id=40-29715
