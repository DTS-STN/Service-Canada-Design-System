import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";
import { ENlandscapeLinks } from "../../translations/en.json";
import { ENbrandLinks } from "../../translations/en.json";
import { FRbrandLinks } from "../../translations/fr.json";
import { FRlandscapeLinks } from "../../translations/fr.json";
import { mscaFooterHeading as mscaFooterHeadingEn } from "../../translations/en.json";
import { mscaFooterHeading as mscaFooterHeadingFr } from "../../translations/fr.json";
import { mscaContactUs as mscacontactUsEn } from "../../translations/en.json";
import { mscaContactUs as mscacontactUsFr } from "../../translations/fr.json";
import { footerTopOfPageButtonText as footerTopOfPageButtonTextEn } from "../../translations/en.json";
import { footerTopOfPageButtonText as footerTopOfPageButtonTextFr } from "../../translations/fr.json";
import logo from "../../assets/wmms-blk.svg";
import bg_img from "../../assets/footer_bg_img.svg";
import upArrow from "../../assets/upArrow.svg";

const EN = "en";
const FR = "fr";

export function Footer(props) {
  const {
    error,
    lang,
    btnLink,
    id,
    containerClass,
    isAuthenticated,
    contactLink,
    brandLinks,
    target,
    onClick,
  } = props;
  let langLand =
    lang === EN ? ENlandscapeLinks : lang === FR ? FRlandscapeLinks : [];
  let langBrand = lang === EN ? ENbrandLinks : lang === FR ? FRbrandLinks : [];
  let mscaFooterHeading =
    lang === EN ? mscaFooterHeadingEn : lang === FR ? mscaFooterHeadingFr : "";
  let mscaContactUs =
    lang === EN ? mscacontactUsEn : lang === FR ? mscacontactUsFr : "";
  let footerTopOfPageButtonText =
    lang === EN
      ? footerTopOfPageButtonTextEn
      : lang === FR
      ? footerTopOfPageButtonTextFr
      : "";
  const landscapeLinks = [
    {
      landscapeLink: langLand.link1link,
      landscapeLinkText: langLand.link1,
    },
    {
      landscapeLink: langLand.link2link,
      landscapeLinkText: langLand.link2,
    },
    {
      landscapeLink: langLand.link3link,
      landscapeLinkText: langLand.link3,
    },
    {
      landscapeLink: langLand.link4link,
      landscapeLinkText: langLand.link4,
    },
    {
      landscapeLink: langLand.link5link,
      landscapeLinkText: langLand.link5,
    },
    {
      landscapeLink: langLand.link6link,
      landscapeLinkText: langLand.link6,
    },
    {
      landscapeLink: langLand.link7link,
      landscapeLinkText: langLand.link7,
    },
    {
      landscapeLink: langLand.link8link,
      landscapeLinkText: langLand.link8,
    },
    {
      landscapeLink: langLand.link9link,
      landscapeLinkText: langLand.link9,
    },
  ];

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
          {!isAuthenticated ? (
            <div
              className="ds-bg-multi-blue-blue70 ds-landscape ds-bg-no-repeat bg-clip-border sm:ds-bg-right-bottom ds-bg-bottom"
              style={{
                backgroundImage: `url(${bg_img})`,
              }}
            >
              <section className={container}>
                <nav
                  className="ds-pt-6 ds-pb-6"
                  role="navigation"
                  aria-labelledby="accessibleSectionHeader1"
                >
                  <h2 className="ds-sr-only" id="accessibleSectionHeader1">
                    {lang === EN
                      ? ENlandscapeLinks.aboutGovernment
                      : FRlandscapeLinks.aboutGovernment}
                  </h2>
                  <ul className="sm:ds-grid sm:ds-grid-cols-3 ds-flex ds-flex-col ds-gap-1 ds-text-xs">
                    {" "}
                    {landscapeLinks.map((value, index) => {
                      return (
                        <li
                          key={value + index}
                          className="ds-text-white ds-w-64 sm:ds-w-56 lg:ds-w-80 ds-my-2.5 hover:ds-underline"
                        >
                          <Link
                            id={"LandscapeLink" + index}
                            href={value.landscapeLink}
                            text={value.landscapeLinkText}
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
          <div className={`${bLinksBg} ds-pb-2`}>
            {isAuthenticated ? (
              <div className="ds-bg-multi-blue-blue70">
                <section
                  className={`${container} ds-h-23 ds-pb-5 ds-flex ds-flex-col`}
                >
                  <h2 className="ds-pt-3 ds-text-multi-neutrals-white ds-font-body ds-font-bold">
                    {mscaFooterHeading}
                  </h2>
                  <Link
                    id="footerContactUsLink"
                    text={mscaContactUs.mscaFooterContactUsText}
                    href={contactLink}
                    linkStyle="smfooterWhite"
                    target={target}
                  />
                </section>
              </div>
            ) : null}
            <div
              className={`${
                isAuthenticated ? "ds-bg-multi-neutrals-grey5" : ""
              }`}
            >
              <section
                className={`${container} ds-h-auto ${bottomSectionPad} ds-flex ds-flex-col ds-justify-between ${flex}`}
              >
                <nav
                  className="ds-mt-3.5 xl:ds-mt-5"
                  role="navigation"
                  aria-labelledby="accessibleSectionHeader2"
                >
                  <h2 className="ds-sr-only" id="accessibleSectionHeader2">
                    {lang === EN
                      ? ENlandscapeLinks.aboutSite
                      : FRlandscapeLinks.aboutSite}
                  </h2>
                  <ul className="ds-flex ds-flex-col sm:ds-flex-row">
                    {brandLinks
                      ? brandLinks.map(({ href, text, onClick }, index) => {
                          return (
                            <li
                              key={index}
                              className={
                                index === 0
                                  ? "ds-pr-4 sm:ds-mb-4 ds-mb-5 ds-list-inside ds-list-none ds-text-xxs"
                                  : "ds-pr-4 sm:ds-mb-4 ds-mb-5 ds-list-inside ds-list-none sm:ds-list-disc ds-text-xxs"
                              }
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
                              className={
                                index === 0
                                  ? "ds-pr-4 sm:ds-mb-4 ds-mb-5 ds-list-inside ds-list-none ds-text-xxs"
                                  : "ds-pr-4 sm:ds-mb-4 ds-mb-5 ds-list-inside ds-list-none sm:ds-list-disc ds-text-xxs"
                              }
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
                <div className=" ">
                  <div className="ds-mt-7 ds-float-left sm:ds-hidden">
                    <Button
                      id="top_btn"
                      text={footerTopOfPageButtonText}
                      style="none"
                      className="ds-font-body ds-text-browserh7"
                      href={btnLink}
                      icon={upArrow}
                      iconAltText="to the top button"
                      iconEnd
                    />
                  </div>
                  <Image
                    className="sm:ds-h-40px ds-h-25px ds-mb-2.5 sm:ds-mt-6 md:ds-mt-3 ds-mt-5 ds-float-right"
                    src={logo}
                    alt="Symbol of the Government of Canada"
                  />
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}

Footer.defaultProps = {
  lang: EN,
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
  lang: PropTypes.oneOf([EN, FR]),
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
};
