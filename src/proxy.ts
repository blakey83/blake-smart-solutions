import { NextResponse, type NextRequest } from "next/server";
import { SITE_URL } from "@/lib/seoConfig";

const CANONICAL_URL = new URL(SITE_URL);
const CANONICAL_HOSTS = new Set([
  CANONICAL_URL.hostname,
  CANONICAL_URL.hostname.replace(/^www\./, ""),
]);

export function proxy(request: NextRequest) {
  const requestUrl = request.nextUrl;
  const isProductionHost = CANONICAL_HOSTS.has(requestUrl.hostname);

  if (!isProductionHost) {
    return NextResponse.next();
  }

  const forwardedProto = request.headers.get("x-forwarded-proto");
  const needsHttps = forwardedProto === "http" || requestUrl.protocol === "http:";
  const needsCanonicalHost = requestUrl.hostname !== CANONICAL_URL.hostname;

  if (!needsHttps && !needsCanonicalHost) {
    return NextResponse.next();
  }

  const redirectUrl = requestUrl.clone();
  redirectUrl.protocol = CANONICAL_URL.protocol;
  redirectUrl.hostname = CANONICAL_URL.hostname;
  redirectUrl.port = "";

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
