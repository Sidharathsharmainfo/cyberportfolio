/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",

              // Next.js dev support
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",

              // CSS + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

              // Font files
              "font-src 'self' data: https://fonts.gstatic.com",

              // Images
              "img-src 'self' data: blob: https:",

              // API/WebSocket connections
              "connect-src 'self' https://vitals.vercel-analytics.com https://api.ipify.org ws: wss:",

              "object-src 'none'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;