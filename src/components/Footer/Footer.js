/* eslint-disable no-prototype-builtins */
import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";
import {
  footerTitle as footerTitleEn,
  mscaContactUs as mscacontactUsEn,
  mscaFooterHeading as mscaFooterHeadingEn,
  landscapeLinks as landscapeLinksEn,
  aboutGovernment as aboutGovernmentEn,
  aboutSite as aboutSiteEn,
  ENbrandLinks,
} from "../../translations/en.json";
import {
  footerTitle as footerTitleFr,
  mscaContactUs as mscacontactUsFr,
  mscaFooterHeading as mscaFooterHeadingFr,
  landscapeLinks as landscapeLinksFr,
  aboutGovernment as aboutGovernmentFr,
  aboutSite as aboutSiteFr,
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
    withServiceCanada,
    serviceCanadaLinks,
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

  let bLinksBg = isAuthenticated ? "sm:ds-h-86px" : "ds-h-full";
  let bottomSectionPad = isAuthenticated ? "ds-py-6px" : "ds-pt-5";
  let flex = isAuthenticated ? "sm:ds-flex-row" : "md:ds-flex-row";

  const container = containerClass || "ds-container";

  return (
    <footer id={id} className="ds-w-full" data-testid="ds-footer">
      {error ? (
        <section className={`${container} ds-h-16 ds-bg-multi-neutrals-grey5`}>
          <Image
            className="ds-mb-2.5 sm:ds-mt-3 ds-mt-5 ds-h-6 ds-float-right"
            src={logo}
            alt="Symbol of the Government of Canada"
          />
        </section>
      ) : (
        <>
          {withServiceCanada && (
            <div className="ds-bg-[#33465C]">
              <section className={`${container} ds-min-h-[114px]`}>
                <h2 className="ds-pt-[22px] ds-text-multi-neutrals-white ds-font-body ds-font-bold">
                  Service Canada
                </h2>
                <ul className="sm:ds-grid sm:ds-grid-cols-3 ds-flex ds-flex-col ds-gap-1 ds-text-xs ds-pb-[32px]">
                  {serviceCanadaLinks.map((value, index) => {
                    return (
                      <li
                        key={value + index}
                        className="ds-text-white ds-w-64 sm:ds-w-56 lg:ds-w-80 ds-my-2.5 hover:ds-underline"
                      >
                        <Link
                          id={"ServiceCanadaLink" + index}
                          href={value.link}
                          text={value.text}
                          linkStyle="smfooterWhite"
                          target={target}
                          yt
                        />
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          )}
          {!isAuthenticated ? (
            <div
              className="ds-bg-multi-blue-blue70 ds-landscape ds-bg-no-repeat bg-clip-border sm:ds-bg-right-bottom ds-bg-bottom"
              style={{
                backgroundImage: `url(${bg_img})`,
              }}
            >
              <section className={container}>
                <h3 className="ds-pt-[22px] ds-text-multi-neutrals-white ds-font-body ds-font-bold">
                  {lang === "en" ? footerTitleEn : footerTitleFr}
                </h3>
                <nav
                  className="ds-pb-6"
                  role="navigation"
                  aria-labelledby="accessibleSectionHeader1"
                >
                  <h2 className="ds-sr-only" id="accessibleSectionHeader1">
                    {lang === "en" ? aboutGovernmentEn : aboutGovernmentFr}
                  </h2>
                  <ul className="sm:ds-grid sm:ds-grid-cols-3 ds-flex ds-flex-col ds-gap-1 ds-text-xs">
                    {landscapeLinks.map((value, index) => {
                      return (
                        <li
                          key={value + index}
                          className={`${
                            index === 0
                              ? "footerLine ds-pb-[22px] ds-relative"
                              : ""
                          } ds-text-white ds-w-64 sm:ds-w-56 lg:ds-w-80 ds-my-2.5 hover:ds-underline`}
                        >
                          <Link
                            id={"LandscapeLink" + index}
                            href={value.link}
                            text={value.text}
                            linkStyle="smfooterWhite"
                            target={target}
                            yt
                          />
                        </li>
                      );
                    })}
                  </ul>
                </nav>
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
          <div
            className={`${
              isAuthenticated ? "ds-bg-[#F5F5F5]" : "ds-bg-[#F8F8F8]"
            } ${bLinksBg}`}
          >
            <div
              className={`${
                isAuthenticated ? "" : "ds-bg-[#F8F8F8]"
              } ds-flex ds-justify-between ${container}`}
            >
              <section
                className={`ds-min-h-[96px] ${bottomSectionPad} ds-flex ds-items-center ${flex}`}
              >
                <nav
                  role="navigation"
                  aria-labelledby="accessibleSectionHeader2"
                >
                  <h2 className="ds-sr-only" id="accessibleSectionHeader2">
                    {lang === "en" ? aboutSiteEn : aboutSiteFr}
                  </h2>
                  <ul className="ds-flex ds-flex-col md:ds-flex-row ds-whitespace-nowrap">
                    {brandLinks
                      ? brandLinks.map(({ href, text, onClick }, index) => {
                          return (
                            <li
                              key={index}
                              className={`${
                                index === 0 ? "" : "md:ds-list-disc"
                              } ds-pr-4 ds-mb-[17px] ds-list-inside ds-list-none ds-text-xxs`}
                            >
                              <Link
                                onClick={onClick ? onClick : undefined}
                                id={"footerLink" + index}
                                href={href}
                                text={text}
                                linkStyle="smfooterBlue"
                                target={target}
                              />
                            </li>
                          );
                        })
                      : brandLinksDefault.map(({ href, text }, index) => {
                          return (
                            <li
                              key={index}
                              className={`${
                                index === 0 ? "" : "md:ds-list-disc"
                              } ds-pr-4 ds-mb-[17px] ds-list-inside ds-list-none ds-text-xxs`}
                            >
                              <Link
                                onClick={onClick ? onClick : undefined}
                                id={"footerLink" + index}
                                href={href}
                                text={text}
                                linkStyle="smfooterBlue"
                                target={target}
                              />
                            </li>
                          );
                        })}
                  </ul>
                </nav>
              </section>
              <div className="ds-min-h-[96px] ds-flex ds-items-end md:ds-items-center ds-shrink-0 ds-mr-[5px]">
                <Image
                  className="ds-h-[25px] ds-w-[105px] md:ds-w-[164px] md:ds-h-[39px] ds-my-[17px]"
                  src={logo}
                  alt="Symbol of the Government of Canada"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}

Footer.defaultProps = {
  lang: "en",
  contactLink: "https://www.canada.ca/en/contact.html",
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
  serviceCanadaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
