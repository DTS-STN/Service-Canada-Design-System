import React from "react";
import { CallToAction } from "./CallToAction";

export default {
  title: "In Development/CallToAction",
  component: CallToAction,
};

const Template = (args) => <CallToAction {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  title: "the title",
  description: "a description that should be short and concise",
  href: "#",
  hrefText: "the link text",
  privacyLink: "/",
  privacyLinkText: "Review the privacy policy",
};

Secondary.args = {
  title: "the title",
  html: "<h1>Title</h1><p>Text</p>",
  href: "#",
  hrefText: "the link text",
  privacyLink: "/",
  privacyLinkText: "Review the privacy policy",
};
