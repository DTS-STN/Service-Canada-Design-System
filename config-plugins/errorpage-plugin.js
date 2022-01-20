const plugin = require("tailwindcss/plugin");
const errorpage = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".error-type-text": {
      fontSize: "14px",
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
    },
    ".error-next-text": {
      fontSize: theme("fontSize.mobilebodybold"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.grey100"),
      '@media (min-width: theme("screens.sm"))': {
        color: theme("colors.multi.neutrals.black"),
      },
    },
  };
  addUtilities(newUtilities);
});
module.exports = errorpage;
