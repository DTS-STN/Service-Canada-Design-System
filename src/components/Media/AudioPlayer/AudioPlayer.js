import PropTypes from "prop-types";
import React from "react";

export function AudioPlayer(props) {
  const { id, video, title, type, description, trackProps, lang } = props;

  return (
    <>
      <figure id={id}>
        <audio title={title} controls style={{ width: "100%" }}>
          <source type={type} src={video} />
          <track
            src={trackProps.src}
            kind="captions"
            data-type={trackProps.dataType}
            srcLang={lang === "en" ? "en" : "fr"}
            label={lang === "en" ? "English" : "French"}
          />
        </audio>
        <figcaption className="ds-body">{description}</figcaption>
      </figure>
    </>
  );
}

AudioPlayer.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * language toggle
   */
  lang: PropTypes.oneOf(["en", "fr"]),

  /**
   * path to video source
   */
  video: PropTypes.string,

  /**
   * title of the given video
   */
  title: PropTypes.string,

  /**
   * type of video being uploaded
   */
  type: PropTypes.string,

  /**
   * Description of the given video
   */
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * track props (captions)
   */
  trackProps: PropTypes.shape({
    src: PropTypes.string,
    dataType: PropTypes.string,
  }),
};
