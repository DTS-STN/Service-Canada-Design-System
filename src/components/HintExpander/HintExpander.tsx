import React, { useState } from "react";
import ExpanderIcon from "../../assets/expander-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./HintExpander.css";

export interface HintExpanderProps {
  linkText: string;
  withLink: boolean;
  externalLinkText: string;
  optionalLinkText: string;
  url: string;
  children: React.ReactNode;
}

export const HintExpander: React.FC<HintExpanderProps> = ({
  linkText,
  withLink,
  externalLinkText,
  optionalLinkText,
  url,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container">
      <div className="expander">
        <img
          src={ExpanderIcon}
          alt="expand icon"
          className={`expand-icon ${expanded ? "rotate" : ""}`}
        />
        <button onClick={handleToggle} className="link-text">
          {linkText}
        </button>
      </div>

      {expanded && (
        <div className="children">
          {children}
          {withLink && (
            <p>
              {optionalLinkText}&nbsp;
              <a className="external-link-text" href={url}>
                {externalLinkText}&nbsp;
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
