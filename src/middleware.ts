import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("accessToken")?.value;

  if (isAuthenticated && request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!isAuthenticated && !request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
