// This is a tailwind preset that contains configurations for Bootstrap 3 breakpoints and max-container widths
// For more information on Bootstrap 3 visit this link: https://getbootstrap.com/docs/3.4/css/#grid-media-queries
// For more information on tailwindcss presets visit this link: https://tailwindcss.com/docs/presets

module.exports = {
  theme: {
    // Replaces all the default tailwindcss values
    screens: {
      sm: "768px",
      // => @media (min-width: 768px) { ... }
      md: "992px",
      // => @media (min-width: 992px) { ... }
      lg: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    container: {
      center: true,
      // padding replicates the outter gutter as well as max-widths from bootstrap to create max-content width
      padding: {
        sm: "15px",
        // => 720px max content
        md: "15px",
        // => 940px max content
        lg: "30px",
        // => 1140px max content
      },
    },
  },
};
