const plugin = require("tailwindcss/plugin");
const labels = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    // default
    ".label-default": {
      borderColor: theme("colors.multi.neutrals.grey70"),
      backgroundColor: theme("colors.multi.neutrals.grey30"),
    },
    // primary
    ".label-primary": {
      borderColor: theme("colors.multi.blue.blue65a"),
      backgroundColor: theme("colors.specific.cyan.cyan5"),
    },
    // danger
    ".label-danger": {
      borderColor: theme("colors.specific.red.red50b"),
      backgroundColor: theme("colors.specific.red.red2"),
    },
    // warning
    ".label-warning": {
      borderColor: theme("colors.specific.orange.orange50"),
      backgroundColor: theme("colors.specific.orange.orange5"),
    },
    // info
    ".label-info": {
      borderColor: theme("colors.specific.cyan.cyan50"),
      backgroundColor: theme("colors.specific.cyan.cyan10"),
    },
    //success
    ".label-success": {
      borderColor: theme("colors.specific.green.green50a"),
      backgroundColor: theme("colors.specific.green.green5"),
    },
    //label font styles
    ".label-font-style": {
      fontSize: theme("fontSize.label_font"),
      fontWeight: theme("fontWeight.bold"),
      fontFamily: theme("fontFamily.body"),
      color: theme("colors.multi.neutrals.black"),
    },
  };
  addUtilities(newUtilities);
});
module.exports = labels;
