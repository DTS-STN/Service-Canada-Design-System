/**
 * Note issues with using icon when importing this component to other components.
 * Must be fixed before officially releasing this component. testin
 */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

export function AccordionForm(props) {
  const { cards, id, cardsValid } = props;
  const sectionNextClick = React.useCallback((cardId) => {
    return (e) => {
      console.log("CaRD ID", cardId);
      e.preventDefault();
      const curIndex = cards.findIndex(({ id }) => {
        return id == cardId;
      });
      if (cards[curIndex + 1]) {
        const nextCard = cards[curIndex + 1].id;
        console.log("NEXT", nextCard);
        setDirtyCards((curDirtyCards) => {
          return [...curDirtyCards, nextCard];
        });
      }
    };
  }, []);

  const [cardsOpenState, setCardsOpenState] = React.useState(() => {
    return generateCardOpenStates(cardsValid);
  });

  const [dirtyCards, setDirtyCards] = React.useState([]);

  React.useEffect(() => {
    setCardsOpenState(generateCardOpenStates(cardsValid));
  }, [cardsValid]);

  React.useEffect(() => {
    const openCardsEntries = Object.entries(cardsOpenState);
    setDirtyCards((currentDirtyCards) => {
      console.log("current dirty", currentDirtyCards);
      const updatedDirtyCards = [...currentDirtyCards];
      openCardsEntries.forEach(([cardId, isCardOpen]) => {
        console.log(cardId, "card open value", isCardOpen);
        if (isCardOpen && !currentDirtyCards.includes(cardId)) {
          updatedDirtyCards.push(cardId);
        }
      });
      return updatedDirtyCards;
    });
  }, [cardsOpenState]);

  const cardRenders = React.useMemo(() => {
    return cards.map((card, index, cardsArr) => {
      const isValid = !!cardsValid[card.id].isValid;
      const isLastCard = !cardsArr[index + 1];
      const isNextFillableCard = cardsOpenState[card.id];
      const hasAlreadyBeenFilled = dirtyCards.includes(card.id);
      const isOpen = isNextFillableCard || hasAlreadyBeenFilled;
      const nextCardIsOpen =
        !isLastCard && dirtyCards.includes(cardsArr[index + 1].id);
      console.log("NEXT CARD IS OPEN", nextCardIsOpen);

      return (
        <div
          className="ds-bg-multi-blue-blue1 ds-px-24px ds-py-18px ds-rounded ds-my-16px"
          style={{
            border: "1px solid #295376",
            marginBottom: "5px",
            paddingBottom: "5px",
          }}
          key={`accordion-form-card-${card.id}`}
        >
          {/* Number for the given card */}
          <div className="ds-flex-col ds-pb-12px">
            <div className="cardNumber ds-flex ds-flex-row">
              <div className="ds-relative ds-rounded-full ds-w-48px ds-h-48px ds-bg-multi-blue-blue60d">
                <p className="ds-absolute ds-left-3.5 ds-bottom-0.5 ds-accordion-num">
                  {index + 1}
                </p>
              </div>
              {isOpen ? (
                <p className="ds-accordion-header ds-pl-14px ds-pb-18px">
                  {card.title}
                </p>
              ) : (
                <p className="ds-accordion-header ds-pl-14px">{card.title}</p>
              )}
            </div>
            {/* Content contained on the given card */}
            <div className="cardContent sm:ds-pl-60px">
              {isOpen && (
                <>
                  <pre>
                    section: {card.id} <br />
                    open: {isOpen ? "true" : "false"}
                    <br />
                    valid: {isValid ? "true" : "false"}
                  </pre>
                  {card.children}
                  <div className="ds-pt-32px">
                    {!isLastCard ? (
                      <Button
                        text={`Next Step: ${card.buttonLabel}`}
                        styling="primary"
                        onClick={sectionNextClick(card.id)}
                        disabled={nextCardIsOpen}
                      />
                    ) : (
                      <Button
                        text={`Next Step: ${card.buttonLabel}`}
                        styling="primary"
                        onClick={card.buttonOnChange}
                        type="submit"
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    });
  }, [dirtyCards]);

  return (
    <form className="AccordionForm" noValidate id={id}>
      {cardRenders}
    </form>
  );
}

const generateCardOpenStates = (cardsValid) => {
  const cardsObj = {};
  let firstInvalidCardId;
  Object.entries(cardsValid).forEach(([cardId, cardState]) => {
    cardsObj[cardId] = cardState.isValid;
    if (!cardState.isValid && !firstInvalidCardId) {
      firstInvalidCardId = cardId;
      console.log(cardsObj[cardId]);
    }
  });

  console.log("first invalid card id", firstInvalidCardId);

  // up until here, all invalid ones are false and all valid are true
  // open up the first invalid one that's found so the user can enter data
  cardsObj[firstInvalidCardId] = true;
  return cardsObj;
};

AccordionForm.propTypes = {
  id: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      // ref: PropTypes.any,
      children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]),
      buttonLabel: PropTypes.string,
      buttonOnChange: PropTypes.func,
    })
  ),
  cardsValid: PropTypes.objectOf(PropTypes.any),
};
