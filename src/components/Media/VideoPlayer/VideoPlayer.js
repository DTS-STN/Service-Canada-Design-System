import PropTypes from "prop-types";
import React from "react";
import { Collapse } from "../../Collapse/Collapse";

export function VideoPlayer(props) {
  const {
    id,
    lang,
    video,
    title,
    poster,
    transcript,
    description,
    trackProps,
  } = props;
  // .substr(trackProps.src.length - 4) === ".vtt" ? "file-loader!" + trackProps.src : trackProps.src
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
          <source src={video} />
          <track
            src={trackProps.src}
            kind="captions"
            srcLang={lang === "en" ? "en" : "fr"}
            label={lang === "en" ? "English" : "French"}
          />
        </video>
        {transcript ? (
          <>
            <figcaption className="">
              <Collapse
                id="defaultCollapse1"
                title="Looking for a Job - HTML5 Transcript/Captions"
              >
                {transcript}
              </Collapse>
            </figcaption>
          </>
        ) : null}
        {description ? (
          <>
            <figcaption className="ds-body">{description}</figcaption>
          </>
        ) : null}
      </figure>
    </>
  );
}

VideoPlayer.propTypes = {
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
   * transript for the given video. code passed in to fill the expanded area.
   */
  transcript: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

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
   * src: if using a .vtt file add 'file-loader!' infront of file path
   * so .vtt can be loaded correctly.
   */
  trackProps: PropTypes.shape({
    src: PropTypes.string,
  }),
};
