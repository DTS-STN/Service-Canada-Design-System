import React from "react";

export interface ILabelProps {
  id?: string;
  type?: "default" | "primary" | "danger" | "warning" | "info" | "success";
  text: string;
}

export function Label({ id, type = "default", text }: ILabelProps) {
  const style = "ds-label-" + type;
  return (
    <div
      id={id}
      role="dialog"
      aria-label="label"
      className={`ds-inline ds-border-l-4 ${style} ds-px-9px ds-pb-5px ds-pt-3px ds-label-font-style ds-w-min`}
    >
      {text}
    </div>
  );
}
