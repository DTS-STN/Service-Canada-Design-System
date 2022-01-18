import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
// import text link component and use it for links in footer
import EN from "../../translations/en.json";
// need to update to convert default props to FR when using lang=fr prop

export function Footer(props) {
  return (
    <footer className="w-full">
      {props.lang === "bi" ? (
        <section className={"w-full h-16 bg-multi-neutrals-grey5"}>
          <Image
            className="sm:pr-32 pr-4 mb-2.5 sm:mt-3 mt-5 h-6 float-right"
            src={props.logoUrl}
            alt={props.logoAltText}
          />
        </section>
      ) : (
        <>
          <section
            className={`w-full h-auto landscape bg-no-repeat bg-clip-border sm:bg-right-bottom bg-bottom bg-multi-blue-blue70`}
            style={{
              backgroundImage: `url(${props.landscapeBgImg})`,
            }}
          >
            <nav
              className="sm:pl-20 sm:pr-20 pl-4 pr-4 pt-6 pb-6"
              role="navigation"
              aria-labelledby="accessibleSectionHeader1"
            >
              <h2 className="sr-only" id="accessibleSectionHeader1">
                About Government
              </h2>
              <ul className="sm:grid sm:grid-cols-3 flex flex-col gap-1 text-xs">
                {" "}
                {props.landscapeLinks.map((value, index) => {
                  return (
                    <li
                      key={index}
                      className="text-white w-64 md:w-56 lg:w-80 my-2.5 hover:underline"
                    >
                      <a className="font-body" href={value.landscapeLink}>
                        {/* text Link component will go here */}
                        {value.landscapeLinkText}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </section>
          <div className="w-full h-full pb-4">
            <section className="h-auto bg-color-multi-neutrals-white pt-5 flex flex-col sm:flex-row justify-between">
              <nav
                className="sm:pl-16 mt-3.5 xl:mt-5"
                role="navigation"
                aria-labelledby="accessibleSectionHeader2"
              >
                <h2 className="sr-only" id="accessibleSectionHeader2">
                  About this site
                </h2>
                <ul className="flex flex-col sm:flex sm:flex-row">
                  {props.brandLinks.map((value, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          index === 0
                            ? "pl-4 sm:mb-4 mb-5 list-inside list-disc sm:list-none text-xxs"
                            : "pl-4 sm:mb-4 mb-5 list-inside list-disc text-xxs"
                        }
                      >
                        <a
                          className="pr-2.5 text-xs font-body"
                          data-cy="social-media-link"
                          href={value.brandLink}
                        >
                          {/* text Link component will go here */}
                          {value.brandLinkText}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div>
                <div className="mt-3 float-left sm:hidden">
                  <Button
                    id="top_btn"
                    text="To the top"
                    styling="link"
                    href={props.btnLink}
                    icon={props.btnIcon}
                    iconAltText="to the top button"
                    iconEnd
                  />
                </div>
                <Image
                  className="sm:pr-16 pr-4 mb-2.5 sm:mt-3 mt-5 h-6 float-right"
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
  landscapeBgImg:
    "https://www.canada.ca/etc/designs/canada/wet-boew/assets/landscape.png",
  logoUrl:
    "https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg",
  logoAltText: "Symbol of the Government of Canada",
  landscapeLinks: [
    {
      landscapeLink: EN.landscapeLinks.link1link,
      landscapeLinkText: EN.landscapeLinks.link1,
    },
    {
      landscapeLink: EN.landscapeLinks.link2link,
      landscapeLinkText: EN.landscapeLinks.link2,
    },
    {
      landscapeLink: EN.landscapeLinks.link3link,
      landscapeLinkText: EN.landscapeLinks.link3,
    },
    {
      landscapeLink: EN.landscapeLinks.link4link,
      landscapeLinkText: EN.landscapeLinks.link4,
    },
    {
      landscapeLink: EN.landscapeLinks.link5link,
      landscapeLinkText: EN.landscapeLinks.link5,
    },
    {
      landscapeLink: EN.landscapeLinks.link6link,
      landscapeLinkText: EN.landscapeLinks.link6,
    },
    {
      landscapeLink: EN.landscapeLinks.link7link,
      landscapeLinkText: EN.landscapeLinks.link7,
    },
    {
      landscapeLink: EN.landscapeLinks.link8link,
      landscapeLinkText: EN.landscapeLinks.link8,
    },
    {
      landscapeLink: EN.landscapeLinks.link9link,
      landscapeLinkText: EN.landscapeLinks.link9,
    },
  ],
  brandLinks: [
    {
      brandLink: EN.brandLinks.link1link,
      brandLinkText: EN.brandLinks.link1,
    },
    {
      brandLink: EN.brandLinks.link2link,
      brandLinkText: EN.brandLinks.link2,
    },
    {
      brandLink: EN.brandLinks.link3link,
      brandLinkText: EN.brandLinks.link3,
    },
    {
      brandLink: EN.brandLinks.link4link,
      brandLinkText: EN.brandLinks.link4,
    },
    {
      brandLink: EN.brandLinks.link5link,
      brandLinkText: EN.brandLinks.link5,
    },
  ],
};

Footer.propTypes = {
  /**
   * toggle between french and english defaults
   * error option will render the error page
   * footer.
   *
   * fr not implemented yet, must manually pass in all French props
   * for the french links shown in the example
   */
  lang: PropTypes.oneOf(["en", "fr", "error"]).isRequired,

  /**
   * hyperlinks for top portion of footer
   */
  landscapeLinks: PropTypes.arrayOf(
    PropTypes.shape({
      landscapeLink: PropTypes.string.isRequired,
      landscapeLinkText: PropTypes.string.isRequired,
    })
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
  ),

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
