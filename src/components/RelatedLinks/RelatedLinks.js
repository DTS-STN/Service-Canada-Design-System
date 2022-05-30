import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";

export function RelatedLinks(props) {
  const { id, relatedList } = props;

  return (
    <section id={id}>
      <p className="ds-heading2 ds-text-multi-neutrals-black ds-pb-12px">
        Related Links
      </p>
      <ul className="ds-pl-22px ds-ml-14px">
        {relatedList.map((option, index) => {
          return (
            <li
              key={index}
              className={
                "ds-text-xl ds-underline-offset-3.1 ds-decoration-1 ds-pr-4 ds-list-outside ds-list-disc"
              }
            >
              <Link
                href={option.link}
                id={`RelatedLink ${index + 1}`}
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

RelatedLinks.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * list of More Information links
   */
  relatedList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
