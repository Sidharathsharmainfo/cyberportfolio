/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Saare application paths par ye headers apply honge
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;", // Vercel Analytics allowed
              "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;", // Bootstrap CDN safety
              "img-src 'self' data: blob:;",
              "font-src 'self' data: https://cdn.jsdelivr.net;",
              "connect-src 'self' https://vitals.vercel-analytics.com https://api.ipify.org;", // Analytics and IP API mapping
              "frame-ancestors 'none';", // X-Frame-Options ka modern replacement (Clickjacking protection)
            ].join(' '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Protection against Clickjacking on older browsers
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // MIME sniffing exploit protection
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Privacy validation for outgoing links
          }
        ],
      },
    ];
  },
};

export default nextConfig;