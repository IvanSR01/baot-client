/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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