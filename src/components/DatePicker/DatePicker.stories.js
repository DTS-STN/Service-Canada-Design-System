import { DatePicker } from "./DatePicker";
export default {
  title: "Components/DatePicker",
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "DatePicker",
  // hasYear: false,
  // hasDay: false,
  hasError: true,
  hasLabel: true,
  formErrorProps: {
    id: "formErrorId",
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
};
