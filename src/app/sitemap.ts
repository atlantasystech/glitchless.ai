import { MetadataRoute } from "next";
import { CAPABILITIES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://glitchless.ai";
  const currentDate = "2026-10-17T00:00:00.000Z";

  // Core static pages
  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/process",
    "/case-studies",
    "/pricing",
    "/about",
    "/contact",
    "/book-a-call",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));

  // Dynamic Capability pages
  const capabilityRoutes = CAPABILITIES.map((cap) => ({
    url: `${baseUrl}/services/${cap.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...capabilityRoutes];
}
