import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the secret token from the request headers
    const token = request.headers.get('x-revalidate-token');
    
    // Verify the token (you can set this in your environment variables)
    const expectedToken = process.env.REVALIDATE_TOKEN || 'your-secret-token';
    
    if (token !== expectedToken) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Revalidate the home page
    revalidatePath('/');
    
    // You can also revalidate other paths if needed
    // revalidatePath('/sermons');
    // revalidatePath('/about');
    
    return NextResponse.json({ 
      message: 'Revalidation successful',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Revalidation failed' }, 
      { status: 500 }
    );
  }
}

// Also allow GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Revalidation endpoint is working',
    usage: 'Send a POST request with x-revalidate-token header to trigger revalidation'
  });
} 