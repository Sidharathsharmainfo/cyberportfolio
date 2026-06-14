/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self';",
              // Next.js framework ko chalne ke liye dev environment me 'unsafe-inline' lagana padta hai agar hum middleware implementation nahi kar rahe hain
              "script-src 'self' 'unsafe-eval' https://va.vercel-scripts.com;", 
              // Styles aur Fonts ko fully cross-origin access de diya taaki design aur icons na tootey
              "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com;", 
              "img-src 'self' data: blob: https://*;", 
              "font-src 'self' data: https://cdn.jsdelivr.net https://fonts.gstatic.com;", 
              "connect-src 'self' https://vitals.vercel-analytics.com https://api.ipify.org;", 
              "object-src 'none';",
              "frame-ancestors 'none';",
            ].join(' '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      },
    ];
  },
};

export default nextConfig;