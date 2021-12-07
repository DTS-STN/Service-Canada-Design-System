const plugin = require("tailwindcss/plugin");
const button = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".btn-supertask": {
      backgroundColor: theme("colors.specific.green.green50"),
      borderRadius: "4px",
      padding: "13px 22px",
      "&:hover": {
        backgroundColor: theme("colors.specific.green.green70"),
      },
      "&:active": {
        backgroundColor: theme("colors.specific.green.green90"),
      },
      // '&:focus': {
      //   "--tw-ring-color": theme("colors.multi.blue.blue60f"),
      //   "--tw-ring-offset": "2px",
      //   "--tw-ring-offset-width": "2px",
      //   backgroundColor: theme("colors.specific.green.green70")
      // },
    },
    ".btn-primary": {
      backgroundColor: theme("colors.multi.blue.blue70"),
      borderRadius: "4px",
      padding: "6px 14px",
      "&:hover": {
        backgroundColor: theme("colors.multi.blue.blue60g"),
      },
      "&:active": {
        backgroundColor: theme("colors.multi.blue.blue65"),
      },
      // '&:focus': {
      //   "--tw-ring-color": theme("colors.multi.blue.blue60f"),
      //   "--tw-ring-offset": "2px",
      //   "--tw-ring-offset-width": "2px",
      //   backgroundColor: theme("colors.multi.blue.blue60g")
      // },
    },
    ".btn-secondary": {
      backgroundColor: theme("colors.multi.neutrals.grey30a"),
      borderRadius: "4px",
      padding: "6px 14px",
      "&:hover": {
        backgroundColor: theme("colors.multi.neutrals.grey50a"),
      },
      "&:active": {
        backgroundColor: theme("colors.multi.neutrals.grey60"),
      },
      // '&:focus': {
      //   "--tw-ring-color": theme("colors.multi.blue.blue60f"),
      //   "--tw-ring-offset": "2px",
      //   "--tw-ring-offset-width": "2px",
      //   backgroundColor: theme("colors.multi.neutrals.grey50a")
      // },
    },
    ".btn-danger": {
      backgroundColor: theme("colors.specific.red.red50"),
      borderRadius: "4px",
      padding: "6px 14px",
      "&:hover": {
        backgroundColor: theme("colors.specific.red.red70"),
      },
      "&:active": {
        backgroundColor: theme("colors.specific.red.red90"),
      },
      // '&:focus': {
      //   "--tw-ring-color": theme("colors.multi.blue.blue60f"),
      //   "--tw-ring-offset": "2px",
      //   "--tw-ring-offset-width": "2px",
      //   backgroundColor: theme("colors.specific.red.red90")
      // },
    },
    ".btn-link": {
      // '&:hover': {
      // },
      // '&:active': {
      // },
      // '&:focus': {
      // },
    },
  };

  addUtilities(newUtilities);
});
module.exports = button;
