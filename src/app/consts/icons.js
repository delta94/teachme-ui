const icons = {
  // Misc
  arrowLeft: `<svg version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 17 18" style="enable-background:new 0 0 17 18;" xml:space="preserve">
    <path class="st0" d="M8.7,18l1.2-1.2l-6.6-6.4H17V8.6H3.4l6.6-6.4L8.7,1L0,9.5L8.7,18z"/>
  </svg>`,
  caret: `<div class="icon">
    <i class="fas fa-caret-right"></i>
  </div>`,

  // Information screens
  noConnection: `<svg viewBox="0 0 88 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M58.9002 56H70.4002C79.0002 56 86.0002 49.1 86.0002 40.5C86.0002 33.1 80.9002 27 74.0002 25.4L74.2002 25.5L74.0002 25.4C74.0002 25.3 74.0002 25.2 74.0002 25.1C74.0002 17.6 67.9002 11.6 60.5002 11.6C58.5002 11.6 56.7002 12 55.0002 12.8L54.7002 12.3L55.0002 12.8C51.7002 6.3 44.9002 1.9 37.2002 1.9C26.1002 1.9 17.1002 10.9 17.1002 22C17.1002 23 17.2002 24 17.3002 24.9L17.2002 25C8.6002 25 1.7002 31.9 1.7002 40.5C1.7002 49.1 8.6002 56 17.2002 56H29.0002" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36.2998 48.3L51.5998 63.6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M51.4996 48.5L36.0996 63.8" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  noResults: `<svg viewBox="0 0 85 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.9996 24.9C66.0996 28.1 66.5996 31.5 66.5996 35.1C66.5996 53.1 51.9996 67.7 33.9996 67.7C30.1996 67.7 26.4996 67 23.0996 65.8" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.2 58.2C5.2 52.3 1.5 44.1 1.5 35C1.5 17 16.1 2.4 34.1 2.4C43.1 2.4 51.2 6 57.1 11.9" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.90039 65.5L63.6004 6" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M56.6992 58.6L83.4992 85.7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  noData: `<svg width="65" height="80" viewBox="0 0 65 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.90068 1.83767H37.2437C38.1013 1.83767 38.8364 2.20521 39.4489 2.69525L61.501 24.7473C62.1135 25.3599 62.3586 26.0949 62.3586 26.9525V75.2221C62.3586 76.9372 61.0109 78.2848 59.2958 78.2848H4.90068C3.18552 78.2848 1.83789 76.9372 1.83789 75.2221V4.90046C1.83789 3.1853 3.18552 1.83767 4.90068 1.83767Z" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M62.359 26.83L37.2441 27.075V1.83767" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M22.6641 42.634L40.4282 60.3982" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M40.4282 42.634L22.6641 60.3982" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>`,
  noNotifications: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.8008 66.2H72.6008C74.3008 66.2 76.0008 64.9 76.0008 62.8V57.3C76.0008 56 75.6008 55.2 74.7008 54.8C70.9008 52.3 61.6008 45.1 62.0008 34.9" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58.5 21.5C56.4 17.8 53.2 15.5 48.1 12.5C47.7 12.5 48.5 3.6 40.1 3.6C31.2 3.6 32.1 12.1 32.1 12.1C32.1 12.1 18.5 16.3 18.5 35C18.5 35 20.2 45.6 5.4 54.9C4.5 55.2 4 56.5 4 57.3V62.8C4 64.5 5.3 66.2 7.4 66.2H13.7" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26.5 66.5C26.5 71.2 32.8 75.6 39.9 75.6C47 75.6 52.8 71.8 52.8 67.1" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M70.5 9.5L5 75" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Tabs
  help: [
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.9 22.8" style="enable-background:new 0 0 25.9 22.8;" xml:space="preserve">
      <path class="st0" d="M0.7,11.4L12.4,1.2c0.3-0.3,0.8-0.3,1.1,0l11.8,10.2"/>
      <path class="st0" d="M13.5,5l7.8,6.8c0.2,0.2,0.3,0.4,0.3,0.6v8.7c0,0.5-0.4,0.9-0.9,0.9h-4.6c-0.5,0-0.9-0.4-0.9-0.9v-3.9
      c0-0.5-0.4-0.9-0.9-0.9h-2.9c-0.5,0-0.9,0.4-0.9,0.9v3.9c0,0.5-0.4,0.9-0.9,0.9H4.9c-0.5,0-0.9-0.4-0.9-0.9v-8.7
      c0-0.3,0.1-0.5,0.3-0.7l8-6.8C12.7,4.7,13.2,4.7,13.5,5z"/>
    </svg>`,
    `<svg version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20.2 19.4" style="enable-background:new 0 0 20.2 19.4;" xml:space="preserve">
      <path class="st0" d="M9.6,1L7.1,5.7C7.1,5.8,6.9,5.9,6.7,6L1.4,7c-0.4,0.1-0.6,0.6-0.3,1l3.7,3.8C4.9,11.9,5,12,5,12.2l-0.9,5.5
      c-0.1,0.5,0.4,0.8,0.8,0.6l5-2.6c0.2-0.1,0.4-0.1,0.5,0l4.9,2.6c0.4,0.2,0.9-0.1,0.8-0.6l-0.9-5.5c0-0.2,0-0.4,0.2-0.5L19.2,8
      c0.3-0.3,0.2-0.9-0.3-1l-5.4-1c-0.2,0-0.3-0.1-0.4-0.3L10.6,1C10.4,0.6,9.8,0.6,9.6,1z"/>
    </svg>`,
  ],
  tasks: [
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28.5 22.5" style="enable-background:new 0 0 28.5 22.5;" xml:space="preserve">
      <path class="st0" d="M25.2,1.4c1.2,0,2.3,1,2.3,2.3s-1,2.3-2.3,2.3S23,4.9,23,3.6S24,1.4,25.2,1.4"/>
      <path class="st0" d="M8.8,0.7h7.3c0.1,0,0.2,0,0.2,0c0.4,0.1,1.5,0.6,3.5,2.6C19.9,3.4,20,3.5,20,3.6l2.5,5.5
      c0.1,0.2,0.3,0.4,0.6,0.5l4.4,0.8"/>
      <path class="st0" d="M11.4,2.8l3.1,0.3l1.3,1.6C16,5,16,5.5,15.7,5.8l-2.8,3c0,0-3.1,2.6,2.7,7.8l-5.4,3.4"/>
      <path class="st0" d="M11.7,21.7l7.4-3c0,0,1.6-0.8,0.2-2.7c-0.9-1.2-1.7-2.6-2.2-3.3c-0.2-0.3-0.2-0.8,0.1-1.1l1.1-1
      c0.4-0.4,1-0.3,1.3,0.2c0.3,0.4,0.7,1,1.3,1.5c0.2,0.1,0.4,0.2,0.6,0.2l4.2,0"/>
      <path class="st1" d="M9.5,12.6c0,0-8.3,6.1-8.6,6.3"/>
      <path class="st1" d="M10.8,16c0,0-7.4,4-7.6,4"/>
    </svg>`
  ],

  // Types
  task: null,
  survey: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="confluence" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-confluence fa-w-16"><path d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z" class=""></path></svg>`,
  category: `<div class="icon">
    <i class="fas fa-folder"></i>
    <i class="fas fa-folder-open"></i>
  </div>`,
  article: `<i class="fas fa-file-alt"></i>`,
  launcher: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="confluence" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-confluence fa-w-16"><path d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z" class=""></path></svg>`,
  shoutOut: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="confluence" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-confluence fa-w-16"><path d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z" class=""></path></svg>`,
  tag: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="confluence" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-confluence fa-w-16"><path d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z" class=""></path></svg>`,
  video: `<i class="fas fa-play-circle"></i>`,
  shuttle: `<i class="fab fa-telegram-plane"></i>`,
  flow: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="confluence" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-confluence fa-w-16"><path d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z" class=""></path></svg>`,
  'search-result': `<i class="fab fa-telegram-plane"></i>`,
  notification: `<i class="fas fa-bell"></i>`,
  'smart-walkthru': `<svg class="stroke" style="transform:scale(1.4) translateX(1px);" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.424 15.5681C10.424 15.5681 12.32 15.5681 13.28 15.5681C14.24 15.5681 15.008 14.8001 15.008 13.8401C15.008 12.8801 15.008 8.68012 15.008 7.78412C15.008 6.88812 14.24 6.12012 13.28 6.12012C12.32 6.12012 4.26 6.12012 3.3 6.12012C2.34 6.12012 1.5 6.88812 1.5 7.84812C1.5 8.80812 1.5 12.9441 1.5 13.9041C1.5 14.8641 2.404 15.6321 3.3 15.6321C4.196 15.6321 6 15.6321 6 15.6321L8.3 17.5L10.424 15.5681Z" stroke-width="2" stroke-linejoin="round"/></svg>`,

  // Knowledge base Types
  google: `<i class="fab fa-google"></i>`,
  googledrive: `<i class="fab fa-google-drive"></i>`,
  confluence: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="confluence" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-confluence fa-w-16"><path d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z" class=""></path></svg>`,
  youtube: `<i class="fab fa-youtube"></i>`,
  bing: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path class="st0" d="M6.353,4.146l1.629,3.533l2.407,1.089l-8.683,4.568l3.558-3.172V1.122L1.6,0v13.447L5.241,16l9.159-5.456V6.612L6.353,4.146"/></svg>`,
  desk: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><path class="st0" d="M15.408,6.612l-1.152-0.231l-1.287,1.459V4.202l-1.084,0.435V9.16c-0.14-0.685-0.824-0.872-1.388-1.026C10.082,8.021,9.725,7.924,9.74,7.64c0.015-0.278,0.291-0.389,0.558-0.374c0.315,0.017,0.572,0.147,0.762,0.388l0.797-0.709c-0.432-0.483-1.133-0.59-1.518-0.611C9.453,6.286,8.536,6.679,8.483,7.663c-0.002,0.03-0.002,0.061-0.002,0.091C8.164,6.947,7.38,6.375,6.463,6.375c-1.05,0-1.926,0.748-2.125,1.742V4.203L3.253,4.638v2.029C2.924,6.475,2.55,6.375,2.169,6.375C0.971,6.375,0,7.348,0,8.548c0,1.2,0.971,2.172,2.169,2.172c1.094,0,1.999-0.812,2.147-1.868c0.148,1.056,1.052,1.868,2.147,1.868c0.824,0,1.541-0.46,1.908-1.138L7.197,9.346c-0.2,0.185-0.462,0.288-0.734,0.287c-0.444,0-0.826-0.268-0.994-0.652h3.119c0.044-0.219,0.055-0.443,0.031-0.664C8.868,8.749,9.407,8.895,9.866,9.02c0.43,0.117,0.802,0.217,0.785,0.529c-0.012,0.224-0.263,0.345-0.672,0.323c-0.379-0.02-0.674-0.18-0.925-0.502l-0.795,0.794c0.467,0.503,1.21,0.615,1.617,0.636c0.435,0.023,1.805,0.006,2.009-1.088v1.009h1.084V8.821l1.676,1.899H16l-2.109-2.39L15.408,6.612L15.408,6.612z M2.663,9.514C2.51,9.593,2.341,9.634,2.169,9.634c-0.599,0-1.084-0.486-1.084-1.086c0-0.6,0.485-1.086,1.084-1.086s1.084,0.486,1.084,1.086c0,0.239-0.077,0.459-0.207,0.639c0.019,0.129,0.091,0.273,0.282,0.4C3.419,9.648,3.059,9.746,2.663,9.514L2.663,9.514zM5.469,8.113c0.167-0.384,0.549-0.652,0.994-0.652c0.444,0,0.826,0.268,0.994,0.652H5.469L5.469,8.113z"/></svg>`,
  zendesk: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><polygon points="7.391,5.138 7.391,14.063 0,14.063 "/><path d="M7.391,1.937c0,2.04-1.652,3.692-3.692,3.692S0,3.976,0,1.937H7.391z"/><path d="M8.609,14.063c0-2.04,1.652-3.692,3.692-3.692s3.692,1.652,3.692,3.692H8.609L8.609,14.063z"/><polygon points="8.609,10.862 8.609,1.937 16,1.937 "/></svg>`,
  salesforce: `<i class="fab fa-salesforce"></i>`,
  okta: `<i class="far fa-user"></i>`,
  default: `<i class="fas fa-external-link-alt" style="font-weight: 900;"></i>`,
};

export default icons;