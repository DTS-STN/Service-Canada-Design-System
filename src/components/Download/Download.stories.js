import { Download } from "./Download";
export default {
  title: "Components/Download",
  component: Download,
};

const Template = (args) => <Download {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "temp",
  name: "Document Title",
  size: "273 KB",
  type: "PDF",
  onFileClick: () => {},
};
