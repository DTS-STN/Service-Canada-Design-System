import React from "react";
import { ReportAProblem } from "./ReportAProblem";

export default {
  title: "In Development/ReportAProblem",
  component: ReportAProblem,
};

const Template = (args) => <ReportAProblem {...args} />;

export const English = Template.bind({});
English.args = {
  language: "en",
  requiredText: "required",
  optionalText: "optional",
  doNotIncludeText:
    "Do not include any personal, medical or financial details, such as your name, social insurance number (SIN), home or business address, phone number or any case or file numbers.",
};

export const French = Template.bind({});
French.args = {
  language: "fr",
  requiredText: "obligatoire",
  optionalText: "facultatif",
  doNotIncludeText:
    "Ne pas inclure de renseignements personnels, médicaux ou financiers, comme par exemple, un numéro d’assurance sociale (NAS), une adresse de domicile ou de lieu de travail, un numéro de téléphone ou numéro de dossier.",
};
