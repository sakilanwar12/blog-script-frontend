import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/jwt'
import { envVars } from './config/env'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('access_token')?.value
    
    // Allow public pages (non-admin routes)
    if (!pathname.startsWith('/admin')) {
        return NextResponse.next();
    }
    
    const isLoginPage = pathname === '/admin-login';
    
    // Check authentication
    let isAuthenticated = false;
    if (token) {
        try {
            const decodedToken = verifyToken(token, envVars.JWT_ACCESS_TOKEN);
            isAuthenticated = decodedToken && ['admin', 'superadmin'].includes(decodedToken.role);
        } catch (error) {
            console.error("MIDDLEWARE Error", error);
            isAuthenticated = false;
        }
    }
    
    // Redirect authenticated users away from login page to dashboard
    if (isLoginPage && isAuthenticated) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }
    
    // Allow unauthenticated users to access login page
    if (isLoginPage) {
        return NextResponse.next();
    }
    
    // Protect all other admin routes - redirect to login if not authenticated
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/admin-login', request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/admin-login'],
}
