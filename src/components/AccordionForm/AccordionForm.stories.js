import React from "react";
import { AccordionForm } from "./AccordionForm";

export default {
  title: "Components/AccordionForm",
  component: AccordionForm,
};

const Template = (args) => {
  const [cardsValid, setCardsValid] = React.useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  });
  const onInputChange = React.useCallback((sectionId) => {
    return (e) => {
      console.log(e.target.value);
      // if (e.target.value === 'valid') {
      //   setCardsValid((currentCardsData) => {
      //     const updatedCardsData = { ...currentCardsData }
      //     updatedCardsData[sectionId].isValid = true
      //     return updatedCardsData
      //   })
      // } else {
      //   setCardsValid((currentCardsData) => {
      //     const updatedCardsData = { ...currentCardsData }
      //     updatedCardsData[sectionId].isValid = false
      //     return updatedCardsData
      //   })
      // }
    };
  }, []);
  const cards = [
    {
      id: "step1",
      title: "Age",
      buttonLabel: "Income",
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
            onChange={onInputChange("step1")}
          />
          <p>Random text for testing purposes. Test test testest testing</p>
        </div>,
      ],
    },
    {
      id: "step2",
      title: "Income",
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
            onChange={onInputChange("step2")}
          />
          <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
        </div>,
      ],
      buttonLabel: "Residency",
    },
    {
      id: "step3",
      title: "Residency",
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
            onChange={onInputChange("step3")}
          />
          <input type="checkbox" id="myCheck" onclick="myFunction()"></input>
        </div>,
      ],
      buttonLabel: "Marital Status",
    },

    {
      id: "step4",
      title: "Marital Status",
      children: [
        <div>
          <input
            type="text"
            style={{
              border: "1px solid black",
            }}
            onChange={onInputChange("step4")}
          />
          <p>random text</p>
        </div>,
      ],
      buttonLabel: "Next",
    },
  ];
  return <AccordionForm id="testing" cards={cards} cardsValid={cardsValid} />;
};

export const Default = Template.bind({});

Default.args = {};
