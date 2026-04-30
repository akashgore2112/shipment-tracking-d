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
  commodity: string;
  hsnCode: string;
  brandStatus: string;
  declaredQuantity: string;
  materialComposition: string;
  countryOfOrigin: string;
  invoiceValue: string;
  customsOffice: string;
  customsOfficeAddress: string;
  postClearanceTransit: string;
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
  packageCount: "8 cartons",
  weight: "108.7 kg",
  commodity: "Women’s woven and knit apparel, unbranded",
  hsnCode: "HSN 6204 / 6104",
  brandStatus: "Non-branded ready-made garments",
  declaredQuantity: "122 pcs",
  materialComposition: "Mixed cotton and polyester garments",
  countryOfOrigin: "China",
  invoiceValue: "USD 2,530.00",
  customsOffice: "Rasuwa Customs Office",
  customsOfficeAddress: "Timure, Rasuwa, Nepal",
  postClearanceTransit: "6-10 hours to Kathmandu delivery hub after customs release",
  lastUpdated: "2026-04-30 16:45:00",
  delayHeadline: "Held for customs verification at Rasuwa",
  delayReason:
    "Shipment is under import document verification at Rasuwa Customs Office, Timure. Release is pending due to updated screening checks for inbound cargo before onward movement to Kathmandu.",
  supportMessage:
    "Sorry for the delay. After customs release, road movement to the Kathmandu delivery hub is expected to take 6-10 hours depending on dispatch queue and road conditions.",
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
      timestamp: "2026-04-30 16:45:00",
      dateLabel: "2026-04-30",
      timeLabel: "16:45:00",
      status: "Held at Rasuwa Customs",
      description:
        "Shipment remains at Rasuwa Customs Office, Timure for import document verification. Once released, the carrier will dispatch it toward the Kathmandu delivery hub with an expected road transit time of 6-10 hours.",
      stage: "current"
    },
    {
      timestamp: "2026-05-01 07:00:00",
      dateLabel: "2026-05-01",
      timeLabel: "07:00:00",
      status: "Customs Re-Verification",
      description:
        "Shipment remains at Rasuwa Customs Office, Timure for import document verification. Once released, the carrier will dispatch it toward the Kathmandu delivery hub with an expected road transit time of 6-10 hours.",
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
