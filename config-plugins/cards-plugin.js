const plugin = require("tailwindcss/plugin");
const cards = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".card-outline": {},
  };
  addUtilities(newUtilities);
});
module.exports = cards;
