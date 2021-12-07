import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Supertask = Template.bind({});
export const SupertaskIcon = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Danger = Template.bind({});
export const Link = Template.bind({});

Supertask.args = {
  id: "supertask",
  style: "supertask",
  text: "Supertask button",
};

SupertaskIcon.args = {
  id: "supertask_icon",
  style: "supertask",
  text: "Supertask button",
  icon: "../../assets/youtube.svg",
  iconAltText: "icon",
  iconEnd: false,
};

Primary.args = {
  id: "primary",
  text: "Primary button",
  style: "primary",
  primary: true,
};

Secondary.args = {
  id: "secondary",
  text: "Secondary Button",
  style: "secondary",
  secondary: true,
};

Danger.args = {
  id: "danger",
  text: "Danger Button",
  style: "danger",
  danger: true,
};

Link.args = {
  id: "link",
  text: "Link Button",
  style: "link",
  href: "/",
};
