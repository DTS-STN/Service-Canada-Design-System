import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
export const FooterLink = Template.bind({});
export const FooterLinkBottom = Template.bind({});
export const InformationLink = Template.bind({});
export const DownloadLink = Template.bind({});

Default.args = {
  id: "link",
  text: "Link",
  href: "/",
};

FooterLink.args = {
  id: "link",
  text: "Link",
  href: "/",
  isFooterLink: true,
};

FooterLinkBottom.args = {
  id: "link",
  text: "Link",
  href: "/",
  isFooterLink: true,
  footerLinkPosition: "bottom",
};

InformationLink.args = {
  id: "link",
  text: "Link",
  href: "/",
  isInfo: true,
};
// This will changed or removed when final version of design is completed
DownloadLink.args = {
  id: "link",
  text: "Link",
  href: "/",
  isInfo: true,
};
