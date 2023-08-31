import React from "react";
import { FormSelectableCard } from "./FormSelectableCard";

export default {
  title: "Components/FormSelectableCard",
  component: FormSelectableCard,
};

const onChange = () => {
  console.log("------------Hola! Change event triggered-------------");
};

const Template = (args) => <FormSelectableCard {...args} />;

export const Primary = Template.bind({});
export const withLabelHelpText = Template.bind({});
export const withLabelAndError = Template.bind({});

const optionsList = [
  {
    id: "option_1",
    value: "Option 1",
    label: "Options 1: Some Value to show",
    hasHint: true,
    hintProps: {
      linkText: "Why are we asking about [topic]?",
      description:
        "We need to know this because your partner’s annual net income...",
      withLink: false,
      externalLinkText: "",
      optionalLinkText: "",
      url: "",
      className: "",
    },
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
  id: "selectable-card-1",
  name: "selectable_card_1",
  options: optionsList,
  onChange: onChange,
};

withLabelHelpText.args = {
  id: "selectable-card-2",
  name: "selectable_card_2",
  options: optionsList,
  label: "I am a text field",
  infoText: "Help Text",
  hasHint: true,
  hintProps: {
    linkText: "Why are we asking about [topic]?",
    description:
      "We need to know this because your partner’s annual net income...",
    withLink: false,
    externalLinkText: "",
    optionalLinkText: "",
    url: "",
    className: "",
  },
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
};

withLabelAndError.args = {
  id: "selectable-card-3",
  name: "selectable_card_3",
  options: optionsList,
  label: "I am a text field",
  infoText: "Help Text",
  hasError: true,
  errorText: "You must choose one of the options from above list",
  requiredText: "required",
  required: true,
  helpText:
    "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
};
