import { CallOut } from "./CallOut";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { FormCheckBox } from "../../components/FormCheckBox/FormCheckBox";
import { ContextualAlert } from "../../components/ContextualAlert/ContextualAlert";
import React from "react";

export default {
  title: "Examples/Consequential CallOut",
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
  component: CallOut,
};

const Template = () => {
  const [errorState, setErrorState] = React.useState(false);
  const exampleCode = [
    <div>
      <CheckBox
        id="checkbox1"
        label="Not sure what my annual net income is"
        name="ChexBox1"
        onChange={() => {
          setErrorState(!errorState);
        }}
        value="IsChecked"
      />
      {errorState ? (
        <div className="ds-mt-34px">
          <ContextualAlert
            alert_icon_alt_text="warning"
            alert_icon_id="warning icon"
            id="warning"
            message_body="If you don’t know your net income, you will still be 
            able to view your eligibility results. To get more 
            accurate results, you can find your net income on 
            line 23600 of your T1 tax form. You can find 
            instructions on how to access these tax 
            documents here. "
            message_heading="Not sure what your annual net income is?"
            type="warning"
          />
        </div>
      ) : null}
    </div>,
  ];

  return <CallOut id="test" exampleCode={exampleCode} />;
};

export const Default = Template.bind({});

Default.args = {};

const Template2 = () => {
  const [errorState, setErrorState] = React.useState(false);
  const [errorState2, setErrorState2] = React.useState(false);
  const onSubmit = React.useCallback(() => true, []);
  const exampleCode = [
    <div>
      <FormCheckBox
        checkBoxList={[
          {
            id: "checkbox1",
            label: "Option 1",
            name: "ChexBox1",
            value: "IsChecked",
            onChange: () => {
              setErrorState(!errorState);
            },
          },
          {
            id: "checkbox2",
            label: "Option 2",
            name: "ChexBox2",
            value: "IsChecked",
            onChange: () => {
              setErrorState2(!errorState2);
            },
          },
        ]}
        formErrorProps={{
          errorMessage: "This is how form error will be displayed",
          hasError: false,
          id: "formErrorId",
        }}
        formLabelProps={{
          helpText:
            "Help text that is always visible under the label to provide users with primary information needed to fill in the form field. Limit of 2 sentences",
          id: "requiredWithInfo",
          infoText:
            "Required label style with information icon. You can hide by clicking on icon again.",
          label: "Required Label",
          required: true,
        }}
        id="temp"
        onSubmit={onSubmit}
      />
      {errorState ? (
        <div className="ds-mt-34px">
          <ContextualAlert
            alert_icon_alt_text="danger icon"
            alert_icon_id="danger icon"
            id="danger"
            message_body="Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected"
            message_heading="COVID-19 New services and service changes"
            type="danger"
          />
        </div>
      ) : null}
      {errorState2 ? (
        <div className="ds-mt-34px">
          <ContextualAlert
            alert_icon_alt_text="success icon"
            alert_icon_id="success icon"
            id="success"
            message_body="Find out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affectedFind out about new support for Canadians during the COVID-19 pandemic and how Service Canada’s services are affected"
            message_heading="COVID-19 New services and service changes"
            type="success"
          />
        </div>
      ) : null}
    </div>,
  ];

  return <CallOut id="test" exampleCode={exampleCode} />;
};

export const CheckboxForm = Template2.bind({});

CheckboxForm.args = {};
