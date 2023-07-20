import React from "react";
import { Link } from "../Link/Link";

export function ContextualBand(props) {
  return (
    <div className="ds-bg-[#33465C]">
      <section className={`${props.container} ds-min-h-[114px]`}>
        <h2 className="ds-pt-[22px] ds-text-multi-neutrals-white ds-font-body ds-font-bold">
          {props.title}
        </h2>
        <ul className="sm:ds-grid sm:ds-grid-cols-3 ds-flex ds-flex-col ds-gap-1 ds-text-xs ds-pb-[32px]">
          {props.contextualBandLinks.map((value, index) => {
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
                  target={props.target}
                  yt
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
