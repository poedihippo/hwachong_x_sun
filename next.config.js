/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://albatechnology:1UnlXol101qihGAw@cluster0.nbfxwli.mongodb.net/student?retryWrites=true&w=majority",
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
