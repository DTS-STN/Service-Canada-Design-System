import React from "react";
import { storiesOf } from "@storybook/react";
import CanadaCAWebMenu from "./CanadaCAWebMenu";

const Template = (args) => <CanadaCAWebMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "basic card",
  titleProps: {
    title: "Card Title",
  },
  hasDivider: true,
  description:
    "Recent changes made to Employment Insurance in order to make it more flexible, inclusive and easier to access.",
  firstLinkProps: {
    name: "link 1",
    path: "/",
  },
  hasLinkFirst: true,
  secondLinkProps: {
    name: "link 1",
    path: "/",
  },
};

export default {
  title: "Components/CanadaCAWebMenu",
  component: CanadaCAWebMenu,
};
