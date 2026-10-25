// Top-view car, facing right. Swap this for <img className="car ..." src={carPng} /> to use the McLaren PNG.
export default function Car() {
  return (
    <svg
      className="car block aspect-[460/190] h-full w-auto overflow-visible will-change-transform drop-shadow-[0_14px_18px_rgba(0,0,0,.55)]"
      viewBox="0 0 460 190" role="img" aria-label="Top view of an orange supercar"
    >
      <defs>
        <linearGradient id="beam" x1="0" x2="1">
          <stop offset="0" stopColor="#fff3b0" stopOpacity=".55" />
          <stop offset="1" stopColor="#fff3b0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff9a3c" /><stop offset=".5" stopColor="#ff6a13" /><stop offset="1" stopColor="#d94a00" />
        </linearGradient>
      </defs>
      <polygon points="436,70 900,-30 900,220 436,120" fill="url(#beam)" />
      <g fill="#0a0710">
        <rect x="92" y="16" width="58" height="28" rx="8" /><rect x="92" y="146" width="58" height="28" rx="8" />
        <rect x="316" y="18" width="54" height="26" rx="8" /><rect x="316" y="146" width="54" height="26" rx="8" />
      </g>
      <path d="M30 52 Q22 95 30 138 L110 150 Q200 158 300 148 Q400 140 440 114 Q454 95 440 76 Q400 50 300 42 Q200 32 110 40 Z" fill="url(#body)" />
      <path d="M300 42 Q400 50 440 76 Q454 95 440 114 Q400 140 300 148 Q362 95 300 42Z" fill="#ffc27a" opacity=".35" />
      <rect x="18" y="48" width="16" height="94" rx="5" fill="#1a1424" />
      <path d="M168 62 Q215 54 274 62 L298 95 L274 128 Q215 136 168 128 Q150 95 168 62Z" fill="#0d0a16" />
      <path d="M188 76 Q225 71 264 78 L278 95 L264 112 Q225 119 188 114 Q178 95 188 76Z" fill="#4b4468" />
      <path d="M60 70 L150 66 M60 80 L150 77 M60 110 L150 113 M60 120 L150 124" stroke="#1a1424" strokeWidth="4" fill="none" />
      <path d="M300 70 Q370 76 414 88 M300 120 Q370 114 414 102" stroke="#b8400a" strokeWidth="3" fill="none" />
      <path d="M398 62 L430 78 L422 84 L394 72Z M398 128 L430 112 L422 106 L394 118Z" fill="#fff6c2" />
      <ellipse cx="256" cy="44" rx="14" ry="6" fill="#1a1424" /><ellipse cx="256" cy="146" rx="14" ry="6" fill="#1a1424" />
    </svg>
  );
}
