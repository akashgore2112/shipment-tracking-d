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
  latestStatus: "Customs Policy Review",
  deliveryLabel: "Expected delivery by 02/06/2026",
  estimatedDelivery: "02/06/2026",
  progressPercent: 72,
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
  postClearanceTransit: "Pending customs release; Kathmandu delivery dispatch will start after border handover",
  lastUpdated: "23/05/2026 15:20:00",
  delayHeadline: "Import policy verification in progress",
  delayReason:
    "Nepal customs is applying additional document checks after the Customs Regulations, 2083 update and recent import-label compliance review. China-origin finished goods are being matched against HS code, invoice value, country of origin, and brand/MRP declaration requirements before release.",
  supportMessage:
    "The carrier has submitted the revised declaration and supporting commercial documents. Release is expected after customs risk-channel review, with final delivery planned by 02/06/2026.",
  events: [
    {
      timestamp: "2026-04-22 10:05:00",
      dateLabel: "22/04/2026",
      timeLabel: "10:05:00",
      status: "Order Created",
      description:
        "Shipping order was created and the supplier booking was confirmed for China to Nepal road transport.",
      stage: "completed"
    },
    {
      timestamp: "2026-04-27 09:18:00",
      dateLabel: "27/04/2026",
      timeLabel: "09:18:00",
      status: "Pickup from Supplier Warehouse",
      description:
        "Goods were collected from the supplier warehouse in Guangzhou and moved to the export consolidation facility.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-02 14:40:00",
      dateLabel: "02/05/2026",
      timeLabel: "14:40:00",
      status: "Export Processing",
      description:
        "Export declaration, packing list, HS details, and road movement documents were verified for dispatch out of China.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-06 11:55:00",
      dateLabel: "06/05/2026",
      timeLabel: "11:55:00",
      status: "Departed China Warehouse",
      description:
        "Consolidated cargo was released from the export warehouse in Kunming and dispatched to the road line-haul network.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-10 18:10:00",
      dateLabel: "10/05/2026",
      timeLabel: "18:10:00",
      status: "In Transit by Road",
      description:
        "Road freight departed the southwest China consolidation lane and continued through the overland route toward the Nepal border gateway.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-14 09:35:00",
      dateLabel: "14/05/2026",
      timeLabel: "09:35:00",
      status: "Border Movement",
      description:
        "Shipment manifest was handed to the cross-border road carrier and queued for movement toward the Nepal entry checkpoint.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-16 14:05:00",
      dateLabel: "16/05/2026",
      timeLabel: "14:05:00",
      status: "Border Arrival Scan",
      description:
        "Shipment was scanned on arrival at the Nepal border handover facility and moved into the customs intake queue.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-18 18:40:00",
      dateLabel: "18/05/2026",
      timeLabel: "18:40:00",
      status: "Awaiting Customs Review",
      description:
        "Shipment reached the Nepal inbound processing point and was queued for customs risk-channel assignment and paperwork matching.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-20 16:45:00",
      dateLabel: "20/05/2026",
      timeLabel: "16:45:00",
      status: "Policy Compliance Hold",
      description:
        "Shipment was held for additional import-policy verification linked to brand/MRP declaration, HS classification, and transaction-value checks for China-origin finished goods.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-21 16:20:00",
      dateLabel: "21/05/2026",
      timeLabel: "16:20:00",
      status: "Revised Documents Submitted",
      description:
        "Carrier submitted the revised commercial invoice, packing list, origin details, and consignee declaration for customs verification.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-23 15:20:00",
      dateLabel: "23/05/2026",
      timeLabel: "15:20:00",
      status: "Customs Review In Progress",
      description:
        "Rasuwa Customs is reviewing the updated declaration under the current import compliance procedure. Release is pending final risk-channel confirmation.",
      stage: "current"
    },
    {
      timestamp: "2026-05-25 11:30:00",
      dateLabel: "25/05/2026",
      timeLabel: "11:30:00",
      status: "Document Validation Window",
      description:
        "Customs document validation is expected to continue while the carrier responds to any remaining valuation or label-declaration query.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-05-28 13:00:00",
      dateLabel: "28/05/2026",
      timeLabel: "13:00:00",
      status: "Expected Customs Decision",
      description:
        "Customs decision is expected after review of HS classification, declared value, and import-label compliance.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-05-30 17:30:00",
      dateLabel: "30/05/2026",
      timeLabel: "17:30:00",
      status: "Border Release Window",
      description:
        "If no further query is raised, shipment is expected to be released from the border yard and handed to the Kathmandu line-haul team.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-06-01 10:00:00",
      dateLabel: "01/06/2026",
      timeLabel: "10:00:00",
      status: "Kathmandu Hub Processing",
      description:
        "After border release, shipment is expected to reach the Kathmandu hub for sorting and final route assignment.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-06-02 18:00:00",
      dateLabel: "02/06/2026",
      timeLabel: "18:00:00",
      status: "Expected Delivery",
      description:
        "Delivery is expected to be completed by 02/06/2026 after customs release and Kathmandu final-mile dispatch.",
      stage: "upcoming"
    }
  ]
};
