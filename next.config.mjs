/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if applicable
        hostname: 'skqkquaqvedillyfyuvn.supabase.co', // Replace with your image host
        port: '', // Leave empty if no specific port
        pathname:
          '/storage/v1/object/public/cabin-images/**', // Adjust path as needed, use ** for wildcard
      },
      // Add more patterns for other hosts if necessary
    ],
  },
};

export default nextConfig;
