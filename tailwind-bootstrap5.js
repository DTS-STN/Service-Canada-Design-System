// This is a tailwind preset that contains configurations for Bootstrap 5 configurations
// For more information on Bootstrap 5 breakpoints, containers & grids visit this links: https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints, https://getbootstrap.com/docs/5.0/layout/grid/#grid-options
// For more information on tailwindcss presets visit this link: https://tailwindcss.com/docs/presets
//
// Note: This project does not contain the Bootstrap package so we do not have access to any bootstrap classes or configurations outside what is in this file.

module.exports = {
  theme: {
    // Replaces all the default tailwindcss values
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      // padding replicates the outter gutter as well as max-widths from bootstrap to create max-content width
      padding: {
        DEFAULT: "31px",
        sm: "31px",
        // => 516px max content
        md: "37px",
        // => 696px max content
        lg: "29px",
        // => 936px max content
        xl: "43px",
        // => 1114px max content
        xxl: "53px",
        // => 1294px max content
      },
    },
  },
};
