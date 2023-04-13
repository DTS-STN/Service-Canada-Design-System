import "./LoadingSpinner.scss";
import React from "react";
import classNames from "classnames";
import { DESIGN_SYSTEM_PREFIX } from "../../constants/global";

export interface ILoadingSpinnerProps {
  className?: string;
  text: string;
}

const Spoke = () => {
  return (
    <svg
      width="6"
      height="16"
      viewBox="0 0 6 16"
      fill="none"
      className="spoke"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13V2.5"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export function LoadingSpinner({ className, text = "" }: ILoadingSpinnerProps) {
  return (
    <div
      className={classNames(
        `${DESIGN_SYSTEM_PREFIX}-loading-spinner`,
        className
      )}
    >
      <div
        className={classNames(
          `${DESIGN_SYSTEM_PREFIX}-loading-spinner__spinner`,
          `${DESIGN_SYSTEM_PREFIX}-mr-0`,
          `${DESIGN_SYSTEM_PREFIX}-mr-2-md`
        )}
      >
        <Spoke />
        <Spoke />
        <Spoke />
        <Spoke />
        <Spoke />
        <Spoke />
        <Spoke />
        <Spoke />
      </div>
      <div
        className={classNames(
          `${DESIGN_SYSTEM_PREFIX}-loading-spinner__text`,
          className
        )}
      >
        <span>{text}</span>
      </div>
    </div>
  );
}
