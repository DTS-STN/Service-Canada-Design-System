import { Stepper } from "./Stepper";
import { FormDatePicker } from "../FormDatePicker/FormDatePicker";
import { FormRadioButton } from "../FormRadioButton/FormRadioButton";
import { FormDropdown } from "../FormDropdown/FormDropdown";
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
    <div className="ds-pb-12">
      <FormDatePicker
        formLabelProps={{
          helpText: "",
          id: "requiredWithInfo",
          label: "When were you born?",
          required: true,
        }}
        hasLabel
        id="FormDatePicker"
        maxYear={2050}
        minYear={1999}
      />
    </div>

    <div>
      <FormRadioButton
        label="Do you already receive the Old Age Security pension?"
        required
        requiredText="required"
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
    </div>
  </>,
];

const step2 = [
  <>
    <div className="ds-pb-12">
      <FormRadioButton
        label="Are you able to provide us your annual net income?"
        helpText="Providing your income will give you more accurate results."
        requiredText="(required)"
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
    </div>

    <div>
      <FormTextField
        hasHint
        label="What is your annual net income (income after taxes) in Canadian dollars?"
        requiredText="(required)"
        dataTestId="textbox-controlled"
        id="textField1"
        name="textField1"
        hintProps={{
          linkText: "More information",
          description:
            " You can find your net income on line 23600 of your personal income tax return (T1). Remove from this amount: any Old Age Security payments your first $5,000 of employment or self-employment income, and 50% of the next $10,000",
          withLink: false,
          externalLinkText: "",
          optionalLinkText: "",
          url: "",
        }}
      />
    </div>
  </>,
];

const stepLast = [
  <>
    <div>
      <FormRadioButton
        hasHint
        hintProps={{
          className: "",
          description: "",
          externalLinkText: "",
          linkText: "Which option applies to me?",
          optionalLinkText: "",
          url: "",
          withLink: false,
        }}
        id="radio-button-2"
        infoText="Help Text"
        label="What is your marital status?"
        name="radio_button_2"
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
    </div>
  </>,
];

Default.args = {
  id: "Stepper",
  name: "Benefits estimator",
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
  name: "Benefits estimator",
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
  name: "Benefits estimator",
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
