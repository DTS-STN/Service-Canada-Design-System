// link for more info: https://github.com/storybookjs/storybook/blob/5da733d1711503a4c134b2d728eb467bce7641d1/addons/docs/docs/recipes.md/

import React from "react";
import LayoutContainer from "./LayoutContainer";

const Template = (args) => <LayoutContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <div className="bg-gray-100 text-center h-40" key="key1">
      1
    </div>,
    <div className="bg-gray-100 text-center" key="key2">
      2
    </div>,
    <div className="bg-gray-100 text-center" key="key3">
      3
    </div>,
    <div className="bg-gray-100 text-center" key="key4">
      4
    </div>,
    <div className="bg-gray-100 text-center" key="key5">
      5
    </div>,
    <div className="bg-gray-100 text-center" key="key6">
      6
    </div>,
    <div className="bg-gray-100 text-center" key="key7">
      7
    </div>,
    <div className="bg-gray-100 text-center" key="key8">
      8
    </div>,
    <div className="bg-gray-100 text-center" key="key9">
      9
    </div>,
    <div className="bg-gray-100 text-center" key="key10">
      10
    </div>,
    <div className="bg-gray-100 text-center" key="key11">
      11
    </div>,
    <div className="bg-gray-100 text-center" key="key12">
      12
    </div>,
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: (
    <p className="col-span-12">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
  ),
};

Secondary.parameters = {
  docs: {
    description: {
      story: `<p>The Secondary story demonstrates how you span one column across all 12 columns using Tailwind Grid utilities.</p> <p>Check out the following links for more examples of how to implement Bootstrap grid classes using Tailwind grid utilities:</p> https://dev.to/praveenjuge/recreating-bootstrap-grid-with-tailwind-css-grids-6j0, https://www.youtube.com/watch?v=L_R2gP4fBhw&list=PL67e9ZF52gylaX_U-PLG23kNijtACCknh&index=8`,
    },
  },
};
