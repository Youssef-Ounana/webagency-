import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Ignore les fichiers statiques, images, API et assets Next internes
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
