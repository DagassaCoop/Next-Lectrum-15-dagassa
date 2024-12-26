// eslint-disable-next-line @typescript-eslint/no-require-imports
const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  i18n,
};
