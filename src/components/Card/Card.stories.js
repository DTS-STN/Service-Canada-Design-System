import { Card } from "./Card";
import img from "../../assets/image4.jpg";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const WithLabel = Template.bind({});
export const WithImage = Template.bind({});
export const WithDate = Template.bind({});

Default.args = {
  size: "standard",
  title: "Title Link",
  href: "/some/link",
  description: "Description",
  imgSrc: "/placeholderImg",
  imgAlt: "placeholderAlt",
};

WithLabel.args = {
  size: "standard",
  showLabel: true,
  title: "Title Link",
  labelText: "Label",
  labelType: "success",
  description: "Description",
  href: "/some/link",
};

WithImage.args = {
  size: "standard",
  showImage: true,
  title: "Title Link",
  description: "Description",
  href: "/somelink",
  imgSrc: img,
  imgAlt: "placeholderAlt",
  showLabel: true,
  labelText: "Label",
  labelType: "success",
};
