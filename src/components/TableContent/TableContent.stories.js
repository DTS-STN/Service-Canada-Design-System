import { TableContent } from "./TableContent";
export default {
  title: "Components/TableContent",
  component: TableContent,
};

const Template = (args) => <TableContent {...args} />;

export const EN = Template.bind({});

EN.args = {
  id: "TableContent",
  sectionList: [
    { name: "Section Heading", link: "#section1" },
    { name: "Section Heading", link: "#section2" },
    { name: "Section Heading", link: "#section3" },
  ],
  lang: "en",
};

export const FR = Template.bind({});

FR.args = {
  id: "TableContent",
  sectionList: [
    { name: "En-tête de la section", link: "#section1" },
    { name: "En-tête de la section", link: "#section2" },
    { name: "En-tête de la section", link: "#section3" },
  ],
  lang: "fr",
};
