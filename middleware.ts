import createMiddleware from 'next-intl/middleware';
import { NextResponse, NextRequest } from 'next/server';
import { locales } from './config';

export default function middleware(request: NextRequest) {
  // Get the NEXT_LOCALE cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE');

  // If no NEXT_LOCALE cookie is set, default it to Russian ('ru')
  if (!localeCookie) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', 'ru', { path: '/' });
    return response;
  }

  // Call the next-intl middleware
  return createMiddleware({
    locales,
    defaultLocale: 'ru',
  })(request);
}

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
};
