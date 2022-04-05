const plugin = require("tailwindcss/plugin");
const accordion = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    // default
    ".accordion-header": {
      fontSize: theme("fontSize.mobileh2"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
    },
    ".accordion-num": {
      fontSize: theme("fontSize.mobileh2"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.white"),
    },
  };
  addUtilities(newUtilities);
});
module.exports = accordion;
