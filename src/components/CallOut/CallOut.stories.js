import { CallOut } from "./CallOut";
export default {
  title: "Components/CallOut",
  component: CallOut,
};

const Template = (args) => <CallOut {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "temp",
};
