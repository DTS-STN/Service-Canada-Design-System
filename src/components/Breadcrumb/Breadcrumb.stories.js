import React from "react";
import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

const Template = (args) => <Breadcrumb {...args} />;

export const Primary = Template.bind({});
export const WithItems = Template.bind({});
export const WithItemsWithLongText = Template.bind({});

Primary.parameters = {
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

Primary.args = {
  id: "breadcrumbID",
  items: [{ text: "Canada.ca", link: "/" }],
};

WithItems.parameters = {
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

WithItems.args = {
  id: "breadcrumbID",
  items: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Link3", link: "/" },
  ],
};

WithItemsWithLongText.parameters = {
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

WithItemsWithLongText.args = {
  id: "breadcrumbID",
  items: [
    { text: "Canada.ca", link: "/" },
    { text: "Link1", link: "/" },
    { text: "Link2", link: "/" },
    { text: "Max length of breadcrumb 28", link: "/" },
    { text: "Link3", link: "/" },
  ],
};
