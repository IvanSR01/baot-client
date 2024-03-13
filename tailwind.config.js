/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "max-375px": {"max": "375px"},
      "min-375px": {"min": "376px"},
      "max-475px": {"max": "475px"},
      "min-475px": {"min": "475px"},
      "max-680px": {"max": "680px"},
      "min-680px": {"min": "681px"},
      "max-834px": {"max": "834px"},
      "min-834px": {"min": "835px"},
      "max-1060px": {"max": "1060px"},
      "min-1060px": {"min": "1061px"},
      "max-1200px": {"max": "1200px"},
      "min-1200px": {"min": "1201px"},
      "max-1260px": {"max": "1260px"},
      "min-1260px": {"min": "1261px"},
      "max-1330px": {"max": "1330px"},
      "min-1330px": {"min": "1331px"},
    },
    letterSpacing: {
      "1%": '-0.01rem',
      "2%": '-0.02rem',
      "3%": '-0.03rem',
      "4%": '-0.04rem',
    },
    extend: {

    },
  },
  plugins: [],
});