import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CanadaCAWebMenu from "../CanadaCAWebMenu/CanadaCAWebMenu";
import "./CanadaCAHeader.css";
import "./wet-boew.min.css";
import "./messages.min.css";
import "./theme.css";
import "./messages-ie.min.css";
import "./theme-srv.css";

export default function CanadaCAHeader(props) {
  return (
    <>
      <nav>
        <ul id="wb-tphp">
          <li className="wb-slc">
            <a className="wb-sl" href="#wb-cont">
              Skip to main content
            </a>
          </li>
          <li className="wb-slc visible-sm visible-md visible-lg">
            <a className="wb-sl" href="#wb-info">
              Skip to About this site
            </a>
          </li>
        </ul>
      </nav>

      <header>
        <div id="wb-bnr" className="container-fluid">
          <div className="row">
            <section
              id="wb-lng"
              className="col-xs-3 col-sm-12 pull-right text-right"
            >
              <h2 className="wb-inv">Language selection</h2>
              <ul className="list-inline mrgn-bttm-0">
                <li>
                  <a lang="fr" hreflang="fr" href="header-docs-fr.html">
                    <span className="hidden-xs" translate="no">
                      Français
                    </span>
                    <abbr
                      title="Français"
                      translate="no"
                      className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
                    >
                      fr
                    </abbr>
                  </a>
                </li>
              </ul>
            </section>

            <div
              className="brand col-xs-9 col-sm-5 col-md-4"
              property="publisher"
              typeof="GovernmentOrganization"
            >
              <a href="https://www.canada.ca/en.html" property="url">
                <img
                  src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-en.svg"
                  alt="Government of Canada"
                  property="logo"
                />
                <span className="wb-inv">
                  {" "}
                  / <span lang="fr">Gouvernement du Canada</span>
                </span>
              </a>
              <meta property="name" content="Government of Canada" />
              <meta property="areaServed" typeof="Country" content="Canada" />
              <link
                property="logo"
                href="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg"
              />
            </div>

            <section
              id="wb-srch"
              className="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4"
            >
              <h2>Search</h2>
              <form
                action="https://www.canada.ca/en/sr/srb.html"
                name="cse-search-box"
                role="search"
              >
                <div className="form-group wb-srch-qry">
                  <label htmlFor="wb-srch-q" className="wb-inv">
                    Search Canada.ca
                  </label>
                  <input
                    id="wb-srch-q"
                    list="wb-srch-q-ac"
                    className="wb-srch-q form-control"
                    name="q"
                    type="search"
                    value=""
                    size="34"
                    maxLength="170"
                    placeholder="Search Canada.ca"
                  />
                  <datalist id="wb-srch-q-ac"></datalist>
                </div>
                <div className="form-group submit">
                  <button
                    type="submit"
                    id="wb-srch-sub"
                    className="btn btn-primary btn-small"
                    name="wb-srch-sub"
                  >
                    <span className="glyphicon-search glyphicon"></span>
                    <span className="wb-inv">Search</span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <CanadaCAWebMenu />
            </div>
          </div>
        </div>

        <nav id="wb-bc" property="breadcrumb">
          <h2>You are here:</h2>
          <div className="container">
            <ol className="breadcrumb" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  href="https://www.canada.ca/en.html"
                >
                  <span property="name">Canada.ca</span>
                </a>
                <meta property="position" content="1" />
              </li>
            </ol>
          </div>
        </nav>
      </header>
    </>
  );
}
