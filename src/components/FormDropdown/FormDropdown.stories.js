import { FormDropdown } from "./FormDropdown";
export default {
  title: "Components/FormDropdown",
  component: FormDropdown,
};

const Template = (args) => <FormDropdown {...args} />;

export const Default = Template.bind({});
export const HasError = Template.bind({});

Default.args = {
  hasLabel: true,
  formLabelProps: {
    id: "requiredWithInfo",
    label: "Required Label",
    required: true,
    infoText:
      "Required label style with information icon. You can hide by clicking on icon again.",
    helpText:
      "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
  },
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
  dataTestId: "textbox-controlled",
  requiredText: "required",
  defaultValue: "option 1",
  options: ["option 1", "option 2", "option 3"],
};

HasError.args = {
  hasLabel: true,
  hasError: true,
  formLabelProps: {
    id: "requiredWithInfo",
    label: "Required Label",
    required: true,
    infoText:
      "Required label style with information icon. You can hide by clicking on icon again.",
    helpText:
      "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
  },
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
  dataTestId: "textbox-controlled",
  requiredText: "required",
  defaultValue: "option 1",
  options: ["option 1", "option 2", "option 3"],
  errorText: "Cutom error text",
};
