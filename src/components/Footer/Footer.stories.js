import { Footer } from "./Footer";
import logo from "../../../public/wmms-blk.svg";

export default {
  title: "Components/Footer/Footer",
  component: Footer,
};

var frenchArgs = {
  links: [
    {
      link: "https://some-link-1.com",
      linkText: "some-link-1",
    },
    {
      link: "https://some-link-2.com",
      linkText: "some-lin-2",
    },
    {
      link: "https://some-link-3.com",
      linkText: "some-link-3",
    },
  ],

  footerBoxLinks: [
    {
      footerBoxlink: "https://some-link-11.com",
      footerBoxLinkText: "some-link-11",
    },
    {
      footerBoxlink: "https://some-link-77.com",
      footerBoxLinkText: "some-link-77",
    },
    {
      footerBoxlink: "https://some-link-88.com",
      footerBoxLinkText: "some-link-88",
    },
  ],

  footerLogoAltText: "French Symbol of the Government of Canada",
  footerLogoImage: logo,
  reportBtnText: "Report a problem french",
  reportDescription: "Freanch",
};

// const Template = (args) => <Footer {...args} />;
const Template = (args, { globals: { locale } }) => {
  switch (locale) {
    case "fr":
      return <Footer {...frenchArgs} />;
    default:
      return <Footer {...args} />;
  }
};

export const Primary = Template.bind({});
Primary.parameters = {
  controls: { hideNoControlsWarning: true },
  // url to browser figma header
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=24%3A4440",
  },
  a11y: {
    config: {
      rules: [
        {
          //  Override the result of a rule to return "Needs Review" rather
          //  than "Violation" if the rule fails. It will show in the
          //  'Incomplete' tab.
          id: "landmark-unique",
          reviewOnFail: true,
        },
      ],
    },
  },
};
Primary.args = {
  links: [
    {
      link: "https://some-link-1.com",
      linkText: "some-link-1",
    },
    {
      link: "https://some-link-2.com",
      linkText: "some-lin-2",
    },
    {
      link: "https://some-link-3.com",
      linkText: "some-link-3",
    },
    {
      link: "https://some-link-4.com",
      linkText: "some-link-4",
    },
    {
      link: "https://some-link-5.com",
      linkText: "some-link-5",
    },
    {
      link: "https://some-link-6.com",
      linkText: "some-link-6",
    },
    {
      link: "https://some-link-7.com",
      linkText: "some-link-7",
    },
    {
      link: "https://some-link-8.com",
      linkText: "some-link-8",
    },
  ],

  footerBoxLinks: [
    {
      footerBoxlink: "https://some-link-11.com",
      footerBoxLinkText: "some-link-11",
    },
    {
      footerBoxlink: "https://some-link-22.com",
      footerBoxLinkText: "some-lin-22",
    },
    {
      footerBoxlink: "https://some-link-33.com",
      footerBoxLinkText: "some-link-33",
    },
    {
      footerBoxlink: "https://some-link-44.com",
      footerBoxLinkText: "some-link-44",
    },
    {
      footerBoxlink: "https://some-link-55.com",
      footerBoxLinkText: "some-link-55",
    },
    {
      footerBoxlink: "https://some-link-66.com",
      footerBoxLinkText: "some-link-66",
    },
    {
      footerBoxlink: "https://some-link-77.com",
      footerBoxLinkText: "some-link-77",
    },
    {
      footerBoxlink: "https://some-link-88.com",
      footerBoxLinkText: "some-link-88",
    },
  ],

  footerLogoAltText: "Symbol of the Government of Canada",
  footerLogoImage: logo,
  reportBtnText: "Report a problem",
  reportDescription:
    "Experiencing an issue with this product or have you spotted an error?",
};
