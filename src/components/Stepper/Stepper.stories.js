import { Stepper } from "./Stepper";
import { FormDatePicker } from "../FormDatePicker/FormDatePicker";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

const Template = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
export const First = Template.bind({});
export const Last = Template.bind({});

const filler = [
  <>
    <div className="ds-heading3">Date of Birth(required)</div>
    <FormDatePicker />
    <div>
      At what age would you like to start receiving the OAS pension? (required)
    </div>
    <div>This should be between 65 and 70.</div>
  </>,
];

Default.args = {
  id: "Stepper",
  name: "Benefits estimator:",
  step: "Step 3 of 4",
  heading: "Age",
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
  children: filler,
};

First.args = {
  id: "Stepper",
  name: "Benefits estimator:",
  step: "Step 1 of 4",
  heading: "Age",
  dataTestId: "DataTest",
  ariaLabel: "ariaLabel",
  nextProps: {
    id: "Next",
    text: "Next",
    href: "#",
    styling: "primary",
    iconAltText: "Icon Alt Text - Next",
  },
  children: filler,
};

Last.args = {
  id: "Stepper",
  name: "Benefits estimator:",
  step: "Step 4 of 4",
  heading: "Age",
  dataTestId: "DataTest",
  ariaLabel: "ariaLabel",
  previousProps: {
    id: "Previous",
    text: "Previous",
    href: "#",
    styling: "secondary",
    iconAltText: "Icon Alt Text - Previous",
  },

  children: filler,
};
