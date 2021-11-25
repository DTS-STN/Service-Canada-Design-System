// This is a tailwind preset that contains configurations for Bootstrap 3 configurations.
// For more information on Bootstrap 3 visit this link: https://getbootstrap.com/docs/3.4/css/#grid-media-queries
// For more information on tailwindcss presets visit this link: https://tailwindcss.com/docs/presets
//
// Note: This project does not contain the Bootstrap package so we do not have access to any bootstrap classes or configurations outside what is in this file.

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
        DEFAULT: "15px",
        sm: "24px",
        // => 720px max content
        md: "26px",
        // => 940px max content
        lg: "30px",
        // => 1140px max content
      },
    },
  },
};
