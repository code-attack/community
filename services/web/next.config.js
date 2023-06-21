/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@package/constants"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.surfit.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
