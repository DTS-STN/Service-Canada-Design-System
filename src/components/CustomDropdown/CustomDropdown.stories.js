import { CustomDropdown } from "./CustomDropdown";
export default {
  title: "Components/CustomDropdown",
  component: CustomDropdown,
};

const Template = (args) => <CustomDropdown {...args} />;

export const Default = Template.bind({});
export const HasSearch = Template.bind({});
export const HasError = Template.bind({});

Default.args = {
  hasSearch: false,
  defaultValue: "Select [insert topic]",
  options: [
    { id: "1", value: "option 1" },
    { id: "2", value: "option 2" },
    { id: "3", value: "option 3" },
  ],
};

HasSearch.args = {
  hasSearch: true,
  defaultValue: "option 1",
  options: [
    { id: "1", value: "option 1" },
    { id: "2", value: "option 2" },
    { id: "3", value: "option 3" },
  ],
};

HasError.args = {
  hasError: true,
  defaultValue: "option 1",
  options: [
    { id: "1", value: "option 1" },
    { id: "2", value: "option 2" },
    { id: "3", value: "option 3" },
  ],
  errorText: "Cutom error text",
};
