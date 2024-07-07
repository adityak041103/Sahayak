/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e4e4e4",
          "300": "#d9d9d9",
          "400": "rgba(228, 228, 228, 0.89)",
          "500": "rgba(217, 217, 217, 0.69)",
        },
        gray: {
          "100": "#fafafa",
          "200": "#140202",
          "300": "#030404",
          "400": "#888",
          "500": "#202830",
          "600": "#8c8c8c",
          "700": "#0e0202",
          "800": "#7a7a7a",
          "900": "rgba(140, 140, 140, 0.69)",
          "1000": "rgba(3, 3, 3, 0.5)",
        },
        black: "#000",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f7f7f7",
          "300": "#f1f1f1",
          "400": "#f0f0f0",
          "500": "#e9e9e9",
          "600": "rgba(233, 233, 233, 0.99)",
        },
        deepskyblue: "#009ed0",
        silver: {
          "100": "#c0c0c0",
          "200": "#bfbfbf",
          "300": "rgba(192, 192, 192, 0.69)",
          "400": "rgba(191, 191, 191, 0.69)",
        },
        darkslategray: {
          "100": "#333",
          "200": "#10352e",
        },
        red: "#ec0202",
        dimgray: "#4d4c4a",
        lightgray: "#ccc",
        darkslateblue: "#0a4589",
      },
      spacing: {},
      fontFamily: {
        "inria-sans": "'Inria Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "41xl": "60px",
        "31xl": "50px",
        "11xl": "30px",
        "3xs": "10px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "21xl": "40px",
      "5xl": "24px",
      base: "16px",
      "9xl": "28px",
      "3xl": "22px",
      "10xl": "29px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      "17xl": "36px",
      "6xl": "25px",
      "4xl": "23px",
      "2xl": "21px",
      "11xl": "30px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
