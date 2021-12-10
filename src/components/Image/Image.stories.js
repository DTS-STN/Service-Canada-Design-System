import { Image } from "./Image";

export default {
  title: "Components/Image",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
export const Mobile = Template.bind({});

Default.args = {
  id: "image",
  alt: "Image",
  src: "/image1.png",
};

Mobile.args = {
  id: "image",
  alt: "Image",
  src: "/image2.jpg",
};
