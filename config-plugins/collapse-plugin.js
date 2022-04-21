const plugin = require("tailwindcss/plugin");
const collapse = plugin(function ({ addUtilities }) {
  const newUtilities = {
    "details[open]": {
      border: "1px solid #ddd",
      borderRadius: "4px",
      paddingBottom: "20px",
    },
    "details[open]>summary ": {
      border: "0",
      borderBottom: "1px solid #ddd",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
      listStyleType: "disclosure-open",
      marginBottom: "0.25em",
    },
    "details>summary": {
      marginLeft: "-22px",
      marginRight: "-22px",
    },
  };

  addUtilities(newUtilities);
});
module.exports = collapse;
