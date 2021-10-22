import { ActionButton } from "./ActionButton";
// myStories.stories.jsx
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Buttons/ActionButton",
  component: ActionButton,
  decorators: [withDesign],
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Disabled = Template.bind({});
export const Link = Template.bind({});

// Default Button
Default.parameters = {
  // url to button component on figma
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dFM3ltQahFIfvzHB7ftHvl/Sandbox---Design-System?node-id=63%3A4907",
  },
};
Default.args = {
  id: "default",
  className:
    "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light",
  text: "Default button 🚀",
};

// Default Button
Secondary.parameters = {
  // url to button component on figma
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5",
  },
};
Secondary.args = {
  id: "secondary",
  text: "Secondary button 🚀",
  className:
    "bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200",
  secondary: true,
};

Tertiary.args = {
  id: "tertiary",
  text: "Tertiary Button 🚀",
  className:
    "underline hover:text-canada-footer-hover-font-blue text-canada-footer-font",
  tertiary: true,
};

Disabled.args = {
  id: "disabled",
  text: "Disabled Button 🚀",
  className: "bg-gray-light text-gray-600 border border-gray-md",
  disabled: true,
};

Link.args = {
  id: "link",
  text: "Link Button 🚀",
  className:
    "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light",
  href: "/",
};
