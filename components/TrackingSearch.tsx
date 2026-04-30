type TrackingSearchProps = {
  trackingNumber: string;
  onTrackingNumberChange: (value: string) => void;
  onTrack: () => void;
  isLoading: boolean;
};

export default function TrackingSearch({
  trackingNumber,
  onTrackingNumberChange,
  onTrack,
  isLoading
}: TrackingSearchProps) {
  return (
    <div className="rounded-[30px] border border-white/80 bg-white/85 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="tracking-number">
          Tracking number
        </label>
        <input
          id="tracking-number"
          type="text"
          value={trackingNumber}
          onChange={(event) => onTrackingNumberChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !isLoading) {
              onTrack();
            }
          }}
          placeholder="Enter tracking number"
          className="h-14 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-900 outline-none transition focus:border-[#da2328] focus:bg-white focus:ring-4 focus:ring-[#fee2e2]"
        />
        <button
          type="button"
          onClick={onTrack}
          disabled={isLoading}
          className="inline-flex h-14 min-w-[170px] items-center justify-center rounded-2xl bg-[#da2328] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(218,35,40,0.32)] transition hover:bg-[#c61d22] disabled:cursor-not-allowed disabled:bg-[#ef9a9d]"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
              Tracking...
            </span>
          ) : (
            "Track Package"
          )}
        </button>
      </div>
    </div>
  );
}
