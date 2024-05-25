/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "blush-growing-quokka-446.mypinata.cloud",
      },
    ],
  },
};

export default nextConfig;
