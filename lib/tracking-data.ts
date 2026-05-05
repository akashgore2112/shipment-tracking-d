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
  latestStatus: "Out for Delivery",
  deliveryLabel: "Delivery window: 2026-05-05 21:00 - 2026-05-06 11:00",
  estimatedDelivery: "2026-05-06 11:00",
  progressPercent: 96,
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
  postClearanceTransit: "Released from customs and transferred to Kathmandu delivery operations",
  lastUpdated: "2026-05-05 18:35:00",
  delayHeadline: "Shipment released for final delivery",
  delayReason:
    "The shipment has cleared customs and completed Kathmandu hub processing. Final-mile delivery is now being arranged for the consignee, with delivery expected between 21:00 on May 5, 2026 and 11:00 on May 6, 2026.",
  supportMessage:
    "We apologize for the delay caused during customs verification. The shipment is now in the final delivery phase, and the delivery team will complete handover within the confirmed delivery window.",
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
      stage: "completed"
    },
    {
      timestamp: "2026-05-01 16:20:00",
      dateLabel: "2026-05-01",
      timeLabel: "16:20:00",
      status: "Customs Clearance Completed",
      description:
        "Customs clearance has been completed at Rasuwa Customs Office, Timure. The shipment is now awaiting carrier release from the customs yard and is scheduled to depart toward Kathmandu on May 2, 2026.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-02 08:30:00",
      dateLabel: "2026-05-02",
      timeLabel: "08:30:00",
      status: "Departed from Rasuwa Customs",
      description:
        "Carrier dispatch departed from Rasuwa Customs Office toward the Kathmandu delivery hub after customs release and yard handover.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-05 18:35:00",
      dateLabel: "2026-05-05",
      timeLabel: "18:35:00",
      status: "Out for Final Delivery",
      description:
        "Shipment has completed Kathmandu hub processing and is assigned for final delivery. Delivery is expected between 21:00 on May 5, 2026 and 11:00 on May 6, 2026.",
      stage: "current"
    },
    {
      timestamp: "2026-05-06 11:00:00",
      dateLabel: "2026-05-06",
      timeLabel: "11:00:00",
      status: "Expected Delivery Completion",
      description:
        "Delivery handover is expected to be completed by 11:00 on May 6, 2026, subject to consignee availability and local route conditions.",
      stage: "upcoming"
    }
  ]
};
