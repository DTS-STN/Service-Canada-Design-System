import React from "react";
import { AccordionForm } from "./AccordionForm";
import { TextField } from "../TextField/TextField";

export default {
  title: "Components/AccordionForm",
  component: AccordionForm,
};

const Template = () => {
  const [cardsValid, setCardsValid] = React.useState({
    step1: { isValid: false },
    step2: { isValid: false },
    step3: { isValid: false },
    step4: { isValid: false },
  });

  const onInputChange = (id, value) => {
    if (value === "valid") {
      setCardsValid((currentCardsData) => {
        const updatedCardsData = { ...currentCardsData };
        updatedCardsData[id].isValid = true;
        return updatedCardsData;
      });
    } else {
      setCardsValid((currentCardsData) => {
        const updatedCardsData = { ...currentCardsData };
        updatedCardsData[id].isValid = false;
        return updatedCardsData;
      });
    }
  };
  const cards = [
    {
      id: "step1",
      title: "Age",
      buttonLabel: "Income",
      children: [
        <div>
          <TextField
            dataTestId="textbox-uncontrolled"
            helpText="Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences"
            id="textField1"
            infoText="Help Text"
            label="I am a text field"
            name="textField1"
            className="ds-w-165px"
            onChange={(value) => {
              onInputChange("step1", value);
            }}
            optionalText="optional"
            requiredText="required"
            uncontrolled
          />
        </div>,
      ],
    },
    {
      id: "step2",
      title: "Income",
      children: [
        <div>
          <TextField
            dataTestId="textbox-uncontrolled"
            helpText="Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences"
            id="textField1"
            infoText="Help Text"
            label="I am a text field"
            name="textField1"
            className="ds-w-165px"
            onChange={(value) => {
              onInputChange("step2", value);
            }}
            optionalText="optional"
            requiredText="required"
            uncontrolled
          />
        </div>,
      ],
      buttonLabel: "Residency",
    },
    {
      id: "step3",
      title: "Residency",
      children: [
        <div>
          <TextField
            dataTestId="textbox-uncontrolled"
            helpText="Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences"
            id="textField1"
            infoText="Help Text"
            label="I am a text field"
            name="textField1"
            className="ds-w-165px"
            onChange={(value) => {
              onInputChange("step3", value);
            }}
            optionalText="optional"
            requiredText="required"
            uncontrolled
          />
        </div>,
      ],
      buttonLabel: "Marital Status",
    },

    {
      id: "step4",
      title: "Marital Status",
      children: [
        <div>
          <TextField
            dataTestId="textbox-uncontrolled"
            helpText="Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences"
            id="textField1"
            infoText="Help Text"
            label="I am a text field"
            name="textField1"
            className="ds-w-165px"
            onChange={(value) => {
              onInputChange("step4", value);
            }}
            optionalText="optional"
            requiredText="required"
            uncontrolled
          />
        </div>,
      ],
      buttonLabel: "Next",
    },
  ];
  return <AccordionForm id="testing" cards={cards} cardsState={cardsValid} />;
};

export const Default = Template.bind({});

Default.args = {};
