import { Stepper } from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

const Template = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
export const RegularLinkwithEmphasis = Template.bind({});
export const TitleLink = Template.bind({});
export const FooterBlueLink = Template.bind({});
export const BreadcrumbsLink = Template.bind({});
export const CardActionLink = Template.bind({});

Default.args = {
  id: "Stepper",
  text: "Regular Stepper",
  href: "/",
};

RegularLinkwithEmphasis.args = {
  id: "link",
  text: "Regular link with Emphasis",
  href: "/",
  linkStyle: "basicStyleWithEmphasis",
};

TitleLink.args = {
  id: "link",
  text: "Title Link",
  href: "/",
  linkStyle: "titleLink",
};

FooterBlueLink.args = {
  id: "link",
  text: "Small link - Footer blue",
  href: "/",
  linkStyle: "smfooterBlue",
};

BreadcrumbsLink.args = {
  id: "link",
  text: "Small link - Breadcrumbs & French toggle",
  href: "/",
  linkStyle: "smBreadcrumbs",
};

CardActionLink.args = {
  id: "link",
  text: "Card Action Link",
  href: "/",
  linkStyle: "cardActionLink",
};
