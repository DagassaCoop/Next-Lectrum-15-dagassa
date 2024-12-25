/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk", "es"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};
