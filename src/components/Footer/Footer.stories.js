import React from "react";
import { Footer } from "./Footer";
import { ActionButton } from "../ActionButton/ActionButton";
import logo from "../../assets/wmms-blk.svg";

export default {
  title: "In Development/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Optional = Template.bind({});
Optional.args = {
  landscapeLinks: [
    {
      landscapeLink: "https://some-link-11.com",
      landscapeLinkText: "some-link-9",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-8",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-7",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-6",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-5",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-1",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-2",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-3",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-4",
    },
  ],
  landscapeBgImg:
    "https://www.canada.ca/etc/designs/canada/wet-boew/assets/landscape.png",
  brandLinks: [
    {
      brandLink: "https://some-link-11.com",
      brandLinkText: "some-link-11",
    },
    {
      brandLink: "https://some-link-11.com",
      brandLinkText: "some-link-22",
    },
  ],
  logoUrl: logo,
  logoAltText: "Symbol of the Government of Canada",
  // Action button doesn't work correctly with icons, need to fix action button code
  topOfPageBtn: <ActionButton tertiary id="top-btn" text="Top of Page" />,
  topOfPageLink: "",
  // optional fields
  isOptionalReport: true,

  /**
   * Need to make changes to, for now will use an action button as a placeholder
   */
  reportAProblemBtn: (
    <ActionButton
      disabled
      id="report"
      text="Report a problem or mistake on this page"
      className="xxs:w-full"
    />
  ),
  /* Need to build the ShareThisPage Component, for now will use an action button as a placeholder */
  isOptionalShare: true,
  shareThisPageBtn: (
    <ActionButton
      disabled
      id="share"
      text="Share this Page"
      className="xxs:w-full"
    />
  ),
  isOptionalCustom: false,
  customBtn: (
    <ActionButton
      disabled
      id="custom_btn"
      text="Create Your Own Button"
      className="xxs:w-full"
    />
  ),
  // Accessibility Headings
  accessibleSectionHeader1: "About Government",
  accessibleSectionHeader2: "About this site",
};

export const Required = Template.bind({});
Required.args = {
  landscapeLinks: [
    {
      landscapeLink: "https://some-link-11.com",
      landscapeLinkText: "some-link-9",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-8",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-7",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-6",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-5",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-1",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-2",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-3",
    },
    {
      landscapeLink: "https://some-link-1.com",
      landscapeLinkText: "some-link-4",
    },
  ],
  landscapeBgImg:
    "https://www.canada.ca/etc/designs/canada/wet-boew/assets/landscape.png",
  brandLinks: [
    {
      brandLink: "https://some-link-11.com",
      brandLinkText: "some-link-11",
    },
    {
      brandLink: "https://some-link-11.com",
      brandLinkText: "some-link-22",
    },
  ],
  logoUrl: logo,
  logoAltText: "Symbol of the Government of Canada",
  topOfPageBtn: <ActionButton tertiary id="top-btn" text="Top of Page" />,
  topOfPageLink: "",
  isOptionalReport: false,
  isOptionalShare: false,
  isOptionalCustom: false,
  accessibleSectionHeader1: "About Government",
  accessibleSectionHeader2: "About this site",
};
