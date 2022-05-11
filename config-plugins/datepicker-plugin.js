const plugin = require("tailwindcss/plugin");
const datepicker = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    // default
    ".date-style": {
      borderColor: theme("colors.multi.neutrals.grey50"),
      borderWidth: "1.5px",
      borderRadius: "4px",
      borderStyle: "solid",
      paddingLeft: "4px",
      paddingRight: "4px",
      paddingTop: "2px",
      paddingBottom: "2px",
    },
    ".date-font": {
      fontSize: theme("fontSize.datepicker"),
      fontWeight: theme("fontWeight.medium"),
      fontFamily: theme("fontFamily.header"),
      color: theme("colors.multi.neutrals.black"),
    },
  };
  addUtilities(newUtilities);
});
module.exports = datepicker;
