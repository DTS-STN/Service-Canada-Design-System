import { Header } from "./Header";

import logoFile from "../../assets/sig-blk-en.svg";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: "header-logo",
  logo: logoFile,
  altText: "Government of Canada",
};
