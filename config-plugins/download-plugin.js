const plugin = require("tailwindcss/plugin");
const download = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".download": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      // color: theme("colors.multi.blue.blue60b"),
      backgroundColor: theme("colors.multi.neutrals.grey5"),
      borderColor: theme("colors.multi.neutrals.grey40c"),
      borderWidth: "1px",
      maxWidth: "360px",
      height: "140px",
    },
    ".img-container-download": {
      // color: theme("colors.multi.blue.blue60b"),
      backgroundColor: theme("colors.multi.neutrals.grey30a"),
      borderColor: theme("colors.multi.neutrals.grey30"),
      borderWidth: "1px",
      padding: "6px",
      width: "86px",
      height: "100px",
    },
    ".download-text": {
      color: theme("colors.multi.blue.blue70b"),
      fontSize: theme("fontSize.mobilebody"),
      fontWeight: theme("fontWeight.regular"),
      fontFamily: theme("fontFamily.body"),
      "&:hover": {
        color: theme("colors.multi.blue.blue60g"),
      },
    },
  };

  addUtilities(newUtilities);
});
module.exports = download;
