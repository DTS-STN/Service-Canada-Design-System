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

export const NoDefaultSpan = Template.bind({});
NoDefaultSpan.args = {
  spanDefault: false,
  children: [
    <div className="ds-bg-gray-100 ds-text-center ds-h-40" key="key1">
      1
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key2">
      2
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key3">
      3
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key4">
      4
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key5">
      5
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key6">
      6
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key7">
      7
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key8">
      8
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key9">
      9
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key10">
      10
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key11">
      11
    </div>,
    <div className="ds-bg-gray-100 ds-text-center" key="key12">
      12
    </div>,
  ],
};
