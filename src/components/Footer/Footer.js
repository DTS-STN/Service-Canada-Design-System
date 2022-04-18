import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";
import EN from "../../translations/en.json";
// need to update to convert default props to FR when using lang=fr prop
import logo from "../../assets/wmms-blk.svg";
import bg_img from "../../assets/footer_bg_img.svg";
import upArrow from "../../assets/upArrow.svg";

export function Footer(props) {
  return (
    <footer className="ds-w-full">
      {props.error ? (
        <section className={"ds-container ds-h-16 ds-bg-multi-neutrals-grey5"}>
          <Image
            className="ds-mb-2.5 sm:ds-mt-3 ds-mt-5 ds-h-6 ds-float-right"
            src={props.logoUrl}
            alt={props.logoAltText}
          />
        </section>
      ) : (
        <>
          <div
            className="ds-bg-multi-blue-blue70 ds-landscape ds-bg-no-repeat bg-clip-border sm:ds-bg-right-bottom ds-bg-bottom"
            style={{
              backgroundImage: `url(${props.landscapeBgImg})`,
            }}
          >
            <section className={`ds-container`}>
              <nav
                className="ds-pt-6 ds-pb-6"
                role="navigation"
                aria-labelledby="accessibleSectionHeader1"
              >
                <h2 className="ds-sr-only" id="accessibleSectionHeader1">
                  About Government
                </h2>
                <ul className="sm:ds-grid sm:ds-grid-cols-3 ds-flex ds-flex-col ds-gap-1 ds-text-xs">
                  {" "}
                  {props.landscapeLinks.map((value, index) => {
                    return (
                      <li
                        key={value + index}
                        className="ds-text-white ds-w-64 sm:ds-w-56 lg:ds-w-80 ds-my-2.5 hover:ds-underline"
                      >
                        <Link
                          id={value + index}
                          href={value.landscapeLink}
                          text={value.landscapeLinkText}
                          linkStyle="smfooterWhite"
                          yt
                        />
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </section>
          </div>
          <div className="ds-h-full ds-pb-4 ds-bg-color-multi-neutrals-white ">
            <section className="ds-container ds-h-auto ds-pt-5 ds-flex ds-flex-col md:ds-flex-row ds-justify-between">
              <nav
                className="ds-mt-3.5 xl:ds-mt-5"
                role="navigation"
                aria-labelledby="accessibleSectionHeader2"
              >
                <h2 className="ds-sr-only" id="accessibleSectionHeader2">
                  About this site
                </h2>
                <ul className="ds-flex ds-flex-col sm:ds-flex sm:ds-flex-row">
                  {props.brandLinks.map((value, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          index === 0
                            ? "ds-pr-4 sm:ds-mb-4 ds-mb-5 ds-list-inside ds-list-disc sm:ds-list-none ds-text-xxs"
                            : "ds-pr-4 sm:ds-mb-4 ds-mb-5 ds-list-inside ds-list-disc ds-text-xxs"
                        }
                      >
                        <Link
                          id={index}
                          href={value.brandLink}
                          text={value.brandLinkText}
                          linkStyle="smfooterBlue"
                        />
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className=" ">
                <div className="ds-mt-3 ds-float-left sm:ds-hidden">
                  <Button
                    id="top_btn"
                    text="To the top"
                    styling="link"
                    href={props.btnLink}
                    icon={upArrow}
                    iconAltText="to the top button"
                    iconEnd
                  />
                </div>
                <Image
                  className="sm:ds-h-40px ds-h-25px ds-mb-2.5 sm:ds-mt-6 md:ds-mt-3 ds-mt-5 ds-float-right"
                  src={props.logoUrl}
                  alt={props.logoAltText}
                />
              </div>
            </section>
          </div>
        </>
      )}
    </footer>
  );
}

Footer.defaultProps = {
  landscapeBgImg: bg_img,
  logoUrl: logo,
  logoAltText: "Symbol of the Government of Canada",
  landscapeLinks: [
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link1,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link2,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link3,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link4,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link5,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link6,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link7,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link8,
    },
    {
      landscapeLink: "/",
      landscapeLinkText: EN.landscapeLinks.link9,
    },
  ],
  brandLinks: [
    {
      brandLink: "/",
      brandLinkText: EN.brandLinks.link1,
    },
    {
      brandLink: "/",
      brandLinkText: EN.brandLinks.link2,
    },
    {
      brandLink: "/",
      brandLinkText: EN.brandLinks.link3,
    },
    {
      brandLink: "/",
      brandLinkText: EN.brandLinks.link4,
    },
    {
      brandLink: "/",
      brandLinkText: EN.brandLinks.link5,
    },
  ],
};

Footer.propTypes = {
  /**
   * If true will display the error page version of the footer component
   */
  error: PropTypes.bool.isRequired,

  /**
   * hyperlinks for top portion of footer
   */
  landscapeLinks: PropTypes.arrayOf(
    PropTypes.shape({
      landscapeLink: PropTypes.string.isRequired,
      landscapeLinkText: PropTypes.string.isRequired,
    }).isRequired
  ),

  /**
   * background image for the footer
   */
  landscapeBgImg: PropTypes.string,

  /**
   * links for bottom portion of footer
   */
  brandLinks: PropTypes.arrayOf(
    PropTypes.shape({
      brandLink: PropTypes.string.isRequired,
      brandLinkText: PropTypes.string.isRequired,
    })
  ).isRequired,

  /**
   * Add the path Link to the top of your page for the "to the Top" button in mobile
   */
  btnLink: PropTypes.string.isRequired,

  /**
   * button icon
   */
  btnIcon: PropTypes.string,

  /**
   * url to canada.ca logo
   */
  logoUrl: PropTypes.string.isRequired,

  /**
   * alt text for the canada.ca logo for cases where image doesn't load
   */
  logoAltText: PropTypes.string.isRequired,
};
