type EmptyStateProps = {
  trackingNumber: string;
};

export default function EmptyState({ trackingNumber }: EmptyStateProps) {
  return (
    <section className="rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff1f2] text-[#da2328] shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-950">
        Tracking number not found
      </h3>
      <p className="mt-3 max-w-lg text-slate-600">
        We could not find shipment details for{" "}
        <span className="font-semibold text-slate-800">
          {trackingNumber || "the number you entered"}
        </span>
        . Check the waybill and try the tracking number shown on the page.
      </p>

      <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 px-5 py-4">
        <p className="text-sm font-medium text-slate-700">
          Try the sample tracking number to preview the delivered timeline
          experience.
        </p>
      </div>
    </section>
  );
}
