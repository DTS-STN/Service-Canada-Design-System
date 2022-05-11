import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";

export function Contributors(props) {
  const { id, contributorList } = props;

  return (
    <section id={id}>
      <p className="ds-heading2">Contributors</p>
      <ul className="ds-pl-22px ds-ml-14px">
        {contributorList.map((option, index) => {
          return (
            <li
              key={index}
              className={
                "ds-text-2xl ds-underline-offset-3.1 ds-decoration-1 ds-pr-4 sm:ds-mb-4 ds-mb-5 marker:ds-text-multi-neutrals-grey85a ds-list-outside ds-list-disc"
              }
            >
              <Link
                href={option.link}
                id={`contributor${index + 1}`}
                text={`[${option.name}]`}
                linkStyle="cardActionLink"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Contributors.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * list of contributors
   */
  contributorList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
