import { CheckBoxForm } from "./CheckBoxForm";
export default {
  title: "Components/CheckBoxForm",
  component: CheckBoxForm,
};

const Template = (args) => <CheckBoxForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "temp",
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
  },
  checkBoxList: [
    {
      id: "checkbox 1",
      name: "ChexBox1",
      value: "IsChecked",
      label: "Option 1",
    },
    {
      id: "checkbox 2",
      name: "ChexBox2",
      value: "IsChecked",
      label: "Option 2",
    },
    {
      id: "checkbox 3",
      name: "ChexBox3",
      value: "IsChecked",
      label: "Option 3",
    },
    {
      id: "checkbox 4",
      name: "ChexBox4",
      value: "IsChecked",
      label: "Option 4",
    },
    {
      id: "checkbox 5",
      name: "ChexBox5",
      value: "IsChecked",
      label: "Option 5",
    },
  ],
};
