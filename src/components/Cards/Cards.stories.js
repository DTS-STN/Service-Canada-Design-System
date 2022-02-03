import { Temp } from "./Temp";
export default {
  title: "Components/Temp",
  component: Temp,
};

const Template = (args) => <Temp {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "temp",
};
