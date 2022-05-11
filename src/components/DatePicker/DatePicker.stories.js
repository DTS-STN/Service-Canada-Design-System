import { DatePicker } from "./DatePicker";
export default {
  title: "Components/DatePicker",
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
export const WithMinMaxDates = Template.bind({});

Default.args = {
  id: "DatePicker",
};

WithMinMaxDates.args = {
  id: "DatePicker",
  startMin: "2010-03-27",
  endMin: "2010-05-07",
  startMax: "2010-03-27",
  endMax: "2015-05-07",
};
