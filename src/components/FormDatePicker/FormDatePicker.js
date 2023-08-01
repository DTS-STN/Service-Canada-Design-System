/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormError } from "../FormError/FormError";
import { FormDropdown } from "../FormDropdown/FormDropdown";
import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";
import "./styles.css";

const restrictNonNumbers = (e) => {
  const matcher = new RegExp(/[\D]/g);
  e.target.value = e.target.value.replaceAll(matcher, "");
};

export function FormDatePicker(props) {
  const {
    id,
    yearId,
    monthId,
    dayId,
    lang,
    onMonthChange,
    onDayChange,
    onYearChange,
    hasDay,
    hasYear,
    hasHint,
    hasAge,
    defaultDay,
    defaultYear,
    maxDay,
    minYear,
    maxYear,
    hasLabel,
    hasError,
    formLabelProps,
    formErrorProps,
    hintProps,
  } = props;

  const [age, setAge] = useState(0);
  const language = lang === "en" ? EN : lang === "fr" ? FR : EN;
  const [has_year, setHasYear] = useState(false);
  const [has_month, setHasMonth] = useState(false);
  const [has_day, setHasDay] = useState(false);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  const monthValuesEN = [
    { id: "1", value: "January" },
    { id: "2", value: "February" },
    { id: "3", value: "March" },
    { id: "4", value: "April" },
    { id: "5", value: "May" },
    { id: "6", value: "June" },
    { id: "7", value: "July" },
    { id: "8", value: "August" },
    { id: "9", value: "September" },
    { id: "10", value: "October" },
    { id: "11", value: "November" },
    { id: "12", value: "December" },
  ];

  const monthValuesFR = [
    { id: "1", value: "janvier" },
    { id: "2", value: "février" },
    { id: "3", value: "mars" },
    { id: "4", value: "avril" },
    { id: "5", value: "mai" },
    { id: "6", value: "juin" },
    { id: "7", value: "juillet" },
    { id: "8", value: "août" },
    { id: "9", value: "septembre" },
    { id: "10", value: "octobre" },
    { id: "11", value: "novembre" },
    { id: "12", value: "décembre" },
  ];

  const _onDayChange = (e) => {
    restrictNonNumbers(e);
    onDayChange(e);
    setHasDay(!!e.target.value);
    setDay(e.target.value);
  };

  const _onMonthChange = (option) => {
    onMonthChange(option);
    setHasMonth(!!option);
    setMonth(option);
  };

  const _onYearChange = (e) => {
    restrictNonNumbers(e);
    onYearChange(e);
    setHasYear(!!e.target.value);
    setYear(e.target.value);
  };

  useEffect(() => {
    // Convert date number into Date object, calculate the difference between currentDate and givenDate to get the age.
    let givenDate = new Date(year, month, day);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - givenDate.getFullYear();

    // The getMonth() method in JavaScript returns a zero-based index for the month of a Date object.
    let currentMonth = currentDate.getMonth() + 1;
    let givenMonth = givenDate.getMonth();

    // Calculate the real age. If the current date's month and day is before the given date's month and day, subtract 1 year from the calculated age.
    if (
      currentMonth < givenMonth ||
      (currentMonth === givenMonth &&
        currentDate.getDate() < givenDate.getDate())
    ) {
      return setAge(age - 1); // Subtract 1 year if the current date is before the given date
    }
    setAge(age);
    // blur the input element on scroll instead of changing the value! Does not affect Keyboard input.
    const handleScroll = () => {
      const el = document.activeElement;
      if (el?.type === "number") {
        el.blur();
      }
    };
    document.addEventListener("wheel", handleScroll);

    // remove event listener when component unmounts
    return () => document.removeEventListener("wheel", handleScroll);
  }, [year, month, day]);

  const validationClass = hasError
    ? "ds-border-specific-red-red50b focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input"
    : "ds-border-multi-neutrals-grey85a focus:ds-border-multi-blue-blue60f focus:ds-shadow-text-input";

  return (
    <>
      {hasLabel ? (
        <FormLabel
          label={formLabelProps.label}
          required={formLabelProps.required}
          infoText={formLabelProps.infoText}
          helpText={formLabelProps.helpText}
          hasHint={hasHint}
          hintProps={hintProps}
        />
      ) : null}
      <div id={id} className="datePicker ds-relative ds-flex ds-flex-wrap">
        <div className="ds-flex ds-flex-col sm:ds-pr-24px ds-pr-8px">
          <label className="ds-form-date" htmlFor={monthId}>
            {language.datePicker.month}
          </label>
          <div
            className={`${
              lang === "en" ? "ds-w-[180px]" : "ds-w-[250px]"
            } ds-pb-8px`}
          >
            <FormDropdown
              dropdownProps={{
                defaultValue:
                  lang === "en"
                    ? EN.monthDropdownPlaceholder
                    : FR.monthDropdownPlaceholder,

                monthDropdown: true,
                monthValues:
                  props.lang === "en" ? monthValuesEN : monthValuesFR,
                options: props.lang === "en" ? monthValuesEN : monthValuesFR,
                onChange: _onMonthChange,
              }}
            />
          </div>
        </div>
        {hasDay ? (
          <div className="ds-flex ds-flex-col sm:ds-pr-24px ds-pr-8px ds-pb-8px">
            <label htmlFor={dayId} className="ds-form-date">
              {language.datePicker.day}
            </label>
            <input
              id={dayId}
              defaultValue={defaultDay}
              type="tel"
              min={"1"}
              max={maxDay}
              onChange={_onDayChange}
              className={`ds-w-[51px] ds-px-10px ds-rounded ds-date-text ds-border-2 ds-border-multi-neutrals-grey85a ds-py-5px ds-outline-none ${validationClass}`}
            />
          </div>
        ) : null}
        {hasYear ? (
          <div className="ds-flex ds-flex-col ds-pr-[16px] ds-pb-8px">
            <label htmlFor={yearId} className="ds-form-date">
              {language.datePicker.year}
            </label>
            <input
              id={yearId}
              defaultValue={defaultYear}
              type="tel"
              min={minYear}
              max={maxYear}
              onChange={_onYearChange}
              className={`ds-w-[74px] ds-py-5px ds-px-10px ds-rounded ds-date-text ds-border-2 ds-border-multi-neutrals-grey85a ds-outline-none ${validationClass}`}
            />
          </div>
        ) : null}
        {hasAge && has_day && has_month && has_year && year > 1000 && (
          <div className="ds-flex ds-flex-col ds-pb-8px">
            <label className="ds-form-date">
              {lang === "en" ? "You are" : "Vous avez"}
            </label>
            <p className="ds-h-[44px] ds-flex ds-items-center ds-font-body ds-text-[20px] ds-text-multi-neutrals-grey100 ds-whitespace-nowrap">
              {`${age < 1 ? 1 : age > 120 ? 120 : age} ${
                lang === "en" ? (age > 1 ? "years old" : "year old") : "ans"
              }`}
            </p>
          </div>
        )}
      </div>
      {hasError ? (
        <FormError errorMessage={formErrorProps.errorMessage} />
      ) : null}
    </>
  );
}

FormDatePicker.defaultProps = {
  onMonthChange: () => {},
  onDayChange: () => {},
  onYearChange: () => {},
  hasDay: true,
  hasYear: true,
  hasError: false,
  hasLabel: false,
  maxDay: 31,
  minYear: 0,
  maxYear: 10000,
  lang: "en",
  yearId: "datePickerYear",
  monthId: "datePickerMonth",
  dayId: "datePickerDay",
};

FormDatePicker.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,
  yearId: PropTypes.string,
  monthId: PropTypes.string,
  dayId: PropTypes.string,
  /**
   * Switch between english and french header. Pass in "en" or "fr"
   */
  lang: PropTypes.oneOf(["en", "fr"]),

  onMonthChange: PropTypes.func,
  onDayChange: PropTypes.func,
  onYearChange: PropTypes.func,

  hasDay: PropTypes.bool,
  hasYear: PropTypes.bool,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  hasError: PropTypes.bool,
  hasLabel: PropTypes.bool,
  maxDay: PropTypes.number,
  minYear: PropTypes.number,
  maxYear: PropTypes.number,

  /**
   * Form Error Props
   */
  formErrorProps: PropTypes.shape({
    id: PropTypes.string,
    errorMessage: PropTypes.string,
  }),

  /**
   * Form Label Props
   */
  formLabelProps: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    helpText: PropTypes.string,
  }),

  /**
   * Option to show and custom Hint Expander
   */
  hasHint: PropTypes.bool,

  /**
   * Hint Expander props
   */
  hintProps: PropTypes.shape({
    textLink: PropTypes.string,
    description: PropTypes.string,
    withLink: PropTypes.bool,
    externalLinkText: PropTypes.string,
    optionalLinkText: PropTypes.string,
  }),

  /**
   * Option to show age
   */
  hasAge: PropTypes.bool,
};
