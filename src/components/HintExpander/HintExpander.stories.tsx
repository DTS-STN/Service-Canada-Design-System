import * as React from "react";
import { HintExpander, HintExpanderProps } from "./HintExpander";
import { Meta, Story } from "@storybook/react";
export default {
  title: "Components/HintExpander",
  component: HintExpander,
} as Meta<HintExpanderProps>;

const Template: Story<HintExpanderProps> = (args) => <HintExpander {...args} />;

export const EN = Template.bind({});
export const FR = Template.bind({});
export const WithLinkEN = Template.bind({});
export const WithLinkFR = Template.bind({});

EN.args = {
  linkText: "Why are we asking about [topic]?",
  children: "We need to know this because your partner’s annual net income...",
};

FR.args = {
  linkText: "Pourquoi demandons-nous [sujet] ?",
  children:
    "Nous devons connaître le revenu net de votre conjoint parce que... .",
};

WithLinkEN.args = {
  linkText: "Why are we asking about [topic]?",
  children: "We need to know this because your partner’s annual net income...",
  withLink: true,
  optionalLinkText: "For more information visit",
  externalLinkText: "link",
};

WithLinkFR.args = {
  linkText: "Pourquoi demandons-nous [sujet] ?",
  children:
    "Nous devons connaître le revenu net de votre conjoint parce que... .",
  withLink: true,
  optionalLinkText: "Pour plus d’information, visiter",
  externalLinkText: "lien",
};
