import { FormErrorSummary } from "./FormErrorSummary";
export default {
  title: "Components/FormErrorSummary",
  component: FormErrorSummary,
};

const Template = (args) => <FormErrorSummary {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "formerrors",
  error_list: [
    { line: "Last name is required", id: "last_name" },
    {
      line: "Email address must be in the format of example@email.com",
      id: "email",
    },
    { line: "Password must include both numbers and letters", id: "password" },
    {
      line: "A valid postal code is required for your selected city",
      id: "postal_code",
    },
  ],
  message_heading:
    "The form could not be submitted because 4 errors were found",
  alert_icon_alt_text: "danger icon",
  alert_icon_id: "danger icon",
  whiteBG: false,
};
