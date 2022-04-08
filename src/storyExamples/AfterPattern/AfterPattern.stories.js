import { AfterPattern } from "./AfterPattern";
import { FormRadioButton } from "../../components/FormRadioButton/FormRadioButton";
import { TextField } from "../../components/TextField/TextField";
import React from "react";

export default {
  title: "Story Examples/Exposed After Pattern",
  // parameters: {
  //   viewMode: "docs",
  //   previewTabs: {
  //     canvas: { hidden: true },
  //   },
  // },
  component: AfterPattern,
};

const Template = () => {
  const [errorState, setErrorState] = React.useState(false);
  const exampleCode = [
    <div>
      <FormRadioButton
        id="radio-button-2"
        label="Since the age of 18 years old, have you lived outside of 
        Canada for longer than 6 months?"
        name="radio_button_2"
        required
        onChange={(value) => {
          if (value == "yes") {
            setErrorState(true);
          } else {
            setErrorState(false);
          }
        }}
        options={[
          {
            id: "option_1",
            label:
              "No, I have not lived outside of Canada for longer than 6 months",
            value: "no",
          },
          {
            id: "option_2",
            label:
              "Yes, I have lived outside of Canada for longer than 6 months",
            value: "yes",
          },
        ]}
      />
      {errorState ? (
        <div className="ds-mt-34px">
          <TextField
            id="textField1"
            label="Since the age of 18, how many years have you lived in 
            Canada?"
            helpText="If you are not sure of the exact number, you may enter an estimate. 
            You will still be able to view your eligibility results. "
            name="textField1"
            className="ds-w-165px"
            onChange={() => {}}
            requiredText="required"
            uncontrolled
          />
        </div>
      ) : null}
    </div>,
  ];

  return <AfterPattern id="test" exampleCode={exampleCode} />;
};

export const Default = Template.bind({});

Default.args = {};
