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
    // screens: {
    //   lg: "1056px",
    // },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        "320": "320px",
        "1024": "1024px",
        "1280": "1280px",
        "2-division": "calc(100% / 2 - 1rem)",
        "3-division": "calc(100% / 3 - 1rem)",
        "4-division": "calc(100% / 4 - 1rem)",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-line-clamp")],
  spacing: {
    // "1056": "1056px",
    // md: '16px',
    // lg: '24px',
    // xl: '48px',
    // 8: '8px',
    // 9: '9px',
    // 10: '10px',
    // 12: '12px',
    // 14: '14px',
    // 15: '15px',
    // 16: '16px',
    // 18: '18px',
  },
};
