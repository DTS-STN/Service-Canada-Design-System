const plugin = require("tailwindcss/plugin");
const footer = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".landscape": {
      backgroundColor: theme("colors.multi.neutrals.blue.blue70"),
      "&:hover": {},
      "&:active": {},
      "&:focus": {},
    },
    ".bi-background": {
      backgroundColor: theme("colors.multi.neutrals.grey.grey5"),
    },
  };
  addUtilities(newUtilities);
});
module.exports = footer;
