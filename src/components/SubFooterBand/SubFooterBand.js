import React from "react";
import { Link } from "../Link/Link";
import { Image } from "../Image/Image";
import { aboutSite as aboutSiteEn } from "../../translations/en.json";
import { aboutSite as aboutSiteFr } from "../../translations/fr.json";
import upArrow from "../../assets/upArrow.svg";

export function SubFooterBand(props) {
  return (
    <div
      className={props.isAuthenticated ? "ds-bg-[#F5F5F5]" : "ds-bg-[#F8F8F8]"}
    >
      <div
        className={`${
          props.isAuthenticated ? "ds-min-h-[86px]" : "ds-min-h-[96px]"
        } ${props.error ? "ds-items-center" : ""} ds-flex ds-justify-between ${
          props.container
        }`}
      >
        {props.error ? (
          <div>
            <a
              id="top_btn"
              href={props.btnLink}
              className="sm:ds-hidden ds-float-left ds-cursor-pointer ds-pr-3"
            >
              Top of page / Haut de la page
            </a>
            <img src={upArrow} alt="" className="ds-pt-2 sm:ds-hidden" />
          </div>
        ) : (
          <section
            className={`${
              props.isAuthenticated
                ? "sm:ds-flex-row sm:ds-flex-row"
                : "md:ds-flex-row md:ds-flex-row"
            } ds-flex ds-items-center`}
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
        )}
        <div
          className={`${
            props.error ? "ds-items-center" : "ds-items-end md:ds-items-center"
          } ds-min-h-[96px] ds-flex ds-shrink-0 ds-mr-[5px]`}
        >
          <Image
            className={`${
              props.error
                ? "ds-h-[40px] ds-w-auto"
                : "ds-h-[25px] md:ds-h-[40px] ds-w-[105px] md:ds-w-[164px]"
            } ds-my-[15px]`}
            src={props.logo}
            alt="Symbol of the Government of Canada"
          />
        </div>
      </div>
    </div>
  );
}
