import PropTypes from "prop-types";
import React from "react";

export function YoutubePlayer(props) {
  const { id, videoURL, title, description } = props;
  return (
    <div className="ds-relative ds-w-full ds-pt-56.25%">
      <figure id={id}>
        <iframe
          allow="fullscreen"
          className="ds-absolute ds-top-0 ds-left-0 ds-w-full ds-h-full"
          src={videoURL}
          title={title}
        />
        {description ? (
          <div className="ds-absolute">
            <figcaption className="ds-body">{description}</figcaption>
          </div>
        ) : null}
      </figure>
    </div>
  );
}

YoutubePlayer.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * The url of the given Youtube video. You must change the URL
   * replacing the "watch?v=" with "embed/". Check storybook example
   * for example code
   */
  videoURL: PropTypes.string,

  /**
   * title of the given video
   */
  title: PropTypes.string,

  /**
   * Description of the given video
   */
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
