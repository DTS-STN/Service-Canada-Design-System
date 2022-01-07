import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

import btnIcon from "../../assets/youtube.svg";

const Template = (args) => <Button {...args} />;

export const Supertask = Template.bind({});
export const SupertaskIcon = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const DangerDisabled = Template.bind({});
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
  icon: btnIcon,
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

DangerDisabled.args = {
  id: "danger",
  text: "Danger Button",
  style: "danger",
  danger: true,
  disabled: true,
};

Link.args = {
  id: "link",
  text: "Link Button",
  style: "link",
  href: "/",
};
