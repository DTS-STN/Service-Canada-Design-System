import { SearchBar } from "./SearchBar";

export default {
  title: "In Development/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "Search Canada.ca",
};
