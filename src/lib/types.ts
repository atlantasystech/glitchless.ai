export interface OperatingSystem {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  badge: string;
  coreOutcomes: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  keyCapabilities: string[];
  mockData: {
    title: string;
    status: string;
    items: {
      label: string;
      value: string;
      meta?: string;
    }[];
  };
}

export interface CapabilityItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  category: "Revenue" | "Commerce" | "Control" | "Platform";
  summary: string;
  detailedDescription: string;
  deliverables: string[];
  governanceFeatures: string[];
  businessBenefits: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  subtitle: string;
  impact: string;
  promptTechFix: string;
  stat: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientIndustry: string;
  region: string;
  headline: string;
  metricHighlight: string;
  metricLabel: string;
  secondaryMetric: string;
  secondaryLabel: string;
  challenge: string;
  solution: string;
  techStack: string[];
  outcome: string[];
}

export interface AudienceTrack {
  id: string;
  title: string;
  badge: string;
  description: string;
  commonBottlenecks: string[];
  promptTechSolution: string;
  coreTech: string[];
  typicalROI: string;
  statBadge: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  priceINR: number;
  priceUSD: number;
  billingPeriod: string;
  deliveryTimeline: string;
  description: string;
  features: string[];
  idealFor: string;
  ctaText: string;
  ctaLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
