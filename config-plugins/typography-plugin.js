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
      lineHeight: theme("lineHeight.header"),
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

    ".card-title-non-link": {
      fontSize: theme("fontSize.card_nonlink"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
    },
    ".card-body-text": {
      fontSize: theme("fontSize.card_bodytext"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
    },

    ".caption-large": {
      fontSize: theme("fontSize.caption_large"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey85a"),
    },
    ".caption-regular": {
      fontSize: theme("fontSize.caption_regular"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey85a"),
    },
    ".caption-small": {
      fontSize: theme("fontSize.caption_small"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey85a"),
    },
  };

  addUtilities(newUtilities);
});
module.exports = typography;
