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
  latestStatus: "Returning to China",
  deliveryLabel: "Estimated Nepal arrival by 06/08/2026",
  estimatedDelivery: "By 06/08/2026",
  progressPercent: 48,
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
  postClearanceTransit: "Shipment is returning to China for MRP-label and package compliance updates before re-dispatch to Nepal",
  lastUpdated: "18/06/2026 16:30:00",
  delayHeadline: "Shipment returned for Nepal import-compliance updates",
  delayReason:
    "The shipment was not approved for onward movement to Kathmandu in its current condition. It is being returned to China so the packages, MRP labels, and supporting documents can be updated to match the current Nepal government import-compliance requirements.",
  supportMessage:
    "The return shipment is expected to reach China by 19/06/2026. Package relabeling and document updates are planned within three days, followed by re-dispatch from China to Nepal on 22/06/2026. Nepal arrival is estimated within 45 days of re-dispatch, by 06/08/2026.",
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
      stage: "completed"
    },
    {
      timestamp: "2026-05-25 11:30:00",
      dateLabel: "25/05/2026",
      timeLabel: "11:30:00",
      status: "Document Validation Window",
      description:
        "Customs document validation is expected to continue while the carrier responds to any remaining valuation or label-declaration query.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-28 13:00:00",
      dateLabel: "28/05/2026",
      timeLabel: "13:00:00",
      status: "Customs Query Closed",
      description:
        "Carrier-side clarification was accepted for HS classification, declared value, and import-label compliance review.",
      stage: "completed"
    },
    {
      timestamp: "2026-05-30 17:30:00",
      dateLabel: "30/05/2026",
      timeLabel: "17:30:00",
      status: "Delivery Plan Updated",
      description:
        "Updated delivery plan was posted after import-policy document review. Border handover and Kathmandu dispatch are planned before the 04/06/2026 to 06/06/2026 delivery window.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-01 10:00:00",
      dateLabel: "01/06/2026",
      timeLabel: "10:00:00",
      status: "Approval Follow-Up Submitted",
      description:
        "Carrier submitted a follow-up request for government approval and reconfirmed the shipment documents for final review.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-03 12:00:00",
      dateLabel: "03/06/2026",
      timeLabel: "12:00:00",
      status: "Review Extended",
      description:
        "Approval review was extended because authorities continued checking package labeling, declared value, origin details, and import-policy compliance.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-04 10:00:00",
      dateLabel: "04/06/2026",
      timeLabel: "10:00:00",
      status: "Delivery Window Put On Hold",
      description:
        "The planned 04/06/2026 to 06/06/2026 delivery window was placed on hold because government approval had not been issued.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-05 14:30:00",
      dateLabel: "05/06/2026",
      timeLabel: "14:30:00",
      status: "Carrier Response Filed",
      description:
        "Carrier filed an additional response confirming package count, invoice value, HS code, and China origin details for the held material.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-06 18:00:00",
      dateLabel: "06/06/2026",
      timeLabel: "18:00:00",
      status: "Delivery Window Missed",
      description:
        "Delivery could not proceed within the earlier commitment window because the shipment had not received government release approval.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-08 16:40:00",
      dateLabel: "08/06/2026",
      timeLabel: "16:40:00",
      status: "Government Approval Pending",
      description:
        "Approval has not been received yet. If approval is issued within 1-2 days, the material will be released for Kathmandu dispatch.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-09 12:00:00",
      dateLabel: "09/06/2026",
      timeLabel: "12:00:00",
      status: "Approval Follow-Up Window",
      description:
        "Carrier will continue follow-up with the government desk and hold the shipment at the border facility until a release decision is received.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-10 17:00:00",
      dateLabel: "10/06/2026",
      timeLabel: "17:00:00",
      status: "Kathmandu Dispatch Not Approved",
      description:
        "The shipment was not approved for onward movement to Kathmandu under the submitted package-label and compliance file.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-11 11:00:00",
      dateLabel: "11/06/2026",
      timeLabel: "11:00:00",
      status: "Return-to-China Decision",
      description:
        "The carrier was instructed to return the shipment to China for package, MRP-label, and document updates under Nepal government import requirements.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-14 15:00:00",
      dateLabel: "14/06/2026",
      timeLabel: "15:00:00",
      status: "Return Movement Started",
      description:
        "The shipment was handed to the return carrier and started moving back toward the China processing facility.",
      stage: "completed"
    },
    {
      timestamp: "2026-06-18 16:30:00",
      dateLabel: "18/06/2026",
      timeLabel: "16:30:00",
      status: "Returning to China",
      description:
        "The shipment is in return transit and is expected to reach the China processing facility by 19/06/2026.",
      stage: "current"
    },
    {
      timestamp: "2026-06-19 18:00:00",
      dateLabel: "19/06/2026",
      timeLabel: "18:00:00",
      status: "Expected Arrival in China",
      description:
        "The returned material is expected to arrive at the China processing facility for compliance rework.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-06-20 10:00:00",
      dateLabel: "20/06/2026",
      timeLabel: "10:00:00",
      status: "MRP Label and Package Update",
      description:
        "The China operations team will update MRP labels, package declarations, and supporting documents to match Nepal import-compliance requirements.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-06-22 17:00:00",
      dateLabel: "22/06/2026",
      timeLabel: "17:00:00",
      status: "Planned Re-Dispatch to Nepal",
      description:
        "After the three-day compliance update, the corrected shipment is planned for re-dispatch from China to Nepal.",
      stage: "upcoming"
    },
    {
      timestamp: "2026-08-06 18:00:00",
      dateLabel: "06/08/2026",
      timeLabel: "18:00:00",
      status: "Estimated Nepal Arrival",
      description:
        "The shipment is estimated to arrive in Nepal within 45 days of the 22/06/2026 re-dispatch, subject to transit and border-clearance conditions.",
      stage: "upcoming"
    }
  ]
};
