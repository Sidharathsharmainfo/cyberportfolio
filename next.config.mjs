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

              // Next.js
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",

              // Styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

              // Fonts
              "font-src 'self' data: https://fonts.gstatic.com",

              // Images
              "img-src 'self' data: blob: https:",

              // APIs + EmailJS + Next.js dev websocket
              "connect-src 'self' https://vitals.vercel-analytics.com https://api.ipify.org https://api.emailjs.com ws: wss:",

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