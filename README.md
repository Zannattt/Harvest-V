# HarvestV

## Field Shift: Adapting Farms with NASA Data

**2026 NASA Space Apps Challenge · Team_Vangaurd** · [Official challenge page](https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/)

**Project description:** HarvestV is a mobile-friendly farming website for Bangladesh. It helps farmers record their field conditions, explore crop rotation options, view local weather and NASA POWER historical climate data, and share feedback. The interface supports English and Bangla.

The Next.js application, including its API routes, lives in [`harvestv-frontend/`](harvestv-frontend/). The API routes run with the website; there is no separate backend service to start.

The challenge asks teams to combine NASA Earth observations with local soil information, crop characteristics, and farmer priorities so farmers can explore rotation strategies and adapt to changing conditions. Team_Vangaurd is developing HarvestV around that goal.

The current app displays NASA POWER historical climate data on the Dashboard. Its crop rotation options use saved farm inputs and transparent rules; NASA data does not yet influence those recommendations. Connecting and validating NASA-informed rotation logic is future work.

## Technology stack

| Part | Technology |
| --- | --- |
| Frontend and API | Next.js App Router, React, TypeScript |
| Styling | CSS; Poppins headings and navigation, Lora body text, Noto Sans Bengali |
| Map | Leaflet and OpenStreetMap tiles |
| Device location | Browser Geolocation API, with user permission |
| Weather and place search | Open-Meteo forecast and geocoding APIs |
| Historical climate | NASA POWER daily point API |
| Local database | Node.js built-in SQLite (`node:sqlite`) |
| Hosted database | PostgreSQL through the `pg` package; requires a connection to be configured |

## Run locally

Install [Node.js 24 or newer](https://nodejs.org/) and npm. From the repository root, run:

```sh
cd harvestv-frontend
npm ci
npm run dev
```

Open **http://127.0.0.1:3000**. If port 3000 is occupied, use the local URL printed by Next.js. Stop the development server with `Ctrl+C`.

No API key or environment file is required for normal local development. The app creates a SQLite database at `.harvestv-data/harvestv.sqlite` in the repository root when a storage route is first used. The database is excluded from Git. Keep a backup of this directory if you need to preserve local farm records.

To check the app before a release:

```sh
npm run typecheck
npm run build
```

With the development server running, this integration check exercises saving and reading profile, farm, feedback, and rotation data, plus the live weather and NASA endpoints:

```sh
node scripts/check-backend.mjs
```

The check creates test records in its own anonymous local sessions and calls the public Open-Meteo and NASA APIs. It does not test a hosted PostgreSQL database unless that database is configured for the server being checked.

## Pages

| Page | What it does |
| --- | --- |
| `/` | Home page and an overview of HarvestV |
| `/dashboard` | Selected farm, current weather, forecast, and optional NASA climate history |
| `/my-farm` | Save and switch fields; enter location, crops, soil, and water details |
| `/crop-rotation` | Compare rule-based crop sequences and save an option for the active field |
| `/information-check` | Check claims covered by the app's limited reference rules |
| `/feedback` | Save a field observation and an optional photo |
| `/profile` | Edit the name and optional phone number for this browser session |
| `/policies` | Data and farming guidance |

### Start with a farm

1. Open **My Farm** and choose your division and district.
2. Search for a place, tap the map, enter coordinates, or select **Use my current location** and grant browser permission. The device's location may differ from the farm's location.
3. Confirm the farm location, then enter any known crop, soil, and water details and save the field.
4. Open the Dashboard for weather. Expand **NASA climate history** and select **Load NASA history** to fetch the historical summary.

GPS requires HTTPS on a deployed site or localhost during development. Manual location selection remains available if GPS is unavailable or permission is denied.

## NASA POWER: where and how it is used

NASA POWER appears in **Dashboard → NASA climate history**. It is loaded only when the farmer requests it. The server route [`/api/climate`](harvestv-frontend/src/app/api/climate/route.ts) sends the confirmed farm's approximate coordinates to the [NASA POWER daily point API](https://power.larc.nasa.gov/). It requests a 60-day historical period ending seven days before the current day.

| NASA parameter | Dashboard value |
| --- | --- |
| `T2M` | Average air temperature |
| `PRECTOTCORR` | Historical rainfall total |
| `RH2M` | Average relative humidity |
| `ALLSKY_SFC_SW_DWN` | Average solar radiation |

The API excludes missing observations and shows how many days have data. Farm coordinates are rounded to two decimal places before the request. Successful upstream responses are cached in server memory for 24 hours. This is **historical area-level climate data**, not current weather, a field sensor, a soil test, or a verified crop recommendation. No other NASA dataset is connected. NASA data is not currently used to generate the rotation plans.

Current conditions, the seven-day forecast, and recent rainfall on the Dashboard instead come from [Open-Meteo](https://open-meteo.com/). Open-Meteo also supplies place search. Its forecast response is cached in server memory for 30 minutes. Public map tiles come from OpenStreetMap.

## Saving data

Locally, records are saved in SQLite. On Vercel, the app needs a **managed PostgreSQL database** because a local SQLite file cannot provide durable storage in serverless functions. The storage layer reads `DATABASE_URL` first, then `POSTGRES_URL`. A PostgreSQL-compatible provider such as Supabase or Neon can supply a pooled connection string.

For a Vercel deployment:

1. Connect a PostgreSQL database to the HarvestV Vercel project.
2. Set its pooled connection string as `DATABASE_URL` or `POSTGRES_URL` in the project's environment variables. Keep credentials out of Git and screenshots.
3. Redeploy the project so the API routes receive the variable.
4. On the deployed site, save a profile and a farm, refresh the pages, and confirm both records load again. Test feedback and a saved rotation plan for that farm as well.

The application creates its tables on first database access. If no connection is configured, the storage routes return HTTP `503` with `STORAGE_UNAVAILABLE`. Committing or deploying the PostgreSQL code alone does **not** connect a database. Local SQLite records are not automatically copied into PostgreSQL.

Saved records are associated with a random, HttpOnly browser session cookie. There is no account login or cross-device sync. Clearing the cookie removes access to that session's records. Language preference is saved in browser storage.

## What is connected and what is still limited

- **Connected when storage is configured:** profile, farm records, feedback, and saved rotation choices. Feedback can include a JPEG or PNG photo; the server stores photo data with the report.
- **Connected public services:** Open-Meteo weather and place search, NASA POWER historical climate, and OpenStreetMap tiles. Service availability depends on those providers and the user's network.
- **Planning support:** crop rotation uses transparent rules based on saved farm inputs. It does not call GPT or use NASA data to rank crops. Confirm crop choices and timing with a local agricultural officer.
- **Limited information check:** a small set of curated text rules returns *Supported*, *Contradicted*, or *Insufficient evidence*. It does not retrieve and verify arbitrary web links or provide expert review.
- **Not connected:** account sign-in, expert replies, SMS alerts, satellite crop-health measurements, soil nutrient sensors, and yield predictions. Any example content in the design should not be treated as a live measurement.

## Key files

| Path | Purpose |
| --- | --- |
| [`harvestv-frontend/src/app/`](harvestv-frontend/src/app/) | Pages and Next.js API routes |
| [`harvestv-frontend/src/app/api/climate/route.ts`](harvestv-frontend/src/app/api/climate/route.ts) | NASA POWER request and historical summary |
| [`harvestv-frontend/src/app/api/weather/route.ts`](harvestv-frontend/src/app/api/weather/route.ts) | Open-Meteo weather request |
| [`harvestv-frontend/src/lib/server/storage.ts`](harvestv-frontend/src/lib/server/storage.ts) | PostgreSQL or local SQLite storage selection |
| [`harvestv-frontend/src/lib/server/database.ts`](harvestv-frontend/src/lib/server/database.ts) | Local SQLite setup and anonymous session cookie |
| [`harvestv-frontend/src/lib/rotation.ts`](harvestv-frontend/src/lib/rotation.ts) | Rule-based crop rotation options |
| [`harvestv-frontend/.env.example`](harvestv-frontend/.env.example) | Optional local storage path and hosted database variable example |

The UI was developed from the supplied [HarvestV Figma design](https://www.figma.com/design/bMsYhRZdcioa81IKI9FGDc/Untitled). Check the [Open-Meteo terms](https://open-meteo.com/en/terms) and [NASA POWER documentation](https://power.larc.nasa.gov/docs/) before commercial use.
