import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CanadaCAWebMenu(props) {
  //   const lang = i18nText.lang;
  const i18nText = {
    menu: "Lorem Ipsum",
    lang: "fr",
  };

  const listItems = [
    {
      role: "presentation",
      label: "Jobs and the workplace",
      href: "https://www.canada.ca/en/services/jobs.html",
    },
    {
      role: "presentation",
      label: "Immigration and citizenship",
      href: "https://www.canada.ca/en/services/immigration-citizenship.html",
    },
    {
      role: "presentation",
      label: "Travel and tourism",
      href: "https://travel.gc.ca/",
    },
    {
      role: "presentation",
      label: "Business and industry",
      href: "https://www.canada.ca/en/services/business.html",
    },
    {
      role: "presentation",
      label: "Benefits",
      href: "https://www.canada.ca/en/services/benefits.html",
    },
    {
      role: "presentation",
      label: "Health",
      href: "https://www.canada.ca/en/services/health.html",
    },
    {
      role: "presentation",
      label: "Taxes",
      href: "https://www.canada.ca/en/services/taxes.html",
    },
    {
      role: "presentation",
      label: "Environment and natural resources",
      href: "https://www.canada.ca/en/services/environment.html",
    },
    {
      role: "presentation",
      label: "National security and defence",
      href: "https://www.canada.ca/en/services/defence.html",
    },
    {
      role: "presentation",
      label: "Culture, history and sport",
      href: "https://www.canada.ca/en/services/culture.html",
    },
    {
      role: "presentation",
      label: "Policing, justice and emergencies",
      href: "https://www.canada.ca/en/services/policing.html",
    },
    {
      role: "presentation",
      label: "Transport and infrastructure",
      href: "https://www.canada.ca/en/services/transport.html",
    },
    {
      role: "presentation",
      label: "Canada and the world",
      href: "https://international.gc.ca/world-monde/index.aspx?lang=eng",
    },
    {
      role: "presentation",
      label: "Money and finances",
      href: "https://www.canada.ca/en/services/finance.html",
    },
    {
      role: "presentation",
      label: "Science and innovation",
      href: "https://www.canada.ca/en/services/science.html",
    },
  ];

  return (
    <nav className="gcweb-menu" typeof="SiteNavigationElement">
      <h2 className="wb-inv">{i18nText.menu}</h2>
      <button type="button" aria-haspopup="true" aria-expanded="false">
        {i18nText.menuBtn}{" "}
        <span className="expicon glyphicon glyphicon-chevron-down"></span>
      </button>
      ddddddddddd
      <ul
        role="menu"
        aria-orientation="vertical"
        data-ajax-replace={i18nText.menuAjax}
      >
        {listItems.map((item, index) => (
          <li className={item.className} key={index}>
            <a className={item.linkClassName} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
