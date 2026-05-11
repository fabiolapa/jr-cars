import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-black ring-1 ring-ink-600">
        <svg viewBox="0 0 32 40" className="h-6 w-6">
          <path
            d="M16 1c7.18 0 13 5.82 13 13 0 9.5-13 25-13 25S3 23.5 3 14C3 6.82 8.82 1 16 1z"
            fill="none"
            stroke="#e10600"
            strokeWidth="2.5"
          />
          <circle cx="16" cy="14" r="5.2" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="16" cy="14" r="1.6" fill="#e10600" />
          <path
            d="M16 8.8v10.4M10.8 14h10.4"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl tracking-wider">
          <span className="text-brand">JR</span>
          <span className="text-white">CARS</span>
        </span>
        <span className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-ink-400">
          Comércio de Automóveis
        </span>
      </span>
    </Link>
  );
}
