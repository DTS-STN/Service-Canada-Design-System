const plugin = require("tailwindcss/plugin");
const typography = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".display": {
      fontSize: theme("fontSize.mobiledisplay"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.display"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserdisplay"),
      },
    },
    ".heading1": {
      fontSize: theme("fontSize.mobileh1"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      borderBottom: theme("outline.heading-solid"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh1"),
      },
    },
    ".heading2": {
      fontSize: theme("fontSize.mobileh2"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh2"),
      },
    },
    ".heading3": {
      fontSize: theme("fontSize.mobileh3"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh3"),
      },
    },
    ".heading4": {
      fontSize: theme("fontSize.mobileh4"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh4"),
      },
    },
    ".heading5": {
      fontSize: theme("fontSize.mobileh5"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh5"),
      },
    },
    ".heading6": {
      fontSize: theme("fontSize.mobileh6"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh6"),
      },
    },
    ".body": {
      fontSize: theme("fontSize.mobilebody"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: $theme("screens.sm"))': {
        fontSize: theme("fontSize.browserbody"),
      },
    },
    ".body-bold": {
      fontSize: theme("fontSize.mobilebodybold"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserbodybold"),
      },
    },
    ".btn-font-super": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.btnsupertask"),
      color: theme("colors.multi.neutrals.white"),
    },
    ".btn-font-secondary": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.blue.blue60b"),
    },
    ".btn-font-other": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.neutrals.white"),
    },
  };

  addUtilities(newUtilities);
});
module.exports = typography;
