import { Stepper } from "./Stepper";
import { FormDatePicker } from "../FormDatePicker/FormDatePicker";
import { FormRadioButton } from "../FormRadioButton/FormRadioButton";
import { Collapse } from "../Collapse/Collapse";
import { FormTextField } from "../FormTextField/FormTextField";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

const Template = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
export const First = Template.bind({});
export const Last = Template.bind({});

const step1 = [
  <>
    <div className="ds-heading3">
      When were you born? <span className="ds-font-normal"> (required)</span>
    </div>
    <FormDatePicker />
    <div className="ds-heading3">
      Do you already receive the Old Age Security pension?{" "}
      <span className="ds-font-normal"> (required)</span>
    </div>
    <FormRadioButton
      id="radio-button-1"
      name="radio_button_1"
      options={[
        {
          id: "option_yes",
          label: "Yes",
          value: "yes",
        },
        {
          id: "option_no",
          label: "No",
          value: "no",
        },
      ]}
    />
    <p className="ds-heading3 ds-py-5">
      How long did you defer your Old Age Security pension?{" "}
      <span className="ds-font-normal"> (required)</span>
    </p>
    <p> If you didn&#39;t delay your payments, go to the next step.</p>
  </>,
];

const step2 = [
  <>
    <div className="ds-heading3">
      Are you able to provide us your annual net income?{" "}
      <span className="ds-font-normal"> (required)</span>
    </div>
    <div className="ds-heading3">
      <span className="ds-font-normal">
        Providing your income will give you more accurate results.
      </span>
    </div>
    <FormRadioButton
      id="radio-button-1"
      name="radio_button_1"
      options={[
        {
          id: "option_yes",
          label: "Yes, I will provide my income",
          value: "yes",
        },
        {
          id: "option_no",
          label: "No, I will not provide my income",
          value: "no",
        },
      ]}
    />
    <div className="ds-heading3">
      What is your annual net income (income after taxes) in Canadian dollars?
      <span className="ds-font-normal"> (required)</span>
    </div>

    <Collapse id="moreInfoCollapse" title="More information">
      <p>
        You can find your net income on line 23600 of your personal income tax
        return (T1). Remove from this amount: any Old Age Security payments your
        first $5,000 of employment or self-employment income, and 50% of the
        next $10,000
      </p>
    </Collapse>
    <div className="ds-w-48">
      <FormTextField
        dataTestId="textbox-controlled"
        label=""
        id="textField1"
        name="textField1"
        requiredText="required"
      />
    </div>
  </>,
];

const stepLast = [
  <>
    <div className="ds-heading3">
      What is your marital status?{" "}
      <span className="ds-font-normal"> (required)</span>
    </div>
    <Collapse id="moreInfoCollapse" title="Which option applies to me?">
      <p></p>
    </Collapse>
    <FormRadioButton
      id="radio-button-1"
      name="radio_button_1"
      options={[
        {
          id: "single",
          label: "Single, divorced or separated",
          value: "single",
        },
        {
          id: "married",
          label: "Married or common law",
          value: "married",
        },
        {
          id: "widowed",
          label: "Widowed",
          value: "widowed",
        },
      ]}
    />
  </>,
];

Default.args = {
  id: "Stepper",
  name: "Benefits estimator:",
  step: "Step 2 of 5",
  heading: "Income",
  dataTestId: "DataTest",
  ariaLabel: "Step 2 of 5, Income",
  previousProps: {
    id: "Previous",
    text: "Previous",
    href: "#",
    styling: "secondary",
    iconAltText: "Icon Alt Text - Previous",
  },
  nextProps: {
    id: "Next",
    text: "Next",
    href: "#",
    styling: "primary",
    iconAltText: "Icon Alt Text - Next",
  },
  children: step2,
};

First.args = {
  id: "Stepper",
  name: "Benefits estimator:",
  step: "Step 1 of 5",
  heading: "Age",
  dataTestId: "DataTest",
  ariaLabel: "Benefits estimator, step 1 of 5, Age",
  nextProps: {
    id: "Next",
    text: "Next",
    href: "#",
    styling: "primary",
    iconAltText: "Icon Alt Text - Next",
  },
  children: step1,
};

Last.args = {
  id: "Stepper",
  name: "Benefits estimator:",
  step: "Step 5 of 5",
  heading: "Marital Status",
  dataTestId: "DataTest",
  ariaLabel: "Step 5 of 5, Marital Status",
  previousProps: {
    id: "Previous",
    text: "Previous",
    href: "#",
    styling: "secondary",
    iconAltText: "Icon Alt Text - Previous",
  },
  nextProps: {
    id: "Estimate",
    text: "Estimate",
    href: "#",
    styling: "primary",
    iconAltText: "Icon Alt Text - Estimate",
  },

  children: stepLast,
};
