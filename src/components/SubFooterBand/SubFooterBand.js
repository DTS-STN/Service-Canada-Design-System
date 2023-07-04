import React from "react";
import { Link } from "../Link/Link";
import { Image } from "../Image/Image";
import { aboutSite as aboutSiteEn } from "../../translations/en.json";
import { aboutSite as aboutSiteFr } from "../../translations/fr.json";

export function SubFooterBand(props) {
  return (
    <>
      <div
        className={`${
          props.isAuthenticated ? "" : "ds-bg-[#F8F8F8]"
        } ds-flex ds-justify-between ${props.container}`}
      >
        <section
          className={`${
            props.isAuthenticated
              ? "sm:ds-flex-row sm:ds-flex-row"
              : "md:ds-flex-row md:ds-flex-row"
          } ds-min-h-[96px] ds-flex ds-items-center`}
        >
          <nav role="navigation" aria-labelledby="accessibleSectionHeader2">
            <h2 className="ds-sr-only" id="accessibleSectionHeader2">
              {props.lang === "en" ? aboutSiteEn : aboutSiteFr}
            </h2>
            <ul className="ds-flex ds-flex-col md:ds-flex-row ds-whitespace-nowrap ds-pt-4">
              {props.brandLinks
                ? props.brandLinks.map(({ href, text, onClick }, index) => {
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
                          target={props.target}
                        />
                      </li>
                    );
                  })
                : props.brandLinksDefault.map(({ href, text }, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          index === 0 ? "" : "md:ds-list-disc"
                        } ds-pr-4 ds-mb-[17px] ds-list-inside ds-list-none ds-text-xxs`}
                      >
                        <Link
                          onClick={props.onClick ? props.onClick : undefined}
                          id={"footerLink" + index}
                          href={href}
                          text={text}
                          linkStyle="smfooterBlue"
                          target={props.target}
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
            src={props.logo}
            alt="Symbol of the Government of Canada"
          />
        </div>
      </div>
    </>
  );
}
