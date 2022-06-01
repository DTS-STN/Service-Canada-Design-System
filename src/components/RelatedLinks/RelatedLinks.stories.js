import { RelatedLinks } from "./RelatedLinks";
export default {
  title: "Components/RelatedLinks",
  component: RelatedLinks,
};

const Template = (args) => <RelatedLinks {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "RelatedLinks",
  relatedList: [
    { name: "Link 1", link: "/" },
    { name: "Link 2", link: "/" },
    { name: "Link 3", link: "/" },
  ],
};
