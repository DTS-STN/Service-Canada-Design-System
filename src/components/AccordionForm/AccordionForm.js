/**
 * Note issues with using icon when importing this component to other components.
 * Must be fixed before officially releasing this component. testin
 */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

/**
 * Accordion Component. The following example shows how you may populate the accordion
 * with your wanted material. Click the 'Show code' option, located in the bottom right of the
 * canvas below, to see the coding example used to create the given example.
 */

export function AccordionForm(props) {
  const { cards, id, cardsState } = props;
  const cardsRefs = cards.map(() => React.useRef(null));
  const sectionNextClick = React.useCallback((cardId, index) => {
    return (e) => {
      e.preventDefault();
      if (cardsState[cardId].isValid) {
        const curIndex = cards.findIndex(({ id }) => {
          return id == cardId;
        });
        if (cards[curIndex + 1]) {
          const nextCard = cards[curIndex + 1].id;
          setDirtyCards((curDirtyCards) => {
            return !curDirtyCards.includes(nextCard)
              ? [...curDirtyCards, nextCard]
              : curDirtyCards;
          });
          if (cardsRefs[index + 1].current)
            window.scrollTo({
              top: cardsRefs[index + 1].current.offsetTop,
              left: 0,
              behavior: "smooth",
            });
        }
      }
    };
  }, []);

  const [cardsOpenState] = React.useState(() => {
    return generateCardOpenStates(cardsState);
  });

  const [dirtyCards, setDirtyCards] = React.useState([]);

  React.useEffect(() => {
    const openCardsEntries = Object.entries(cardsOpenState);
    setDirtyCards((currentDirtyCards) => {
      const updatedDirtyCards = [...currentDirtyCards];
      openCardsEntries.forEach(([cardId, isCardOpen]) => {
        if (isCardOpen && !currentDirtyCards.includes(cardId)) {
          updatedDirtyCards.push(cardId);
        }
      });
      return updatedDirtyCards;
    });
  }, [cardsOpenState]);

  const cardRenders = React.useMemo(() => {
    return cards.map((card, index, cardsArr) => {
      const isLastCard = !cardsArr[index + 1];
      const isNextFillableCard = cardsOpenState[card.id];
      const hasAlreadyBeenFilled = dirtyCards.includes(card.id);
      const isOpen = isNextFillableCard || hasAlreadyBeenFilled;
      const nextCardIsOpen =
        !isLastCard && dirtyCards.includes(cardsArr[index + 1].id);
      return (
        <div
          id={card.id}
          className={
            nextCardIsOpen
              ? "ds-border ds-border-solid ds-border-multi-neutrals-grey85a ds-bg-multi-neutrals-grey5 ds-px-24px ds-py-18px ds-rounded ds-my-16px"
              : isOpen
              ? "ds-border ds-border-solid ds-border-multi-blue-blue60d ds-bg-multi-blue-blue1 ds-px-24px ds-py-18px ds-rounded ds-my-16px"
              : "ds-border ds-border-solid ds-text-multi-neutrals-grey85a ds-border-multi-neutrals-grey85a ds-bg-multi-neutrals-white ds-px-24px ds-py-18px ds-rounded ds-my-16px"
          }
          style={{
            marginBottom: "5px",
            paddingBottom: "5px",
          }}
          key={`accordion-form-card-${card.id}`}
          ref={cardsRefs[index]}
        >
          {/* Number for the given card */}
          <div className="ds-flex-col ds-pb-12px">
            <div className="cardNumber ds-flex ds-flex-row">
              <div className="ds-relative ds-rounded-full ds-w-48px ds-h-48px ds-bg-multi-blue-blue60d">
                <p
                  className="ds-absolute ds-left-3.5 ds-bottom-0.5 ds-accordion-num"
                  style={{ lineHeight: "48px" }}
                >
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
                  {/* <pre>
                    section: {card.id} <br />
                    open: {isOpen ? "true" : "false"}
                    <br />
                    valid: {isValid ? "true" : "false"}
                  </pre> */}
                  {card.children}
                  <div className="ds-pt-32px">
                    {!isLastCard ? (
                      <Button
                        text={`Next Step: ${card.buttonLabel}`}
                        styling="primary"
                        iconAltText="icon"
                        onClick={sectionNextClick(card.id, index)}
                        disabled={nextCardIsOpen}
                      />
                    ) : (
                      <Button
                        text={`Next Step: ${card.buttonLabel}`}
                        styling="primary"
                        iconAltText="icon"
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
  }, [dirtyCards, cardsState]);

  return (
    <form className="AccordionForm" noValidate id={id}>
      {cardRenders}
    </form>
  );
}

const generateCardOpenStates = (cardsState) => {
  const cardsObj = {};
  let firstInvalidCardId;
  Object.entries(cardsState).forEach(([cardId, cardState]) => {
    cardsObj[cardId] = cardState.isValid;
    if (!cardState.isValid && !firstInvalidCardId) {
      firstInvalidCardId = cardId;
      console.log(cardsObj[cardId]);
    }
  });
  // up until here, all invalid ones are false and all valid are true
  // open up the first invalid one that's found so the user can enter data
  cardsObj[firstInvalidCardId] = true;
  return cardsObj;
};

AccordionForm.defaultProps = {
  id: "defaultAccordion",
  cards: {
    id: "card1",
    title: "card1",
    children: <>default</>,
    buttonLabel: "card1 button",
    buttonOnChange: () => {},
  },
  cardState: {
    step1: { isValid: false },
  },
};

AccordionForm.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,
  /**
   *  card props:
   *
   *  id: id of the given card
   *
   *  title: heading of the given card
   *
   *  children: code passed in to fill the given card.
   *
   *  buttonLabel: text on the given cards button
   *
   *  buttonOnChange: onChange function added to given cards button
   * */
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]),
      buttonLabel: PropTypes.string,
      buttonOnChange: PropTypes.func,
    })
  ),
  /**
   * prop used to help validate each card before opening the next card
   * */
  cardsState: PropTypes.objectOf(PropTypes.any),
};
