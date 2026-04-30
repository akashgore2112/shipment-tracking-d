export type TrackingEvent = {
  timestamp: string;
  dateLabel: string;
  timeLabel: string;
  status: string;
  description: string;
  stage: "completed" | "current" | "upcoming";
};

export type TrackingRecord = {
  trackingNumber: string;
  latestStatus: string;
  deliveryLabel: string;
  estimatedDelivery: string;
  progressPercent: number;
  serviceType: string;
  origin: string;
  destination: string;
  shipmentMode: string;
  packageCount: string;
  weight: string;
  lastUpdated: string;
  delayHeadline: string;
  delayReason: string;
  supportMessage: string;
  events: TrackingEvent[];
};

export const DEMO_TRACKING_NUMBER = "EE183915739CN";

export const demoTrackingRecord: TrackingRecord = {
  trackingNumber: DEMO_TRACKING_NUMBER,
  latestStatus: "Customs Clearance Pending",
  deliveryLabel: "Expected delivery by 2026-05-03",
  estimatedDelivery: "2026-05-03",
  progressPercent: 79,
  serviceType: "Cross-Border Road Express",
  origin: "Guangzhou, China",
  destination: "Kathmandu, Nepal",
  shipmentMode: "Consolidated Cargo",
  packageCount: "3 cartons",
  weight: "42.6 kg",
  lastUpdated: "2026-04-30 12:10:00",
  delayHeadline: "Clearance delayed due to updated customs policy",
  delayReason:
    "Nepal inbound customs is applying updated government import screening rules, so this shipment is waiting for an extended verification check before release.",
  supportMessage:
    "Sorry for the delay. Our team is monitoring the clearance queue and the shipment will move to local delivery as soon as customs releases it.",
  events: [
    {
      timestamp: "2026-03-20 10:05:00",
      dateLabel: "2026-03-20",
      timeLabel: "10:05:00",
      status: "Order Created",
      description:
        "Shipping order was created and the supplier booking was confirmed for China to Nepal road transport.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-04 09:18:00",
      dateLabel: "2026-04-04",
      timeLabel: "09:18:00",
      status: "Pickup from Supplier Warehouse",
      description:
        "Goods were collected from the supplier warehouse in Guangzhou and moved to the export consolidation facility.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-10 14:40:00",
      dateLabel: "2026-04-10",
      timeLabel: "14:40:00",
      status: "Export Processing",
      description:
        "Export declaration, line-haul packing list, and route documents were verified for road movement out of China.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-15 11:55:00",
      dateLabel: "2026-04-15",
      timeLabel: "11:55:00",
      status: "Departed China Warehouse",
      description:
        "Consolidated cargo was released from the export warehouse in Kunming and dispatched to the road line-haul network.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-20 18:10:00",
      dateLabel: "2026-04-20",
      timeLabel: "18:10:00",
      status: "In Transit by Road",
      description:
        "Road freight departed the southwest China consolidation lane and continued through the overland route toward the Nepal border gateway.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-23 09:35:00",
      dateLabel: "2026-04-23",
      timeLabel: "09:35:00",
      status: "Border Movement",
      description:
        "Shipment manifest was handed to the cross-border road carrier and queued for movement toward the Nepal entry checkpoint.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-25 14:05:00",
      dateLabel: "2026-04-25",
      timeLabel: "14:05:00",
      status: "Border Arrival Scan",
      description:
        "Shipment was scanned on arrival at the Nepal border handover facility and moved into the customs intake queue.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-27 18:40:00",
      dateLabel: "2026-04-27",
      timeLabel: "18:40:00",
      status: "Awaiting Customs Review",
      description:
        "Shipment reached the Nepal inbound processing point and was queued for customs inspection and paperwork matching.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-30 12:10:00",
      dateLabel: "2026-04-30",
      timeLabel: "12:10:00",
      status: "Nepal Customs Hold",
      description:
        "Shipment remains under customs review today and release is pending after updated government policy checks were added to the import clearance workflow.",
      stage: "current"
    },
    {
      timestamp: "2026-05-01 15:00:00",
      dateLabel: "2026-05-01",
      timeLabel: "15:00:00",
      status: "Customs Re-Verification",
      description:
        "Customs is expected to complete the revised document and screening review on May 1, 2026 if no additional inspection note is raised.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-05-02 11:30:00",
      dateLabel: "2026-05-02",
      timeLabel: "11:30:00",
      status: "Transfer to Local Delivery Hub",
      description:
        "After customs release, the shipment is expected to move to the Kathmandu local delivery hub for route assignment and dispatch planning.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-05-03 18:30:00",
      dateLabel: "2026-05-03",
      timeLabel: "18:30:00",
      status: "Expected Delivery",
      description:
        "Shipment is projected to be delivered by May 3, 2026 once customs clearance is completed and the parcel is handed to the local delivery route.",
      stage: "upcoming"
    }
  ]
};
