import React from "react";
import { OptionalListField } from "./OptionalListField";
import { CheckBox } from "./CheckBox";
import { RadioField } from "./RadioField";

export default {
  title: "Components/Form Components/OptionalListField",
  component: OptionalListField,
  decorators: [
    (Story) => (
      <div className="w-full flex justify-center">
        <div className="w-96">
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <OptionalListField {...args} />;

export const UnOpened = Template.bind({});
UnOpened.args = {
  controlId: "nutella-check-1",
  controlName: "nutellaCheckOne",
  controlLabel: "Do you not like Nutella ?",
  controlValue: "unopened",
  controlDataTestId: "unopened-check-1",
  listLabel: "Please check all the reasons why you are wrong.",
  requiredText: " (required)",
  optionalText: " (optional)",
  children: [
    <CheckBox
      key="key1"
      label="I don't like fake chocolate spread"
      name="reasons"
      value="dislike"
      id="reasons-dislike"
    />,
    <CheckBox
      key="key2"
      label="I make poor choices"
      name="reasons"
      value="poor-choice"
      id="reasons-poor-choice"
    />,
  ],
};

export const Opened_Checkboxes = Template.bind({});
Opened_Checkboxes.args = {
  controlId: "nutella-check-1",
  controlName: "nutellaCheckOne",
  controlLabel: "Do you not like Nutella ?",
  checked: true,
  controlDataTestId: "opened-check-1",
  listLabel: "Please check all the reasons why you are wrong.",
  requiredText: " (required)",
  optionalText: " (optional)",
  children: [
    <CheckBox
      key="key1"
      label="I don't like fake chocolate spread"
      name="reasons"
      value="dislike"
      id="reasons-dislike"
      dataTestId="reasons-dislike"
    />,
    <CheckBox
      key="key2"
      label="I make poor choices"
      name="reasons"
      value="poor-choice"
      id="reasons-poor-choice"
      dataTestId="reasons-poor-choice"
    />,
  ],
};

export const Opened_Radiofields = Template.bind({});
Opened_Radiofields.args = {
  controlId: "nutella-check-1",
  controlName: "nutellaCheckOne",
  controlLabel: "Do you not like Nutella ?",
  checked: true,
  controlDataTestId: "opened-check-1",
  listLabel: "Please check all the reasons why you are wrong.",
  requiredText: " (required)",
  optionalText: " (optional)",
  children: [
    <RadioField
      key="key1"
      label="I don't like fake chocolate spread"
      name="reasons"
      value="dislike"
      id="reasons-dislike"
      dataTestId="reasons-dislike"
    />,
    <RadioField
      key="key2"
      label="I make poor choices"
      name="reasons"
      value="poor-choice"
      id="reasons-poor-choice"
      dataTestId="reasons-poor-choice"
    />,
  ],
};

export const Radio = Template.bind({});
Radio.args = {
  controlType: "radiofield",
  controlId: "nutella-check-1",
  controlName: "nutellaCheckOne",
  controlLabel: "Do you not like Nutella ?",
  checked: true,
  controlDataTestId: "radio-check-1",
  listLabel: "Please check all the reasons why you are wrong.",
  requiredText: " (required)",
  optionalText: " (optional)",
  children: [
    <CheckBox
      key="key1"
      label="I don't like fake chocolate spread"
      name="reasons"
      value="dislike"
      id="reasons-dislike"
      dataTestId="reasons-dislike"
    />,
    <CheckBox
      key="key2"
      label="I make poor choices"
      name="reasons"
      value="poor-choice"
      id="reasons-poor-choice"
      dataTestId="reasons-poor-choice"
    />,
  ],
};

export const UnControlled = Template.bind({});
UnControlled.args = {
  controlId: "nutella-check-1",
  controlName: "nutellaCheckOne",
  controlLabel: "Do you not like Nutella ?",
  uncontrolled: true,
  controlDataTestId: "uncontrolled-check-1",
  listLabel: "Please check all the reasons why you are wrong.",
  requiredText: " (required)",
  optionalText: " (optional)",
  children: [
    <CheckBox
      key="key1"
      label="I don't like fake chocolate spread"
      name="reasons"
      value="dislike"
      id="reasons-dislike"
      dataTestId="reasons-dislike"
    />,
    <CheckBox
      key="key2"
      label="I make poor choices"
      name="reasons"
      value="poor-choice"
      id="reasons-poor-choice"
      dataTestId="reasons-poor-choice"
    />,
  ],
};
