import React from "react";
import { Footer } from "./Footer";
import { ENbrandLinks } from "../../translations/en.json";
import { FRbrandLinks } from "../../translations/fr.json";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const GeneralEn = Template.bind({});
GeneralEn.args = {
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

export const GeneralFr = Template.bind({});
GeneralFr.args = {
  id: "footer",
  lang: "fr",
  btnLink: "/",
  target: "_blank",
};

export const WithServiceCanada = Template.bind({});
WithServiceCanada.args = {
  withServiceCanada: true,
  id: "footer",
  lang: "en",
  btnLink: "/",
  target: "_blank",
  serviceCanadaLinks: [
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

export const ErrorPageFooter = Template.bind({});
ErrorPageFooter.args = {
  id: "footer",
  btnLink: "/",
  error: true,
};

export const FooterWithClickHandler = Template.bind({});
FooterWithClickHandler.args = {
  lang: "fr",
  id: "footer",
  btnLink: "/",
  onClick: (e) => {
    console.log(e);
    e.preventDefault();
    alert("Add any click handler to footer links");
  },
};

export const CustomFooterWithClickHandler = Template.bind({});
CustomFooterWithClickHandler.args = {
  id: "footer",
  btnLink: "/",
  brandLinks: [
    {
      id: "link1",
      text: "Without onClick",
      href: FRbrandLinks.link1link,
    },
    {
      id: "link2",
      text: "With onClick",
      href: FRbrandLinks.link1link,
      onClick: (e) => {
        console.log(e);
        e.preventDefault();
        alert("Add any click handler to footer links");
      },
    },
  ],
};
