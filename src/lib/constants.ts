import {
  OperatingSystem,
  CapabilityItem,
  ProblemItem,
  CaseStudy,
  AudienceTrack,
  PricingPlan,
  FAQItem,
} from "./types";

export const SITE_CONFIG = {
  name: "Glitchless",
  legalName: "Glitchless Systems Private Limited",
  brandName: "Glitchless",
  tagline: "AI-Operated Business Systems for Modern Enterprises",
  headline: "Run Your Business With Intelligent Operations",
  subheadline:
    "Glitchless builds governed AI agents, CRM intelligence, and ecommerce operations systems that reduce manual work, accelerate response times, and give leadership complete visibility.",
  coreMessage:
    "Most companies don't need more AI tools. They need an operating system that actually runs the work.",
  url: "https://glitchless.ai",
  canonical: "https://glitchless.ai",
  ogImage: "https://glitchless.ai/og-image.png",
  contact: {
    email: "operations@glitchless.ai",
    salesEmail: "audit@glitchless.ai",
    phone: "+91 80 4912 8800",
    phoneDisplay: "+91 (80) 4912 8800",
    whatsappNumber: "918049128800",
    whatsappMessage:
      "Hi Glitchless team, I would like to request an Operations Audit for our business systems.",
    addresses: [
      {
        city: "Bengaluru",
        addressLine1: "Tower 2B, RMZ Infinity, Old Madras Road",
        addressLine2: "Bennigana Halli, Bengaluru, Karnataka 560016, India",
        isHQ: true,
      },
      {
        city: "Mumbai",
        addressLine1: "The Capital, Level 7, Bandra Kurla Complex (BKC)",
        addressLine2: "Bandra East, Mumbai, Maharashtra 400051, India",
        isHQ: false,
      },
    ],
  },
  // STRICT RULE: No Instagram. No Facebook.
  socials: {
    linkedin: "https://linkedin.com/company/atlantasystech",
    twitter: "https://x.com/glitchless_ai",
    github: "https://github.com/atlantasystech",
    youtube: "https://youtube.com/@glitchless_ai",
  },
};

export const TRUST_ECOSYSTEM = [
  { name: "Shopify", category: "Ecommerce", badge: "Shopify Plus Partner" },
  { name: "WooCommerce", category: "Ecommerce", badge: "Direct Connect" },
  { name: "Odoo ERP", category: "CRM & ERP", badge: "Certified Integrator" },
  { name: "ERPNext", category: "Open Source ERP", badge: "Frappe Framework" },
  { name: "Zoho CRM", category: "Cloud CRM", badge: "Advanced API" },
  { name: "n8n", category: "Orchestration", badge: "Self-Hosted & Governed" },
  { name: "WhatsApp Cloud API", category: "Messaging", badge: "Meta Verified" },
  { name: "Supabase", category: "Data Platform", badge: "Postgres & Auth" },
  { name: "OpenAI", category: "LLM Infrastructure", badge: "GPT-4o Enterprise" },
];

export const OPERATING_SYSTEMS: OperatingSystem[] = [
  {
    id: "revenue-os",
    name: "Revenue OS",
    tagline: "Autonomous Lead & Pipeline Operations",
    badge: "Sales & Inbound Intelligence",
    headline: "Never Lose an Inbound Lead to Latency Again",
    description:
      "Revenue OS acts as your 24/7 autonomous sales coordination engine. It captures leads across webforms, ad platforms, IndiaMART, and WhatsApp, verifies identity and intent in under 90 seconds, scores deal value, schedules calls, and enriches your CRM without manual data entry.",
    coreOutcomes: [
      "Sub-2-minute lead response time 24 hours a day, 7 days a week",
      "100% lead deduplication and GSTIN/corporate identity enrichment",
      "Dynamic meeting scheduling linked to account executive calendars",
      "Zero manual data entry into Odoo, ERPNext, or Zoho",
    ],
    metrics: [
      { label: "Avg Response Time", value: "< 90s" },
      { label: "Pipeline Capture", value: "99.8%" },
      { label: "Hours Saved / Rep / Wk", value: "14 hrs" },
    ],
    keyCapabilities: [
      "Autonomous lead qualification agents with strict pricing guardrails",
      "Multi-channel ingestion (Website, WhatsApp, Trade Portals, Meta Ads)",
      "Automated WhatsApp qualification flows with calendar booking",
      "Real-time CRM lead routing with escalation timers",
    ],
    mockData: {
      title: "Live Lead Ingestion Queue",
      status: "3 Active Ingestions",
      items: [
        { label: "Inbound Lead", value: "Vikram Singhania (Turnover ₹65Cr)", meta: "Score: 98/100 • Tier A" },
        { label: "AI Verification", value: "GSTIN Validated (Maharashtra)", meta: "920ms" },
        { label: "Executive Action", value: "WhatsApp Intro Sent + Booked 3:00 PM", meta: "Auto-Assigned" },
      ],
    },
  },
  {
    id: "commerce-os",
    name: "Commerce OS",
    tagline: "Intelligent Ecommerce & Order Operations",
    badge: "Order Workflows & Exception Handling",
    headline: "Eliminate Manual Order Processing and RTO Drain",
    description:
      "Commerce OS replaces manual spreadsheet tracking with exception-based fulfillment workflows. It coordinates inventory across Shopify, marketplaces, and 3PL warehouses, validates cash-on-delivery addresses via WhatsApp, and triggers automated escalations only when human intervention is genuinely needed.",
    coreOutcomes: [
      "Automated COD-to-prepaid incentives slashing RTO by 30%+",
      "Zero overselling through real-time multi-warehouse inventory deduplication",
      "Automated NDR (Non-Delivery Report) resolution via customer WhatsApp prompts",
      "Instant marketplace settlement reconciliation across Amazon and Shopify",
    ],
    metrics: [
      { label: "RTO Loss Reduction", value: "32.4%" },
      { label: "Order Routing Speed", value: "Real-Time" },
      { label: "Fulfillment Errors", value: "0.02%" },
    ],
    keyCapabilities: [
      "WhatsApp COD address validation and pin-code deliverability checks",
      "Multi-warehouse inventory synchronization across Shopify, Amazon, and ERP",
      "Automated return and refund approval workflows",
      "AI-assisted customer order tracking and post-purchase communications",
    ],
    mockData: {
      title: "Order Exception Engine",
      status: "Fulfillment Health: 99.9%",
      items: [
        { label: "Order #89214", value: "COD ₹4,200 (Delhi NCR)", meta: "Address Verified via WhatsApp" },
        { label: "Inventory Deduct", value: "SKU-PRO-01 -1 (All Channels)", meta: "Sync Lag: 85ms" },
        { label: "Delhivery AWB", value: "Assigned: 1409281729", meta: "Dispatched Surface" },
      ],
    },
  },
  {
    id: "ops-control-tower",
    name: "Ops Control Tower",
    tagline: "Single-Pane Governance & Telemetry",
    badge: "Monitoring & Human Oversight",
    headline: "One Dashboard to Monitor Every Agent, Flow, and Decision",
    description:
      "Autonomous operations require strict governance. Ops Control Tower provides executives with total visibility into AI agent actions, active automation runs, error fallbacks, and human approval queues. If an edge case falls outside confidence bounds, it halts and routes directly to your team.",
    coreOutcomes: [
      "Complete audit logs of every prompt, tool execution, and database write",
      "Human-in-the-loop approval thresholds for high-value actions",
      "Instant Slack / WhatsApp alerts for API timeouts or broken endpoints",
      "Comprehensive unit economics tracking cost-per-automation and hours saved",
    ],
    metrics: [
      { label: "Agent Uptime", value: "99.98%" },
      { label: "Audit Logging", value: "100%" },
      { label: "Human Escalation SLA", value: "< 5 mins" },
    ],
    keyCapabilities: [
      "Role-Based Access Control (RBAC) and credential vaulting",
      "Deterministic guardrails stopping agent hallucination or unauthorized discounts",
      "Live workflow execution graphs with pause/replay capabilities",
      "Executive KPI dashboards visualizing operational throughput in real time",
    ],
    mockData: {
      title: "Governance & Telemetry Status",
      status: "System State: Governed & Healthy",
      items: [
        { label: "Active Agents", value: "14 Agents Running", meta: "0 Failures" },
        { label: "Approval Queue", value: "1 Item Pending (₹2.4L Quote)", meta: "Awaiting Manager" },
        { label: "Security & Vault", value: "DPDP / VPC Encrypted", meta: "Audit Verified" },
      ],
    },
  },
];

export const PROBLEMS: ProblemItem[] = [
  {
    id: "delayed-leads",
    title: "Leads Get Delayed or Lost",
    subtitle: "Inbound prospects wait hours or days for initial contact.",
    impact: "Over 78% of B2B deals go to the vendor that responds first. Manual lead assignment leaks high-intent buyers to competitors.",
    promptTechFix: "Revenue OS engages every inbound inquiry on WhatsApp or email in <90 seconds with conversational qualification.",
    stat: "78% lost to latency",
  },
  {
    id: "manual-repetition",
    title: "Teams Manually Repeat the Same Work",
    subtitle: "Skilled staff spend half their week copy-pasting between tools.",
    impact: "Sales and operations reps waste 15+ hours weekly copying data from website forms into CRM, spreadsheets, and logistics portals.",
    promptTechFix: "Governed API pipelines synchronize order and lead records instantly across all systems with zero human re-keying.",
    stat: "15+ hrs/wk wasted",
  },
  {
    id: "messy-crm",
    title: "CRM Data Becomes Inaccurate & Stale",
    subtitle: "Reps fail to log calls, duplicate contacts, and lose deal context.",
    impact: "Leadership lacks reliable pipeline visibility. Forecasting is guesswork because contact stages are chronically outdated.",
    promptTechFix: "Autonomous CRM intelligence updates deal stages, notes, and call transcripts in Odoo/ERPNext automatically.",
    stat: "40%+ dirty data",
  },
  {
    id: "silent-failures",
    title: "Automations Break Silently",
    subtitle: "Fragile point-to-point zaps fail without alert until customers complain.",
    impact: "When a courier webhook or payment hook fails silently, shipments get stuck and orders get dropped unnoticed.",
    promptTechFix: "Ops Control Tower enforces self-healing retry queues and triggers instant high-priority Slack/WhatsApp alerts.",
    stat: "Zero silent drops",
  },
  {
    id: "no-visibility",
    title: "Leadership Cannot See What AI Is Doing",
    subtitle: "Fear of AI hallucinations and rogue discounts stalls adoption.",
    impact: "Uncontrolled chatbots make unauthorized commitments or hallucinate erroneous quotes, destroying customer trust.",
    promptTechFix: "Strict deterministic guardrails and human approval queues keep AI confined to verified business logic.",
    stat: "100% audited logic",
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "ai-agents-governance",
    slug: "ai-automation",
    title: "Governed AI Agents with Audit Trails",
    shortTitle: "Governed AI Agents",
    badge: "Agentic Systems",
    category: "Control",
    summary:
      "Enterprise AI agents equipped with role permissions, audit trails, and deterministic boundaries. They query live databases without hallucinations and escalate edge cases safely.",
    detailedDescription:
      "Glitchless designs autonomous agents that execute multi-step operational tasks—such as parsing complex vendor purchase orders, vetting inbound RFP documents, and triaging support queues—while logging every decision in an immutable audit ledger.",
    deliverables: [
      "Role-Based Access Control (RBAC) and prompt guardrails",
      "Automated document OCR & invoice ingestion straight into ERP",
      "Deterministic pricing and quote calculators (zero hallucinations)",
      "Human-in-the-loop approval routing via Slack or Telegram",
      "Self-hosted LLM orchestration with private Indian cloud VPC deployment",
    ],
    governanceFeatures: [
      "Strict data boundary: customer PII never trained on public models",
      "Automated fail-safes: routing to human whenever confidence drops <95%",
      "Comprehensive telemetry: latency, token spend, and execution state",
    ],
    businessBenefits: [
      {
        title: "Under 90-Second Execution",
        description: "Process complex customer inquiries and document intakes in seconds instead of hours.",
      },
      {
        title: "100% Decision Auditability",
        description: "Review exactly why an agent took an action with structured inputs and outputs.",
      },
      {
        title: "Zero Security Compromise",
        description: "Compliant with India's DPDP Act and enterprise data sovereignty requirements.",
      },
    ],
    processSteps: [
      { step: "01", title: "Boundary Definition", detail: "Map permissible actions, data inputs, and required approval thresholds." },
      { step: "02", title: "Schema Integration", detail: "Connect agent tools to authenticated Postgres, Odoo, or REST endpoints." },
      { step: "03", title: "Stress & Adversarial Testing", detail: "Subject agent to edge cases, invalid inputs, and adversarial prompts." },
      { step: "04", title: "Production Deployment", detail: "Deploy with live telemetry and automated alerting." },
    ],
    faq: [
      {
        question: "How do you prevent an AI agent from hallucinating discounts or terms?",
        answer:
          "Our agents use structured function-calling to query deterministic databases. They cannot invent numbers because calculation logic resides in hardened code, not in conversational text generation.",
      },
      {
        question: "Can Glitchless deploy agents inside our private cloud?",
        answer:
          "Yes. We specialize in sovereign VPC deployments on AWS Mumbai, Azure India, or self-hosted servers using containerized n8n and Postgres.",
      },
    ],
    metaTitle: "Governed AI Agents for Enterprise Operations | Glitchless",
    metaDescription:
      "Deploy autonomous, governed AI agents with audit trails, deterministic guardrails, and human-in-the-loop escalation with Glitchless.",
  },
  {
    id: "crm-intelligence-automation",
    slug: "crm-customization",
    title: "CRM Intelligence & Open-Source Customization",
    shortTitle: "CRM Intelligence",
    badge: "Odoo • ERPNext • Zoho",
    category: "Revenue",
    summary:
      "Turn your CRM into an active sales driver. We customize, self-host, and automate Odoo, ERPNext, SuiteCRM, and Zoho without recurring per-seat software taxes.",
    detailedDescription:
      "We replace bloated, expensive legacy software with high-performance open-source CRMs tailored to your unit economics. Features automated lead deduplication, Indian GST e-invoicing, two-way WhatsApp call logging, and field sales tracking.",
    deliverables: [
      "Odoo 17/18 and ERPNext customization and VPC self-hosting",
      "Automated lead scoring, routing, and escalation SLA triggers",
      "Indian GST e-invoicing, e-way bill generation, and HSN compliance",
      "WhatsApp Cloud API and IVR call logging into customer timeline",
      "Seamless migration from Salesforce or HubSpot with zero historical data loss",
    ],
    governanceFeatures: [
      "You own 100% of your customer records and database credentials",
      "Zero per-seat software licensing fees as your team grows",
      "Granular role-based permissions preventing unauthorized data exports",
    ],
    businessBenefits: [
      {
        title: "60-80% Software Cost Reduction",
        description: "Eliminate exorbitant per-user subscription fees by moving to robust open-source stacks.",
      },
      {
        title: "Zero Lead Leakage",
        description: "Every inbound inquiry from web, WhatsApp, and trade portals is captured in <15 seconds.",
      },
      {
        title: "Built for Indian Compliance",
        description: "Pre-configured for GST rules, TDS, multi-currency invoicing, and local payment gateways.",
      },
    ],
    processSteps: [
      { step: "01", title: "Pipeline Mapping", detail: "Analyze sales stages, approval hierarchies, and bottleneck points." },
      { step: "02", title: "Schema Cleansing", detail: "Deduplicate and normalize contact databases into clean Postgres structures." },
      { step: "03", title: "Custom Module Development", detail: "Configure quotation engines, GST hooks, and automated notifications." },
      { step: "04", title: "Cloud Launch & Training", detail: "Deploy to sovereign cloud with automated backups and staff training." },
    ],
    faq: [
      {
        question: "Can ERPNext or Odoo completely replace Salesforce or HubSpot?",
        answer:
          "Yes. With Glitchless's custom modules and workflow intelligence, open-source CRMs match enterprise functionality while eliminating per-user fees and providing total data control.",
      },
      {
        question: "How long does a typical CRM migration take?",
        answer:
          "Our structured sprints complete full data migration, customization, and staff handover in 4 to 6 weeks with zero business downtime.",
      },
    ],
    metaTitle: "Open-Source CRM Customization & Intelligence | Glitchless",
    metaDescription:
      "Enterprise Odoo, ERPNext, and Zoho customization by Glitchless. Save 60-80% in software fees while building automated, high-visibility sales pipelines.",
  },
  {
    id: "ecommerce-operations-automation",
    slug: "ecommerce-management",
    title: "Ecommerce Operations & Exception Handling",
    shortTitle: "Ecommerce Operations",
    badge: "Shopify Plus • Marketplaces",
    category: "Commerce",
    summary:
      "Autonomous ecommerce operations for high-growth brands. Real-time catalog syncing, multi-warehouse inventory allocation, and automated WhatsApp RTO reduction.",
    detailedDescription:
      "Commerce OS connects your storefronts directly with logistics providers (Shiprocket, Delhivery) and warehouse management systems. It automates address verification, detects high-risk COD orders, and synchronizes stock levels across Shopify, Amazon, and offline inventory.",
    deliverables: [
      "Real-time multi-channel inventory sync preventing flash-sale overselling",
      "Automated COD confirmation and COD-to-prepaid conversion on WhatsApp",
      "Non-Delivery Report (NDR) automation recovering stuck courier packages",
      "Automated catalog attribute enrichment and bulk marketplace upload",
      "Marketplace payment reconciliation and return settlement tracking",
    ],
    governanceFeatures: [
      "Automated fallback routes if courier API fails",
      "Address risk scoring protecting against fraudulent bulk orders",
      "Centralized inventory master preventing double-booking",
    ],
    businessBenefits: [
      {
        title: "32% Lower RTO Losses",
        description: "Stop return-to-origin leakage with automated WhatsApp address and phone verification.",
      },
      {
        title: "70% Faster Order Routing",
        description: "Orders pass straight from checkout to nearest 3PL warehouse with zero manual touch.",
      },
      {
        title: "Zero Inventory Discrepancies",
        description: "Stock updates across Shopify, Amazon, and offline stores in under 120ms.",
      },
    ],
    processSteps: [
      { step: "01", title: "Fulfillment Audit", detail: "Examine shipping drop-offs, RTO hotspots, and channel discrepancies." },
      { step: "02", title: "Connector Architecture", detail: "Deploy bi-directional API queues between Shopify, WMS, and couriers." },
      { step: "03", title: "Automated Exception Rules", detail: "Set up triggers for out-of-stock items, failed addresses, and courier delays." },
      { step: "04", title: "Continuous CRO & Scale", detail: "Weekly monitoring of checkout latency and fulfillment velocity." },
    ],
    faq: [
      {
        question: "How do you convert COD orders to prepaid on WhatsApp?",
        answer:
          "Commerce OS triggers an instant WhatsApp notification upon order placement, confirming deliverability and offering an instant 5% UPI discount to convert to prepaid via Razorpay/Cashfree.",
      },
      {
        question: "Can Commerce OS handle multi-warehouse operations across India?",
        answer:
          "Yes. It automatically calculates pin-code proximity and allocates orders to the closest warehouse with available stock.",
      },
    ],
    metaTitle: "Ecommerce Operations & RTO Automation | Glitchless",
    metaDescription:
      "Scale Shopify and marketplace fulfillment with Glitchless's Commerce OS. Automated inventory sync, courier tracking, and 30%+ RTO reduction.",
  },
  {
    id: "whatsapp-email-webform-workflows",
    slug: "webform-saas-development",
    title: "WhatsApp, Email & Webform Workflows",
    shortTitle: "Omnichannel Workflows",
    badge: "Direct Ingestion",
    category: "Revenue",
    summary:
      "High-converting multi-step lead capture forms, verified WhatsApp conversational funnels, and automated email nurturing unified into a single data stream.",
    detailedDescription:
      "We replace static forms with dynamic, frictionless lead capture systems. Whether a customer reaches out via your website, a WhatsApp ad, or an email inquiry, Glitchless ingests the payload, enriches the lead profile, and triggers contextual follow-ups.",
    deliverables: [
      "Multi-step dynamic lead qualification forms with conditional logic",
      "Official Meta WhatsApp Cloud API templates and interactive flows",
      "Dynamic document upload and instant GSTIN/PAN verification",
      "Instant calendar booking integration (Google Meet / Outlook)",
      "Automated Slack / CRM webhook synchronization",
    ],
    governanceFeatures: [
      "Meta-verified business templates adhering to anti-spam policies",
      "Strict data encryption in transit and at rest",
      "Automated opt-out handling honoring user consent",
    ],
    businessBenefits: [
      {
        title: "42% Higher Form Completion",
        description: "Frictionless multi-step forms capture high-intent buyers without intimidating drop-off.",
      },
      {
        title: "Immediate Lead Hook",
        description: "Engage prospects within seconds of form submission while their buying intent is highest.",
      },
      {
        title: "Clean Unified Ingestion",
        description: "Eliminate duplicate inquiries across website, WhatsApp, and email channels.",
      },
    ],
    processSteps: [
      { step: "01", title: "Form & Flow UX", detail: "Design engaging, accessible steps prioritizing completion speed." },
      { step: "02", title: "Webhook Hookup", detail: "Link submission payloads to Supabase and CRM pipeline engines." },
      { step: "03", title: "WhatsApp Bot Logic", detail: "Configure conversational decision trees and fallback triggers." },
      { step: "04", title: "A/B Optimization", detail: "Refine field sequence and messaging based on live conversion data." },
    ],
    faq: [
      {
        question: "Can we embed these forms on our existing Webflow or WordPress site?",
        answer:
          "Yes. We deploy lightweight, zero-dependency web components or subdomains (e.g. portal.yourbrand.com) that integrate seamlessly.",
      },
    ],
    metaTitle: "WhatsApp, Email & Webform Ingestion Systems | Glitchless",
    metaDescription:
      "Capture and qualify high-intent leads across webforms and WhatsApp with Glitchless's automated omnichannel workflows.",
  },
  {
    id: "custom-internal-tools-dashboards",
    slug: "web-app-development",
    title: "Custom Internal Tools & Client Portals",
    shortTitle: "Internal Tools & Portals",
    badge: "Modern Fullstack",
    category: "Platform",
    summary:
      "Purpose-built web applications, vendor portals, and executive dashboards engineered with Next.js, React, and Supabase to replace spreadsheet chaos.",
    detailedDescription:
      "When off-the-shelf software doesn't fit your proprietary operations, Glitchless engineers tailored internal web applications. Built with enterprise security, responsive interfaces, role-based access control, and sub-second performance.",
    deliverables: [
      "Custom Next.js & React web applications with edge deployment",
      "Vendor onboarding and compliance document collection portals",
      "Real-time operational KPI dashboards and executive reporting views",
      "Client self-service portals with magic-link authentication",
      "Direct API middleware connecting legacy databases to modern interfaces",
    ],
    governanceFeatures: [
      "Enterprise Role-Based Access Control (RBAC)",
      "PostgreSQL row-level security ensuring strict data isolation",
      "Automated CI/CD pipelines with zero-downtime updates",
    ],
    businessBenefits: [
      {
        title: "Eliminate Spreadsheets",
        description: "Replace fragile Google Sheets with validated, multi-user web databases.",
      },
      {
        title: "Live Operational Visibility",
        description: "Give stakeholders real-time KPI visibility instead of outdated weekly reports.",
      },
      {
        title: "100% IP Ownership",
        description: "You own the complete codebase, architecture, and deployment environment.",
      },
    ],
    processSteps: [
      { step: "01", title: "Schema & Architecture", detail: "Design normalized database models, role permissions, and API contracts." },
      { step: "02", title: "Component Engineering", detail: "Build clean, accessible UI components with responsive typography." },
      { step: "03", title: "API Integration", detail: "Connect to ERPs, payment gateways, and data warehouses." },
      { step: "04", title: "Deployment & Telemetry", detail: "Launch on Vercel/AWS with SSL, DDoS protection, and error monitoring." },
    ],
    faq: [
      {
        question: "Why build a custom internal tool instead of using no-code platforms like Retool?",
        answer:
          "Glitchless's custom Next.js applications have zero recurring per-user seat licenses, load in under 1 second, and provide complete intellectual property ownership.",
      },
    ],
    metaTitle: "Custom Internal Tools & Enterprise Portals | Glitchless",
    metaDescription:
      "Replace fragile spreadsheets with custom Next.js and Supabase internal tools and client portals built by Glitchless.",
  },
  {
    id: "integrations-api-orchestration",
    slug: "api-orchestration",
    title: "Integrations & API Orchestration",
    shortTitle: "API Orchestration",
    badge: "Self-Hosted n8n",
    category: "Platform",
    summary:
      "Resilient, self-hosted integration middleware connecting disparate legacy software, warehouse tools, and payment gateways into an automated ecosystem.",
    detailedDescription:
      "We build resilient API bridges using self-hosted n8n and serverless edge functions. Features exponential backoff retries, rate-limit throttling, message deduplication, and encrypted webhook routing.",
    deliverables: [
      "Self-hosted n8n infrastructure deployed in your private cloud",
      "REST & GraphQL connectors bridging modern SaaS and legacy ERPs",
      "Resilient webhook queueing with automated retry mechanisms",
      "Automated error notifications to Slack, WhatsApp, or PagerDuty",
      "Complete API documentation and Postman collections",
    ],
    governanceFeatures: [
      "Unlimited workflow executions without per-task Zapier fees",
      "End-to-end payload encryption matching SOC2 standards",
      "Comprehensive telemetry: execution history and payload inspection",
    ],
    businessBenefits: [
      {
        title: "80% Lower iPaaS Cost",
        description: "Save tens of thousands of dollars annually compared to commercial Zapier or Workato tiers.",
      },
      {
        title: "99.98% Workflow Uptime",
        description: "Resilient retry queues prevent failed transactions during network blips.",
      },
      {
        title: "Data Kept in India",
        description: "Sovereign cloud execution keeping customer data within domestic borders.",
      },
    ],
    processSteps: [
      { step: "01", title: "Integration Matrix", detail: "Map data endpoints, payload schemas, and sync intervals." },
      { step: "02", title: "Queue Architecture", detail: "Configure Redis/Postgres buffers and webhook listeners." },
      { step: "03", title: "Fault-Tolerance Testing", detail: "Simulate network drops, rate limits, and server outages." },
      { step: "04", title: "Live Orchestration", detail: "Activate bi-directional pipelines with real-time alerting." },
    ],
    faq: [
      {
        question: "Why is self-hosted n8n better than Zapier for enterprise operations?",
        answer:
          "n8n offers unlimited workflow runs without steep per-task costs, runs completely inside your own cloud VPC, and handles complex loops, error retries, and private database connections.",
      },
    ],
    metaTitle: "API Orchestration & Integration Middleware | Glitchless",
    metaDescription:
      "Self-hosted n8n and API orchestration engineering by Glitchless. Connect disparate ERPs, CRMs, and ecommerce platforms with zero per-task fees.",
  },
  {
    id: "seo-geo-ai-search",
    slug: "seo-geo-optimization",
    title: "SEO, GEO & AI-Search Visibility Systems",
    shortTitle: "SEO, GEO & AI-Search",
    badge: "Answer Engine Visibility",
    category: "Platform",
    summary:
      "Future-proof your enterprise presence. We combine technical SEO, local commercial authority, and Generative Engine Optimization (GEO) so AI agents recommend your brand.",
    detailedDescription:
      "Modern buyers find solutions through Perplexity, ChatGPT Search, and Google AI Overviews. Glitchless structures your digital entity graph, technical JSON-LD schemas, and programmatic answers to secure prime recommendations in AI search engines.",
    deliverables: [
      "Full JSON-LD structured data graph (Organization, Service, FAQ, HowTo, Product)",
      "Generative Engine Optimization (GEO) audit for Perplexity and SearchGPT citations",
      "Multi-city Google Business Profile optimization for major commercial hubs",
      "Core Web Vitals remediation achieving 95+ PageSpeed scores",
      "Programmatic authority architecture for commercial industry queries",
    ],
    governanceFeatures: [
      "100% white-hat technical foundations aligned with search guidelines",
      "Authoritative entity definitions recognized by LLM web crawlers",
    ],
    businessBenefits: [
      {
        title: "Cited in AI Answers",
        description: "Structure your business knowledge so LLMs cite your brand as the definitive authority.",
      },
      {
        title: "3x Inbound Commercial Queries",
        description: "Capture high-intent B2B buyers searching for exact operational software solutions.",
      },
      {
        title: "Sub-Second Page Loads",
        description: "Optimized server rendering for top search rank and minimal bounce rates.",
      },
    ],
    processSteps: [
      { step: "01", title: "Entity Audit", detail: "Analyze how search engines and LLMs currently perceive your brand." },
      { step: "02", title: "Schema Engineering", detail: "Implement connected JSON-LD schemas across all service routes." },
      { step: "03", title: "Answer Formatting", detail: "Structure concise definitions and comparisons for direct AI citation." },
      { step: "04", title: "Continuous Monitoring", detail: "Track citation frequency in Perplexity, ChatGPT, and Google." },
    ],
    faq: [
      {
        question: "What is Generative Engine Optimization (GEO)?",
        answer:
          "GEO optimizes your digital footprint for AI answer engines (Perplexity, ChatGPT, Gemini, and Google AI Overviews) by formatting structured data, concise definitions, and authoritative entity citations.",
      },
    ],
    metaTitle: "SEO, GEO & AI-Search Visibility Systems | Glitchless",
    metaDescription:
      "Generative Engine Optimization (GEO) and technical SEO by Glitchless. Rank in Google and earn citations in Perplexity and ChatGPT Search.",
  },
  {
    id: "operations-control-tower",
    slug: "ops-control-tower",
    title: "Ops Control Tower & Telemetry",
    shortTitle: "Ops Control Tower",
    badge: "Governance Dashboard",
    category: "Control",
    summary:
      "Centralized governance dashboard providing real-time visibility into active AI agents, execution logs, human approval queues, and operational throughput.",
    detailedDescription:
      "Autonomous systems must never operate in the dark. Ops Control Tower centralizes monitoring across Revenue OS, Commerce OS, and your custom integrations, providing executive oversight and instantaneous fail-safe intervention.",
    deliverables: [
      "Unified single-pane monitoring dashboard for all automated workflows",
      "Human-in-the-loop approval interface for high-value quotes and exceptions",
      "Real-time health status, uptime telemetry, and latency tracking",
      "Comprehensive error logs with instant Slack and WhatsApp alerts",
      "Cost-per-run analytics and business ROI tracking metrics",
    ],
    governanceFeatures: [
      "Immutable audit trail of all automated decisions and data writes",
      "Configurable threshold alerts preventing runaway API charges",
      "Strict data isolation and encrypted secret management",
    ],
    businessBenefits: [
      {
        title: "Complete Peace of Mind",
        description: "Know exactly what your autonomous systems are doing at every moment.",
      },
      {
        title: "Zero Silent Failures",
        description: "Get notified the second an API timeout or data discrepancy occurs.",
      },
      {
        title: "Clear ROI Proof",
        description: "Measure hours saved, response latencies, and operational cost savings weekly.",
      },
    ],
    processSteps: [
      { step: "01", title: "Telemetry Configuration", detail: "Instrument logging hooks across all agents and automated pipelines." },
      { step: "02", title: "Approval Threshold Setup", detail: "Define what dollar values or order conditions require human sign-off." },
      { step: "03", title: "Dashboard Deployment", detail: "Launch single-pane executive view with role-based access." },
      { step: "04", title: "Alert Tuning", detail: "Route high-priority incidents directly to on-call operational leads." },
    ],
    faq: [
      {
        question: "What happens when an AI agent encounters an edge case it cannot solve?",
        answer:
          "Ops Control Tower automatically pauses the transaction, marks the status as 'Pending Human Review', and sends an alert to your team's Slack or WhatsApp with full context for a 1-click decision.",
      },
    ],
    metaTitle: "Ops Control Tower: Enterprise AI Governance | Glitchless",
    metaDescription:
      "Monitor, govern, and control AI agents and automation workflows with Glitchless's Ops Control Tower. Full audit trails and human approval queues.",
  },
];

export const GOVERNED_STEPS = [
  {
    step: "01",
    phase: "Audit",
    title: "Operations & Bottleneck Audit",
    timeline: "Week 1",
    description:
      "We conduct a deep forensic audit of your existing spreadsheets, CRMs, ecommerce stores, and manual handoffs to pinpoint friction, calculate automation ROI, and establish baseline metrics.",
    keyOutputs: ["Operations bottleneck matrix", "Architecture blueprint", "ROI & time-savings model"],
  },
  {
    step: "02",
    phase: "Blueprint",
    title: "Governed Workflow Blueprint",
    timeline: "Week 2",
    description:
      "We design state diagrams, API payload contracts, permission models, deterministic guardrails, and human-in-the-loop approval thresholds before writing production code.",
    keyOutputs: ["Workflow state diagram", "Security & RBAC protocol", "Integration specification"],
  },
  {
    step: "03",
    phase: "Deploy",
    title: "Engineered Deployment in Sprints",
    timeline: "Weeks 3-4",
    description:
      "Our engineers develop custom modules, configure n8n automated flows, customize open-source CRM pipelines, and integrate courier and payment APIs with automated test suites.",
    keyOutputs: ["Working staging environment", "Automated test suites", "Clean modular codebase"],
  },
  {
    step: "04",
    phase: "Monitor",
    title: "Ops Control Tower & Telemetry",
    timeline: "Week 5",
    description:
      "We connect all live flows to Ops Control Tower with automated retry queues, rate-limit buffers, error logging, and instant Slack/WhatsApp alerts. Zero unmonitored execution.",
    keyOutputs: ["Zero-downtime production launch", "Self-healing error handlers", "SOP documentation"],
  },
  {
    step: "05",
    phase: "Optimize",
    title: "Continuous Governance & Scaling",
    timeline: "Ongoing",
    description:
      "We track execution logs, conversion rates, and response latencies weekly, continuously expanding automation into new business units while maintaining 99.98% reliability.",
    keyOutputs: ["Weekly performance telemetry", "SLA uptime guarantee", "Proactive feature upgrades"],
  },
];

export const OUTCOME_PROOF: CaseStudy[] = [
  {
    id: "lead-response-automation",
    slug: "lead-response-under-2-minutes",
    clientIndustry: "B2B Technology & Industrial Equipment",
    region: "Pan-India Commercial Corridors",
    headline: "Every New Lead Followed Up in Under 2 Minutes with 100% CRM Capture",
    metricHighlight: "< 2 Mins",
    metricLabel: "Lead Response Time",
    secondaryMetric: "100%",
    secondaryLabel: "Capture Across All Inbound Sources",
    challenge:
      "An industrial equipment distributor was receiving 40+ high-value inquiries daily across webforms, IndiaMART, and trade ads. Sales engineers took 6 to 18 hours to respond, resulting in 45% of prospects turning to competing suppliers.",
    solution:
      "Glitchless deployed Revenue OS. The system captures leads from all sources, verifies corporate identity and GSTIN in 840ms, scores deal intent, logs the record in ERPNext, and dispatches a personalized WhatsApp greeting with calendar booking in under 90 seconds.",
    techStack: ["Revenue OS", "ERPNext", "WhatsApp Cloud API", "Self-Hosted n8n", "PostgreSQL"],
    outcome: [
      "Inbound response latency plunged from 14 hours to 82 seconds",
      "Sales meetings scheduled per week increased by 3.2x",
      "Zero missed inquiries from industrial trade portals with automated escalation",
    ],
  },
  {
    id: "order-exception-automation",
    slug: "order-operations-reduction",
    clientIndustry: "High-Growth Direct-to-Consumer (D2C)",
    region: "Bengaluru, Mumbai & Delhi NCR",
    headline: "Manual Order Operations Reduced by 70% Through Exception-Based Workflows",
    metricHighlight: "70%",
    metricLabel: "Reduction in Manual Order Handling",
    secondaryMetric: "32.4%",
    secondaryLabel: "Reduction in COD RTO Losses",
    challenge:
      "A fast-scaling consumer brand processing 1,200 daily orders across Shopify and Amazon was spending 20+ hours daily manually confirming COD addresses, reconciling returns, and updating warehouse inventory across disconnected tools.",
    solution:
      "Glitchless deployed Commerce OS. The system automatically validates delivery addresses via WhatsApp, converts COD orders to prepaid with automated 5% UPI incentives, syncs stock levels in real time, and alerts staff only when true delivery exceptions occur.",
    techStack: ["Commerce OS", "Shopify Plus", "Delhivery & Shiprocket APIs", "Razorpay", "WhatsApp Cloud API"],
    outcome: [
      "COD Return-to-Origin (RTO) rate dropped from 29% to 19.5%, saving ₹18 Lakhs quarterly",
      "Automated COD-to-prepaid conversion surged by 24% via WhatsApp links",
      "Order processing team reduced from 6 full-time staff to 1 manager handling exceptions",
    ],
  },
  {
    id: "crm-data-synchronization",
    slug: "crm-data-enrichment-and-sync",
    clientIndustry: "Healthcare Diagnostics Network",
    region: "Bengaluru & Hyderabad",
    headline: "CRM Data Cleaned, Enriched, and Synced Across Teams with Zero Silos",
    metricHighlight: "99.8%",
    metricLabel: "Data Synchronization Accuracy",
    secondaryMetric: "₹28L+",
    secondaryLabel: "Annual SaaS Licensing Fees Saved",
    challenge:
      "A multi-location diagnostic chain operated disjointed billing tools at 16 centers. Patient records were duplicated, doctor referral tracking was calculated on chaotic Excel sheets, and Salesforce per-seat licensing fees were rapidly climbing.",
    solution:
      "Glitchless migrated the organization from Salesforce to a tailored, self-hosted Odoo ERP and deployed automated data pipelines. Patient history, sample dispatch tracking, and doctor referral accounting are now synchronized in real time with zero per-seat fees.",
    techStack: ["Odoo Enterprise", "PostgreSQL", "WhatsApp Business API", "Custom Next.js Portal", "Docker VPC"],
    outcome: [
      "Saved ₹28 Lakhs annually by transitioning away from proprietary per-user SaaS licenses",
      "Patient repeat booking increased by 38% through automated WhatsApp checkup reminders",
      "Centralized executive visibility across all 16 centers with instant P&L analytics",
    ],
  },
  {
    id: "governed-ai-escalation",
    slug: "agentic-ai-human-escalation",
    clientIndustry: "Enterprise B2B Logistics & Supply Chain",
    region: "National Logistics Network",
    headline: "AI Agents Escalated Edge Cases to Humans Instead of Failing Silently",
    metricHighlight: "0.0%",
    metricLabel: "Hallucinated Pricing or Silent Drops",
    secondaryMetric: "94.6%",
    secondaryLabel: "Autonomous Resolution on Routine Tasks",
    challenge:
      "An enterprise logistics firm experimented with generic chatbots that made incorrect pricing commitments, lost shipment tracking context, and frustrated VIP corporate clients with robotic loops.",
    solution:
      "Glitchless implemented Governed AI Agents with Ops Control Tower. Routine shipment tracking and rate-card queries are resolved autonomously via direct database calls. Whenever custom contract terms or rates are queried, the agent halts, gathers context, and routes to a senior operations manager on Slack.",
    techStack: ["Ops Control Tower", "GPT-4o Enterprise", "Self-Hosted n8n", "Slack Webhooks", "PostgreSQL"],
    outcome: [
      "94.6% of routine inquiries resolved without human intervention in <45 seconds",
      "Zero incorrect pricing commitments due to strict deterministic database bounds",
      "Human manager escalation time averaged 3.5 minutes with complete audit context",
    ],
  },
];

export const WHY_PROMPT_TECH = [
  {
    title: "Governed AI, Not Uncontrolled Automation",
    description:
      "We don't build loose, hallucinating chatbots. Every Glitchless agent operates within strict deterministic guardrails, verified database tables, and human-in-the-loop approval thresholds.",
    iconName: "ShieldCheck",
  },
  {
    title: "Outcome-First Implementation",
    description:
      "We benchmark every deployment against tangible business metrics: lead response time, return-to-origin loss reduction, manual hours saved, and software cost reduction.",
    iconName: "Target",
  },
  {
    title: "Ecommerce and B2B Operational Expertise",
    description:
      "We understand the realities of Indian commerce: COD verification, GST e-invoicing, warehouse reconciliation, and multi-channel order routing. We solve operational realities, not theoretical ideas.",
    iconName: "Layers",
  },
  {
    title: "Fast Execution with Enterprise Structure",
    description:
      "Working systems deployed in focused 2 to 3-week sprints with weekly demos and staging validation. Zero multi-month consulting bloat.",
    iconName: "Zap",
  },
  {
    title: "Total Data Sovereignty & Zero Per-Seat Tax",
    description:
      "We deploy in your sovereign private cloud (AWS Mumbai, Azure India, or on-premise). You own 100% of your code, workflows, and data with zero recurring per-user software penalties.",
    iconName: "Lock",
  },
  {
    title: "India-Based Delivery with Global Engineering",
    description:
      "World-class software craftsmanship delivered from Bengaluru (RMZ Infinity) and Mumbai (BKC) at compelling economics with direct access to senior architects.",
    iconName: "Globe2",
  },
];

export const WHY_GLITCHLESS = WHY_PROMPT_TECH;

export const ENGAGEMENT_MODELS: PricingPlan[] = [
  {
    id: "operations-audit",
    name: "Operations Audit",
    tagline: "Comprehensive friction audit & architecture blueprint",
    badge: "Recommended Starting Point",
    popular: false,
    priceINR: 45000,
    priceUSD: 600,
    billingPeriod: "one-time audit",
    deliveryTimeline: "5 business days delivery",
    description:
      "A deep forensic review of your existing operations, CRM setup, and manual bottlenecks with a prioritized implementation blueprint and ROI model.",
    features: [
      "Full review of lead flows, order workflows & CRM schemas",
      "Identification of silent automation breaks and manual data re-entry",
      "Custom architecture blueprint for Revenue OS or Commerce OS",
      "Prioritized ROI model and time-savings forecast",
      "90-minute executive briefing with senior systems architect",
      "100% fee credited toward any subsequent implementation sprint",
    ],
    idealFor: "Companies wanting complete clarity on where automation will yield the highest return before writing code.",
    ctaText: "Book an Operations Audit",
    ctaLink: "/book-a-call?plan=operations-audit",
  },
  {
    id: "system-sprint",
    name: "System Sprint",
    tagline: "Fixed-scope deployment of a complete governed system",
    badge: "Most Popular for Fast Impact",
    popular: true,
    priceINR: 145000,
    priceUSD: 1950,
    billingPeriod: "one-time sprint",
    deliveryTimeline: "2 to 3 weeks delivery",
    description:
      "End-to-end implementation of Revenue OS, Commerce OS, or a dedicated AI workflow pod with live telemetry, guardrails, and staff training.",
    features: [
      "Everything in Operations Audit, plus full production deployment",
      "Implementation of Revenue OS or Commerce OS workflows",
      "Official Meta WhatsApp Cloud API integration & templates",
      "Bi-directional CRM / ERP sync with Odoo, ERPNext, or Zoho",
      "Ops Control Tower connection with real-time alerts",
      "Human-in-the-loop escalation rules and security guardrails",
      "Full video SOPs, team handover, and 30 days hypercare warranty",
    ],
    idealFor: "Businesses ready to eliminate a major operational bottleneck with high-velocity engineering.",
    ctaText: "Initiate System Sprint",
    ctaLink: "/book-a-call?plan=system-sprint",
  },
  {
    id: "governed-growth-retainer",
    name: "Governed Operations Retainer",
    tagline: "Dedicated monthly operations & AI engineering pod",
    badge: "Continuous Scale",
    popular: false,
    priceINR: 265000,
    priceUSD: 3500,
    billingPeriod: "per month",
    deliveryTimeline: "Continuous monthly sprints",
    description:
      "A dedicated team of senior automation architects and fullstack engineers acting as your fractional AI technology and operations department.",
    features: [
      "Continuous feature additions across Revenue OS and Commerce OS",
      "Dedicated senior automation architect & technical project lead",
      "Priority SLA: 2-hour critical incident response",
      "Unlimited workflow iterations, maintenance, and schema tuning",
      "Open-source CRM hosting, server monitoring, and encrypted backups",
      "Bi-weekly strategic roadmap review and ROI accounting",
      "Proactive security patches, API migration, and cost optimizations",
    ],
    idealFor: "High-growth ecommerce brands and B2B enterprises wanting compounding operational advantage.",
    ctaText: "Start Governed Retainer",
    ctaLink: "/book-a-call?plan=governed-growth-retainer",
  },
];

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "How does Glitchless differ from a generic AI automation agency?",
    answer:
      "Most agencies sell basic, fragile Zapier zaps or unmonitored chatbots that hallucinate or break silently. Glitchless builds governed AI operating systems: Revenue OS, Commerce OS, and Ops Control Tower. We engineer deterministic guardrails, human approval queues, private cloud data sovereignty, and comprehensive audit trails so AI runs your work safely.",
    category: "Positioning",
  },
  {
    question: "What is an Operations Audit and what do we receive?",
    answer:
      "An Operations Audit is a 5-day forensic review of your current systems (Shopify, CRM, Google Sheets, messaging). You receive: (1) a detailed bottleneck analysis showing where hours and leads are lost, (2) an architecture blueprint specifying exact API flows and data schemas, (3) a quantitative ROI forecast, and (4) an executive briefing. If you proceed with an implementation sprint, the audit fee is 100% credited toward it.",
    category: "Audit & Process",
  },
  {
    question: "How do you ensure AI agents don't make mistakes or hallucinate pricing?",
    answer:
      "We enforce strict deterministic guardrails. Our agents never generate pricing or commitments from conversational LLM memory. Instead, they execute authenticated API calls to your live database tables. If a customer query falls outside pre-approved boundaries, the agent pauses and routes directly to a human manager via Ops Control Tower.",
    category: "Governance & Security",
  },
  {
    question: "Can Glitchless migrate our team away from expensive CRMs like Salesforce or HubSpot?",
    answer:
      "Yes. One of our core specialties is migrating companies to open-source enterprise stacks like Odoo or ERPNext. This eliminates recurring per-user seat licenses (often saving ₹15L to ₹40L annually), keeps 100% of data within your sovereign cloud VPC, and gives you total architectural freedom.",
    category: "CRM & Migration",
  },
  {
    question: "What third-party platforms and tools can Glitchless integrate with?",
    answer:
      "Any system with an API or webhook! We frequently integrate Shopify Plus, WooCommerce, Amazon SP-API, Odoo, ERPNext, Zoho, Shiprocket, Delhivery, Razorpay, Stripe, Meta WhatsApp Cloud API, OpenAI GPT-4o, Google Workspace, and legacy SQL databases.",
    category: "Integrations",
  },
  {
    question: "What does implementation timeline look like?",
    answer:
      "Our Operations Audit takes 5 business days. A focused System Sprint delivers working, tested production workflows in 2 to 3 weeks. Comprehensive CRM migrations typically take 4 to 6 weeks with zero downtime.",
    category: "Timeline",
  },
  {
    question: "Where is our business and customer data hosted?",
    answer:
      "In your own sovereign cloud VPC—typically AWS Mumbai, Azure India, or your existing private servers. We adhere strictly to India's Digital Personal Data Protection (DPDP) Act 2023 and GDPR standards. Glitchless never pools or resells your data.",
    category: "Data Sovereignty",
  },
];
