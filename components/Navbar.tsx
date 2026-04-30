const navItems = [
  { label: "Track", href: "#track" },
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Support", href: "#support" }
];

const utilityItems = [
  { label: "Track Shipment", href: "#track" },
  { label: "Rate Request", href: "#services" },
  { label: "Branch Locator", href: "#coverage" },
  { label: "Contact Desk", href: "#support" }
];

export default function Navbar() {
  return (
    <nav className="mb-10 rounded-[28px] border border-white/70 bg-white/80 px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:px-7">
      <div className="border-b border-slate-100 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-slate-500">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {utilityItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full bg-slate-50 px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-800"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-slate-400">Regional cargo desk | Mon-Sat</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#ef4444_0%,#da2328_62%,#991b1b_100%)] text-white shadow-[0_12px_30px_rgba(218,35,40,0.35)] ring-1 ring-white/20">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="h-9 w-9"
              aria-hidden="true"
            >
              <path
                d="M8 31h18.5c2.2 0 4 1.8 4 4v1H28a4 4 0 0 0-8 0h-6.3a4 4 0 0 0-8 0H4.5v-.7C4.5 32.9 6 31 8 31Z"
                fill="#fff"
              />
              <path
                d="M30.5 22.5h6.2l4.8 6.1V36h-5.1a4 4 0 0 0-8 0h-1.9v-13.5Z"
                fill="#fff"
              />
              <path
                d="M9 20.2h18.3c1 0 1.8.8 1.8 1.8v5.2H9v-7Z"
                fill="#fff"
                opacity="0.94"
              />
              <path
                d="M10 16.2c5.2-4 11-5.8 17.3-5.4-2.8 1.7-5 3.3-6.8 5H10Z"
                fill="#fff"
                opacity="0.56"
              />
              <path
                d="M30.8 13.2h8.7l-3.1 3.4h-8.8l3.2-3.4Z"
                fill="#fff"
                opacity="0.78"
              />
              <circle cx="9.8" cy="36" r="2.7" fill="#fee2e2" />
              <circle cx="23.8" cy="36" r="2.7" fill="#fee2e2" />
              <circle cx="32.3" cy="36" r="2.7" fill="#fee2e2" />
            </svg>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#da2328]">
              Cross-Border Freight
            </p>
            <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Longma Cargo Express
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#track"
            className="inline-flex items-center rounded-full border border-[#f3b5b7] bg-[#fff5f5] px-4 py-2 text-sm font-medium text-[#b91c1c] transition hover:border-[#da2328] hover:bg-white"
          >
            Live Tracking
          </a>
        </div>
      </div>
    </nav>
  );
}
