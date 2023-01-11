import React from "react";
import { Footer } from "./Footer";
import { ENbrandLinks } from "../../translations/en.json";
import { FRbrandLinks } from "../../translations/fr.json";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const EnglishAuth = Template.bind({});
EnglishAuth.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  isAuthenticated: true,
  brandLinks: [
    {
      id: "link1",
      text: ENbrandLinks.link4,
      href: ENbrandLinks.link4link,
    },
    {
      id: "link2",
      text: ENbrandLinks.link5,
      href: ENbrandLinks.link5link,
    },
  ],
};

export const FrenchAuth = Template.bind({});
FrenchAuth.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  isAuthenticated: true,
  brandLinks: [
    {
      id: "link1",
      text: FRbrandLinks.link4,
      href: FRbrandLinks.link4link,
    },
    {
      id: "link2",
      text: FRbrandLinks.link5,
      href: FRbrandLinks.link5link,
    },
  ],
};

export const EnglishNonAuth = Template.bind({});
EnglishNonAuth.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  brandLinks: [
    {
      id: "link1",
      text: ENbrandLinks.link1,
      href: ENbrandLinks.link1link,
    },
    {
      id: "link2",
      text: ENbrandLinks.link2,
      href: ENbrandLinks.link2link,
    },
    {
      id: "link3",
      text: ENbrandLinks.link3,
      href: ENbrandLinks.link3link,
    },
    {
      id: "link4",
      text: ENbrandLinks.link4,
      href: ENbrandLinks.link4link,
    },
    {
      id: "link5",
      text: ENbrandLinks.link5,
      href: ENbrandLinks.link5link,
    },
  ],
};

export const FrenchNonAuth = Template.bind({});
FrenchNonAuth.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  brandLinks: [
    {
      id: "link1",
      text: FRbrandLinks.link1,
      href: FRbrandLinks.link1link,
    },
    {
      id: "link2",
      text: FRbrandLinks.link2,
      href: FRbrandLinks.link2link,
    },
    {
      id: "link3",
      text: FRbrandLinks.link3,
      href: FRbrandLinks.link3link,
    },
    {
      id: "link4",
      text: FRbrandLinks.link4,
      href: FRbrandLinks.link4link,
    },
    {
      id: "link5",
      text: FRbrandLinks.link5,
      href: FRbrandLinks.link5link,
    },
  ],
};

export const ErrorPageFooter = Template.bind({});
ErrorPageFooter.args = {
  id: "footer",
  btnLink: "/",
  error: true,
};
