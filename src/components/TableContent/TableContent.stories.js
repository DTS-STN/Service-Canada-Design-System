import { TableContent } from "./TableContent";
export default {
  title: "Components/TableContent",
  component: TableContent,
};

const Template = (args) => <TableContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "TableContent",
  sectionList: [
    { name: "Section Heading", link: "#section1" },
    { name: "Section Heading", link: "#section2" },
    { name: "Section Heading", link: "#section3" },
  ],
};
