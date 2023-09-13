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
import "./MainBand.css";

export function MainBand(props) {
  return (
    <footer className="ds-py-[22px]">
      <h2 className="ds-sr-only" id="accessibleSectionHeader1">
        {props.lang === "en" ? aboutGovernmentEn : aboutGovernmentFr}
      </h2>
      <h3 className="ds-text-[19px] ds-leading-[21px] ds-mb-2 ds-font-body ds-font-bold ds-text-multi-neutrals-white">
        {props.lang === "en" ? footerTitleEn : footerTitleFr}
      </h3>
      <nav role="navigation" aria-labelledby="accessibleSectionHeader1">
        <ul className="sm:ds-grid sm:ds-grid-cols-3 ds-flex ds-flex-col ds-gap-1 ds-text-xs ds-ml-0">
          {props.landscapeLinks.map((value, index) => {
            return (
              <li
                key={value + index}
                className={`${
                  index === 0 ? "footerLine ds-pb-[26px] ds-relative" : ""
                } ds-list-none ds-text-white ds-w-64 sm:ds-w-56 lg:ds-w-80 ds-my-2.5 ds-ml-0`}
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
    </footer>
  );
}
