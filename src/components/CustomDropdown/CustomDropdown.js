import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./CustomDropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FormError } from "../FormError/FormError";
import SearchIcon from "../../assets/search-icon.svg";

export const CustomDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);
  const [searchOption, setSearchOption] = useState("");
  const searchInputRef = useRef(null);

  const clampedMinValue = Math.max(0, props.minValue);
  const clampedMaxValue = Math.min(99, props.maxValue);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.onChange(option);
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    setSearchOption(event.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const numberOptions = [];
  for (let i = clampedMinValue; i <= clampedMaxValue; i++) {
    numberOptions.push({ id: i.toString(), value: i.toString() });
  }

  const combinedOptions = [...numberOptions, ...(props.options || [])];

  return (
    <>
      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <button
          className={`${isOpen ? "ds-rounded-t-[4px]" : "ds-rounded-[4px]"} ${
            props.hasError ? "ds-border-[#D3080C]" : "ds-border-[#6f6f66]"
          } dropdown-select ds-border-2`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div className={`ds-flex ${props.hasSearch ? "" : "ds-hidden"}`}>
              <img src={SearchIcon} alt="search icon" />
              <input
                type="text"
                value={searchOption}
                ref={searchInputRef}
                onChange={handleSearch}
                placeholder="Search..."
                className="input-search"
              />
            </div>
          ) : (
            selectedOption
          )}
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ color: "#666666" }}
            className="ds-absolute ds-right-0 ds-px-[14px]"
          />
        </button>
        <div className="dropdown-open">
          {isOpen && (
            <ul className="dropdown-options">
              {combinedOptions
                .filter((option) =>
                  option.value
                    .toLowerCase()
                    .includes(searchOption.toLowerCase())
                )
                .map((option, index) => (
                  <li
                    key={option.id}
                    className={`${
                      index === 0
                        ? "ds-border-none"
                        : "ds-border-t-[1px] ds-border-[#666666] ds-border-opacity-60"
                    } ${option.value === selectedOption ? "selected" : ""}`}
                  >
                    <button
                      onClick={() => handleOptionClick(option.value)}
                      className="dropdown-option"
                    >
                      {option.value}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
        {props.hasError && <FormError errorMessage={props.errorText} />}
      </div>
    </>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, value: PropTypes.string })
  ),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
};
