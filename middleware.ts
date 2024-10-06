import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { signToken, verifyToken } from '@/lib/auth/session';

const protectedRoutes = '/dashboard';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('session');
  const isProtectedRoute = pathname.startsWith(protectedRoutes);

  // Lógica de autenticación
  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  let res = NextResponse.next();

  // Lógica de sesión: verificar y actualizar token si existe la cookie de sesión
  if (sessionCookie) {
    try {
      const parsed = await verifyToken(sessionCookie.value);
      const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);

      res.cookies.set({
        name: 'session',
        value: await signToken({
          ...parsed,
          expires: expiresInOneDay.toISOString(),
        }),
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        expires: expiresInOneDay,
      });
    } catch (error) {
      console.error('Error updating session:', error);
      res.cookies.delete('session');
      if (isProtectedRoute) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
      }
    }
  }

  // Lógica de internacionalización (idioma)
  const localeFromCookie = request.cookies.get('locale')?.value;
  let locale = localeFromCookie;

  if (!locale) {
    // Detectar el idioma desde los encabezados del navegador si no hay cookie de idioma
    const localeFromHeaders = request.headers.get('accept-language')?.split(',')[0] || 'es';
    locale = localeFromHeaders;

    // Guardar el idioma en las cookies para futuras solicitudes
    res.cookies.set({
      name: 'locale',
      value: locale,
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 días de duración
    });
  }

  // Devuelve la respuesta final
  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
