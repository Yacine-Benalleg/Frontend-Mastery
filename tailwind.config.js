/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        wide: { raw: "(min-aspect-ratio: 3/2)" },
        sq: { raw: "(max-aspect-ratio: 3/2)" },
        tall: { raw: "(max-aspect-ratio: 1/1)" },
        xsmb: { max: "360px" },
        smb: { max: "460px" },
        copyright: { max: "540px" },
        mdmb: { max: "650px" },
        mb: { max: "767px" },
        sm: "768px",
        md: "992px",
        xm: "`1080px",
        lg: "1200px",
        xl: "1440px",
      },
      gridColumn: {
        "span-8-center": "3 / span 8",
        "span-4-center": "2 / span 4",
        "span-6-center": "4 / span 6",
      },
      colors: {
        primary: {
          DEFAULT: "#3d17c2",
          dark: "#1F0C69",
          two: "#0017E4",
        },
        secondary: {
          DEFAULT: "#C102D1",
          dark: "#610171",
          two: "#EB00FF",
        },
        moon: "#010110",
        byad: "#fafafa",
        gris: {
          card: "rgb(255, 255, 255, 0.1)",
          DEFAULT: "#c8d3d5",
          light: "rgb(236 252 255)",
          box: "#BAC1CC",
        },
        primaryGradient: "linear-gradient(to right bottom, #3d17c2, #c102d1)",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "2.125rem" }],
        xl: ["1.25rem", { lineHeight: "2.5rem" }],
        title: ["2rem", { lineHeight: "3rem" }],
        mobMammoth: ["2.5rem", { lineHeight: "3.25rem" }],
        miniMammoth: ["2.75rem", { lineHeight: "3.5rem" }],
        mammoth: ["3.125rem", { lineHeight: "4rem" }],
      },
      fontFamily: {
        satoshi: ["satoshi", "ui-sans-serif", "system-ui"],
      },
      width: ({ theme }) => ({
        fill: "-webkit-fill-available",
      }),
    },
  },
  plugins: [],
};
