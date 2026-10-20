import Image from "next/image";

type Props = {
  variant?: "color" | "light";
  layout?: "stacked" | "inline";
  className?: string;
  priority?: boolean;
};

// Logo completo (ojo redibujado en SVG + wordmark vectorizado del original del cliente).
// "inline" es el lockup horizontal sin eslogan, para el header.
export function Logo({ variant = "color", layout = "stacked", className = "", priority = false }: Props) {
  const file = layout === "inline" ? "lockup" : "logo";
  return (
    <Image
      src={`/brand/${file}${variant === "light" ? "-light" : ""}.svg`}
      alt="Import Vision, soluciones en salud visual"
      width={layout === "inline" ? 588 : 470}
      height={layout === "inline" ? 60 : 294}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}

// Solo el símbolo del ojo, inline para poder animarlo y heredar color.
export function Mark({ className = "", light = false }: { className?: string; light?: boolean }) {
  const id = light ? "mk-l" : "mk";
  return (
    <svg viewBox="0 0 264 166" className={className} aria-hidden>
      {!light && (
        <defs>
          <linearGradient id={`${id}U`} x1="0" y1="0.2" x2="1" y2="0.8">
            <stop offset="0" stopColor="#2BB7CC" />
            <stop offset=".45" stopColor="#1784B4" />
            <stop offset="1" stopColor="#0A3C88" />
          </linearGradient>
          <linearGradient id={`${id}L`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2BB7CC" />
            <stop offset=".55" stopColor="#0C4E96" />
            <stop offset="1" stopColor="#3FB4D2" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M3 82C30 38 78 4 132 3C190 2 238 38 264 82L195 82C190 50 160 31 122 33C90 35 70 58 71 100C52 86 28 80 3 82Z"
        fill={light ? "currentColor" : `url(#${id}U)`}
      />
      <path
        d="M15 105C50 146 96 166 140 165C196 163 236 128 257 90L198 90C196 126 165 148 128 147C84 146 46 128 15 105Z"
        fill={light ? "currentColor" : `url(#${id}L)`}
      />
      <path
        d="M130 51A36 36 0 1 1 129.99 51ZM130 71A16 16 0 1 0 130.01 71Z"
        fill={light ? "currentColor" : "#0D4E9C"}
        fillRule="evenodd"
      />
    </svg>
  );
}
