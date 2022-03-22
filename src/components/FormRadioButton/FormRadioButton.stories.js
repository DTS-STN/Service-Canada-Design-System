import React from "react";
import { FormRadioButton } from "./FormRadioButton";

export default {
  title: "Components/FormRadioButton",
  component: FormRadioButton,
  decorators: [
    (Story) => (
      <div className="ds-w-full ds-flex ds-items-center ds-flex-col">
        <div className="ds-w-100">
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <FormRadioButton {...args} />;

export const Primary = Template.bind({});
export const withLabelHelpText = Template.bind({});
export const withLabelAndError = Template.bind({});

const optionsList = [
  {
    id: "option_1",
    value: "Option 1",
    label: "Options 1: Some Value to show",
  },
  {
    id: "option_2",
    value: "Option 2",
    label: "Option 2",
  },
  {
    id: "option_3",
    value: "Option 3",
    label: "Option 3",
  },
];

Primary.args = {
  id: "radio-button-1",
  name: "radio_button_1",
  options: optionsList,
  dataTestId: "primary-radio-1",
};

withLabelHelpText.args = {
  id: "radio-button-2",
  name: "radio_button_2",
  options: optionsList,
  dataTestId: "primary-radio-2",
  label: "I am a text field",
  infoText: "Help Text",
};

withLabelAndError.args = {
  id: "radio-button-3",
  name: "radio_button_3",
  options: optionsList,
  dataTestId: "primary-radio-3",
  label: "I am a text field",
  infoText: "Help Text",
  hasError: true,
  errorText: "You must choose one of the options from above list",
  requiredText: "required",
  required: true,
};
