/**
 * Note issues with using icon when importing this component to other components.
 * Must be fixed before officially releasing this component. testin
 */
import PropTypes from "prop-types";
import React from "react";

export function AccordionForm(props) {
  const { cards, id } = props;
  let curIndex = 0;
  const sectionNextClick = React.useCallback((e) => {
    e.preventDefault();
    curIndex += 1;
    // setCardsOpenState(cardsOpenState[cards[curIndex].id])
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
            style={{
              borderBottom: "1px solid black",
              marginBottom: "5px",
              paddingBottom: "5px",
            }}
          >
            {/* Heading for the given card */}
            <div className="cardHeading ds-flex ds-flex-row">
              <div className="ds-relative ds-rounded-full ds-w-10 ds-h-10 ds-bg-multi-neutrals-grey5">
                <p>{index + 1}</p>
              </div>
              <p className="ds-heading3">{card.title}</p>
            </div>
            {/* Content contained on the given card */}
            <div className="cardContent">
              section: {card.id} <br />
              open: {cardsOpenState[card.id] ? "true" : "false"}
              <br />
              valid: {card.isValid ? "true" : "false"}
            </div>
            {cardsOpenState[card.id] && (
              <>
                {card.children}
                <button onClick={sectionNextClick} type="button">
                  {card.buttonLabel}
                </button>
              </>
            )}
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
