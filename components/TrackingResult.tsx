import { TrackingRecord } from "@/lib/tracking-data";
import TimelineItem from "@/components/TimelineItem";

type TrackingResultProps = {
  record: TrackingRecord;
};

export default function TrackingResult({ record }: TrackingResultProps) {
  const completedCount = record.events.filter(
    (event) => event.stage !== "upcoming"
  ).length;
  const shipmentFacts = [
    { label: "Service", value: record.serviceType },
    { label: "Origin", value: record.origin },
    { label: "Destination", value: record.destination },
    { label: "Mode", value: record.shipmentMode },
    { label: "Packages", value: record.packageCount },
    { label: "Chargeable Weight", value: record.weight },
    { label: "Commodity", value: record.commodity },
    { label: "HSN Code", value: record.hsnCode },
    { label: "Goods Type", value: record.brandStatus },
    { label: "Declared Quantity", value: record.declaredQuantity },
    { label: "Material", value: record.materialComposition },
    { label: "Country of Origin", value: record.countryOfOrigin },
    { label: "Invoice Value", value: record.invoiceValue },
    { label: "Customs Office", value: record.customsOffice },
    { label: "Customs Address", value: record.customsOfficeAddress },
    { label: "After Release", value: record.postClearanceTransit }
  ];

  return (
    <section className="overflow-hidden rounded-[32px] border border-white/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur transition-all duration-300">
      <div className="border-b border-slate-100 bg-[linear-gradient(135deg,#fff5f5_0%,#ffffff_60%,#fff8f8_100%)] px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Tracking Number</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {record.trackingNumber}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-[#da2328] px-3.5 py-1.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(218,35,40,0.28)]">
                {record.latestStatus}
              </span>
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-sm font-medium text-amber-700">
                {record.deliveryLabel}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-[#f8d0d1] bg-white/90 px-5 py-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#da2328]">
              Shipment Progress
            </p>
            <div className="mt-3 h-2.5 w-44 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#f87171_0%,#da2328_50%,#b91c1c_100%)]"
                style={{ width: `${record.progressPercent}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              {completedCount} of {record.events.length} shipment milestones logged
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Estimated delivery by {record.estimatedDelivery}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              Last updated {record.lastUpdated}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 sm:px-8">
        <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {shipmentFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-[24px] border border-slate-100 bg-slate-50/90 px-4 py-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-[28px] border border-amber-200 bg-[linear-gradient(135deg,#fffaf0_0%,#fff7ed_100%)] px-5 py-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Delay Notice
              </p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                {record.delayHeadline}
              </h4>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                {record.delayReason}
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-white px-3 py-1.5 text-sm font-semibold text-amber-700">
              Clearance update
            </span>
          </div>
          <p className="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-700">
            {record.supportMessage}
          </p>
        </div>

        <div className="space-y-1">
          {record.events.map((event, index) => (
            <TimelineItem
              key={`${event.timestamp}-${event.status}`}
              event={event}
              isLast={index === record.events.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
