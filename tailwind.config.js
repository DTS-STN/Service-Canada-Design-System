const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: [
      "./src/assets/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/stories/**/*.{js,ts,jsx,tsx}",
      "./src/assets/**/*.{js,ts,jsx,tsx}",
      "./config-plugins/**/*.{js,ts,jsx,tsx}",
    ],
  },
  presets: [require("./tailwind-bootstrap3.js")],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      fontFamily: {
        header: ["Lato", "font-serif"],
        body: ["Noto sans", "font-mono"],
        display: ["Patua One", "cursive"],
      },
      fontSize: {
        mobiledisplay: ["40px", "40px"],
        mobileh1: ["34px", "37px"],
        mobileh2: ["32px", "35px"],
        mobileh3: ["24px", "26px"],
        mobileh4: ["22px", "24px"],
        mobileh5: ["20px", "22px"],
        mobileh6: ["19px", "21px"],
        mobilebody: ["20px", "33px"],
        mobilebodybold: ["20px", "33px"],

        browserdisplay: ["60px", "60px"],
        browserh1: ["38px", "42px"],
        browserh2: ["36px", "40px"],
        browserh3: ["24px", "26px"],
        browserh4: ["22px", "24px"],
        browserh5: ["20px", "22px"],
        browserh6: ["19px", "21px"],
        browserh7: ["14px", "20px"],
        browserh8: ["16px", "23px"],
        browserh9: ["17px", "26px"],
        browserbody: ["20px", "33px"],
        browserbodybold: ["20px", "33px"],

        btnsupertask: ["22px", "32px"],
        btnother: ["20px", "23px"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      backgroundImage: (theme) => ({
        "banner-img": "url('/public/bg-banner-v2.png')",
        "banner-img-mobile": "url('/public/bg-banner-mobile.png')",
      }),
      colors: {
        multi: {
          neutrals: {
            black: "#000000",
            grey100: "#333333",
            grey90: "#555555",
            grey90a: "#5C5C5C",
            grey85: "#666666",
            grey85a: "#6F6F6F",
            grey70: "#ACACAC",
            grey70a: "#989DA6",
            grey60: "#BBBFC5",
            grey50: "#CCCCCC",
            grey50a: "#CFD1D5",
            grey50b: "#D4D6DA",
            grey40: "#DDDDDD",
            grey40a: "#DCDEE1",
            grey40b: "#E0E0E0",
            grey40c: "#E3E3E3",
            grey40d: "#E5E5E5",
            grey30: "#EEEEEE",
            grey30a: "#EAEBED",
            grey5: "#F5F5F5",
            white: "#FFFFFF",
          },
          blue: {
            blue90: "#091C2D",
            blue70: "#26374A",
            blue70a: "#38414D",
            blue70b: "#284162",
            blue65: "#16446C",
            blue65a: "#083C6C",
            blue60a: "#2E5274",
            blue60b: "#335075",
            blue60c: "#2B4380",
            blue60d: "#295376",
            blue60e: "#31708F",
            blue60f: "#0E62C9",
            blue60g: "#1C578A",
            blue50a: "#2572B4",
            blue50b: "#0535D2",
            blue30: "#7B92B0",
            blue15: "#B0C1D7",
            blue5: "#DBE5F2",
            blue2: "#EBF2FC",
            blue1: "#F2F8FF",
          },
          red: {
            red50a: "#AF3C43",
            red30: "#D47076",
            red15: "#ECABAE",
            red5: "#F9DBDC",
            red1: "#FFF5F5",
          },
          green: {
            green30: "#65B234",
            green15: "#A3D881",
            green0: "#F9FFF5",
          },
        },
        specific: {
          red: {
            red100: "#3B100F",
            red100a: "#060202",
            red90: "#77201F",
            red90a: "#6B1D1C",
            red70: "#942826",
            red50: "#BC3331",
            red50b: "#D3080C",
            red2: "#F3E9E8",
          },
          green: {
            green90: "#102900",
            green90a: "#192F20",
            green70: "#1D4D00",
            green70a: "#305A3E",
            green50: "#318000",
            green50a: "#278400",
            green50b: "#458259",
            green5: "#D8EECA",
          },
          orange: {
            orange50: "#EE7100",
            orange5: "#F9F4D4",
          },
          cyan: {
            cyan50: "#269ABC",
            cyan10: "#D7FAFF",
            cyan5: "#E8F2F4",
          },
          purple: {
            purple50: "#7834BC",
          },
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "color-grid": "repeat(auto-fill, minmax(180px, 1fr))",
      },
      spacing: {
        "30px": "30px",
      },
      width: {
        "40px": "40px",
        "44px": "44px",
        "68px": "68px",
        "80px": "80px",
        "100px": "100px",
        "138px": "138px",
        "160px": "160px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "7.5rem": "7.5rem",
      },
      height: {
        "40px": "40px",
        "44px": "44px",
        "46px": "46px",
        "100px": "100px",
        "104px": "104px",
        "128px": "128px",
        "160px": "160px",
        "187px": "187px",
        "250px": "250px",
        "288px": "288px",
        "320px": "320px",
        "400px": "400px",
        "500px": "500px",
      },
      inset: {
        "-2px": "-2px",
      },
      zIndex: {
        1: "1",
      },
      padding: {
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "8px": "8px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "24px": "24px",
        "28px": "28px",
        "32px": "32px",
        "40px": "40px",
      },
      margin: {
        "4px": "4px",
        "5px": "5px",
        "15px": "15px",
        "10px": "10px",
        "12px": "12px",
        "20px": "20px",
        "4.5rem": "4.5rem",
      },

      maxWidth: {
        "350px": "350px",
        "450px": "450px",
        "600px": "600px",
        "750px": "750px",
        "5rem": "5rem",
      },

      minWidth: {
        "26px": "26px",
        "104px": "104px",
        "290px": "290px",
        "300px": "300px",
      },

      minHeight: {
        "40px": "40px",
        "104px": "104px",
        "200px": "200px",
        "250px": "250px",
        "288px": "288px",
      },

      maxHeight: {
        "40px": "40px",
      },

      boxShadow: {
        "experiment-shadow": "0px 2px 8px rgba(0, 0, 0, 0.25)",
      },

      lineHeight: {
        "30px": "30px",
        "28px": "28px",
        "23px": "23px",
        "26px": "26px",
        "33px": "33px",
        "22px": "22px",
      },
      outline: {
        "black-solid": ["2px solid #000", "1px"],
        "dark-goldenrod": ["2px solid #c78100"],
        "white-solid": ["2px solid #ffffff"],
        "heading-solid": ["1px solid #af3c43"],
      },
    },
  },
  variants: {
    extend: {
      ringOffsetWidth: ["active", "hover", "focus"],
      ringColor: ["active", "hover", "focus"],
      backgroundColor: ["active", "hover", "focus"],
      textColor: ["visited"],
      margin: ["checked"],
      textDecoration: ["active", "hover", "visited"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant, e }) {
      addVariant("before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}::before`;
        });
      });
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("after", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}::after`;
        });
      });
    }),
    require("./config-plugins/typography-plugin"),
    require("./config-plugins/divider-plugin"),
    require("./config-plugins/button-plugin"),
    require("./config-plugins/footer-plugin"),
    require("./config-plugins/errorpage-plugin"),
    require("./config-plugins/message-plugin"),
  ],
};
