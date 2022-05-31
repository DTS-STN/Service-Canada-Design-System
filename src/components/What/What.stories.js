import { What } from "./What";
export default {
  title: "Components/What",
  component: What,
};

const Template = (args) => <What {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "What",
  sections: [
    {
      sectionHeading: "Title placeholder",
      sectionLinks: [
        { name: "Placeholder hyperlink text", link: "/" },
        { name: "Placeholder hyperlink text", link: "/" },
        { name: "Placeholder hyperlink text", link: "/" },
      ],
      relatedLink: {
        name: "All related placeholder",
        link: "/",
      },
    },
    {
      sectionHeading: "Title placeholder 2",
      sectionLinks: [
        { name: "Placeholder hyperlink text", link: "/" },
        { name: "Placeholder hyperlink text", link: "/" },
        { name: "Placeholder hyperlink text", link: "/" },
      ],
      relatedLink: {
        name: "All related placeholder 2",
        link: "/",
      },
    },
  ],
};
