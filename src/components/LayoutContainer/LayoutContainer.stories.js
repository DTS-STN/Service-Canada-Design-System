import React from "react";
import LayoutContainer from "./LayoutContainer";

export default {
  title: "Components/LayoutContainer",
  component: LayoutContainer,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <LayoutContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </div>
  ),
};

export const CustomSpan = Template.bind({});
CustomSpan.args = {
  spanDefault: false,
  children: [
    <div className="ds-col-span-6">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </div>,
    <div className="ds-col-span-6">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </div>,
    <div className="ds-col-span-12">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </div>,
  ],
};
