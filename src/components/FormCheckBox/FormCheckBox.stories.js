import { FormCheckBox } from "./FormCheckBox";
export default {
  title: "Components/FormCheckBox",
  component: FormCheckBox,
};

const Template = (args) => <FormCheckBox {...args} />;

export const WithError = Template.bind({});
WithError.args = {
  id: "temp",
  formErrorProps: {
    id: "formErrorId",
    hasError: true,
    errorMessage: "This is how form error will be displayed",
  },
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
  checkBoxList: [
    {
      id: "checkbox1",
      name: "ChexBox1",
      value: "IsChecked",
      label: "Option 1",
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
      id: "checkbox2",
      name: "ChexBox2",
      value: "IsChecked",
      label: "Option 2",
    },
    {
      id: "checkbox3",
      name: "ChexBox3",
      value: "IsChecked",
      label: "Option 3",
    },
    {
      id: "checkbox4",
      name: "ChexBox4",
      value: "IsChecked",
      label: "Option 4",
    },
    {
      id: "checkbox5",
      name: "ChexBox5",
      value: "IsChecked",
      label: "Option 5",
    },
  ],
};

export const NoError = Template.bind({});
NoError.args = {
  id: "temp",
  formErrorProps: {
    id: "formErrorId",
    hasError: false,
    errorMessage: "This is how form error will be displayed",
  },
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
  checkBoxList: [
    {
      id: "checkbox1",
      name: "ChexBox1",
      value: "IsChecked",
      label: "Option 1",
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
      id: "checkbox2",
      name: "ChexBox2",
      value: "IsChecked",
      label: "Option 2",
    },
    {
      id: "checkbox3",
      name: "ChexBox3",
      value: "IsChecked",
      label: "Option 3",
    },
    {
      id: "checkbox4",
      name: "ChexBox4",
      value: "IsChecked",
      label: "Option 4",
    },
    {
      id: "checkbox5",
      name: "ChexBox5",
      value: "IsChecked",
      label: "Option 5",
    },
  ],
};
