import { Cards } from "./Cards";
import img from "../../assets/image1.png";
export default {
  title: "Components/Cards",
  component: Cards,
};

const Template = (args) => <Cards {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "basic card",
  titleProps: {
    hasLink: false,
    title: "Card Title",
  },
  secondaryText: "secondary Text",
  hasDivider: true,
  imageProps: {
    id: "card image",
    altText: "card image text",
    imgPath: img,
  },
  description:
    "Recent changes made to Employment Insurance in order to make it more flexible, inclusive and easier to access.",
  firstLinkProps: {
    id: "firstLinkCards",
    name: "link 1",
    path: "/",
  },
  secondLinkProps: {
    id: "secondLinkCards",
    name: "link 2",
    path: "/",
  },
  hasLinkFirst: true,
  hasLinkSecond: true,
};
