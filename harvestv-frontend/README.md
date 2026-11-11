# HarvestV frontend

A responsive Next.js implementation of the **Home – HarvestV** Figma frame (`40:29715`). Uses the App Router, React, TypeScript, and plain CSS.

## Run locally

Requires Node.js 20.9 or later.

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
- Browser-local saving of farm details, language, example plans, and feedback.
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

Farm profile editing, example plan selection, and feedback saving use browser storage. Photo attachments are selected locally and are not uploaded. Information checks return an explicit unavailable-evidence message because reference retrieval is not connected. Research cards and previous expert replies are sample content from Figma.

Generated page components are in `src/components/figma/`. The offline generator `scripts/generate-figma-pages.mjs` reads the captured design context in `design/figma-context.json`; interaction code is in `page-interactions.tsx` and mobile refinements in `figma-responsive.css`.

## Scope

The homepage and five supplied additional frames are implemented as routes. The homepage crop catalog and profile remain dialogs. No backend, authentication, live weather, expert replies, personalized recommendation engine, SMS, or PDF service is connected. Device geolocation is available with browser permission; the farm map remains a sample image. Institutional badges and agricultural figures reproduce the supplied design; they do not establish endorsement or validated advice.

Browser storage uses the `harvestv-` key prefix. Feedback is saved on the device and is not transmitted. Removing this site's data in the browser clears the saved information.

## Project structure

- `src/app/page.tsx`: home route.
- `src/app/layout.tsx`: metadata and local font imports.
- `src/app/globals.css`: design tokens, layout, responsive styles, and interactive states.
- `src/components/harvest-home.tsx`: reusable page components and browser-local interactions.
- `src/lib/content.ts`: English and Bangla copy.
- `public/figma/`: original static assets downloaded from Figma; no temporary asset URLs are used at runtime.

## Design reference

https://www.figma.com/design/bMsYhRZdcioa81IKI9FGDc/Untitled?node-id=40-29715
