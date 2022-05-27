import PropTypes from "prop-types";
import React from "react";
import { Collapse } from "../Collapse/Collapse";

export function Media(props) {
  const { id, video, title, poster, type, transcript, description } = props;

  return (
    <>
      <figure id={id}>
        <video
          className="ds-border ds-border-solid ds-border-multi-neutrals-grey85a"
          poster={poster}
          title={title}
          preload="auto"
          controls
        >
          <source type={type} src={video} />
          <track
            src="#inline-captions"
            kind="captions"
            data-type="text/html"
            srclang="en"
            label="English"
          />
        </video>
        <figcaption className="ds-pt-10px">
          <Collapse
            id="defaultCollapse1"
            title="Looking for a Job - HTML5 Transcript/Captions"
          >
            {transcript}
          </Collapse>
        </figcaption>
        <figcaption className="ds-pt-6px ds-body">{description}</figcaption>
      </figure>
    </>
  );
}

Media.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

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
};
