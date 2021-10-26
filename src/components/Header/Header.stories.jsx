import { Header } from "./Header";
// myStories.stories.jsx
import { withDesign } from "storybook-addon-designs";
// header docs
import CustomMDXDocumentation from "./Custom-MDX-Documentation.mdx";
import Documentation from "./Documentation.mdx";

export default {
  title: "Components/Header/Header",
  component: Header,
  controls: {
    hideNoControlsWarning: true,
  },
  decorators: [withDesign],
};

var frenchArgs = {
  placeholder: "Rechercher dans Service Canada",
  language: "French",
  logo: "French Logo Goes Here",
  menu: "French Menu Goes Here",
  // browser: 'https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=24%3A4440',
  // mobile: 'https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=39%3A5037'
};

// const setLocaleValues = (locale) => {
//   console.log(locale)
//   switch (locale) {
//     case 'fr': result = {
//       placeholder: 'Search Canada.ca',
//       language: 'English',
//       logo: 'Logo Goes Here',
//       menu: 'Menu Goes Here',
//       browser: 'https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=24%3A4440',
//       mobile: 'https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=39%3A5037'
//     };
//     default:
//       result = {
//         placeholder: 'Rechercher dans Service Canada',
//         language: 'French',
//         logo: 'French Logo Goes Here',
//         menu: 'French Menu Goes Here',
//         browser: 'https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=60%3A4864',
//         mobile: 'https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=60%3A4915'
//       }
//   }
// };

// const Template = (args, { globals: { locale } }) => {
//   setLocaleValues(locale);
//   return <Header {...args} />;
// };

// const getCaptionForLocale = (args, locale) => {
//   switch (locale) {
//     case 'fr':
//       return <Header  {...args} />;
//     default:
//       return 'Hello!';
//   }
// };

const Template = (args, { globals: { locale } }) => {
  switch (locale) {
    case "fr":
      return <Header {...frenchArgs} />;
    default:
      frenchArgs.page = CustomMDXDocumentation;
      return <Header {...args} />;
  }
};

export const MainHeader = Template.bind({});
MainHeader.storyName = "Header";
MainHeader.parameters = {
  controls: { hideNoControlsWarning: true },
  // url to browser figma header
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=24%3A4440",
  },
  docs: {
    page: CustomMDXDocumentation,
  },
};
MainHeader.args = {
  placeholder: "Search Canada.ca",
  language: "English",
  logo: "Logo Goes Here",
  menu: "Menu Goes Here",
};

export const FrenchHeader = Template.bind({});
FrenchHeader.parameters = {
  controls: { hideNoControlsWarning: true },
  // url to browser figma header
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=24%3A4440",
  },
  docs: {
    page: Documentation,
  },
};
FrenchHeader.args = {
  placeholder: "Rechercher dans Service Canada",
  language: "French",
  logo: "French Logo Goes Here",
  menu: "French Menu Goes Here",
};
