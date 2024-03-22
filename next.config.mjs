/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/simulador',
        permanent: true, // Este redirecionamento é permanente; mude para false se temporário
      },
    ]
  },
};

export default nextConfig;
