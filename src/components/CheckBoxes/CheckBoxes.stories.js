import React from "react";
import { CheckBoxes } from "./CheckBoxes";

export default {
  title: "Components/CheckBoxes",
  component: CheckBoxes,
  decorators: [
    (Story) => (
      <div className="w-full flex justify-center">
        <div className="w-96">
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <CheckBoxes {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "checkbox 1",
  name: "ChexBox1",
  value: "IsChecked",
  label: "checkbox",
};

export const ErrorCheckBox = Template.bind({});
Default.args = {
  id: "checkbox 1",
  name: "ChexBox1",
  value: "IsChecked",
  label: "checkbox",
  hasError: true,
};
