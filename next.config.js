/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      { hostname: "*", port: "", pathname: "/**" },

      // {
      //   protocol: "https",
      //   hostname: "images.pexels.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "a0.muscache.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "www.gstatic.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // { hostname: "d22zacdwmp5shy.cloudfront.net", port: "", pathname: "/**" },
      // { hostname: "media-cdn.tripadvisor.com", port: "", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
