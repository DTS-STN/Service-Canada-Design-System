import { ActionButton } from "./ActionButton";

export default {
  title: "In Development/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Disabled = Template.bind({});
export const Link = Template.bind({});

Default.args = {
  id: "default",
  className:
    "py-2 px-4 bg-multi-blue-blue60g text-white border border-multi-blue-blue60g active:bg-multi-blue-blue60c hover:bg-multi-blue-blue60f",
  text: "Default button 🚀",
};

Secondary.args = {
  id: "secondary",
  text: "Secondary button 🚀",
  className:
    "py-2 px-4 bg-white text-multi-blue-blue60g border border-multi-blue-blue60g active:bg-multi-neutrals-grey85a hover:bg-multi-neutrals-grey40",
  secondary: true,
};

Tertiary.args = {
  id: "tertiary",
  text: "Tertiary Button 🚀",
  className:
    "py-2 underline hover:text-canada-footer-hover-font-blue text-canada-footer-font",
  tertiary: true,
};

Disabled.args = {
  id: "disabled",
  text: "Disabled Button 🚀",
  className: "py-2 px-4 bg-gray-light text-gray-600 border border-gray-md",
  disabled: true,
};

Link.args = {
  id: "link",
  text: "Link Button 🚀",
  className:
    "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light",
  href: "/",
};
