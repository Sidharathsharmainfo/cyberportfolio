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
              // 1. STRICTOR SCRIPT: 'unsafe-inline' aur 'unsafe-eval' ko hata diya taaki Mozilla pass ho jaye
              "script-src 'self' https://va.vercel-scripts.com;", 
              // 2. FONT FIX: Google Fonts ke CSS link ko allow kiya
              "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com;", 
              "img-src 'self' data: blob:;",
              // 3. FONT FIX: Google Fonts ke actual font files (.woff2) ko allow kiya
              "font-src 'self' data: https://cdn.jsdelivr.net https://fonts.gstatic.com;", 
              "connect-src 'self' https://vitals.vercel-analytics.com https://api.ipify.org;", 
              "object-src 'none';", // Strictness policy for assets
              "frame-ancestors 'none';", 
              "base-uri 'self';",
              "form-action 'self';"
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