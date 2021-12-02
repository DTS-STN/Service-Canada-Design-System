const plugin = require("tailwindcss/plugin");
const border = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".horizontal-regular": {
      borderColor: theme("colors.multi.neutrals.grey60"),
      borderStyle: "solid",
      borderWidth: "1px",
      height: "0",
    },
    ".horizontal-prominent": {
      borderColor: theme("colors.multi.neutrals.grey85"),
      borderStyle: "solid",
      borderWidth: "1px",
      height: "0",
    },
    ".horizontal-muted": {
      borderColor: theme("colors.multi.neutrals.grey40"),
      borderStyle: "solid",
      borderWidth: "1px",
      height: "0",
    },
    ".vertical-regular": {
      borderColor: theme("colors.multi.neutrals.grey60"),
      borderStyle: "solid",
      borderWidth: "1px",
      width: "0",
    },
    ".vertical-prominent": {
      borderColor: theme("colors.multi.neutrals.grey85"),
      borderStyle: "solid",
      borderWidth: "1px",
      width: "0",
    },
    ".vertical-muted": {
      borderColor: theme("colors.multi.neutrals.grey40"),
      borderStyle: "solid",
      borderWidth: "1px",
      width: "0",
      // transform: "rotate(180deg)"
    },
  };

  addUtilities(newUtilities);
});
module.exports = border;
