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
  isAuthorized: true,
  items: [
    {
      link: "#",
      text: "Services",
    },
    {
      link: "#",
      text: "Life Events",
    },
    {
      link: "#",
      text: "Contact us",
    },
  ],
};
