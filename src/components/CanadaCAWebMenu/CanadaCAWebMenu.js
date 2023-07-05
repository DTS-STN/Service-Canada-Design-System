import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./wet-boew.min.css";
import "./messages.min.css";
import "./theme.css";
import "./messages-ie.min.css";
import "./theme-srv.css";

export default function CanadaCAWebMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const i18nText = {
    menu: "MENU",
    lang: "en",
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="gcweb-menu" typeof="SiteNavigationElement">
      <h2 className="wb-inv">{i18nText.menu}</h2>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        {i18nText.menu}{" "}
        <span
          className={`expicon glyphicon glyphicon-chevron-${
            isMenuOpen ? "up" : "down"
          }`}
        ></span>
      </button>
      {isMenuOpen && (
        <ul
          role="menu"
          aria-orientation="vertical"
          data-ajax-replace={i18nText.menuAjax}
        >
          {listItems.map((item, index) => (
            <li role="presentation" key={index}>
              <a role="menuitem" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
