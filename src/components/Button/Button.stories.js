import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Supertask = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Danger = Template.bind({});
export const Link = Template.bind({});

Supertask.args = {
  id: "default",
  className: "btn-supertask btn-font-super",
  text: "Default button",
};

Primary.args = {
  id: "secondary",
  text: "Secondary button 🚀",
  className: "btn-primary btn-font-other",
  secondary: true,
};

Secondary.args = {
  id: "tertiary",
  text: "Tertiary Button 🚀",
  className: "btn-secondary btn-font-secondary",
  tertiary: true,
};

Danger.args = {
  id: "disabled",
  text: "Disabled Button 🚀",
  className: "btn-danger btn-font-other",
  disabled: true,
};

Link.args = {
  id: "link",
  text: "Link Button 🚀",
  className: "btn-link btn-font-other",
  href: "/",
};
