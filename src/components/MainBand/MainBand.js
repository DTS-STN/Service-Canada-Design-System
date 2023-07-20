import React from "react";
import { Link } from "../Link/Link";
import {
  footerTitle as footerTitleEn,
  aboutGovernment as aboutGovernmentEn,
} from "../../translations/en.json";
import {
  footerTitle as footerTitleFr,
  aboutGovernment as aboutGovernmentFr,
} from "../../translations/fr.json";

export function MainBand(props) {
  return (
    <>
      <h3 className="ds-pt-[22px] ds-text-multi-neutrals-white ds-font-body ds-font-bold">
        {props.lang === "en" ? footerTitleEn : footerTitleFr}
      </h3>
      <nav
        className="ds-pb-6"
        role="navigation"
        aria-labelledby="accessibleSectionHeader1"
      >
        <h2 className="ds-sr-only" id="accessibleSectionHeader1">
          {props.lang === "en" ? aboutGovernmentEn : aboutGovernmentFr}
        </h2>
        <ul className="sm:ds-grid sm:ds-grid-cols-3 ds-flex ds-flex-col ds-gap-1 ds-text-xs">
          {props.landscapeLinks.map((value, index) => {
            return (
              <li
                key={value + index}
                className={`${
                  index === 0 ? "footerLine ds-pb-[22px] ds-relative" : ""
                } ds-text-white ds-w-64 sm:ds-w-56 lg:ds-w-80 ds-my-2.5`}
              >
                <Link
                  id={"LandscapeLink" + index}
                  href={value.link}
                  text={value.text}
                  linkStyle="smfooterWhite"
                  target={props.target}
                  yt
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
