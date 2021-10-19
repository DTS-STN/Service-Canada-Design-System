import { DateModified } from "./DateModified";

export default {
  title: "Components/Page details/DateModified",
  component: DateModified,
};

const Template = (args) => <DateModified {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  date: "20200420",
  label: "Date modified: ",
};
