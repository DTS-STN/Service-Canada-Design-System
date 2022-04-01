import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { OptionalTextField } from "../OptionalTextField/OptionalTextField";
import { Details } from "../Details/Details";
import { ActionButton } from "../ActionButton/ActionButton";

import EN from "../../translations/en.json";
import FR from "../../translations/fr.json";

/**
 * Report a problem button to report technical issues on the page.
 */
export function ReportAProblem(props) {
  const [submitted, setSubmitted] = useState(false);
  const t = props.language === "en" ? EN : FR;

  let onSubmitHandler = (e) => {
    // prevent default behaviour of form
    e.preventDefault();
    // create FormData object from form
    const formData = new FormData(e.target);
    // create URLSearchParams object from FormData object
    // this will be used to create url encoded string of names and values of the form fields
    const urlEncoded = new URLSearchParams(formData);
    let urlString = urlEncoded.toString();
    //Replace the values with yes for GCNotify
    let values = [
      "Incorrect+Information",
      "Unclear+Information",
      "You+didn%E2%80%99t+find+what+you+were+looking+for",
      "Page+does+not+work+with+your+adaptive+technologies",
      "You%E2%80%99re+worried+about+your+privacy",
      "You+don%E2%80%99t+know+where+else+to+go+for+help",
      "Other",
    ];
    for (const value of values) {
      urlString = urlString.replace(value, "yes");
    }
    // call report a problem API route
    fetch("/api/report-a-problem", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: urlString,
    }).catch((e) => {
      // handle error if fetch fails
      // fetch only fails if there is no internet connection not for the actual
      // request so there is nothing really to do here other than to log it
      console.log(e);
    });

    setSubmitted(true);
  };

  return (
    <Details
      label={t.footerReportProblemButtonString}
      dataCy="report-a-problem-details"
      dataTestId="report-a-problem-details"
    >
      <div role="status">
        {submitted ? (
          <>
            <h2 className="text-base font-body mb-4">
              {t.reportAProblemThankYouForYourHelp}
            </h2>
            <p className="text-sm font-body mb-4">
              {t.reportAProblemYouWillNotBeContacted}
            </p>
            <a
              className="underline text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
              href={`mailto: ${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
            >
              experience@servicecanada.gc.ca
            </a>
          </>
        ) : (
          ""
        )}
      </div>
      {submitted ? (
        ""
      ) : (
        <>
          <h2 className="text-base font-body">{t.reportAProblemTitle}</h2>
          <ul className="list-outside list-disc px-6 py-2">
            <li className="text-xs sm:text-sm font-body mb-4 leading-tight sm:leading-6">
              <b>{t.reportAProblemNoReply}</b> {t.reportAProblemEnquiries}{" "}
              <a
                className="underline text-xs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                href="mailto:experience@servicecanada.gc.ca"
              >
                experience@servicecanada.gc.ca
              </a>
            </li>
            <li className="text-xs sm:text-sm font-body my-4 leading-tight sm:leading-6">
              <b>{t.reportAProblemFeedbackConfidential}</b>{" "}
              <a
                href={
                  props.privacyLink
                    ? props.privacyLink
                    : t.reportAProblemPrivacyStatementLink
                }
                className="underline text-xs sm:text-sm font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font"
              >
                {t.reportAProblemPrivacyStatement}
              </a>
            </li>
          </ul>
          <form
            data-gc-analytics-formname="ESDC|EDSC:ServiceCanadaLabsReport-Problem"
            data-gc-analytics-collect='[{"value":"input,select","emptyField":"N/A"}]'
            className="w-full"
            action="#"
            onSubmit={onSubmitHandler}
          >
            <input type="hidden" id="language" name="language" />
            <fieldset>
              <legend className="text-base sm:text-p font-body font-normal mb-6">
                {t.reportAProblemCheckAllThatApply}
              </legend>
              <OptionalTextField
                controlId="incorrectInformationCheckBox"
                textFieldId="incorrectInformationTextField"
                controlName="incorrect_information"
                textFieldName="incorrect_information_details"
                controlLabel={t.reportAProblemIncorrectInformation}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="incorrectInformation-checkbox"
                textFieldDataTestId="incorrectInformation-text"
                controlDataCy="incorrectInformation-checkbox"
                textFieldDataCy="incorrectInformation-text"
                describedby="incorrectInformation"
                OptionalTextField
                checkBoxStyle="mb-4 inline-block"
                controlValue="Incorrect Information"
                requiredText={props.requiredText}
                optionalText={props.optionalText}
                doNotIncludeText={props.doNotIncludeText}
              />
              <OptionalTextField
                controlId="unclearInformationCheckBox"
                textFieldId="unclearInformationTextField"
                controlName="unclear_information"
                textFieldName="unclear_information_details"
                controlLabel={t.reportAProblemUnclearInformation}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="unclearInformation-checkbox"
                textFieldDataTestId="unclearInformation-text"
                controlDataCy="unclearInformation-checkbox"
                textFieldDataCy="unclearInformation-text"
                describedby="unclearInformation"
                checkBoxStyle="mb-4 inline-block"
                controlValue="Unclear Information"
                requiredText={props.requiredText}
                optionalText={props.optionalText}
                doNotIncludeText={props.doNotIncludeText}
              />
              <OptionalTextField
                controlId="infoNotFoundCheckBox"
                textFieldId="infoNotFoundTextField"
                controlName="info_not_found"
                textFieldName="info_not_found_details"
                controlLabel={t.reportAProblemDidNotFindWhatYoureLookingFor}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="infoNotFound-checkbox"
                textFieldDataTestId="infoNotFound-text"
                controlDataCy="infoNotFound-checkbox"
                textFieldDataCy="infoNotFound-text"
                describedby="infoNotFound"
                checkBoxStyle="lg:mb-8 mb-4 inline-block"
                controlValue="You didn’t find what you were looking for"
                requiredText={props.requiredText}
                optionalText={props.optionalText}
                doNotIncludeText={props.doNotIncludeText}
              />
              <OptionalTextField
                controlId="adaptiveTechnologyCheckBox"
                textFieldId="adaptiveTechnologyTextField"
                controlName="adaptive_technology"
                textFieldName="adaptive_technology_details"
                controlLabel={
                  t.reportAProblemPageDoesNotWorkWithAdaptiveTechnology
                }
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="adaptiveTechnology-checkbox"
                textFieldDataTestId="adaptiveTechnology-text"
                controlDataCy="adaptiveTechnology-checkbox"
                textFieldDataCy="adaptiveTechnology-text"
                describedby="adaptiveTechnology"
                checkBoxStyle="mb-8 inline-block"
                controlValue="Page does not work with your adaptive technologies"
                requiredText={props.requiredText}
                optionalText={props.optionalText}
                doNotIncludeText={props.doNotIncludeText}
              />
              <OptionalTextField
                controlId="privacyIssuesCheckBox"
                textFieldId="privacyIssuesTextField"
                controlName="privacy_issues"
                textFieldName="privacy_issues_details"
                controlLabel={t.reportAProblemYoureWorriedAboutYourPrivacy}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="privacyIssues-checkbox"
                textFieldDataTestId="privacyIssues-text"
                controlDataCy="privacyIssues-checkbox"
                textFieldDataCy="privacyIssues-text"
                describedby="privacyIssues"
                checkBoxStyle="mb-4 inline-block"
                controlValue="You’re worried about your privacy"
                requiredText={props.requiredText}
                optionalText={props.optionalText}
                doNotIncludeText={props.doNotIncludeText}
              />
              <OptionalTextField
                controlId="noWhereElseToGoCheckBox"
                textFieldId="noWhereElseToGoTextField"
                controlName="no_where_else_to_go"
                textFieldName="no_where_else_to_go_details"
                controlLabel={t.reportAProblemNoWhereElseToGo}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="noWhereElseToGo-checkbox"
                textFieldDataTestId="noWhereElseToGo-text"
                controlDataCy="noWhereElseToGo-checkbox"
                textFieldDataCy="noWhereElseToGo-text"
                describedby="noWhereElseToGo"
                checkBoxStyle="lg:mb-8 mb-4 inline-block"
                controlValue="You don’t know where else to go for help"
                requiredText={props.requiredText}
                optionalText={props.optionalText}
                doNotIncludeText={props.doNotIncludeText}
              />
              <OptionalTextField
                controlId="otherCheckBox"
                textFieldId="otherTextField"
                controlName="other"
                textFieldName="other_details"
                controlLabel={t.reportAProblemOther}
                textFieldLabel={t.reportAProblemProvideMoreDetails}
                uncontrolled={true}
                multiText={true}
                textLabelBold={true}
                wrap="hard"
                maxLength={750}
                controlDataTestId="other-checkbox"
                textFieldDataTestId="other-text"
                controlDataCy="other-checkbox"
                textFieldDataCy="other-text"
                describedby="other"
                checkBoxStyle="mb-4"
                controlValue="Other"
                requiredText={props.requiredText}
                optionalText={props.optionalText}
                doNotIncludeText={props.doNotIncludeText}
              />
            </fieldset>
            <ActionButton
              id="submit"
              className="rounded block mt-4"
              type="submit"
              dataCy="report-a-problem-submit"
              dataTestId="report-a-problem-submit"
              analyticsTracking
            >
              {t.reportAProblemSubmit}
            </ActionButton>
          </form>
        </>
      )}
    </Details>
  );
}

ReportAProblem.propTypes = {
  /**
   * Translation language
   */
  language: PropTypes.string,

  /**
   * the text to show after the label in parenthesis if the field is required
   */
  requiredText: PropTypes.string.isRequired,

  /**
   * the text to show after the label in parenthesis if the field is optional
   */
  optionalText: PropTypes.string.isRequired,

  /**
   * disclaimer text to not disclose any personal information
   */
  doNotIncludeText: PropTypes.string.isRequired,

  /**
   * link to privacy policy page, defaults to Canada.ca link if not provided
   */
  privacyLink: PropTypes.string,
};
