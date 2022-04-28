import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";
import { ENlandscapeLinks } from "../../translations/en.json";
import { ENbrandLinks } from "../../translations/en.json";
import { FRlandscapeLinks } from "../../translations/fr.json";
import { FRbrandLinks } from "../../translations/fr.json";
import logo from "../../assets/wmms-blk.svg";
import bg_img from "../../assets/footer_bg_img.svg";
import upArrow from "../../assets/upArrow.svg";

export function Footer(props) {
  const { error, lang, btnLink, id } = props;
  let langBrand =
    lang === "en" ? ENbrandLinks : lang === "fr" ? FRbrandLinks : [];
  let langLand =
    lang === "en" ? ENlandscapeLinks : lang === "fr" ? FRlandscapeLinks : [];
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
  const brandLinks = [
    {
      brandLink: langBrand.link1link,
      brandLinkText: langBrand.link1,
    },
    {
      brandLink: langBrand.link2link,
      brandLinkText: langBrand.link2,
    },
    {
      brandLink: langBrand.link3link,
      brandLinkText: langBrand.link3,
    },
    {
      brandLink: langBrand.link4link,
      brandLinkText: langBrand.link4,
    },
    {
      brandLink: langBrand.link5link,
      brandLinkText: langBrand.link5,
    },
  ];
  return (
    <footer id={id} className="ds-w-full">
      {error ? (
        <section className={"ds-container ds-h-16 ds-bg-multi-neutrals-grey5"}>
          <Image
            className="ds-mb-2.5 sm:ds-mt-3 ds-mt-5 ds-h-6 ds-float-right"
            src={logo}
            alt="Symbol of the Government of Canada"
          />
        </section>
      ) : (
        <>
          <div
            className="ds-bg-multi-blue-blue70 ds-landscape ds-bg-no-repeat bg-clip-border sm:ds-bg-right-bottom ds-bg-bottom"
            style={{
              backgroundImage: `url(${bg_img})`,
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
                  {landscapeLinks.map((value, index) => {
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
                  {brandLinks.map((value, index) => {
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
        </>
      )}
    </footer>
  );
}

Footer.defaultProps = {
  lang: "en",
};
Footer.propTypes = {
  /**
   * id of this component
   */
  id: PropTypes.string.isRequired,

  /**
   * If true will display the error page version of the footer component
   */
  error: PropTypes.bool,

  /**
   * Switch between english and french header. Pass in "en" or "fr"
   */
  lang: PropTypes.oneOf(["en", "fr"]),

  /**
   * Add the path Link to the top of your page for the "to the Top" button in mobile
   */
  btnLink: PropTypes.string.isRequired,
};
