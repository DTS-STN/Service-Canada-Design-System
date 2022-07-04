const plugin = require("tailwindcss/plugin");
const button = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".volume-bar": {
      backgroundColor: theme("colors.multi.neutrals.grey90"),
      "&:focus": {
        backgroundColor: theme("colors.multi.neutrals.grey70"),
        borderColor: theme("colors.multi.blue.blue15"),
        borderWidth: "1px",
      },
      "&:focus-visible": {
        outline: "none",
      },
    },
    ".filter": {
      filter:
        "invert(95%) sepia(99%) saturate(17%) hue-rotate(249deg) brightness(104%) contrast(100%)",
    },
    ".media-player-buttons": {
      "&:active": {
        backgroundColor: theme("colors.multi.neutrals.grey70"),
        filter: "none",
      },
      "&:focus": {
        borderColor: theme("colors.multi.blue.blue15"),
        borderWidth: "1px",
      },
      "&:focus-visible": {
        outline: "none",
      },
    },
    ".playbackButton": {
      "&:active": {
        backgroundColor: theme("colors.multi.neutrals.grey70"),
        color: theme("colors.multi.neutrals.black"),
      },
      "&:focus": {
        borderColor: theme("colors.multi.blue.blue15"),
        borderWidth: "1px",
      },
      "&:focus-visible": {
        outline: "none",
      },
    },
    ".btn-supertask": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.btnsupertask"),
      color: theme("colors.multi.neutrals.white"),
      backgroundColor: theme("colors.specific.green.green50"),
      borderRadius: "4px",
      padding: "13px 22px",
      "&:hover": {
        backgroundColor: theme("colors.specific.green.green70"),
      },
      "&:active": {
        backgroundColor: theme("colors.specific.green.green90"),
      },
      "&:focus": {
        "--tw-ring-color": theme("colors.multi.blue.blue60f"),
        backgroundColor: theme("colors.specific.green.green70"),
      },
    },
    ".btn-primary": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.neutrals.white"),
      backgroundColor: theme("colors.multi.blue.blue70"),
      borderRadius: "4px",
      padding: "6px 14px",
      "&:hover": {
        backgroundColor: theme("colors.multi.blue.blue60g"),
      },
      "&:active": {
        backgroundColor: theme("colors.multi.blue.blue65"),
      },
      "&:focus": {
        "--tw-ring-color": theme("colors.multi.blue.blue60f"),
        backgroundColor: theme("colors.multi.blue.blue60g"),
      },
    },
    ".btn-secondary": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.blue.blue60b"),
      backgroundColor: theme("colors.multi.neutrals.grey30a"),
      borderRadius: "4px",
      padding: "6px 14px",
      "&:hover": {
        backgroundColor: theme("colors.multi.neutrals.grey50a"),
      },
      "&:active": {
        backgroundColor: theme("colors.multi.neutrals.grey60"),
      },
      "&:focus": {
        "--tw-ring-color": theme("colors.multi.blue.blue60f"),
        backgroundColor: theme("colors.multi.neutrals.grey50a"),
      },
    },
    ".btn-danger": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.neutrals.white"),
      backgroundColor: theme("colors.specific.red.red50"),
      borderRadius: "4px",
      padding: "6px 14px",
      "&:hover": {
        backgroundColor: theme("colors.specific.red.red70"),
      },
      "&:active": {
        backgroundColor: theme("colors.specific.red.red90"),
      },
      "&:focus": {
        "--tw-ring-color": theme("colors.multi.blue.blue60f"),
        backgroundColor: theme("colors.specific.red.red90"),
      },
    },
    ".btn-link": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      color: theme("colors.multi.blue.blue60c"),
      borderRadius: "4px",
      padding: "6px 14px",
      "&:hover": {
        color: theme("colors.multi.blue.blue50b"),
        "text-decoration": "underline",
      },
      "&:active": {
        color: theme("colors.multi.blue.blue50b"),
        "text-decoration": "underline",
      },
      "&:focus": {
        "--tw-ring-color": theme("colors.multi.blue.blue60f"),
        color: theme("colors.multi.blue.blue60g"),
      },
      "&:visited": {
        color: theme("colors.specific.purple.purple50"),
        "text-decoration": "underline",
      },
    },
    ".btn-review": {
      fontFamily: theme("fontFamily.header"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.btnother"),
      backgroundColor: theme("colors.multi.neutrals.white"),
      color: theme("colors.multi.blue.blue60c"),
      borderRadius: "4px",
      "text-decoration": "underline",
      "&:hover": {
        color: theme("colors.multi.blue.blue50b"),
      },
      "&:active": {
        color: theme("colors.multi.blue.blue50b"),
      },
      "&:focus": {
        "--tw-ring-color": theme("colors.multi.blue.blue60f"),
        color: theme("colors.multi.blue.blue60g"),
      },
      "&:visited": {
        color: theme("colors.specific.purple.purple50"),
      },
    },
  };
  addUtilities(newUtilities);
});
module.exports = button;
