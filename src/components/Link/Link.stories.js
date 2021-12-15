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
  text: "Link with small font in footer top section",
  href: "/",
  linkStyle: "smfooterStyle",
};

FooterBottomSmallLink.args = {
  id: "link",
  text: "Link with small font in footer bottom section",
  href: "/",
  linkStyle: "smfooterStyleBottom",
};

SmallLinkSemiBold.args = {
  id: "link",
  text: "Link with small font and semibold",
  href: "/",
  linkStyle: "smfooterStyleBold",
};

BreadcrumbsLink.args = {
  id: "link",
  text: "Breadcrumbs link",
  href: "/",
  linkStyle: "smBreadcrumbs",
};

MultiNavigationLink.args = {
  id: "link",
  text: "Navigation Link",
  href: "/",
  linkStyle: "smMultiNav",
};
