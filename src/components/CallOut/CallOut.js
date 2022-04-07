import PropTypes from "prop-types";
import React from "react";
import { AccordionForm } from "../AccordionForm/AccordionForm";
import { CheckBoxes } from "../CheckBoxes/CheckBoxes";
import { Message } from "../Message/Message";

export function CallOut(props) {
  const {} = props;
  const [errorState, setErrorState] = React.useState(false);
  const cardsValid = {
    step1: { isValid: false },
  };
  const cards = [
    {
      id: "step1",
      title: "Age",
      buttonLabel: "Income",
      children: [
        <div>
          <CheckBoxes
            id="checkbox 1"
            label="Option 1"
            name="ChexBox1"
            onChange={() => {
              setErrorState(!errorState);
            }}
            value="IsChecked"
          />
          {errorState ? (
            <div className="ds-mt-10px">
              <Message
                alert_icon_alt_text="danger icon"
                alert_icon_id="danger icon"
                id="danger"
                message_body="Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected"
                message_heading="COVID-19 New services and service changes"
                type="danger"
              />
            </div>
          ) : null}
        </div>,
      ],
    },
  ];

  return (
    <>
      <AccordionForm id="testing" cards={cards} cardsState={cardsValid} />
    </>
  );
}

CallOut.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,
};
