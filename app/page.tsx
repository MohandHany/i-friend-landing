// This file is kept for compatibility but the middleware handles all routing.
// Middleware redirects / -> /en or /ar based on cookie/Accept-Language.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}