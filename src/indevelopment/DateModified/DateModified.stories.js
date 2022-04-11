import { DateModified } from "./DateModified";

export default {
  title: "In Development/DateModified",
  component: DateModified,
};

const Template = (args) => <DateModified {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  date: "20200420",
  label: "Date modified: ",
};
