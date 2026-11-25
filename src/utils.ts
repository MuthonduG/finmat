import type { CSSProperties } from 'react';

/** Build an inline style that sets CSS custom properties, typed safely. */
export function vars(values: Record<string, string | number>): CSSProperties {
  return values as unknown as CSSProperties;
}

export function initials(name: string): string {
  const parts = name.split(' ').filter(Boolean);
  if (parts.length === 0) return '';
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}
