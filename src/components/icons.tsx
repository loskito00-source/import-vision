// Íconos de trazo dibujados para la marca: línea de 1.75, terminaciones redondeadas.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconIris = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12c2.6-4.3 6-6.5 10-6.5s7.4 2.2 10 6.5c-2.6 4.3-6 6.5-10 6.5S4.6 16.3 2 12Z" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const IconFrames = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="9" width="8" height="6.5" rx="3" />
    <rect x="13.5" y="9" width="8" height="6.5" rx="3" />
    <path d="M10.5 11.5c1-.8 2-.8 3 0M2.5 10.5 1.5 8M21.5 10.5l1-2.5" />
  </svg>
);

export const IconReport = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 3.5h7.5L19 8v12.5H7z" />
    <path d="M14.5 3.5V8H19M10 13l2 2 3.5-3.5M10 18h5" />
    <path d="M7 6.5H5v15h11" opacity=".55" />
  </svg>
);

export const IconBuilding = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 21V5.5L13 3v18M13 9l7 2v10M2.5 21h19" />
    <path d="M7.5 8h2M7.5 11.5h2M7.5 15h2M16 13.5h1.5M16 17h1.5" />
  </svg>
);

export const IconTag = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 12.6V4h8.6l9 9-8.6 8.6z" />
    <circle cx="7.5" cy="8.5" r="1.4" />
  </svg>
);

export const IconWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.08.81.82-3-.2-.31a8.2 8.2 0 1 1 6.94 3.83Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.56c.13.16 1.75 2.67 4.24 3.75.6.25 1.06.4 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.29Z" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 3.5h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const IconRuler = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="8" width="19" height="8" rx="1.5" />
    <path d="M6.5 8v3M10 8v4.5M13.5 8v3M17 8v4.5" />
  </svg>
);

export const IconTeam = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
    <circle cx="17" cy="9" r="2.3" />
    <path d="M15.5 14.2a4.5 4.5 0 0 1 5.5 4.3" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6z" />
    <path d="M7.5 12.5c2.8-2.6 6.2-2.6 9 0" />
  </svg>
);

export const IconSun = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
  </svg>
);

export const IconScreen = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4.5" width="18" height="12" rx="2" />
    <path d="M9 20.5h6M12 16.5v4" />
    <path d="M7 9.5c1.6-1.4 3.2-1.4 5 0s3.4 1.4 5 0" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
