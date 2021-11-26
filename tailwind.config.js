const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: [
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/stories/**/*.{js,ts,jsx,tsx}",
      "./config-plugins/**/*.{js,ts,jsx,tsx}",
    ],
  },
  presets: [require("./tailwind-bootstrap3.js")],
  theme: {
    fontFamily: {
      header: ["Lato", "font-serif"],
      body: ["Noto sans", "font-mono"],
    },
    fontSize: {
      mobileh1: ["34px", "38px"],
      mobileh2: ["32px", "36px"],
      mobileh3: ["24px", "26px"],
      mobileh4: ["22px", "24px"],
      mobileh5: ["20px", "22px"],
      mobileh6: ["19px", "21px"],
      mobilebody: ["20px", "33px"],
      mobilebodybold: ["20px", "33px"],

      browserh1: ["38px", "42px"],
      browserh2: ["36px", "40px"],
      browserh3: ["24px", "26px"],
      browserh4: ["22px", "24px"],
      browserh5: ["20px", "22px"],
      browserh6: ["19px", "21px"],
      browserbody: ["20px", "33px"],
      browserbodybold: ["20px", "33px"],
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    extend: {
      backgroundImage: (theme) => ({
        "banner-img": "url('/public/bg-banner-v2.png')",
        "banner-img-mobile": "url('/public/bg-banner-mobile.png')",
      }),
      colors: {
        "custom-blue": {
          blue: "#1D5B90",
          light: "#1F809A",
          dark: "#26374a",
          link: "#0535d2",
          "experiment-blue": "#004986",
          "projects-link": "#2B4380",
        },
        "error-border-red": "#D3080C",
        "error-background-red": "#F3E9E8",
        "details-button-gray": "#E7E8EA",
        "details-button-active-gray": "#cfd1d5",
        "details-button-hover-gray": "#bbbfc5",
        "details-border-gray": "#e3e3e3",
        "form-input-gray": "#555",
        "form-input-border-gray": "#ccc",
        "gray-light-200": "#f5f5f5",
        "gray-light-100": "#e0e0e0",
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "gray-dark": "#444",
        "gray-dark-100": "#333",
        "gray-experiment": "#575757",
        "gray-breadcrumb": "#474747",
        "text-gray": "#5c5c5c",
        "hr-red-bar": "#AE3B43",
        "canada-ca-link-colour": "#7834BC",
        "circle-color": "#083C6C",
        "canada-footer-font": "#284162",
        "canada-footer-hover-font-blue": "#0535d2",
        "footer-background-color": "#f8f8f8",
        "splash-page-bottom": "#e1e4e7",
        vc: {
          "blue-md": "#3d96c1",
          "blue-lt": "#4FB7DC",
        },
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
        "128px": "128px",
        "187px": "187px",
        "250px": "250px",
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
        "15px": "15px",
        "40px": "40px",
      },
      margin: {
        "5px": "5px",
        "15px": "15px",
        "10px": "10px",
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
        "300px": "300px",
      },

      minHeight: {
        "40px": "40px",
        "200px": "200px",
        "250px": "250px",
      },

      maxHeight: {
        "40px": "40px",
      },

      boxShadow: {
        "experiment-shadow": "0px 2px 8px rgba(0, 0, 0, 0.25)",
      },

      lineHeight: {
        "30px": "30px",
      },
      outline: {
        "black-solid": ["2px solid #000", "1px"],
        "dark-goldenrod": ["2px solid #c78100"],
        "white-solid": ["2px solid #ffffff"],
        "heading-solid": ["4px solid #af3c43"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["visited"],
      margin: ["checked"],
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
  ],
};
