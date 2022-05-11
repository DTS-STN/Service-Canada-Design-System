import { Date } from "./Date";
export default {
  title: "Components/Date",
  component: Date,
};

const Template = (args) => <Date {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "date",
  date: "20200420",
  label: "Date modified: ",
};
