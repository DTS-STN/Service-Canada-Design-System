import { FormLabel } from "./FormLabel";
export default {
  title: "Components/FormLabel",
  component: FormLabel,
  // decorators: [
  //   (Story) => (
  //     <div className="ds-w-full flex ds-items-center ds-flex-col">
  //       <div className="ds-w-96">
  //         <Story />
  //       </div>
  //     </div>
  //   ),
  // ],
};

const Template = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});
export const Required = Template.bind({});
export const DefaultWithInfo = Template.bind({});
export const RequiredWithInfo = Template.bind({});

Default.args = {
  id: "default",
  label: "Default Label",
};

Required.args = {
  id: "required",
  label: "Required Label",
  required: true,
};

DefaultWithInfo.args = {
  id: "defaultWithInfo",
  label: "Required Label",
  infoText:
    "Default label style with information icon. You can hide by clicking on icon again.",
};

RequiredWithInfo.args = {
  id: "requiredWithInfo",
  label: "Required Label",
  required: true,
  infoText:
    "Required label style with information icon. You can hide by clicking on icon again.",
};
