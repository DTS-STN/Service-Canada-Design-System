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
      <p className="ds-text-browserh1 ds-font-bold ds-pb-4">Dividers</p>
      <p>
        Note: Vertical dividers are intended to be used in the direction of
        rows. Horizontal dividers are intended to be used in the direction of
        columns If used incorrectly may lend to unexpected styling renders
      </p>
      <p className="ds-heading2">Horizontal Dividers</p>
      <p className="ds-heading3 ds-p-4">Regular</p>
      <div className="ds-horizontal-regular ds-m-4"></div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-horizontal-regular</p>

        <p className="ds-body">Styles:</p>
        <ul>
          <li>border-color: grey60</li>
          <li>border-style: solid</li>
          <li>border-width: 1px</li>
          <li>height: 0</li>
        </ul>
      </div>
      <p className="ds-heading3 ds-p-4">Prominent</p>
      <div className="ds-horizontal-prominent ds-m-4"></div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-horizontal-prominent</p>
        <p className="ds-body">Styles:</p>
        <ul>
          <li>border-color: grey85</li>
          <li>border-style: solid</li>
          <li>border-width: 1px</li>
          <li>height: 0</li>
        </ul>
      </div>
      <p className="ds-heading3 ds-p-4">Muted</p>
      <div className="ds-horizontal-muted ds-m-4"></div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-horizontal-muted</p>
        <p className="ds-body">Styles:</p>
        <ul>
          <li>border-color: grey40</li>
          <li>border-style: solid</li>
          <li>border-width: 1px</li>
          <li>height: 0</li>
        </ul>
      </div>

      <p className="ds-heading2">Vertical Dividers</p>
      <p className="ds-heading3 ds-p-4">Regular</p>
      <div className="ds-flex ds-flex-rows ds-m-4">
        <div className="ds-vertical-regular ds-mr-4"></div>
        <div className="ds-bg-gray-200 ds-flex-grow ds-p-4">
          <p className="ds-body-bold">class-name: ds-vertical-regular</p>
          <p className="ds-body">Styles:</p>
          <ul>
            <li>border-color: grey40</li>
            <li>border-style: solid</li>
            <li>border-width: 1px</li>
            <li>width: 0</li>
          </ul>
        </div>
      </div>
      <p className="ds-heading3 ds-p-4">Prominent</p>
      <div className="ds-flex ds-flex-row ds-m-4">
        <div className="ds-vertical-prominent ds-mr-4"></div>
        <div className="ds-bg-gray-200 ds-p-4 ds-flex-grow">
          <p className="ds-body-bold">class-name: ds-vertical-prominent</p>
          <p className="ds-body">Styles:</p>
          <ul>
            <li>border-color: grey40</li>
            <li>border-style: solid</li>
            <li>border-width: 1px</li>
            <li>width: 0</li>
          </ul>
        </div>
      </div>
      <p className="ds-heading3 ds-p-4">Muted</p>
      <div className="ds-flex ds-flex-row ds-m-4">
        <div className="ds-vertical-muted ds-mr-4"></div>
        <div className="ds-bg-gray-200 ds-p-4 ds-flex-grow">
          <p className="ds-body-bold">class-name: ds-vertical-muted</p>
          <p className="ds-body">Styles:</p>
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
