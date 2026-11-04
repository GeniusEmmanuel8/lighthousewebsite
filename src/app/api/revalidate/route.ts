import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { safeEqual } from '@/lib/security';

// Required for static export compatibility
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // The token MUST be configured. There is no default value: without
    // REVALIDATE_TOKEN the endpoint refuses every request.
    const expectedToken = process.env.REVALIDATE_TOKEN;
    if (!expectedToken) {
      console.error('Revalidation: REVALIDATE_TOKEN is not configured');
      return NextResponse.json({ message: 'Revalidation is not configured' }, { status: 503 });
    }

    const token = request.headers.get('x-revalidate-token') ?? '';
    if (!safeEqual(token, expectedToken)) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Revalidate the home page
    revalidatePath('/');

    // You can also revalidate other paths if needed
    // revalidatePath('/sermons');
    // revalidatePath('/about');

    return NextResponse.json({
      message: 'Revalidation successful',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ message: 'Revalidation failed' }, { status: 500 });
  }
}

// Simple health check (reveals nothing about configuration)
export async function GET() {
  return NextResponse.json({ message: 'ok' });
}
