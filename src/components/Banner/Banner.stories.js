import React from "react";
import Banner from "./Banner";

// export default {
//   title: "Not Used/Banner components/Banner",
//   component: Banner,
// };

const Template = (args) => <Banner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  siteTitle: "Banner Text",
  headline: "Banner Headline",
  background: "bannerBg",
};
