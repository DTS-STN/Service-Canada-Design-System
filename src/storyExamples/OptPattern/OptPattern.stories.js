import React from "react";
import { Link } from "../../components/Link/Link";
import { OptPattern } from "./OptPattern";

export default {
  title: "Story Examples/Opt Patterns",
  component: OptPattern,
};

const Template = () => {
  const exampleCode = [
    <div>
      <h2 className="ds-heading2">Privacy policy</h2>
      <p className="ds-body ds-mb-10px">
        [You can add a custom privacy statement here that adheres to the
        Government of Canada privacy. It should be clear how the users personal
        information will and will not be used. Examples follow.]
      </p>
      <p className="ds-body ds-mb-10px">
        Your information <strong>will not</strong> be used for any
        decision-making process that affects your access to Government of Canada
        services. Your personal information <strong>will not</strong> be used
        for any administrative purposes.
      </p>
      <p className="ds-body ds-mb-10px">
        Your personal information and feedback are confidential.
      </p>
      <p className="ds-body ds-mb-10px">
        Your information <strong>will</strong> be used by Employment and Social
        Development Canada for [Briefly explain what the information will be
        used for].
      </p>
      <h3 className="ds-heading3">What we will collect</h3>
      <p className="ds-body ds-mb-10px">
        We need the following information so we can [Briefly explain why you
        need the following data]:
      </p>
      <ul className="ds-body ds-pl-4 ds-mb-5 ds-list-inside ds-list-disc ds-mb-10px">
        <li>Email address</li>
        <li>[List more optional personal identifying fields]</li>
      </ul>
      <p className="ds-body ds-mb-10px">
        You can also choose to share more information with us so we can [Briefly
        explain how providing the following data will enable services for the
        user]:
      </p>
      <ul className="ds-body ds-pl-4 ds-mb-5 ds-list-inside ds-list-disc ds-mb-10px">
        <li>Province or territory</li>
        <li>[List more optional personal identifying fields]</li>
      </ul>
      <p className="ds-body ds-mb-10px">
        We collect this information to ensure our research groups are diverse,
        and to identify trends in feedback for specific groups.
      </p>
      <Link
        href="https://www.canada.ca/en/transparency/privacy.html"
        id="link"
        text="Read the full privacy policy."
      />
    </div>,
  ];

  return <OptPattern id="test" exampleCode={exampleCode} />;
};

export const PrivacyStatement = Template.bind({});
PrivacyStatement.args = {};

const Template2 = () => {
  const exampleCode = [
    <div>
      <h2 className="ds-heading2">
        How to unsubscribe from [identify what the user is unsubscribing from]
      </h2>
      <p className="ds-body">
        If you have previously signed up to become a participant and no longer
        wish to be contacted for future [explain in detail what the user is
        unsubscribing from], you can{" "}
        <Link href="#unsubscribe" id="link" text="unsubscribe" /> yourself from
        the participant list and we will remove your personal information.
      </p>
    </div>,
  ];

  return <OptPattern id="test" exampleCode={exampleCode} />;
};

export const OptOutDescription = Template2.bind({});
OptOutDescription.args = {};

const Template3 = () => {
  const exampleCode = [
    <>
      <div class="ds-body-bold checkbox-inline">
        <label for="consent" class="required">
          <input type="checkbox" id="consent" name="consent" value="consent" />
          <strong>
            {" "}
            I have read, understood and agree to the above. I affirm that I am
            18 years old, or older. I understand that I can withdraw from this
            [service name] at any time without consequence.
          </strong>
        </label>
      </div>
    </>,
  ];

  return <OptPattern id="test" exampleCode={exampleCode} />;
};

export const AffirmativeAction = Template3.bind({});
AffirmativeAction.args = {};
