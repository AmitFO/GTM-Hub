/*  GTM HUB SETTINGS
 *  This is the only file you need to edit.
 *  After editing, upload the folder again to Netlify (Deploys) or Cloudflare Pages (Create deployment).
 */
window.GTM_CONFIG = {
  title: 'GTM Hub',

  // ---- Phase 1: sign-in ----
  // GTM Hub API web app link (Who has access: Anyone within Teachmint). Empty = no sign-in.
  bridgeUrl: 'https://script.google.com/a/macros/teachmint.com/s/AKfycbyVFiFvUCkBrdyddvRjbFxFL_eMG_tMDU7IkNvZflx3OpOqyXI-KxVp2sEPNjWJp84L6w/exec',
  // When it is filled in, dashboards, roles and settings come from the Admin Sheet
  // and the dashboard list below is ignored.


  // Ruhi: the AI assistant running on Ollama on your PC
  ruhi: { name: 'Ruhi', url: 'http://localhost:11434', model: 'qwen2.5:3b' },

  voiceLang: 'en-IN',        // 'en-IN', 'en-US', 'hi-IN' ...
  rotateSeconds: 60,         // auto-rotate: seconds per dashboard
  autoRefreshMinutes: 0,     // reload the open dashboard every X minutes (0 = off). Use 5–15 on TV panels.
  iosOpenDirect: true,       // iPhone/iPad open dashboards full screen (Safari blocks Google sign-in inside the hub)

  dashboards: [
    {
      id: 'secsales',                       // short name, no spaces
      name: 'Sec Sales',
      icon: '📈',
      color: '#3A5BFF',
      desc: 'Secondary sales performance',
      keywords: ['secondary', 'secondary sales', 'sec sales', 'sales'],
      url: 'https://script.google.com/a/macros/teachmint.com/s/AKfycbxYHod7dsUtm5yYZM7sZH_CFOwOjAWi5Pye582VnubmlxmjAyWlZdALlyPlSVkYR8VdvQ/exec'
    },
    {
      id: 'deskview',
      name: 'Desk View',
      icon: '🎧',
      color: '#00A8B8',
      desc: 'Support desk tickets and status',
      keywords: ['desk', 'desk view', 'tickets', 'support', 'help desk', 'helpdesk'],
      url: 'https://script.google.com/a/macros/teachmint.com/s/AKfycbzzfPYqD26FTOaPjHDOF-RyitGjB8bq5guPNro98de8dyEicO4DxvH7WR6tBYCsBA8O/exec'
    }

    // To add a dashboard: put a comma after the } above, then copy a block and change it.
  ]
};
