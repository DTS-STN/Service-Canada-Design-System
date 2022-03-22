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
      isValid: true,
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
      id: "step2",
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
