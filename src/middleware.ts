'use client'
import { NextRequest, NextResponse } from 'next/server'

// import { DASHBOARD_PAGES } from './config/pages-url.config'
// import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	const refreshToken = cookies.get('refreshToken')
	const isAuthPage = url.includes('/auth')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL('/', url))
	}

	if (isAuthPage && !refreshToken) {
		return NextResponse.next()
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/:path*', '/auth/:path'],
}
