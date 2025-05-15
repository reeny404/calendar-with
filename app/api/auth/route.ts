import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { code } = await request.json();

  return NextResponse.json({ message: 'Hello, world!', code });
}
