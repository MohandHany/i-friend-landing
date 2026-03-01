// This root layout is intentionally minimal.
// The [locale] layout handles all rendering.
// The middleware redirects / -> /en or /ar automatically.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
