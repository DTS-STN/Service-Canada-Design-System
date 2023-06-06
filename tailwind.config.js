const plugin = require("tailwindcss/plugin");

module.exports = {
  prefix: "ds-",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./config-plugins/**/*.{js,ts,jsx,tsx}",
  ],
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
      1.5: "1.5px",
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
        datepicker: ["15px", "24px"],

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

        card_nonlink: ["22px", "28px"],
        card_bodytext: ["20px", "26px"],

        caption_large: ["18px", "22px"],
        caption_regular: ["16px", "20px"],
        caption_small: ["14px", "18px"],

        label_font: ["15px", "21px"],
        header_menu_text: ["16px", "20px"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      backgroundImage: (theme) => ({
        "banner-img": "url('/public/bg-banner-v2.png')",
        "banner-img-mobile": "url('/public/bg-banner-mobile.png')",
      }),
      colors: {
        current: "currentColor",
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
        "22px": "22px",
        "30px": "30px",
        "42px": "42px",
        "38px": "38px",
        "18px": "18px",
      },
      width: {
        "16px": "16px",
        "22px": "22px",
        "23px": "23px",
        "25px": "25px",
        "33px": "33px",
        "40px": "40px",
        "43px": "43px",
        "44px": "44px",
        "46px": "46px",
        "48px": "48px",
        "50px": "50px",
        "60px": "60px",
        "68px": "68px",
        "70px": "70px",
        "80px": "80px",
        "98px": "98px",
        "100px": "100px",
        "105px": "105px",
        "138px": "138px",
        "160px": "160px",
        "165px": "165px",
        "168px": "168px",
        "206px": "206px",
        "221px": "221px",
        "276px": "276px",
        "284px": "284px",
        "300px": "300px",
        "360px": "360px",
        "400px": "400px",
        "500px": "500px",
        "7.5rem": "7.5rem",
        "332px": "332px",
      },
      height: {
        "10px": "10px",
        "19px": "19px",
        "20px": "20px",
        "22px": "22px",
        "23px": "23px",
        "25px": "25px",
        "29px": "29px",
        "30px": "30px",
        "40px": "40px",
        "43px": "43px",
        "44px": "44px",
        "46px": "46px",
        "48px": "48px",
        "50px": "50px",
        "76px": "76px",
        "86px": "86px",
        "100px": "100px",
        "104px": "104px",
        "128px": "128px",
        "140px": "140px",
        "160px": "160px",
        "187px": "187px",
        "200px": "200px",
        "250px": "250px",
        "288px": "288px",
        "320px": "320px",
        "360px": "360px",
        "400px": "400px",
        "500px": "500px",
      },
      inset: {
        "-2px": "-2px",
        "60px": "60px",
      },
      zIndex: {},
      padding: {
        "0px": "0px",
        "3px": "3px",
        "1px": "1px",
        "2px": "2px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "28px": "28px",
        "30px": "30px",
        "32px": "32px",
        "38px": "38px",
        "40px": "40px",
        "44px": "44px",
        "60px": "60px",
        "77px": "77px",
        "97px": "97px",
        "137px": "137px",
        "147px": "147px",
        "168px": "168px",
        "52.25%": "52.25%",
        "56.25%": "56.25%",
      },
      margin: {
        "4px": "4px",
        "5px": "5px",
        "8px": "8px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "20px": "20px",
        "22px": "22px",
        "24px": "24px",
        "34px": "34px",
        "71px": "71px",
        "4.5rem": "4.5rem",
      },

      maxWidth: {
        "165px": "165px",
        "168px": "168px",
        "206px": "206px",
        "264px": "264px",
        "350px": "350px",
        "360px": "360px",
        "450px": "450px",
        "600px": "600px",
        "750px": "750px",
        "5rem": "5rem",
        "250px": "250px",
        "276px": "276px",
      },

      minWidth: {
        "26px": "26px",
        "104px": "104px",
        "290px": "290px",
        "300px": "300px",
        "43px": "43px",
      },

      minHeight: {
        "40px": "40px",
        "76px": "76px",
        "104px": "104px",
        "200px": "200px",
        "250px": "250px",
        "288px": "288px",
        "44px": "44px",
      },

      maxHeight: {
        "19px": "19px",
        "25px": "25px",
        "34px": "34px",
        "40px": "40px",
        "200px": "200px",
      },

      boxShadow: {
        "experiment-shadow": "0px 2px 8px rgba(0, 0, 0, 0.25)",
        "text-input": "0px 0px 6px rgba(14, 98, 201, 0.6)",
      },

      lineHeight: {
        "48px": "48px",
        "38px": "38px",
        "30px": "30px",
        "28px": "28px",
        "23px": "23px",
        "26px": "26px",
        "33px": "33px",
        "22px": "22px",
        "20px": "20px",
        "24px": "24px",
        display: "60px",
        displaym: "60px",
        header: "1.5em",
        heading1: "42px",
        heading1m: "38px",
        heading2: "40px",
        heading2m: "36px",
        heading3: "26px",
        heading3m: "26px",
        heading4: "24px",
        heading4m: "24px",
        heading5: "22px",
        heading5m: "22px",
        heading6: "21px",
        heading6m: "21px",
        card_nonlink: "28px",
        card_bodytext: "26px",
        body: "33px",
        bodybold: "33px",
        caption_large: "22px",
        caption_regular: "20px",
        caption_small: "18px",
      },
      outline: {
        "black-solid": ["2px solid #000", "1px"],
        "dark-goldenrod": ["2px solid #c78100"],
        "white-solid": ["2px solid #ffffff"],
        "heading-solid": ["4px solid #af3c43"],
      },
      textUnderlineOffset: {
        3.1: "3.1px",
      },
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
    require("./config-plugins/cards-plugin"),
    require("./config-plugins/labels-plugin"),
    require("./config-plugins/checkboxes-plugin"),
    require("./config-plugins/search-plugin"),
    require("./config-plugins/accordion-plugin"),
    require("./config-plugins/pagination-plugin"),
    require("./config-plugins/download-plugin"),
    require("./config-plugins/datepicker-plugin"),
  ],
};
