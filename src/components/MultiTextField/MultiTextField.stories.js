import React from "react";
import { MultiTextField } from "./MultiTextField";

export default {
  title: "In Development/MultiTextField",
  component: MultiTextField,
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

const Template = (args) => <MultiTextField i {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "multiTextField1",
  name: "multiTextField1",
  label: "I am a multi text field",
  dataTestId: "multitext-one",
  requiredText: "required",
  optionalText: "optional",
  doNotIncludeText: "disclaimer",
  placeholder: "some placeholder text",
};

export const BoldLabel = Template.bind({});
BoldLabel.args = {
  id: "multiTextField1",
  name: "multiTextField1",
  label: "I am a multi text field",
  dataTestId: "multitext-bold",
  requiredText: "required",
  optionalText: "optional",
  doNotIncludeText: "disclaimer",
  placeholder: "some placeholder text",
  boldLabel: true,
};

export const HardWrap = Template.bind({});
HardWrap.args = {
  id: "multiTextField1",
  name: "multiTextField1",
  label: "I am a multi text field",
  dataTestId: "multitext-hard-wrap",
  requiredText: "required",
  optionalText: "optional",
  doNotIncludeText: "disclaimer",
  placeholder: "some placeholder text",
  cols: 30,
  rows: 5,
  wrap: "hard",
};
