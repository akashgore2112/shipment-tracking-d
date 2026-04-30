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
    title: "Road Express Freight",
    description:
      "Scheduled cross-border freight for China, Nepal, India, Bangladesh, and UAE-linked forwarding partners with route-level tracking.",
    href: "#track"
  },
  {
    title: "Supplier Consolidation",
    description:
      "Pickup, carton merge, invoice matching, and dispatch planning for business cargo moving from multiple supplier points.",
    href: "#coverage"
  },
  {
    title: "Customs Coordination",
    description:
      "Pre-alerts, document checks, policy updates, and hold-case follow-up for Nepal, India, Bangladesh, and transit-bound consignments.",
    href: "#support"
  }
];

const laneCards = [
  {
    title: "Guangzhou -> Kathmandu",
    detail: "Consumer goods and commercial cargo | road express | customs-sensitive"
  },
  {
    title: "Yiwu -> Delhi",
    detail: "Commercial dispatch lane | supplier pickup | document coordination"
  },
  {
    title: "Shenzhen -> Dhaka",
    detail: "Consolidated freight | screening-led release | partner handover"
  }
];

const countryCards = [
  {
    name: "China",
    note: "Origin pickups, export handling, consolidation warehouses"
  },
  {
    name: "Nepal",
    note: "Border intake, customs review, Kathmandu final-mile release"
  },
  {
    name: "India",
    note: "Commercial freight lanes, route planning, inland delivery support"
  },
  {
    name: "Bangladesh",
    note: "Import processing with partner forwarding coordination"
  },
  {
    name: "UAE",
    note: "Support desk visibility for forwarding, billing, and consignee follow-up"
  },
  {
    name: "Hong Kong",
    note: "Supplier routing and export handover for select cargo classes"
  }
];

const networkStats = [
  { label: "Coverage Markets", value: "6+" },
  { label: "Active Lanes", value: "18" },
  { label: "Customs Updates", value: "Daily" },
  { label: "Delivery Visibility", value: "End-to-end" }
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

const footerColumns = [
  {
    title: "Company",
    links: ["About Network", "Transit Standards", "Business Accounts"]
  },
  {
    title: "Services",
    links: ["Shipment Tracking", "Cargo Consolidation", "Customs Support"]
  },
  {
    title: "Coverage",
    links: ["China Origin", "South Asia Lanes", "Destination Support Desks"]
  },
  {
    title: "Support",
    links: ["Tracking Help", "Delivery Follow-Up", "Billing Questions"]
  }
];

const portalHighlights = [
  "Shipment milestones",
  "Country coverage",
  "Customs advisory",
  "Support workflow"
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
                Cross-Border Logistics Network
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Shipment tracking, customs status, and regional coverage in one portal.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                Enter a waybill number to check cargo movement, pending
                clearance, route milestones, and expected delivery across major
                South Asia and China-linked freight corridors.
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
              <span className="font-medium text-slate-700">Example:</span>
              <code className="rounded-full bg-white px-3 py-1.5 font-semibold text-[#da2328] shadow-sm">
                EE123456789CN
              </code>
              <button
                type="button"
                onClick={applyExampleTracking}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Load sample shipment
              </button>
              <a
                href="#support"
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Shipment support
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="#coverage"
                className="rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#da2328]">
                  Coverage
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">
                  China, Nepal, India, Bangladesh, UAE
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Multi-country routing, customs visibility, and consignee-side
                  delivery support.
                </p>
              </a>
              <a
                href="#services"
                className="rounded-[28px] border border-white/80 bg-[linear-gradient(135deg,#fff5f5_0%,#ffffff_100%)] p-5 shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#da2328]">
                  Operations
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">
                  Clearance checks and dispatch planning
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Live customs remarks, policy-led delays, and route release
                  planning for held cargo.
                </p>
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {networkStats.map((stat) => (
                <a
                  key={stat.label}
                  href="#coverage"
                  className="rounded-2xl border border-slate-100 bg-white/80 px-4 py-4 text-left shadow-sm transition hover:border-slate-200 hover:bg-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {stat.value}
                  </p>
                </a>
              ))}
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
                    Check route milestones, customs holds, destination coverage,
                    and delivery planning from the same dashboard.
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
                Core services used across regional cargo lanes
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
                Country-specific import screening can extend release times
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Customs release timelines vary by destination. Nepal, India,
                and Bangladesh inbound freight may pause longer when invoice
                review, consignee verification, or updated screening rules are
                triggered.
              </p>
            </a>
            <div className="rounded-[30px] border border-slate-100 bg-slate-50/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Operational Notes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Cut-off before departure: 16:00 CN warehouse time</li>
                <li>Country exception cases receive manual tracking updates</li>
                <li>Final-mile release begins only after local customs handover</li>
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
              Regional lanes and destination support network
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

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {countryCards.map((country) => (
                <a
                  key={country.name}
                  href="#support"
                  className="rounded-2xl border border-slate-100 bg-white px-4 py-4 transition hover:border-slate-200 hover:bg-slate-50"
                >
                  <p className="text-sm font-semibold text-slate-950">
                    {country.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {country.note}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border border-white/70 bg-[linear-gradient(180deg,#fff7f7_0%,#ffffff_100%)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#da2328]">
              Live Advisory
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Customs release timing depends on destination country
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Held shipments can experience a 2 to 4 day delay when destination
              customs authorities apply additional screening. Update frequency
              depends on carrier confirmation and queue movement in the relevant
              country.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#f7d0d1] bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Nepal / India
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Border-led review with manual document checks
                </p>
              </div>
              <div className="rounded-2xl border border-[#f7d0d1] bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Bangladesh / UAE
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Partner handover and destination release visibility
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
                Shipment help, customs follow-up, and country desk support
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
                    Government screening, missing document verification, or
                    destination queue congestion can extend release time.
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
                Regional tracking desk available for clearance follow-up
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Responses for held shipments are posted after carrier
                confirmation and country-desk verification for the destination
                market.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p>Support hours: 09:00 to 19:00 Nepal time</p>
                <p>Update cycle: after customs remark or route release</p>
                <p>Coverage desks: Nepal, India, Bangladesh, UAE, China</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-8 text-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.16)] sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Longma Cargo Express
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Regional shipment tracking and cross-border cargo support
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Shipment updates, customs remarks, destination support, and
                route visibility for China-linked cargo moving across Nepal,
                India, Bangladesh, UAE partner desks, and surrounding trade
                corridors.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a
                  href="#track"
                  className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/15"
                >
                  Track Shipment
                </a>
                <a
                  href="#coverage"
                  className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/15"
                >
                  Branch Locator
                </a>
                <a
                  href="#support"
                  className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/15"
                >
                  Contact Desk
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-sm font-semibold text-white">
                    {column.title}
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-slate-300">
                    {column.links.map((link) => (
                      <a
                        key={link}
                        href="#track"
                        className="block transition hover:text-white"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Operations desk hours: Mon-Sat, 09:00-19:00 regional support time</p>
            <p>Tracking updates posted after carrier and customs confirmation</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
