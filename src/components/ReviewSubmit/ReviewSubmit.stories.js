import { ReviewSubmit } from "./ReviewSubmit";
export default {
  title: "Components/ReviewSubmit",
  component: ReviewSubmit,
};

const Template = (args) => <ReviewSubmit {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "temp",
};
