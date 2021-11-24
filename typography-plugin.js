const plugin = require("tailwindcss/plugin");
const typography = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".heading1": {
      fontSize: theme("fontSize.mobileh1"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      borderBottom: "4px solid #af3c43",
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserh1"),
      },
    },
    ".heading2": {
      fontSize: theme("fontSize.mobileh2"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserh2"),
      },
    },
    ".heading3": {
      fontSize: theme("fontSize.mobileh3"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserh3"),
      },
    },
    ".heading4": {
      fontSize: theme("fontSize.mobileh4"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserh4"),
      },
    },
    ".heading5": {
      fontSize: theme("fontSize.mobileh5"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserh5"),
      },
    },
    ".heading6": {
      fontSize: theme("fontSize.mobileh6"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.header"),
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserh6"),
      },
    },
    ".body": {
      fontSize: theme("fontSize.mobilebody"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.body"),
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserbody"),
      },
    },
    ".body-bold": {
      fontSize: theme("fontSize.mobilebodybold"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.body"),
      "@media (min-width: 500px)": {
        fontSize: theme("fontSize.browserbodybold"),
      },
    },
  };

  addUtilities(newUtilities);
});
module.exports = typography;
