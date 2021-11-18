import { ActionButton, Footer } from "decd-design-system";
import React from "react";

function App() {
  return (
    <div className="App">
      <Footer
        landscapeLinks={[
          {
            landscapeLink: "https://some-link-11.com",
            landscapeLinkText: "some-link-9",
          },
          {
            landscapeLink: "https://some-link-1.com",
            landscapeLinkText: "some-link-8",
          },
          {
            landscapeLink: "https://some-link-1.com",
            landscapeLinkText: "some-link-7",
          },
          {
            landscapeLink: "https://some-link-11.com",
            landscapeLinkText: "some-link-9",
          },
          {
            landscapeLink: "https://some-link-1.com",
            landscapeLinkText: "some-link-8",
          },
          {
            landscapeLink: "https://some-link-1.com",
            landscapeLinkText: "some-link-7",
          },
          {
            landscapeLink: "https://some-link-11.com",
            landscapeLinkText: "some-link-9",
          },
          {
            landscapeLink: "https://some-link-1.com",
            landscapeLinkText: "some-link-8",
          },
          {
            landscapeLink: "https://some-link-1.com",
            landscapeLinkText: "some-link-7",
          },
        ]}
        landscapeBgImg="https://www.canada.ca/etc/designs/canada/wet-boew/assets/landscape.png"
        brandLinks={[
          {
            brandLink: "https://some-link-11.com",
            brandLinkText: "some-link-11",
          },
          {
            brandLink: "https://some-link-11.com",
            brandLinkText: "some-link-22",
          },
        ]}
        logoUrl="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg"
        logoAltText="Symbol of the Government of Canada"
        topOfPageBtn={<ActionButton tertiary id="top-btn" text="Top of Page" />}
        accessibleSectionHeader1="About Government"
        accessibleSectionHeader2="About this site"
        isOptionalReport={true}
        reportAProblemBtn={
          <ActionButton
            disabled
            id="report"
            text="Report a problem or mistake on this page"
            className="xxs:w-full"
          />
        }
        isOptionalShare={true}
        shareThisPageBtn={
          <ActionButton
            disabled
            id="share"
            text="Share this Page"
            className="xxs:w-full"
          />
        }
      />
    </div>
  );
}

export default App;
