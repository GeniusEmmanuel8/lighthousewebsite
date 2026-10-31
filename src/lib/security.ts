import { timingSafeEqual } from 'crypto';
import type { NextRequest } from 'next/server';

/** Escape text before putting it inside HTML (prevents HTML/script injection in emails). */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Return a trimmed string with control characters removed, or null if the value
 * is not a string, is empty, or is longer than `max` characters.
 * `multiline` keeps line breaks (for message bodies).
 */
export function cleanText(value: unknown, max: number, multiline = false): string | null {
  if (typeof value !== 'string') return null;
  const pattern = multiline
    ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
    : /[\u0000-\u001F\u007F]/g;
  const cleaned = value.replace(pattern, '').trim();
  if (cleaned.length === 0 || cleaned.length > max) return null;
  return cleaned;
}

export function isEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isPhone(value: string): boolean {
  if (!/^[+()\d\s.-]{10,25}$/.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

/** Constant-time string comparison for secrets and tokens. */
export function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

/** Best-effort client identifier (first forwarded IP). */
export function clientKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

const hits = new Map<string, number[]>();

/**
 * Simple in-memory rate limit: at most `limit` requests per `windowMs` per key.
 * Note: memory is per server instance, so on serverless hosting this slows abuse
 * but is not a hard guarantee. Use a shared store (e.g. Redis) for strict limits.
 */
export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return false;
}
