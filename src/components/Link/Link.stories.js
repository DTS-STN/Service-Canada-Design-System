import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
export const RegularLinkwithEmphasis = Template.bind({});
export const TitleLink = Template.bind({});
export const FooterBlueLink = Template.bind({});
export const FooterWhiteLink = Template.bind({});
export const BreadcrumbsLink = Template.bind({});

Default.args = {
  id: "link",
  text: "Regular Link",
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

FooterWhiteLink.args = {
  id: "link",
  text: "Small link - Footer white",
  href: "/",
  linkStyle: "smfooterWhite",
};

BreadcrumbsLink.args = {
  id: "link",
  text: "Small link - Breadcrumbs & French toggle",
  href: "/",
  linkStyle: "smBreadcrumbs",
};
