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
  // ---- Notices: needs acknowledgement. Live: the bridge's 'notices' and 'ack' actions supply these.
  // Used only when sign-in is off (bridgeUrl empty). The example below is for testing only.
  notices: [
    { id: 'example-1', title: 'Example notice', body: 'Example only. Replace this text in config.js. Items with requireAck show a Got it button.', by: 'GTM Ops', date: '20 Nov', requireAck: true }
  ],

  // ---- Marketing collaterals: open to all GTM, no sign-in needed to see the list.
  // Files shared as "Teachmint only" open only for teachmint.com accounts.
  collateral: {
    folderUrl: 'https://drive.google.com/drive/folders/1CWsoRxMxxtOdGodJM18HDXde-l2f2HLU',
    items: [
      { id: 'col-tmx-main', name: 'TMX main brochure', desc: 'Full range, for schools', url: 'https://drive.google.com/file/d/1PJlDgzbL5tZib6dzD6N3G-dQelEcTVoa/view', icon: '📘', color: '#3A5BFF' },
      { id: 'col-tmx', name: 'TMX brochure', desc: 'Short overview for first meetings', url: 'https://drive.google.com/file/d/1Z6IO2J8hcpHl1DTy6HSM6cl7TePmfXFz/view', icon: '📗', color: '#00A8B8' },
      { id: 'col-higher-ed', name: 'Higher education brochure', desc: 'For colleges and universities', url: 'https://drive.google.com/file/d/1iyh0yjOQHo4JiyN3sCpGZ70s72M4ZUky/view', icon: '🎓', color: '#A891FF' }
    ]
  },

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
    },
    {
      id: 'okr',
      name: 'OKR dashboard',
      icon: '🎯',
      color: '#A891FF',
      desc: 'FY 26–27 OKR achievement',
      keywords: ['okr', 'okrs', 'achievement', 'targets', 'goals', 'okr dashboard'],
      url: 'https://script.google.com/a/macros/teachmint.com/s/AKfycbwpRkxfdCMLGokaJgzvHR5ZqRBQQO5H4GJgQdstVr0PM4oeFNA0qn62E_mb_b156LMi/exec?pli=1'
    },
    {
      id: 'compete',
      name: 'Competitor analysis',
      icon: '🧭',
      color: '#00C2D1',
      desc: 'Compare Teachmint X with any panel',
      keywords: ['competitor', 'competitors', 'compete', 'competition', 'intel', 'brio', 'samsung', 'battle card'],
      url: 'https://competitor-analysis-one-lyart.vercel.app'
    }

    // To add a dashboard: put a comma after the } above, then copy a block and change it.
  ]
};
