import React from "react";
import HelloWorld from "./HelloWorld";

export default {
  title: "Components/HelloWorld",
  component: HelloWorld,
};

const Template = (args) => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
