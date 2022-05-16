import { MoreInfo } from "./MoreInfo";
export default {
  title: "Components/MoreInfo",
  component: MoreInfo,
};

const Template = (args) => <MoreInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "MoreInfo",
  moreList: [
    { name: "Audience Hyperlink text", link: "/" },
    { name: "Audience Hyperlink text", link: "/" },
    { name: "Audience Hyperlink text", link: "/" },
  ],
};
