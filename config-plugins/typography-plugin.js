/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
const typography = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".display": {
      fontSize: theme("fontSize.mobiledisplay"),
      lineHeight: theme("lineHeight.displaym"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.display"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserdisplay"),
        lineHeight: theme("lineHeight.display"),
      },
    },
    ".heading1": {
      fontSize: theme("fontSize.mobileh1"),
      lineHeight: theme("lineHeight.heading1m"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      paddingBottom: theme("paddingBottom.8px"),
      color: theme("colors.multi.neutrals.grey100"),
      borderBottom: theme("outline.heading-solid"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh1"),
        lineHeight: theme("lineHeight.heading1"),
        paddingBottom: theme("paddingBottom.8px"),
      },
    },
    ".heading2": {
      fontSize: theme("fontSize.mobileh2"),
      lineHeight: theme("lineHeight.heading2m"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh2"),
        lineHeight: theme("lineHeight.heading2"),
      },
    },
    ".heading3": {
      fontSize: theme("fontSize.mobileh3"),
      lineHeight: theme("lineHeight.heading3m"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh3"),
        lineHeight: theme("lineHeight.heading3"),
      },
    },
    ".heading4": {
      fontSize: theme("fontSize.mobileh4"),
      lineHeight: theme("lineHeight.heading4m"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh4"),
        lineHeight: theme("lineHeight.heading4"),
      },
    },
    ".heading5": {
      fontSize: theme("fontSize.mobileh5"),
      lineHeight: theme("lineHeight.heading5m"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh5"),
        lineHeight: theme("lineHeight.heading5"),
      },
    },
    ".heading6": {
      fontSize: theme("fontSize.mobileh6"),
      lineHeight: theme("lineHeight.heading6m"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh6"),
        lineHeight: theme("lineHeight.heading6"),
      },
    },
    ".body": {
      fontSize: theme("fontSize.mobilebody"),
      lineHeight: theme("lineHeight.body"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: $theme("screens.sm"))': {
        fontSize: theme("fontSize.browserbody"),
      },
    },
    ".body-bold": {
      fontSize: theme("fontSize.mobilebodybold"),
      lineHeight: theme("lineHeight.bodybold"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserbodybold"),
      },
    },

    ".card-title-non-link": {
      fontSize: theme("fontSize.card_nonlink"),
      lineHeight: theme("lineHeight.card_nonlink"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.grey100"),
    },
    ".card-body-text": {
      fontSize: theme("fontSize.card_bodytext"),
      lineHeight: theme("lineHeight.card_bodytext"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey90"),
    },

    ".caption-large": {
      fontSize: theme("fontSize.caption_large"),
      lineHeight: theme("lineHeight.caption_large"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey85a"),
    },
    ".caption-regular": {
      fontSize: theme("fontSize.caption_regular"),
      lineHeight: theme("lineHeight.caption_regular"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey85a"),
    },
    ".caption-small": {
      fontSize: theme("fontSize.caption_small"),
      lineHeight: theme("lineHeight.caption_small"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey85a"),
    },
    ".caption-heading1": {
      fontSize: theme("fontSize.caption_heading1"),
      lineHeight: theme("lineHeight.caption_heading1"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey85a"),
    },

    ".form-date": {
      fontSize: theme("fontSize.mobileh5"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
    },

    ".date-text": {
      fontSize: theme("fontSize.mobileh5"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
    },

    ".header-font-custom": {
      fontSize: theme("fontSize.mobileh6"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      '@media (min-width: theme("screens.sm"))': {
        fontSize: theme("fontSize.browserh3"),
      },
    },
  };

  addUtilities(newUtilities);
});
module.exports = typography;
