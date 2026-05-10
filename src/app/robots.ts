/**
 * Gwin Bookkeeping LLC — robots.txt Generator
 *
 * This tells search engine crawlers (Googlebot, Bingbot, etc.)
 * which pages they are and aren't allowed to index.
 * Available at: https://gwinhbookkeeping.com/robots.txt
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",           // Applies to all search engine bots
        allow: "/",               // Allow indexing of all public pages
        disallow: [
          "/api/",                // Block API routes from being indexed
          "/_next/",              // Block Next.js internal files
        ],
      },
    ],
    sitemap: "https://gwinhbookkeeping.com/sitemap.xml",
    host: "https://gwinhbookkeeping.com",
  };
}
