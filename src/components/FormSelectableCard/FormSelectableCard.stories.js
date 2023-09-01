import React from "react";
import { FormSelectableCard } from "./FormSelectableCard";

export default {
  title: "Components/FormSelectableCard",
  component: FormSelectableCard,
};

const onChange = () => {
  console.log("------------Hola! Change event triggered-------------");
};

const Template = (args) => <FormSelectableCard {...args} />;

export const Default = Template.bind({});

const optionsList = [
  {
    id: "option_1",
    value: "Option 1",
    label: "We only support a select number of bank account providers.",
  },
  {
    id: "option_2",
    value: "Option 2",
    label:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: "option_3",
    value: "Option 3",
    label:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];

Default.args = {
  id: "selectable-card-1",
  name: "selectable_card_1",
  options: optionsList,
  onChange: onChange,
};
