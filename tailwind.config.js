/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
// import defaultTheme from '"tailwindcss/defaultTheme"';
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./public/**/*.html", "./src/**/*.vue"], // 사용하지 않는 class들을 날려버린다.
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {},
  plugins: []
};
