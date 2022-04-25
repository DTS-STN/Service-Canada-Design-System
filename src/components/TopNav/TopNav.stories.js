import React from "react";
import { TopNav } from "./TopNav";

export default {
  title: "Components/TopNav",
  component: TopNav,
};

const Template = (args) => <TopNav {...args} />;

export const TopNavEN = Template.bind({});
export const TopNavFR = Template.bind({});

TopNavEN.args = {
  lang: "en",
  skipToMainPath: "#wb-cont",
  skipToAboutPath: "#wb-info",
  switchToBasicPath: "/basic-en.html",
  displayAlternateLink: false,
};

TopNavFR.args = {
  lang: "fr",
  skipToMainPath: "#wb-cont",
  skipToAboutPath: "#wb-info",
  switchToBasicPath: "/basic-fr.html",
  displayAlternateLink: false,
};
