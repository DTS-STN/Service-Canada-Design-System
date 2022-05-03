import { Contributors } from "./Contributors";
export default {
  title: "Components/Contributors",
  component: Contributors,
};

const Template = (args) => <Contributors {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "Contributors",
  contributorList: [
    { name: "Institution Name", link: "/" },
    { name: "Institution Name", link: "/" },
    { name: "Institution Name", link: "/" },
  ],
};
