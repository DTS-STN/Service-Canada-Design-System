import { Header } from "./Heading";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
export const withFromLink = Template.bind({});

Default.args = {
  headingLevel: "h1",
  title: "Default Heading",
};

withFromLink.args = {
  headingLevel: "h1",
  title: "Heading with from link",
  fromLink: "https://www.google.com",
  fromText: "Google",
};
