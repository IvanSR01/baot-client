"use client";
import { NextRequest, NextResponse } from "next/server";
import { getTokens } from "./$api/tokens.api";

// import { DASHBOARD_PAGES } from './config/pages-url.config'
// import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;
  const { refreshToken } = getTokens();
  const isAuthPage = url.includes("/auth");

  // if (isAuthPage && refreshToken) {
  // 	return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
  // }

  if (refreshToken && isAuthPage) {
    return NextResponse.redirect(new URL("/"));
  }
  if (isAuthPage && !refreshToken) {
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/i/:path*", "/auth/:path"],
};
