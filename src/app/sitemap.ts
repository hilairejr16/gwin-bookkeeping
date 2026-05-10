/**
 * Gwin Bookkeeping LLC — XML Sitemap
 *
 * This file automatically generates sitemap.xml which tells Google
 * about all of your pages and when they were last updated.
 * The sitemap is available at: https://gwinhbookkeeping.com/sitemap.xml
 *
 * Google uses this to crawl and index your site faster.
 */

import type { MetadataRoute } from "next";

const BASE_URL = "https://gwinhbookkeeping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,        // Home page is most important
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
