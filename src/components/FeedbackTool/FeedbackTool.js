import PropTypes from "prop-types";
import React from "react";
import { Image } from "../Image/Image";
import faUserO from "../../assets/user-o.svg";

export function FeedbackTool(props) {
  return (
    <div className="ds-flex-col ds-pb-12px">
      <div className="cardNumber ds-flex ds-flex-row">
        <div className="ds-relative">
          <Image src={faUserO} className="ds-w-28px ds-h-28px" />
          {/* <span
          className="ds-leading-48px ds-absolute ds-left-3.5 ds-bottom-0.5 ds-accordion-num"
          aria-hidden={true}
        >
          1
        </span> */}
        </div>
        <div
          className={`ds-accordion-header ds-pl-14px ds-pb-18px ds-text-multi-neutrals-grey100`}
          // ref={titleRefs[index]}
          // aria-label={`${card.title} ${isOpen ? lang.accordionExpanded : lang.accordionCollapsed
          // }`}
          // eslint-disable-next-line
          tabIndex="0"
        >
          Sign up to get invited to research sessions
        </div>
      </div>
      <div className="cardContent sm:ds-pl-60px"></div>
    </div>
  );

  // return <div class="ds-border ds-border-solid ds-border-multi-blue-blue60d ds-bg-multi-blue-blue1 ds-px-24px ds-py-18px ds-rounded ds-my-16px ds-mb-5px ds-pb-5px">
  //   <div class="flex -my-2"><Image src={faUserO} /><h3 class="lg:text-h1 ml-2">Sign up to get invited to research sessions</h3></div><aside class="pt-3 border-l-2 ml-2 lg:ml-3.5 border-custom-blue-blue xl:w-3/4"><div class="text-base lg:text-p ml-6 pb-3 whitespace-pre-line">You’re invited to test our experimental ideas and participate in research interviews to make Service Canada better for everyone. Every bit of feedback helps us make sure we’re making our services simple and easy to use.

  //     Your participation will not affect your access to government services. You can <a href="/unsubscribe" style={{ textDecoration: 'underline' }}>unsubscribe</a> at any time.</div><div class="ml-6"><p class="flex mb-4 text-center"><a aria-label="undefined" class="rounded focus:ring-1 focus:ring-black focus:ring-offset-2

  //        py-1.5 px-3 rounded text-white text-base lg:text-p font-display bg-custom-blue-dark hover:bg-custom-blue-light border border-custom-blue-darker active:bg-custom-blue-darker hover:ring-2 hover:ring-white
  //        " id="become-a-participant-btn" data-cy="become-a-participant-btn" role="button" draggable="false" href="/en/signup-info">Sign up to get invited to research sessions</a></p><p><a class="text-base lg:text-p underline flex xl:inline lg:mr-10" href="/en/signup/privacy">Review the privacy policy</a></p></div></aside></div>

  // const style = "ds-btn-" + props.styling;
  // return props.href === "no ref" ? (
  //   <button
  //     className={`ds-flex ds-flex-row ${style} focus:ds-ring focus:ds-ring-offset-4 ${props.className} `}
  //     onClick={props.onClick}
  //     type={props.type}
  //     id={props.id}
  //     disabled={props.disabled}
  //     {...props.attributes}
  //   >
  //     {props.icon && !props.iconEnd ? (
  //       <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
  //         <Image className="ds-pr-2" src={props.icon} alt={props.iconAltText} />
  //       </div>
  //     ) : undefined}
  //     {props.text}
  //     {props.children}
  //     {props.icon && props.iconEnd ? (
  //       <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
  //         <Image className="ds-pl-2" src={props.icon} alt={props.iconAltText} />
  //       </div>
  //     ) : undefined}
  //   </button>
  // ) : (
  //   <a
  //     href={props.href}
  //     className={`ds-flex ds-flex-row ${props.style !== "none" ? `ds-btn-link` : ""
  //       } focus:ds-ring focus:ds-ring-offset-4 ${props.className} `}
  //     onClick={props.onClick}
  //     id={props.id}
  //     disabled={props.disabled}
  //     role="button"
  //   >
  //     {props.icon && !props.iconEnd ? (
  //       <Image
  //         className="ds-h-8 ds-w-8 ds-pr-2"
  //         src={props.icon}
  //         alt={props.iconAltText}
  //       />
  //     ) : undefined}
  //     {props.text}
  //     {props.children}
  //     {props.icon && props.iconEnd ? (
  //       <div className="ds-grid ds-place-items-center ds-h-8 ds-w-8">
  //         <Image
  //           className="ds-pl-5 ds-pb-3"
  //           src={props.icon}
  //           alt={props.iconAltText}
  //         />
  //       </div>
  //     ) : undefined}
  //   </a>
  // );
}

FeedbackTool.defaultProps = {
  id: "btn1",
  styling: "supertask",
  text: "default",
  href: "no ref",
};

FeedbackTool.propTypes = {
  /**
   * Identify which button being clicked
   */
  id: PropTypes.string.isRequired,

  /**
   * User must input one of the follow button styles to apply
   * to their button. To apply the link style, the user must
   * also add a value to the href prop
   */
  styling: PropTypes.oneOf([
    "supertask",
    "primary",
    "secondary",
    "danger",
    "link",
    "none",
  ]),

  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,

  /**
   * Alt text for icon added to button
   */
  iconAltText: PropTypes.string,

  /**
   * This is for placing an icon at the end of the component
   */
  iconEnd: PropTypes.bool,

  /**
   * Use when button redirects to a new page.
   * Automatically applies the Link styling
   */
  href: PropTypes.string,

  /**
   * the type of the button
   */
  type: PropTypes.oneOf(["submit", "reset", "button"]),

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * bool to disable a button
   */
  disabled: PropTypes.bool,

  /**
   * css overrides for button
   */
  className: PropTypes.string,

  /**
   * additional attributes for button
   */
  attributes: PropTypes.object,

  /**
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
