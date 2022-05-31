import PropTypes from "prop-types";
import React from "react";

export function YoutubePlayer(props) {
  const { id, video, title, poster, type, description, trackProps, lang } =
    props;

  return (
    <>
      <figure id={id}>
        <video
          className="ds-border ds-border-solid ds-border-multi-neutrals-grey85a"
          poster={poster}
          title={title}
          controls
          width="100%"
          height="auto"
        >
          <source type={type} src={video} />
          <track
            src={trackProps.src}
            kind="captions"
            data-type={trackProps.dataType}
            srcLang={lang === "en" ? "en" : "fr"}
            label={lang === "en" ? "English" : "French"}
          />
        </video>
        {description ? (
          <>
            <figcaption className="ds-body">{description}</figcaption>
          </>
        ) : null}
      </figure>
    </>
  );
}

YoutubePlayer.propTypes = {
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
   * path to video poster image
   */
  poster: PropTypes.string,

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
