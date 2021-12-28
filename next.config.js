/** @type {import('next').NextConfig} */

const API_KEY = "def604eb5a3e1c5dc74b8390a4fd10a3";

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
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};
