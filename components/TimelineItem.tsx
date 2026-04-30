import { TrackingEvent } from "@/lib/tracking-data";

type TimelineItemProps = {
  event: TrackingEvent;
  isLast: boolean;
};

function StatusIcon({ stage }: { stage: TrackingEvent["stage"] }) {
  const iconClasses =
    stage === "current"
      ? "border-[#fbc3c5] text-[#da2328]"
      : stage === "upcoming"
        ? "border-amber-200 text-amber-600"
        : "border-slate-100 text-emerald-600";

  return (
    <span
      className={[
        "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 bg-white shadow-md",
        iconClasses
      ].join(" ")}
    >
      {stage === "upcoming" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          {stage === "current" ? (
            <>
              <path d="M3 12h18" />
              <path d="m13 6 6 6-6 6" />
            </>
          ) : (
            <path d="M20 6 9 17l-5-5" />
          )}
        </svg>
      )}
    </span>
  );
}

export default function TimelineItem({ event, isLast }: TimelineItemProps) {
  const isCurrent = event.stage === "current";
  const isUpcoming = event.stage === "upcoming";

  const cardClasses = isCurrent
    ? "border-[#f8c7c8] bg-[linear-gradient(135deg,#fff5f5_0%,#ffffff_100%)] shadow-[0_16px_38px_rgba(218,35,40,0.12)]"
    : isUpcoming
      ? "border-amber-200 bg-[linear-gradient(135deg,#fffaf0_0%,#ffffff_100%)]"
      : "border-slate-100 bg-slate-50/80";

  const lineClasses = isUpcoming
    ? "bg-gradient-to-b from-amber-200 via-amber-100 to-slate-100"
    : isCurrent
      ? "bg-gradient-to-b from-[#f8b4b6] via-slate-200 to-slate-100"
      : "bg-gradient-to-b from-emerald-200 via-slate-200 to-slate-100";

  return (
    <article className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-[148px_56px_1fr] sm:gap-6">
      <div className="sm:pt-1">
        <p className="text-sm font-semibold text-slate-800">{event.dateLabel}</p>
        <p className="mt-1 text-sm text-slate-500">{event.timeLabel}</p>
      </div>

      <div className="relative flex sm:justify-center">
        {!isLast ? (
          <span
            className={[
              "absolute left-5 top-11 h-[calc(100%+1rem)] w-px sm:left-1/2 sm:-translate-x-1/2",
              lineClasses
            ].join(" ")}
          />
        ) : null}
        <StatusIcon stage={event.stage} />
      </div>

      <div
        className={[
          "rounded-3xl border px-5 py-4 shadow-sm transition-all duration-300",
          cardClasses
        ].join(" ")}
      >
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-base font-semibold text-slate-900">
            {event.status}
          </h4>
          <span
            className={[
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
              isCurrent
                ? "bg-[#fee2e2] text-[#b91c1c]"
                : isUpcoming
                  ? "bg-amber-100 text-amber-700"
                  : "bg-emerald-50 text-emerald-700"
            ].join(" ")}
          >
            {isCurrent ? "Current" : isUpcoming ? "Expected" : "Completed"}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {event.description}
        </p>
      </div>
    </article>
  );
}
