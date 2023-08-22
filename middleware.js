import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
	// Token will exist if user logged in
	const token = await getToken({ req, secret: process.env.JWT_SECRET });

	const { pathname } = req.nextUrl;
	// console.log(pathname);

	// Allow the request if the following is true...
	if (pathname.includes("/api/auth") || token) {
		return NextResponse.next();
	}

	// Protected Routes
	if (!token && pathname !== "/login") {
		const url = req.nextUrl.clone();
		url.pathname = "/login";
		return NextResponse.redirect(url);
	}
}
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
