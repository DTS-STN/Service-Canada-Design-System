import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";

export function What(props) {
  const { id, sections } = props;

  return (
    <section id={id}>
      <p className="ds-heading2 ds-text-multi-neutrals-black ds-pb-44px">
        What we are doing
      </p>
      <div className="ds-flex ds-flex-row">
        {sections.map((section, index) => {
          return (
            <div key={index} className="ds-flex ds-flex-col ds-pr-30px">
              <p className="ds-heading3 ds-text-multi-neutrals-black ds-pb-12px">
                {section.sectionHeading}
              </p>
              <ul className="ds-pl-22px ds-ml-14px ds-pb-25px">
                {section.sectionLinks.map((option, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        "ds-text-xl ds-underline-offset-3.1 ds-decoration-1 ds-pr-4 ds-list-outside ds-list-disc"
                      }
                    >
                      <Link
                        href={option.link}
                        id={`${section.relatedLink.name}${index + 1}`}
                        text={`[${option.name}]`}
                        linkStyle="cardActionLink"
                      />
                    </li>
                  );
                })}
              </ul>
              <Link
                href={section.relatedLink.link}
                id={`${section.relatedLink.link}${index + 1}`}
                text={`${section.relatedLink.name}`}
                linkStyle="titleLink"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

What.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * Section Props:
   *
   * sectionHeading: headings for each section
   *
   * sectionLinks: Links for the given section
   *
   * relatedLink: if total links exceeds 4, link to remaining links
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      sectionHeading: PropTypes.string,
      sectionLinks: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          link: PropTypes.string,
        })
      ),
      relatedLink: PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
      }),
    })
  ),
};
