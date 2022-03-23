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
      title: "CARD 1",
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
      buttonLabel: "next",
      // ref: React.useRef(null)
    },
    {
      id: "step2",
      title: "CARD 2",
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
      buttonLabel: "next",
      // ref: React.useRef(null)
    },
    {
      id: "step3",
      title: "CARD 3",
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
      buttonLabel: "next",
      // ref: React.useRef(null)
    },
  ],
};
