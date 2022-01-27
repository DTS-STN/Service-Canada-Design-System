import { Header } from "./Header";

import logoFile from "../../assets/sig-blk-en.svg";
import searchIcon from "../../assets/search-icon.svg";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  viewport: {
    viewports: {
      desktop: {
        name: "Desktop",
        styles: {
          width: "1200px",
          height: "800px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "desktop",
  },
};

Default.args = {
  className: "header-logo",
  logo: logoFile,
  altText: "Government of Canada",
  //Developer Notes will be moved to search Component later
  searchIcon: searchIcon,
};
