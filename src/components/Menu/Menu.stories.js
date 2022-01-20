import React from "react";
import { Menu } from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args}></Menu>;

export const Primary = Template.bind({});

Primary.args = {
  menuButtonTitle: "Menu",
  signUpText: "Sign up",
  items: [
    {
      link: "#",
      text: "Link1",
    },
    {
      link: "#",
      text: "Link2",
    },
    {
      link: "#",
      text: "Link3",
    },
  ],
};
