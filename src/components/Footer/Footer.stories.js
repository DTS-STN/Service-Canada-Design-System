import React from "react";
import { Footer } from "./Footer";
import { ENbrandLinks } from "../../translations/en.json";
import { FRbrandLinks } from "../../translations/fr.json";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const SubFooterEn = Template.bind({});
SubFooterEn.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  target: "_blank",
  withMainBand: false,
};

export const SubFooterFr = Template.bind({});
SubFooterFr.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  target: "_blank",
  withMainBand: false,
};

export const WithMainBandEn = Template.bind({});
WithMainBandEn.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  target: "_blank",
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

export const WithMainBandFr = Template.bind({});
WithMainBandFr.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  target: "_blank",
};

export const WithContextualBand = Template.bind({});
WithContextualBand.args = {
  withContextualBand: true,
  id: "footer",
  lang: "en",
  btnLink: "/",
  target: "_blank",
  contextualBandLinks: [
    {
      key: "serviceCanadalink1",
      text: "Contact us",
      link: "#",
    },
    {
      key: "serviceCanadalink2",
      text: "[link]",
      link: "#",
    },
    {
      key: "serviceCanadalink3",
      text: "[link]",
      link: "#",
    },
  ],
};

export const AuthenticatedEn = Template.bind({});
AuthenticatedEn.args = {
  id: "footer",
  lang: "en",
  btnLink: "/",
  contactLink: "https://www.canada.ca/en/contact.html",
  isAuthenticated: true,
  target: "_blank",
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

export const AuthenticatedFr = Template.bind({});
AuthenticatedFr.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  contactLink: "https://www.canada.ca/fr/contact.html",
  isAuthenticated: true,
  target: "_blank",
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
