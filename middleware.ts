import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing, {
  // Check NEXT_LOCALE cookie first, then Accept-Language header
  localeDetection: true,
});

export const config = {
  // Match all pathnames except for static files, _next, and API routes
  matcher: [
    "/((?!_next|api|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|otf)).*)",
  ],
};
