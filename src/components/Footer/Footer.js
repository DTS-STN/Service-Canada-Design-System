/* eslint-disable no-prototype-builtins */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "../Link/Link";
import { ContextualBand } from "../ContextualBand/ContextualBand";
import { MainBand } from "../MainBand/MainBand";
import { SubFooterBand } from "../SubFooterBand/SubFooterBand";
import {
  mscaContactUs as mscacontactUsEn,
  mscaFooterHeading as mscaFooterHeadingEn,
  landscapeLinks as landscapeLinksEn,
  ENbrandLinks,
} from "../../translations/en.json";
import {
  mscaContactUs as mscacontactUsFr,
  mscaFooterHeading as mscaFooterHeadingFr,
  landscapeLinks as landscapeLinksFr,
  FRbrandLinks,
} from "../../translations/fr.json";
import logo from "../../assets/wmms-blk.svg";
import bg_img from "../../assets/footer_bg_img.svg";

const landlinks = { en: [], fr: [] };

for (const key in landscapeLinksEn.text) {
  if (landscapeLinksEn.text.hasOwnProperty(key)) {
    const linkEn = {
      text: landscapeLinksEn.text[key],
      link: landscapeLinksEn.link[key],
    };
    const linkFr = {
      text: landscapeLinksFr.text[key],
      link: landscapeLinksFr.link[key],
    };
    landlinks.en.push(linkEn);
    landlinks.fr.push(linkFr);
  }
}

export function Footer(props) {
  const {
    className,
    error,
    lang,
    id,
    containerClass,
    isAuthenticated,
    contactLink,
    brandLinks,
    target,
    onClick,
    customLink,
    withMainBand,
    withContextualBand,
    contextualBandLinks,
    contextualBandTitle,
    btnLink,
  } = props;

  const landscapeLinks = lang === "en" ? landlinks.en : landlinks.fr;
  const langBrand =
    lang === "en" ? ENbrandLinks : lang === "fr" ? FRbrandLinks : [];
  const mscaFooterHeading =
    lang === "en"
      ? mscaFooterHeadingEn
      : lang === "fr"
      ? mscaFooterHeadingFr
      : "";
  const mscaContactUs =
    lang === "en" ? mscacontactUsEn : lang === "fr" ? mscacontactUsFr : "";

  const brandLinksDefault = [
    {
      href: langBrand.link1link,
      text: langBrand.link1,
    },
    {
      href: langBrand.link2link,
      text: langBrand.link2,
    },
    {
      href: langBrand.link3link,
      text: langBrand.link3,
    },
    {
      href: langBrand.link4link,
      text: langBrand.link4,
    },
    {
      href: langBrand.link5link,
      text: langBrand.link5,
    },
  ];

  const container = containerClass || "ds-container";

  return (
    <footer
      id={id}
      className={`${className} ds-w-full`}
      data-testid="ds-footer"
    >
      <>
        {withContextualBand && (
          <ContextualBand
            title={contextualBandTitle}
            container={container}
            target={target}
            contextualBandLinks={contextualBandLinks}
          />
        )}
        {!isAuthenticated && withMainBand ? (
          <div
            className="ds-bg-multi-blue-blue70 ds-landscape ds-bg-no-repeat bg-clip-border sm:ds-bg-right-bottom ds-bg-bottom"
            style={{
              backgroundImage: `url(${bg_img})`,
            }}
          >
            <section className={container}>
              <MainBand
                lang={lang}
                landscapeLinks={landscapeLinks}
                target={target}
              />
            </section>
          </div>
        ) : null}
        {isAuthenticated ? (
          <div className="ds-bg-multi-blue-blue70">
            <section
              className={`${container} ds-h-23 ds-pb-5 ds-flex ds-flex-col ds-items-start`}
            >
              <h2 className="ds-pt-[22px] ds-text-multi-neutrals-white ds-font-body ds-font-bold">
                {mscaFooterHeading}
              </h2>
              <Link
                id="footerContactUsLink"
                text={mscaContactUs.mscaFooterContactUsText}
                href={contactLink}
                linkStyle="smfooterWhite"
                target={target}
                component={customLink}
                locale={props.locale}
              />
            </section>
          </div>
        ) : null}
        <SubFooterBand
          lang={lang}
          isAuthenticated={isAuthenticated}
          container={container}
          brandLinks={brandLinks}
          brandLinksDefault={brandLinksDefault}
          onClick={onClick}
          target={target}
          logo={logo}
          error={error}
          btnLink={btnLink}
        />
      </>
    </footer>
  );
}

Footer.defaultProps = {
  lang: "en",
  contactLink: "https://www.canada.ca/en/contact.html",
  withMainBand: true,
};

Footer.propTypes = {
  /**
   * id of this component
   */
  id: PropTypes.string.isRequired,
  /**
   * isAuthenticated: bool to switch between authenticated and non authenticated menus
   **/
  isAuthenticated: PropTypes.bool,
  /**
   * Switch between english and french footer. Pass in "en" or "fr"
   */
  lang: PropTypes.oneOf(["en", "fr"]),
  /**
   * Add the path Link to the top of your page for the "to the Top" button in mobile
   */
  btnLink: PropTypes.string.isRequired,

  /**
   * containerClass: Customized container class name. If pass a existing class name, then 'ds-container' will be
   * replaced by the passed in class name.
   **/
  containerClass: PropTypes.string,

  /**
   * If true will display the error page version of the footer component
   */
  error: PropTypes.bool,

  /**
   * Allow user to pass in their own contact link
   */
  contactLink: PropTypes.string,

  /**
   * List of links to display on the footer
   */
  brandLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string,
    })
  ),

  /**
   * Specifies where to open the linked document
   */
  target: PropTypes.string,

  /**
   * Handle onclick on the footer media link
   */
  onClick: PropTypes.func,

  /**
   * List of menu items to display in dropdown with links
   */
  contextualBandLinks: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
