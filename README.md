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

## What was added (v28)
config.js only, plus the page code. Everything else works the same.

1. **Share on WhatsApp.** Every collateral card has a "Share on WhatsApp" button. It opens WhatsApp with the message and link already written. No server needed.
2. **Notices with acknowledgement.** Home shows a Notices block. Items with `requireAck: true` get a "Got it" button, and the count of items still to acknowledge shows at the top.
3. **Competitor analysis inside the hub.** A dashboard entry in `config.js` (opens in the same frame as the others, and in a new tab on iPhone).
4. **Marketing collaterals.** A "Marketing collaterals" block on Home, from `config.collateral`. Anyone with a GTM Hub login can see it. Drive files marked "Teachmint only" open only for teachmint.com accounts.
5. **OKR dashboard.** A dashboard entry in `config.js`.

### Sign-in mode (bridgeUrl filled in)
- Dashboards come from the Admin Sheet, not `config.js`. Add "OKR dashboard" and "Competitor analysis" to the Admin Sheet to show them to signed-in users.
- Notices come from the bridge, not `config.js`. The bridge needs two actions:
  - `notices` returns `{ notices: [{ id, title, body, by, date, requireAck }], acked: [id, ...] }`. `acked` lists the IDs the current user has already acknowledged.
  - `ack` takes `{ id }`, records that the current user acknowledged that notice, and returns `{ ok: true }`.
- If these actions are missing, Home shows no notices. Nothing breaks.

### Sign-in off (bridgeUrl empty)
- Notices come from `config.notices`. Acknowledgements are saved on the device only.
- Dashboards come from `config.dashboards`.

### Before you upload
- Bump `sw.js` (already done: `gtm-hub-v28`). Check `https://<your address>/sw.js` shows v28 after deploy.
