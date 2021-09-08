import React from "react";
import Experiment from "./Experiment";

export default {
  title: "Components/Redirect components/Experiment",
  component: Experiment,
};

const Template = (args) => <Experiment {...args} />;

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  title: "Experiment title",
  tag: "current_projects",
  tagLabel: "Experiment tag",
  description: "Experiment description",
  href: "https://www.some.link",
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  title: "Experiment title",
  tag: "current_projects",
  tagLabel: "Experiment tag",
  description: "Experiment description",
  href: "/some/link",
};
