import React from "react";
import { AccordionForm } from "./AccordionForm";

export default {
  title: "Components/AccordionForm",
  component: AccordionForm,
};

const Template = () => {
  const [cardsValid, setCardsValid] = React.useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });
  const onInputChange = React.useCallback((sectionId) => {
    return (e) => {
      console.log("undefined here");
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
