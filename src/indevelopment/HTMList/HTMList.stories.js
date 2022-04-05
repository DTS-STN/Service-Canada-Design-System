import { HTMList } from "./HTMList";

export default {
  title: "In Development/HTMList",
  component: HTMList,
};

const Template = (args) => <HTMList {...args} />;

export const UnorderedList = Template.bind({});
UnorderedList.args = {
  tag: "ul",
  content: "* one * two * three",
  listClassName: "list-disc ml-2",
  liClassName: "text-custom-blue-dark",
};

export const OrderedList = Template.bind({});
OrderedList.args = {
  tag: "ol",
  content: "* one * two * three",
  listClassName: "list-decimal ml-2",
  liClassName: "text-custom-blue-dark",
};
