import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
export const RegularLinkwithEmphasis = Template.bind({});
export const FooterTopSmallLink = Template.bind({});
export const FooterBottomSmallLink = Template.bind({});
export const SmallLinkSemiBold = Template.bind({});
export const BreadcrumbsLink = Template.bind({});
export const MultiNavigationLink = Template.bind({});

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

FooterTopSmallLink.args = {
  id: "link",
  text: "Regular link with Emphasis",
  href: "/",
  linkStyle: "smfooterStyle",
};

FooterBottomSmallLink.args = {
  id: "link",
  text: "Regular link with Emphasis",
  href: "/",
  linkStyle: "smfooterStyleBottom",
};

SmallLinkSemiBold.args = {
  id: "link",
  text: "Regular link with Emphasis",
  href: "/",
  linkStyle: "smfooterStyleBold",
};

BreadcrumbsLink.args = {
  id: "link",
  text: "Regular link with Emphasis",
  href: "/",
  linkStyle: "smBreadcrumbs",
};

MultiNavigationLink.args = {
  id: "link",
  text: "Regular link with Emphasis",
  href: "/",
  linkStyle: "smMultiNav",
};
