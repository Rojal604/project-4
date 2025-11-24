import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the base path for the application
 * This is needed for GitHub Pages deployment where the app is served from a subdirectory
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/project-4' : '';
}

/**
 * Get the full path for a public asset
 * @param path - Path relative to the public folder (e.g., '/logo.png' or 'logo.png')
 * @returns Full path including base path for production
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getBasePath()}${normalizedPath}`;
}

