import React from "react";
import { AccordionForm } from "./AccordionForm";

export default {
  title: "Components/AccordionForm",
  component: AccordionForm,
};

const Template = (args) => <AccordionForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "testing",
  cards: [
    {
      id: "step1",
      title: "Age",
      isValid: false,
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
            onChange={() => {
              console.log("test");
            }}
          />
        </div>,
      ],
      buttonLabel: "Income",
    },
    {
      id: "step2",
      title: "Income",
      isValid: false,
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
          />
        </div>,
      ],
      buttonLabel: "Residency",
      // ref: React.useRef(null)
    },
    {
      id: "step3",
      title: "Residency",
      isValid: false,
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
          />
        </div>,
      ],
      buttonLabel: "Marital Status",
      // ref: React.useRef(null)
    },

    {
      id: "step4",
      title: "Marital Status",
      isValid: false,
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
          />
          <p>random text</p>
        </div>,
      ],
      buttonLabel: "Next",
      // ref: React.useRef(null)
    },
  ],
};
