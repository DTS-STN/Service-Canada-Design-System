/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import PropTypes from "prop-types";
import React from "react";
import ReactPlayer from "react-player";
import playBtn from "../../../assets/playBtn.svg";
import pauseBtn from "../../../assets/pauseIcon.svg";
import volumeImage from "../../../assets/volume.svg";
import volumeNoneImage from "../../../assets/volumeNone.svg";
import captionIcon from "../../../assets/caption.svg";
import captionClosedIcon from "../../../assets/captionClosed.svg";
import { Image } from "../../Image/Image";
import "./styles.css";

export function YoutubePlayer(props) {
  const { id, videoURL, trackProps, description } = props;
  const [state, setState] = React.useState({
    pausePlay: false,
    mute: false,
    volume: 50,
    caption: false,
    time: 0,
    curTimeDisplay: "00:00:00",
    totalTimeDisplay: "00:00:00",
    totalTime: 0,
  });
  const {
    pausePlay,
    mute,
    volume,
    caption,
    time,
    totalTime,
    curTimeDisplay,
    totalTimeDisplay,
  } = state;
  const playerRef = React.useRef(null);

  // pausing and playing the video
  const handlePausePlay = () => {
    setState({ ...state, pausePlay: !state.pausePlay });
  };

  // muting and unmuting the video
  const handleMute = () => {
    setState({ ...state, mute: !state.mute });
  };
  const handleVolumeChange = (e) => {
    setState({
      ...state,
      mute: e.target.value === "0" ? true : false,
      volume: parseFloat(parseInt(e.target.value) / 100),
    });
  };

  // muting and unmuting the video
  const handleCaption = () => {
    setState({ ...state, caption: !state.caption });
  };

  // current video time
  const handleTime = (e) => {
    setState({
      ...state,
      time: parseFloat(parseInt(e.playedSeconds) / totalTime),
      curTimeDisplay: new Date(e.playedSeconds * 1000)
        .toISOString()
        .substring(11, 19),
    });
  };

  // update current time
  const changeTime = (e) => {
    let pBar = document.getElementById("vidProgressBar");
    let totalWidth = pBar.offsetWidth;
    let timeRatio = e.pageX / totalWidth;
    setState({ ...state, time: parseFloat(timeRatio) });
    playerRef.current.seekTo(parseFloat(timeRatio));
  };

  // handle end of the video
  const handleEnd = () => {
    setState({ ...state, pausePlay: false });
  };

  return (
    <>
      <div id={id} className="ds-relative ds-w-full ds-pt-56.25% ">
        <ReactPlayer
          ref={playerRef}
          className="ds-absolute ds-top-0 ds-left-0"
          url={videoURL}
          playing={pausePlay}
          width="100%"
          height="100%"
          volume={volume}
          muted={mute}
          onPlay={() => {
            setState({ ...state, pausePlay: true });
          }}
          onPause={() => {
            setState({ ...state, pausePlay: false });
          }}
          onProgress={handleTime}
          onDuration={(e) => {
            let time = "";
            if (!isNaN(e)) {
              time = new Date((e - 1) * 1000).toISOString().substring(11, 19);
            } else {
              time = "00:00:00";
            }
            setState({
              ...state,
              totalTime: e - 1,
              totalTimeDisplay: time,
            });
          }}
          onEnded={handleEnd}
          config={{
            file: {
              tracks: [
                {
                  kind: trackProps.kind,
                  src: trackProps.src,
                  srcLang: trackProps.srcLang,
                  default: true,
                  // mode: "showing"
                },
              ],
            },
          }}
        >
          {/* <track
            src={trackProps.src}
            kind="captions"
            srcLang="en"
            label="English"
          /> */}
        </ReactPlayer>
        <div className="ds-absolute ds-w-full ds-bg-multi-neutrals-grey100">
          {/* top controls */}
          <section className="ds-p-8px">
            <progress
              id="vidProgressBar"
              className="ds-w-full ds-h-20px ds-border-2 ds-rounded-2xl ds-border-multi-neutrals-white ds-bg-multi-neutrals-white"
              tabIndex="0"
              aria-live="off"
              max="100"
              value={time * 100}
              onMouseDown={changeTime}
            />
          </section>
          {/* bottom controls */}
          <section className="ds-pb-20px ds-pt-10px ds-flex ds-flex-row">
            {/* pause play controls */}
            <button onClick={handlePausePlay} className="ds-pl-20px ds-pr-20px">
              <Image
                alt="Default Image"
                id="image"
                className="ds-filter-color ds-w-25px ds-h-25px"
                src={pausePlay === false ? playBtn : pauseBtn}
              />
            </button>

            {/* volume controls */}
            <button onClick={handleMute} className="ds-pl-20px ds-pr-20px">
              <Image
                alt="Default Image"
                id="image"
                className="ds-filter-color ds-w-25px ds-h-25px"
                src={mute === true ? volumeNoneImage : volumeImage}
              />
            </button>
            <div className="ds-pl-20px ds-pr-20px">
              <p id="wb-auto-2-md-vlm-lbl" className="ds-hidden">
                Volume
              </p>
              <input
                type="range"
                className="volume"
                aria-label="Volume slider"
                aria-controls="wb-auto-2-md"
                aria-labelledby="wb-auto-2-md"
                aria-describedby="wb-auto-2-md-vlm-lbl"
                title="Volume"
                min="0"
                max="100"
                step="5"
                onChange={handleVolumeChange}
              />
            </div>

            <div className="ds-pl-20px">
              <div className="ds-text-multi-neutrals-white ds-flex">
                <p className="">
                  <span className="ds-hidden">Current position:</span>
                  <span>{curTimeDisplay}</span>
                </p>
                <p className="ds-pl-2px ds-pr-2px">/</p>
                <p className="">
                  <span className="ds-hidden">Total time:</span>
                  <span>{totalTimeDisplay}</span>
                </p>
              </div>
            </div>
            <button
              onClick={handleCaption}
              className="ds-ml-auto ds-pl-20px ds-pr-20px"
            >
              <Image
                alt="Default Image"
                id="image"
                className="ds-filter-color ds-w-25px ds-h-25px"
                src={caption === false ? captionIcon : captionClosedIcon}
              />
              <span className="ds-hidden">Show closed captioning</span>
            </button>
          </section>
        </div>
      </div>
      <>
        {description ? (
          <div className="ds-pt-97px">
            <figcaption className="ds-body">{description}</figcaption>
          </div>
        ) : null}
      </>
    </>
  );
}

YoutubePlayer.propTypes = {
  /**
   * component id
   */
  id: PropTypes.string,

  /**
   * The url of the given Youtube video
   */
  videoURL: PropTypes.string,

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
   * src: path to captions file
   * srcLang: language of text
   * kind: captions, subtitles, etc...
   */
  trackProps: PropTypes.shape({
    src: PropTypes.string,
    srcLang: PropTypes.string,
    kind: PropTypes.string,
  }),
};
