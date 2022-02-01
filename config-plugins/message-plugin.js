const plugin = require("tailwindcss/plugin");
const message = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".success": {
      borderColor: theme("colors.specific.green.green50a"),
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "3px",
    },
    ".danger": {
      borderColor: theme("colors.specific.red.red50b"),
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "3px",
    },
    ".warning": {
      borderColor: theme("colors.specific.orange.orange50"),
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "3px",
    },
    ".info": {
      borderColor: theme("colors.specific.cyan.cyan50"),
      borderRadius: "4px",
      borderStyle: "solid",
      borderWidth: "3px",
    },

    ".success_color": {
      borderColor: theme("colors.specific.green.green50a"),
    },
    ".danger_color": {
      borderColor: theme("colors.specific.red.red50b"),
    },
    ".warning_color": {
      borderColor: theme("colors.specific.orange.orange50"),
    },
    ".info_color": {
      borderColor: theme("colors.specific.cyan.cyan50"),
    },
  };
  addUtilities(newUtilities);
});
module.exports = message;
