import React from "react";
import { Footer } from "./Footer";
import { DateModified } from "../DateModified/DateModified";
import { ActionButton } from "../ActionButton/ActionButton";
import logo from "../../assets/wmms-blk.svg";
import { ReportAProblem } from "../ReportAProblem/ReportAProblem";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
  landscapeBgImg: "footerBg",
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
  dateModified: <DateModified />,
  // optional fields
  isOptional: true,
  reportAProblemBtn: <ReportAProblem language="en" />,
  /* Need to build the ShareThisPage Component, for now will use an action button as a placeholder */
  shareThisPageBtn: (
    <ActionButton
      disabled
      id="share"
      text="Share this Page"
      className="xxs:w-full "
    />
  ),

  // Accessibility Headings
  footerNav1: "About Government",
  footerNav2: "About this site",
};
