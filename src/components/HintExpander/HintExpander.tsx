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
  children: React.ReactNode;
}

export const HintExpander: React.FC<HintExpanderProps> = ({
  linkText,
  withLink,
  externalLinkText,
  optionalLinkText,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
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
              <span className="external-link-text">
                {externalLinkText}&nbsp;
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
