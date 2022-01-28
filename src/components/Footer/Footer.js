import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";
import EN from "../../translations/en.json";
// need to update to convert default props to FR when using lang=fr prop
import logo from "../../assets/wmms-blk.svg";
import bg_img from "../../assets/footer_bg_img.svg";

export function Footer(props) {
  return (
    <footer className="w-full">
      {props.lang === "error" ? (
        <section className={"sm:container h-16 bg-multi-neutrals-grey5"}>
          <Image
            className="mb-2.5 sm:mt-3 mt-5 h-6 float-right"
            src={props.logoUrl}
            alt={props.logoAltText}
          />
        </section>
      ) : (
        <>
          <div
            className="bg-multi-blue-blue70 landscape bg-no-repeat bg-clip-border sm:bg-right-bottom bg-bottom"
            style={{
              backgroundImage: `url(${props.landscapeBgImg})`,
            }}
          >
            <section className={`sm:container`}>
              <nav
                className="pl-4 pr-4 pt-6 pb-6"
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
                        key={value + index}
                        className="text-white w-64 md:w-56 lg:w-80 my-2.5 hover:underline"
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
          <div className="h-full pb-4 bg-color-multi-neutrals-white ">
            <section className="sm:container h-auto pt-5 flex flex-col md:flex-row sm:flex-col justify-between">
              <nav
                className="mt-3.5 xl:mt-5"
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
                <div className="mt-3 float-left md:hidden sm:hidden">
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
                  className="sm:h-40px h-25px mb-2.5 sm:mt-6 md:mt-3 mt-5 float-right"
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
