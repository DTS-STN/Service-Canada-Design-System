import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import commentBubble from "../../assets/comment_bubble.svg";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";

export interface ICTAProps {
  heading: string;
  body: string;
  ButtonProps: typeof Button.propTypes;
  LinkProps?: typeof Link.propTypes;
  containerClass?: string;
}

export function CTA({
  heading,
  body,
  ButtonProps,
  LinkProps,
  containerClass = "",
}: ICTAProps) {
  return (
    <div className="ds-bg-multi-blue-blue2 ds-p-3" data-testid="ds-cta">
      <div className={`ds-flex ds-flex-row ${containerClass}`}>
        <div className="ds-flex ds-flex-col ds-w-[60px] ds-shrink-0">
          <Image alt="icon" src={commentBubble} className="ds-w-[60px]" />
          <div className="ds-flex-grow ds-divide-x-2 ds-divide-multi-blue-blue60a ds-flex ds-flex-row ds-justify-center ds-mt-3">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="ds-pt-0 ds-pl-5">
          <h3 className={`ds-heading2 ds-text-multi-neutrals-grey100`}>
            {heading}
          </h3>
          <p className="ds-body">{body}</p>
          <Button
            styling="primary"
            className="ds-my-3"
            type="button"
            {...ButtonProps}
          />
          {LinkProps && <Link {...LinkProps} />}
        </div>
      </div>
    </div>
  );
}
