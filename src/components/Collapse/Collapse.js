import PropTypes from "prop-types";
import React from "react";

export function Collapse(props) {
  const { id, title, Children } = props;
  return (
    <details
      key={id}
      id={id}
      className="ds-px-22px ds-mb-5px ds-text-multi-neutrals-grey100 ds-leading-33px  ds-text-mobileh5 ds-font-body"
      data-testid={`${id}-${props.dataTestId}`}
    >
      <summary
        key={`summary-${id}`}
        className="ds-text-multi-blue-blue60d hover:hover:ds-text-multi-blue-blue50b hover:ds-underline ds-border ds-border-multi-neutrals-grey40  ds-rounded ds-px-15px ds-py-5px ds-cursor-pointer ds-select-none ds-outline-none"
      >
        {title}
      </summary>
      {Children}
    </details>
  );
}

Collapse.defaultProps = {
  id: "defaultAccordion",
};

Collapse.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Title of the collapsible header
   */
  title: PropTypes.string,

  /**
   * code passed in to fill the expanded area.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
};
