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
  latestStatus: "Customs Cleared",
  deliveryLabel: "Expected delivery by 2026-05-05",
  estimatedDelivery: "2026-05-05",
  progressPercent: 86,
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
  postClearanceTransit: "Scheduled departure on 2026-05-02; 6-10 hours to Kathmandu after dispatch",
  lastUpdated: "2026-05-01 16:20:00",
  delayHeadline: "Customs clearance completed at Rasuwa",
  delayReason:
    "Customs clearance has been completed at Rasuwa Customs Office, Timure. The shipment is scheduled to depart from the customs area on May 2, 2026 and move toward the Kathmandu delivery hub.",
  supportMessage:
    "We apologize for the delay. The hold was caused by customs verification outside the carrier's direct control, but because the delivery window was extended, a USD 200 service refund will be issued as a goodwill adjustment.",
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
      stage: "current"
    },
    {
      timestamp: "2026-05-02 08:30:00",
      dateLabel: "2026-05-02",
      timeLabel: "08:30:00",
      status: "Scheduled Departure from Rasuwa",
      description:
        "Carrier dispatch is planned from Rasuwa Customs Office toward the Kathmandu delivery hub. Expected road movement after departure is 6-10 hours depending on route condition and dispatch queue.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-05-05 18:30:00",
      dateLabel: "2026-05-05",
      timeLabel: "18:30:00",
      status: "Expected Delivery",
      description:
        "Shipment is planned for delivery by May 5, 2026 after Kathmandu hub processing, route assignment, and final-mile dispatch.",
      stage: "upcoming"
    }
  ]
};
