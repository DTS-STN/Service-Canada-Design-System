import { Header } from "./Header";
import EN from "../../translations/en.json";

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
  altText: "Government of Canada",
  menuItems: [
    {
      link: "#",
      text: EN.menuItems1,
    },
    {
      link: "#",
      text: EN.menuItems2,
    },
    {
      link: "#",
      text: EN.menuItems3,
    },
  ],

  searchProps: {
    onChange: {},
    onSubmit: {},
  },
  breadCrumbItems: {
    id: "breadcrumbID",
    items: [
      { text: "Canada.ca", link: "/" },
      { text: "Link1", link: "/" },
      { text: "Link2", link: "/" },
      { text: "Max length of breadcrumb 28", link: "/" },
      { text: "Link3", link: "/" },
    ],
  },
};
