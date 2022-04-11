import React from "react";
import { List } from "./List";

export default {
  title: "In Development/List",
  component: List,
};

const Template = (args) => <List {...args}></List>;

export const Primary = Template.bind({});

Primary.args = {
  items: ["Item 1", "Item 2", "Item 3", "Item 4"],
};
