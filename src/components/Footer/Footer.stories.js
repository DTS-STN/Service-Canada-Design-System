import React from "react";
import { Footer } from "./Footer";
import logo from "../../assets/wmms-blk.svg";
import upArrow from "../../assets/upArrow.svg";
import FR from "../../translations/fr.json";
import EN from "../../translations/en.json";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const EnFooter = Template.bind({});
EnFooter.args = {
  btnLink: "/",
  landscapeLinks: [
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link1,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link2,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link3,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link4,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link5,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link6,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link7,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link8,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: EN.landscapeLinks.link9,
    },
  ],
  brandLinks: [
    {
      brandLink: "url to page",
      brandLinkText: EN.brandLinks.link1,
    },
    {
      brandLink: "url to page",
      brandLinkText: EN.brandLinks.link2,
    },
    {
      brandLink: "url to page",
      brandLinkText: EN.brandLinks.link3,
    },
    {
      brandLink: "url to page",
      brandLinkText: EN.brandLinks.link4,
    },
    {
      brandLink: "url to page",
      brandLinkText: EN.brandLinks.link5,
    },
  ],
  logoUrl: logo,
  logoAltText: "Symbol of the Government of Canada",
  btnIcon: upArrow,
};

export const FrFooter = Template.bind({});
FrFooter.args = {
  btnLink: "/",
  landscapeLinks: [
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link1,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link2,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link3,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link4,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link5,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link6,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link7,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link8,
    },
    {
      landscapeLink: "url to page",
      landscapeLinkText: FR.landscapeLinks.link9,
    },
  ],
  brandLinks: [
    {
      brandLink: "url to page",
      brandLinkText: FR.brandLinks.link1,
    },
    {
      brandLink: "url to page",
      brandLinkText: FR.brandLinks.link2,
    },
    {
      brandLink: "url to page",
      brandLinkText: FR.brandLinks.link3,
    },
    {
      brandLink: "url to page",
      brandLinkText: FR.brandLinks.link4,
    },
    {
      brandLink: "url to page",
      brandLinkText: FR.brandLinks.link5,
    },
  ],
  logoUrl: logo,
  logoAltText: "Symbol of the Government of Canada",
  btnIcon: upArrow,
};

export const ErrorPageFooter = Template.bind({});
ErrorPageFooter.args = {
  btnLink: "/",
  error: true,
};
