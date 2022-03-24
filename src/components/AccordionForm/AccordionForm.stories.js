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
          <p>Random text for testing purposes. Test test testest testing</p>
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
          <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
        </div>,
      ],
      buttonLabel: "Residency",
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
          <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
        </div>,
      ],
      buttonLabel: "Marital Status",
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
    },
  ],
};
