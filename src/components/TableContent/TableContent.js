import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";

export function TableContent(props) {
  const lang = props.lang?.trim?.() === "fr" ? "fr" : "en";
  const { id, sectionList } = props;
  return (
    <>
      <section id={id}>
        <h3 className="ds-heading3">
          {lang === "en" ? "On this Page" : "Sur cette page"}
        </h3>
        <ul className="ds-pl-22px ds-ml-14px">
          {sectionList.map((option, index) => {
            return (
              <li
                key={index}
                className={
                  "ds-body ds-underline-offset-3.1 ds-decoration-1 ds-pr-4 ds-list-outside ds-list-disc"
                }
              >
                <Link
                  href={option.link}
                  id={`tableLink${index + 1}`}
                  text={option.name}
                  linkStyle="cardActionLink"
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

TableContent.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * list of sections in table of contents
   */
  sectionList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  lang: PropTypes.string,
};
