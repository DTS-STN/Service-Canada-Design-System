import React from "react";
import { FormDatePicker } from "./FormDatePicker";
export default {
  title: "Components/FormDatePicker",
  component: FormDatePicker,
};

const Template = (args) => <FormDatePicker {...args} />;

export const English = Template.bind({});

English.args = {
  id: "FormDatePicker",
  lang: "en",
  minYear: 1999,
  maxYear: 2050,
  hasLabel: true,
  hasHint: true,
  hasAge: true,
  formErrorProps: {
    id: "formErrorId",
    errorMessage: "This is how form error will be displayed",
  },
  formLabelProps: {
    id: "requiredWithInfo",
    label: "Required Label",
    required: false,
    helpText:
      "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
  },
  hintProps: {
    linkText: "Why are we asking about [topic]?",
    description:
      "We need to know this because your partner’s annual net income...",
    withLink: false,
    externalLinkText: "",
    optionalLinkText: "",
    url: "",
  },
};

export const French = Template.bind({});

French.args = {
  id: "FormDatePicker",
  // hasYear: false,
  // hasDay: false,
  lang: "fr",
  hasAge: true,
  minYear: 1999,
  maxYear: 2050,
  hasLabel: true,
  formErrorProps: {
    id: "formErrorId",
    errorMessage: "This is how form error will be displayed",
  },
  formLabelProps: {
    id: "requiredWithInfo",
    label: "Required Label",
    required: true,
    helpText:
      "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
  },
};
