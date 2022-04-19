import React from "react";
import { Collapse } from "./Collapse";

export default {
  title: "Components/Collapse",
  component: Collapse,
};

const Template = (args) => <Collapse {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "defaultCollapse1",
  title: "How is this made?",
  Children: [
    <p key="content-key">
      If the child shares their time about equally between the parents, then
      both parents are considered to have <strong>shared custody</strong> of
      that child...
    </p>,
  ],
};
