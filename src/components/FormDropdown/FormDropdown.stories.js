/* eslint-disable @typescript-eslint/no-empty-function */
import { FormDropdown } from "./FormDropdown";
export default {
  title: "Components/FormDropdown",
  component: FormDropdown,
};

const Template = (args) => <FormDropdown {...args} />;

export const Default = Template.bind({});
export const Number = Template.bind({});
export const HasSearch = Template.bind({});
export const HasError = Template.bind({});
export const DoubleDropdown = Template.bind({});

Default.args = {
  dropdownProps: {
    hasSearch: false,
    defaultValue: "Select [insert topic]",
    options: [
      { id: "1", value: "option 1" },
      { id: "2", value: "option 2" },
      { id: "3", value: "option 3" },
    ],
    onChange: () => {},
  },
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
};

Number.args = {
  width: "number",
  dropdownProps: {
    hasSearch: false,
    minValue: 0,
    maxValue: 10,
    onChange: () => {},
  },
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
};

HasSearch.args = {
  dropdownProps: {
    hasSearch: true,
    defaultValue: "Select [insert topic]",
    options: [
      { id: "1", value: "option 1" },
      { id: "2", value: "option 2" },
      { id: "3", value: "option 3" },
    ],
    onChange: () => {},
  },
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
};

HasError.args = {
  dropdownProps: {
    hasSearch: false,
    defaultValue: "Select [insert topic]",
    options: [
      { id: "1", value: "option 1" },
      { id: "2", value: "option 2" },
      { id: "3", value: "option 3" },
    ],
    onChange: () => {},
    hasError: true,
    errorText: "Cutom error text",
  },
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
};

DoubleDropdown.args = {
  doubleDropdown: true,
  label1: "Label 1",
  label2: "Label 2",
  dropdownProps: {
    hasSearch: false,
    minValue: 0,
    maxValue: 20,
    onChange: () => {},
  },
  dropdown2Props: {
    hasSearch: false,
    minValue: 0,
    maxValue: 20,
    onChange: () => {},
  },
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
};
