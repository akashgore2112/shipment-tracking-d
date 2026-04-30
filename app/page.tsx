"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/EmptyState";
import Navbar from "@/components/Navbar";
import TrackingResult from "@/components/TrackingResult";
import TrackingSearch from "@/components/TrackingSearch";
import { DEMO_TRACKING_NUMBER, demoTrackingRecord } from "@/lib/tracking-data";

type SearchState = "idle" | "loading" | "found" | "not-found";

const serviceCards = [
  {
    title: "Express Road Cargo",
    description:
      "Time-sensitive cross-border cargo with scheduled road departures, customs coordination, and final-mile delivery visibility.",
    href: "#track"
  },
  {
    title: "Business Consolidation",
    description:
      "Supplier pickup, carton consolidation, document matching, and freight planning for repeat import shipments.",
    href: "#coverage"
  },
  {
    title: "Customs Assistance",
    description:
      "Pre-alerts, document review, government screening updates, and clearance escalation support for Nepal-bound freight.",
    href: "#support"
  }
];

const laneCards = [
  {
    title: "Guangzhou -> Kathmandu",
    detail: "Daily intake | 7-12 transit days | customs-sensitive route"
  },
  {
    title: "Yiwu -> Kathmandu",
    detail: "Commercial cargo lane | pickup to border coordination"
  },
  {
    title: "Kunming -> Nepal Border",
    detail: "Road relay network | export consolidation support"
  }
];

const supportCards = [
  {
    title: "Clearance Delay Help",
    detail:
      "For held shipments, our team confirms customs remarks, document gaps, and expected release windows."
  },
  {
    title: "Delivery Reschedule",
    detail:
      "Once released, consignee contact and route reassignment can be managed before final dispatch."
  },
  {
    title: "Proof and Billing",
    detail:
      "Get shipment references, carton count confirmation, and support for freight billing questions."
  }
];

const portalHighlights = [
  "Customs-aware timeline updates",
  "Cross-border route visibility",
  "Responsive shipment dashboard",
  "Service and support sections"
];

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submittedTrackingNumber, setSubmittedTrackingNumber] = useState("");
  const [searchState, setSearchState] = useState<SearchState>("idle");

  const normalizedInput = useMemo(
    () => trackingNumber.trim().toUpperCase(),
    [trackingNumber]
  );

  const handleTrack = async () => {
    if (!normalizedInput) {
      setSubmittedTrackingNumber("");
      setSearchState("not-found");
      return;
    }

    setSubmittedTrackingNumber(normalizedInput);
    setSearchState("loading");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (normalizedInput === DEMO_TRACKING_NUMBER) {
      setSearchState("found");
      return;
    }

    setSearchState("not-found");
  };

  const applyExampleTracking = () => {
    setTrackingNumber(DEMO_TRACKING_NUMBER);
    setSubmittedTrackingNumber(DEMO_TRACKING_NUMBER);
    setSearchState("found");
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fff1f1_0%,#f9fafb_38%,#f3f4f6_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Navbar />

        <section
          id="track"
          className="grid flex-1 gap-8 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="flex flex-col justify-center">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#f6c4c5] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#da2328]">
                Live Cross-Border Tracking Portal
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Track customs delays, route milestones, and expected delivery from one page.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                Enter your waybill number to view the latest cargo movement,
                customs review status, delivery estimate, and a realistic
                shipment timeline designed like a production logistics portal.
              </p>
            </div>

            <div className="mt-8">
              <TrackingSearch
                trackingNumber={trackingNumber}
                onTrackingNumberChange={setTrackingNumber}
                onTrack={handleTrack}
                isLoading={searchState === "loading"}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="font-medium text-slate-700">Demo tracking:</span>
              <button
                type="button"
                onClick={applyExampleTracking}
                className="rounded-full bg-white px-3 py-1.5 font-semibold text-[#da2328] shadow-sm transition hover:bg-[#fff5f5]"
              >
                {DEMO_TRACKING_NUMBER}
              </button>
              <a
                href="#support"
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Clearance support
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="#coverage"
                className="rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#da2328]">
                  Active Lane
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">
                  China to Nepal road line-haul
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Scheduled border intake, customs review staging, and local
                  delivery release after clearance.
                </p>
              </a>
              <a
                href="#services"
                className="rounded-[28px] border border-white/80 bg-[linear-gradient(135deg,#fff5f5_0%,#ffffff_100%)] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#da2328]">
                  Customs Advisory
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">
                  Updated import screening in effect
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Government policy checks are increasing verification time on
                  selected inbound freight documents.
                </p>
              </a>
            </div>
          </div>

          <div className="flex items-start lg:items-center">
            <div className="w-full transition-all duration-300 ease-out">
              {searchState === "found" ? (
                <TrackingResult record={demoTrackingRecord} />
              ) : searchState === "not-found" ? (
                <EmptyState trackingNumber={submittedTrackingNumber} />
              ) : (
                <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_22px_70px_rgba(15,23,42,0.12)] backdrop-blur">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#fff5f5] px-3 py-1 text-sm font-medium text-[#b91c1c]">
                    <span className="h-2 w-2 rounded-full bg-[#da2328]" />
                    Ready to search
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                    Enter a tracking number to view shipment progress.
                  </h3>
                  <p className="mt-3 max-w-xl text-slate-600">
                    This portal shows route milestones, customs holds, delay
                    reasons, and delivery planning in one place.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {portalHighlights.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-slate-200 hover:bg-white hover:text-slate-900"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mt-10 rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#da2328]">
                Services
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Built like a real freight support page
              </h3>
            </div>
            <a
              href="#track"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              Back to tracking
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-[28px] border border-slate-100 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_24px_50px_rgba(15,23,42,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Service Module
                </p>
                <h4 className="mt-3 text-xl font-semibold text-slate-950 transition group-hover:text-[#b91c1c]">
                  {card.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <a
              href="#support"
              className="rounded-[30px] border border-amber-200 bg-[linear-gradient(135deg,#fffaf0_0%,#ffffff_100%)] p-6 shadow-sm transition hover:shadow-[0_24px_50px_rgba(120,53,15,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                Policy Update
              </p>
              <h4 className="mt-3 text-2xl font-semibold text-slate-950">
                Additional customs screening is affecting selected imports
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Shipments under review may remain in customs longer while
                revised government checks are applied to invoice matching,
                consignee details, and import category screening.
              </p>
            </a>
            <div className="rounded-[30px] border border-slate-100 bg-slate-50/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Operational Notes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Cut-off before departure: 16:00 CN warehouse time</li>
                <li>Customs exception cases receive manual timeline updates</li>
                <li>Final-mile release begins only after border clearance</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="coverage"
          className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#da2328]">
              Coverage
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Active road cargo lanes and destination handling
            </h3>
            <div className="mt-8 grid gap-4">
              {laneCards.map((lane) => (
                <a
                  key={lane.title}
                  href="#track"
                  className="rounded-[26px] border border-slate-100 bg-slate-50/90 px-5 py-5 transition hover:border-slate-200 hover:bg-white"
                >
                  <h4 className="text-lg font-semibold text-slate-950">
                    {lane.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{lane.detail}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border border-white/70 bg-[linear-gradient(180deg,#fff7f7_0%,#ffffff_100%)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#da2328]">
              Live Advisory
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Nepal customs review is still the current bottleneck
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Current held shipments may experience a 2 to 4 day delay when new
              government verification layers are triggered. Tracking updates are
              published after carrier confirmation and customs queue movement.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#f7d0d1] bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Clearance Window
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  24 to 72 hours after policy review starts
                </p>
              </div>
              <div className="rounded-2xl border border-[#f7d0d1] bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Delivery Projection
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Next dispatch after customs release
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="support"
          className="mt-10 rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#da2328]">
                Support
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Delay help, shipment questions, and delivery follow-up
              </h3>
            </div>
            <a
              href="#track"
              className="rounded-full border border-[#f3b5b7] bg-[#fff5f5] px-4 py-2 text-sm font-medium text-[#b91c1c] transition hover:border-[#da2328] hover:bg-white"
            >
              Check shipment again
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {supportCards.map((card) => (
              <a
                key={card.title}
                href="#track"
                className="rounded-[28px] border border-slate-100 bg-slate-50/80 p-5 transition hover:border-slate-200 hover:bg-white"
              >
                <h4 className="text-lg font-semibold text-slate-950">
                  {card.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.detail}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-slate-100 bg-slate-50/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Frequently Asked
              </p>
              <div className="mt-4 space-y-4">
                <a
                  href="#track"
                  className="block rounded-2xl border border-white bg-white px-4 py-4 transition hover:border-slate-200"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    Why is my shipment still in customs?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Extra government screening, missing document verification, or
                    customs queue congestion can extend release time.
                  </p>
                </a>
                <a
                  href="#track"
                  className="block rounded-2xl border border-white bg-white px-4 py-4 transition hover:border-slate-200"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    When will delivery resume after clearance?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Local delivery planning usually begins the same day or the
                    next business day after customs release.
                  </p>
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#f8d0d1] bg-[linear-gradient(135deg,#fff5f5_0%,#ffffff_100%)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#da2328]">
                Contact Window
              </p>
              <h4 className="mt-3 text-xl font-semibold text-slate-950">
                Tracking desk available for clearance follow-up
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Responses for customs-delay shipments are typically posted after
                carrier confirmation and border desk verification.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>Support hours: 09:00 to 19:00 Nepal time</p>
                <p>Update cycle: after customs remark or route release</p>
                <p>Escalation: held import shipments only</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
