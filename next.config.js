/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old/:id*",
        destination: "/new/:id*",
        permanent: false,
      },
    ];
  },
};
