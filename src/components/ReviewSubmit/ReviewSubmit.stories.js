import { ReviewSubmit } from "./ReviewSubmit";
export default {
  title: "Components/ReviewSubmit",
  component: ReviewSubmit,
};

const Template = (args) => <ReviewSubmit {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "temp",
  required_results: [
    { label: "example1", value: "value1" },
    { label: "example2", value: "value2" },
  ],
  optional_results: [
    { label: "example1", value: "value1" },
    { label: "example2", value: "value2" },
  ],
  back_btn_props: {
    onClick: () => {},
  },
  submit_btn_props: {
    onSubmit: () => {},
  },
};
