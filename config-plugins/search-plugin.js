const plugin = require("tailwindcss/plugin");
const search = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    // default
    ".search-button": {
      borderColor: theme("colors.multi.blue.blue70"),
      borderStyle: "solid",
      borderWidth: "1px",
      backgroundColor: theme("colors.multi.blue.blue70"),
      width: "35px",
      padding: "13px 9px",
    },
  };
  addUtilities(newUtilities);
});
module.exports = search;
