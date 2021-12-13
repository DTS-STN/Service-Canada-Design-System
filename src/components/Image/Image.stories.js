import { Image } from "./Image";
import imageFile from "../../assets/image1.png";
import imageFile2 from "../../assets/image2.png";

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
  src: imageFile,
};

Mobile.args = {
  id: "image",
  alt: "Image",
  src: imageFile2,
};
