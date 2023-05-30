/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
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
    day,
    month,
    year,
    maxDay,
    minYear,
    maxYear,
    hasLabel,
    hasError,
    formLabelProps,
    formErrorProps,
    hintProps,
  } = props;

  const language = lang === "en" ? EN : lang === "fr" ? FR : EN;

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
  };

  const _onYearChange = (e) => {
    restrictNonNumbers(e);
    onYearChange(e);
  };

  useEffect(() => {
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
  }, []);

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
      <div id={id} className="datePicker ds-relative ds-flex">
        <div className="ds-flex ds-flex-col sm:ds-pr-24px ds-pr-8px">
          <label className="ds-form-date" htmlFor={monthId}>
            {language.datePicker.month}
          </label>
          <div className={lang === "en" ? "ds-w-[180px]" : "ds-w-[250px]"}>
            <FormDropdown
              defaultValue={
                lang === "en" ? "Select month" : "Sélectionner le mois"
              }
              options={props.lang === "en" ? monthValuesEN : monthValuesFR}
              onChange={onMonthChange}
            />
          </div>
        </div>
        {hasDay ? (
          <div className="ds-flex ds-flex-col sm:ds-pr-24px ds-pr-8px">
            <label htmlFor={dayId} className="ds-form-date">
              {language.datePicker.day}
            </label>
            <input
              id={dayId}
              defaultValue={day}
              type="tel"
              min={"1"}
              max={maxDay}
              onChange={_onDayChange}
              className={`ds-w-[51px] ds-px-10px ds-rounded ds-date-text ds-border-2 ds-border-multi-neutrals-grey85a ds-py-5px ds-outline-none ${validationClass}`}
            />
          </div>
        ) : null}
        {hasYear ? (
          <div className="ds-flex ds-flex-col">
            <label htmlFor={yearId} className="ds-form-date">
              {language.datePicker.year}
            </label>
            <input
              id={yearId}
              defaultValue={year}
              type="tel"
              min={minYear}
              max={maxYear}
              onChange={_onYearChange}
              className={`ds-w-[74px] ds-py-5px ds-px-10px ds-rounded ds-date-text ds-border-2 ds-border-multi-neutrals-grey85a ds-outline-none ${validationClass}`}
            />
          </div>
        ) : null}
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
};
