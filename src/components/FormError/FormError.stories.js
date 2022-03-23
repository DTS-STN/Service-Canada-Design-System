import React from "react";
import { FormError } from "./FormError";

export default {
  title: "Components/FormError",
  component: FormError,
  decorators: [
    (Story) => (
      <div className="ds-w-full ds-flex ds-items-center ds-flex-col">
        <div className="ds-w-100">
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <FormError {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "formErrorId",
  errorMessage: "This is how form error will be displayed",
};
