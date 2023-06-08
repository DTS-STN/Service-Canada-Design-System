import { FormAlertMessage } from "./FormAlertMessage";
export default {
  title: "Components/FormAlertMessage",
  component: FormAlertMessage,
};

const Template = (args) => <FormAlertMessage {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "formerrors",
  error_list: [
    "Last name is required",
    "Email address must be in the format of example@email.com",
    "Password must include both numbers and letters",
    "A valid postal code is required for your selected city",
  ],
  message_heading:
    "The form could not be submitted because 4 errors were found",
  alert_icon_alt_text: "danger icon",
  alert_icon_id: "danger icon",
  whiteBG: false,
};
