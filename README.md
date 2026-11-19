# GTM Hub – setup guide

## Files (all at the top level, no sub-folder)
- config.js            ← the ONLY file you normally edit
- index.html, sw.js, manifest.webmanifest, _headers, icons/ ← don't change
- _headers works on BOTH Netlify and Cloudflare Pages (no-cache for the app files)

## Netlify (main: gtm-hub-teachmint.netlify.app)
1. app.netlify.com → your project → Deploys.
2. Unzip gtm-hub-upload.zip and drag the unzipped FOLDER into the drop box.
3. Wait for "Published", open the app, press Ctrl + Shift + R.

## Cloudflare Pages (backup: gtm-hub-teachmint.pages.dev)
1. dash.cloudflare.com → Workers & Pages → gtm-hub-teachmint → Create deployment.
2. Upload gtm-hub-upload.zip as a FILE (do not unzip). index.html must show at the top level.
3. Deploy, open the app, press Ctrl + Shift + R.

## Check the update is live
Open <your address>/sw.js — line 2 must show the newest version (gtm-hub-v27 or later).

## Both addresses must be allowed (one time, already done)
- Code.gs → ALLOWED_ORIGINS lists the Netlify and the pages.dev address.
- Ruhi (Ollama on your PC): OLLAMA_ORIGINS lists both addresses.

## Install as an app
- Laptop (Chrome/Edge): click "Install app".
- Android (Chrome): tap "Install app".
- iPhone (Safari): Share → Add to Home Screen.
