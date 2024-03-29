const plugin = require("tailwindcss/plugin");
const checkboxes = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".checkbox_style": {
      height: "44px",
      width: "44px",
      // borderColor: theme("colors.multi.neutrals.grey85a"),
      borderRadius: "4px",
      borderWidth: "2px",
    },
    ".example64": {
      borderRadius: "4px",
      opacity: "1",
      "&:focus": {
        "--tw-ring-color": theme("colors.multi.blue.blue60f"),
      },
    },
  };

  addUtilities(newUtilities);
});
module.exports = checkboxes;
