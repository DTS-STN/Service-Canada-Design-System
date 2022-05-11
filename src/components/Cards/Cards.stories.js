import { Cards } from "./Cards";
import img from "../../assets/image3.png";
export default {
  title: "Components/Cards",
  component: Cards,
};

const Template = (args) => <Cards {...args} />;

export const Default = Template.bind({});
export const DefaultLink = Template.bind({});
export const TitleLink = Template.bind({});
export const OneLink = Template.bind({});
export const TwoLinkCol = Template.bind({});
export const TwoLink = Template.bind({});

Default.args = {
  id: "basic card",
  titleProps: {
    title: "Card Title",
  },
  hasDivider: true,
  description:
    "Recent changes made to Employment Insurance in order to make it more flexible, inclusive and easier to access.",
  firstLinkProps: {
    name: "link 1",
    path: "/",
  },
  hasLinkFirst: true,
  secondLinkProps: {
    name: "link 1",
    path: "/",
  },
};

DefaultLink.args = {
  id: "basic card",
  titleProps: {
    hasLink: true,
    title: "Old Age Security (OAS)",
    path: "/",
  },
  description:
    "Did you know that you may be eligible for the Old Age Security (OAS)?",
  firstLinkProps: {
    name: "Learn more about OAS",
    path: "/",
  },
  secondLinkProps: {
    name: "Check eligibility",
    path: "/",
  },
  hasLinkFirst: true,
  hasLinkSecond: true,
};

TitleLink.args = {
  id: "basic card",
  titleProps: {
    hasLink: true,
    title: "Card Title",
    path: "/",
  },
  secondaryText: "secondary Text",
  imageProps: {
    altText: "card image text",
    imgPath: img,
  },
  description:
    "Recent changes made to Employment Insurance in order to make it more flexible, inclusive and easier to access.",
  firstLinkProps: {
    name: "link 1",
    path: "/",
  },
};

OneLink.args = {
  id: "basic card",
  titleProps: {
    title: "Card Title",
  },
  secondaryText: "secondary Text",
  imageProps: {
    altText: "card image text",
    imgPath: img,
  },
  description:
    "Recent changes made to Employment Insurance in order to make it more flexible, inclusive and easier to access.",
  firstLinkProps: {
    name: "link 1",
    path: "/",
  },
};

TwoLinkCol.args = {
  id: "basic card",
  titleProps: {
    hasLink: false,
    title: "Employment Insurance Improvements",
  },
  labelProps: {
    text: "danger",
    type: "danger",
  },
  imageProps: {
    altText: "card image text",
    imgPath: img,
  },
  description:
    "Recent changes made to Employment Insurance in order to make it more flexible, inclusive and easier to access.",
  firstLinkProps: {
    name: "link 1",
    path: "/",
  },
  secondLinkProps: {
    name: "link 2",
    path: "/",
  },
  hasLinkFirst: true,
  hasLinkSecond: true,
};

TwoLink.args = {
  id: "basic card",
  titleProps: {
    hasLink: true,
    title: "Employment Insurance Improvements",
    path: "/",
  },
  labelProps: {
    text: "default label",
  },
  secondaryText: "secondary Text",
  imageProps: {
    altText: "card image text",
    imgPath: img,
  },
  description:
    "Recent changes made to Employment Insurance in order to make it more flexible, inclusive and easier to access.",
  firstLinkProps: {
    name: "Learn more about GIS",
    path: "/",
  },
  secondLinkProps: {
    name: "Check eligibility",
    path: "/",
  },
  hasLinkFirst: true,
  hasLinkSecond: true,
};
