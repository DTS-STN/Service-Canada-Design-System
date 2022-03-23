/**
 * Note issues with using icon when importing this component to other components.
 * Must be fixed before officially releasing this component. testin
 */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

export function AccordionForm(props) {
  const { cards, id } = props;
  let curIndex = 0;
  const sectionNextClick = React.useCallback((e) => {
    e.preventDefault();
    curIndex += 1;
    setCardsOpenState(cardsOpenState[cards[curIndex].id]);
  }, []);

  const [cardsOpenState, setCardsOpenState] = React.useState(() => {
    const cardsObj = {};
    let firstInvalidCardId;
    cards.forEach((card) => {
      cardsObj[card.id] = card.isValid;
      if (!card.isValid && !firstInvalidCardId) {
        firstInvalidCardId = card.id;
        console.log(cardsObj[card.id]);
      }
    });

    console.log("first invalid card id", firstInvalidCardId);

    // up until here, all invalid ones are false and all valid are true
    // open up the first invalid one that's found so the user can enter data
    cardsObj[firstInvalidCardId] = true;

    return cardsObj;
  });

  return (
    <form className="AccordionForm" noValidate id={id}>
      {cards.map((card, index) => {
        console.log(index + 1);
        return (
          <div
            className="ds-bg-multi-blue-blue5 ds-p-12px ds-rounded "
            style={{
              border: "1px solid black",
              marginBottom: "5px",
              paddingBottom: "5px",
            }}
          >
            {/* Number for the given card */}
            <div className="cardNumber ds-flex ds-flex-row ds-pb-12px">
              <div className="ds-relative ds-rounded-full ds-w-12 ds-h-12 ds-bg-multi-blue-blue65">
                <p className="ds-absolute ds-left-3.5 ds-bottom-2 ds-text-multi-neutrals-white ds-text-mobileh2">
                  {index + 1}
                </p>
              </div>
              {/* Content contained on the given card */}
              <div className="cardContent ds-pl-14px ">
                <p className="ds-heading3 ds-pt-5px">{card.title}</p>
                section: {card.id} <br />
                open: {cardsOpenState[card.id] ? "true" : "false"}
                <br />
                valid: {card.isValid ? "true" : "false"}
                {cardsOpenState[card.id] && (
                  <>
                    {card.children}
                    <div className="ds-pt-12px">
                      <Button
                        text={`Next Step: ${card.buttonLabel}`}
                        styling="primary"
                        onClick={sectionNextClick}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </form>
  );
}

AccordionForm.propTypes = {
  id: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      isValid: PropTypes.bool,
      // ref: PropTypes.any,
      children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]),
      buttonLabel: PropTypes.string,
    })
  ),
};
