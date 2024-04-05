import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  if (url.pathname.startsWith("/secure")) {
    const shellToken = req.cookies.get("shell_token")?.value;
    if (!shellToken) {
      url.pathname = "/secure";
      return NextResponse.redirect(url);
    }
    try {
      const verified = (
        await jwtVerify(
          shellToken,
          new TextEncoder().encode(process.env.SHELL_SECRET)
        )
      ).payload as { userId: string };
      if (verified.userId) {
        return NextResponse.next();
      } else {
        url.pathname = "/secure"
        return NextResponse.redirect(url);
      }
    } catch (error) {
      url.pathname = "/secure"
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth-callback", "/secure/shell"],
};

export default authMiddleware;
