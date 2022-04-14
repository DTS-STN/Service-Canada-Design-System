const plugin = require("tailwindcss/plugin");
const pagination = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".pagination_btn_style": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.blue.blue60b"),
      backgroundColor: theme("colors.multi.neutrals.grey30a"),
      borderColor: theme("colors.multi.neutrals.grey40a"),
      borderWidth: "0.5px",
      padding: "8px 16px",
      // width: "44px",
      // height: "50px",
    },
    ".pagination_cur_style": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.neutrals.white"),
      backgroundColor: theme("colors.multi.blue.blue50a"),
      padding: "8px 16px",
      // width: "44px",
      // height: "50px",
    },
    ".pagination_prev_next": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.blue.blue60b"),
      backgroundColor: theme("colors.multi.neutrals.grey30a"),
      borderColor: theme("colors.multi.neutrals.grey40a"),
      borderWidth: "0.5px",
      padding: "8px 16px",
    },
  };

  addUtilities(newUtilities);
});
module.exports = pagination;
