/**
 * Utility functions used throughout the entire website.
 *
 * cn() — combines Tailwind CSS class names safely.
 * Example: cn("text-navy", isActive && "font-bold", "hover:text-sage")
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names intelligently.
 * Prevents conflicting classes (e.g., "text-sm text-lg" → keeps only "text-lg").
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
