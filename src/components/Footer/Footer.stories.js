import React from "react";
import { Footer } from "./Footer";
import logo from "../../assets/wmms-blk.svg";
import upArrow from "../../assets/upArrow.svg";
import FR from "../../translations/fr.json";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const BiPageFooter = Template.bind({});
BiPageFooter.args = {
  btnLink: "/",
  lang: "bi",
};

export const EnFooter = Template.bind({});
EnFooter.args = {
  btnLink: "/",
  lang: "en",
  logoUrl: logo,
  logoAltText: "Symbol of the Government of Canada",
  btnIcon: upArrow,
};

export const FrFooter = Template.bind({});
FrFooter.args = {
  btnLink: "/",
  lang: "fr",
  landscapeLinks: [
    {
      landscapeLink: FR.landscapeLinks.link1link,
      landscapeLinkText: FR.landscapeLinks.link1,
    },
    {
      landscapeLink: FR.landscapeLinks.link2link,
      landscapeLinkText: FR.landscapeLinks.link2,
    },
    {
      landscapeLink: FR.landscapeLinks.link3link,
      landscapeLinkText: FR.landscapeLinks.link3,
    },
    {
      landscapeLink: FR.landscapeLinks.link4link,
      landscapeLinkText: FR.landscapeLinks.link4,
    },
    {
      landscapeLink: FR.landscapeLinks.link5link,
      landscapeLinkText: FR.landscapeLinks.link5,
    },
    {
      landscapeLink: FR.landscapeLinks.link6link,
      landscapeLinkText: FR.landscapeLinks.link6,
    },
    {
      landscapeLink: FR.landscapeLinks.link7link,
      landscapeLinkText: FR.landscapeLinks.link7,
    },
    {
      landscapeLink: FR.landscapeLinks.link8link,
      landscapeLinkText: FR.landscapeLinks.link8,
    },
    {
      landscapeLink: FR.landscapeLinks.link9link,
      landscapeLinkText: FR.landscapeLinks.link9,
    },
  ],
  brandLinks: [
    {
      brandLink: FR.brandLinks.link1link,
      brandLinkText: FR.brandLinks.link1,
    },
    {
      brandLink: FR.brandLinks.link2link,
      brandLinkText: FR.brandLinks.link2,
    },
    {
      brandLink: FR.brandLinks.link3link,
      brandLinkText: FR.brandLinks.link3,
    },
    {
      brandLink: FR.brandLinks.link4link,
      brandLinkText: FR.brandLinks.link4,
    },
    {
      brandLink: FR.brandLinks.link5link,
      brandLinkText: FR.brandLinks.link5,
    },
  ],
  logoUrl: logo,
  logoAltText: "Symbol of the Government of Canada",
  btnIcon: upArrow,
};
