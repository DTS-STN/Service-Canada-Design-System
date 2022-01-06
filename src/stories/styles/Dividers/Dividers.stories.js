import React from "react";
import Dividers from "./Dividers";

export default {
  title: "Styles/Dividers",
  component: Dividers,
};

const Template = (args) => <Dividers {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <p className="text-browserh1 font-bold pb-4">Dividers</p>
      <p>
        Note: Vertical dividers are intended to be used in the direction of
        rows. Horizontal dividers are intended to be used in the direction of
        columns If used incorrectly may lend to unexpected styling renders
      </p>
      <p className="heading2">Horizontal Dividers</p>
      <p className="heading3 p-4">Regular</p>
      <div className="horizontal-regular m-4"></div>
      <div className="bg-gray-200 p-4 m-4">
        <p className="body-bold">class-name: horizontal-regular</p>

        <p className="body">Styles:</p>
        <ul>
          <li>border-color: grey60</li>
          <li>border-style: solid</li>
          <li>border-width: 1px</li>
          <li>height: 0</li>
        </ul>
      </div>
      <p className="heading3 p-4">Prominent</p>
      <div className="horizontal-prominent m-4"></div>
      <div className="bg-gray-200 p-4 m-4">
        <p className="body-bold">class-name: horizontal-prominent</p>
        <p className="body">Styles:</p>
        <ul>
          <li>border-color: grey85</li>
          <li>border-style: solid</li>
          <li>border-width: 1px</li>
          <li>height: 0</li>
        </ul>
      </div>
      <p className="heading3 p-4">Muted</p>
      <div className="horizontal-muted m-4"></div>
      <div className="bg-gray-200 p-4 m-4">
        <p className="body-bold">class-name: horizontal-muted</p>
        <p className="body">Styles:</p>
        <ul>
          <li>border-color: grey40</li>
          <li>border-style: solid</li>
          <li>border-width: 1px</li>
          <li>height: 0</li>
        </ul>
      </div>

      <p className="heading2">Vertical Dividers</p>
      <p className="heading3 p-4">Regular</p>
      <div className="flex flex-rows m-4">
        <div className="vertical-regular mr-4"></div>
        <div className="bg-gray-200 flex-grow p-4">
          <p className="body-bold">class-name: vertical-regular</p>
          <p className="body">Styles:</p>
          <ul>
            <li>border-color: grey40</li>
            <li>border-style: solid</li>
            <li>border-width: 1px</li>
            <li>width: 0</li>
          </ul>
        </div>
      </div>
      <p className="heading3 p-4">Prominent</p>
      <div className="flex flex-row m-4">
        <div className="vertical-prominent mr-4"></div>
        <div className="bg-gray-200 p-4 flex-grow">
          <p className="body-bold">class-name: vertical-prominent</p>
          <p className="body">Styles:</p>
          <ul>
            <li>border-color: grey40</li>
            <li>border-style: solid</li>
            <li>border-width: 1px</li>
            <li>width: 0</li>
          </ul>
        </div>
      </div>
      <p className="heading3 p-4">Muted</p>
      <div className="flex flex-row m-4">
        <div className="vertical-muted mr-4"></div>
        <div className="bg-gray-200 p-4 flex-grow">
          <p className="body-bold">class-name: vertical-muted</p>
          <p className="body">Styles:</p>
          <ul>
            <li>border-color: grey40</li>
            <li>border-style: solid</li>
            <li>border-width: 1px</li>
            <li>width: 0</li>
            {/* <li>transform: rotate(180deg)</li> */}
          </ul>
        </div>
      </div>
    </>
  ),
};
