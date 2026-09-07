import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rainboworathi.edu.in";
  const routes = [
    "",
    "/about",
    "/academics",
    "/campus",
    "/student-life",
    "/admissions",
    "/parents",
    "/events",
    "/gallery",
    "/contact",
    "/privacy",
    "/terms",
    "/disclosure",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
