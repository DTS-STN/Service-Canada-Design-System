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
import rewindIcon from "../../../assets/backward-fast-solid.svg";
import fastForwardIcon from "../../../assets/forward-fast.svg";
import expandIcon from "../../../assets/expand-solid.svg";
import collapseIcon from "../../../assets/compress-solid.svg";
import gaugeIcon from "../../../assets/gauge-solid.svg";
import screenfull from "screenfull";
import { Image } from "../../Image/Image";
import "./styles.css";

export function YoutubePlayer(props) {
  const { id, videoURL, description } = props;
  const [state, setState] = React.useState({
    pausePlay: false,
    mute: false,
    volume: 50,
    caption: false,
    time: 0,
    curTimeDisplay: "00:00:00",
    totalTimeDisplay: "00:00:00",
    totalTime: 0,
    screen: false,
    speed: 1.0,
    speedViewState: false,
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
    screen,
    speed,
    speedViewState,
  } = state;
  // const [, setPlayerRef] = React.useState(playerRef1);
  const playerRef1 = React.useRef(null);
  const playerRef2 = React.useRef(null);

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

  // turn captions on and off
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
    playerRef1.current.seekTo(parseFloat(timeRatio));
    playerRef2.current.seekTo(parseFloat(timeRatio));
  };

  // handle end of the video
  const handleEnd = () => {
    setState({ ...state, pausePlay: false });
  };

  // handle expanding and collapsing screen
  const handleScreen = () => {
    screenfull.toggle();
  };
  screenfull.onchange(() => {
    setState({ ...state, screen: !state.screen });
  });

  // handle expanding and collapsing screen
  const handleOpenSpeeds = () => {
    setState({ ...state, speedViewState: !state.speedViewState });
  };

  // handle fast forward
  const handleFastForward = () => {
    playerRef1.current.seekTo(playerRef1.current.getCurrentTime() + 5);
    playerRef2.current.seekTo(playerRef2.current.getCurrentTime() + 5);
  };

  // handle rewind
  const handleRewind = () => {
    playerRef1.current.seekTo(playerRef1.current.getCurrentTime() - 5);
    playerRef2.current.seekTo(playerRef2.current.getCurrentTime() - 5);
  };

  return (
    <>
      <div id={id} className="ds-relative ds-w-full ds-pt-56.25% ">
        <div className={`${!caption ? "ds-hidden" : ""} `}>
          <ReactPlayer
            ref={playerRef1}
            className={`ds-absolute ds-top-0 ds-left-0 `}
            url={videoURL}
            playing={pausePlay}
            width="100%"
            height="100%"
            volume={volume}
            muted={caption ? mute : !mute}
            playbackRate={speed}
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
              youtube: { playerVars: { cc_load_policy: 1, showinfo: 1 } },
            }}
          />
        </div>
        <div className={`${caption ? "ds-hidden" : ""} `}>
          <ReactPlayer
            ref={playerRef2}
            className={`ds-absolute ds-top-0 ds-left-0 ds-border ds-border-solid ds-border-multi-neutrals-grey85a`}
            url={videoURL}
            playing={pausePlay}
            width="100%"
            height="100%"
            volume={volume}
            muted={caption ? !mute : mute}
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
              youtube: { playerVars: { cc_load_policy: 0, showinfo: 1 } },
            }}
          />
        </div>
        <div className="ds-absolute ds-w-full ds-bg-multi-neutrals-grey100 ds-pb-10px">
          {/* top controls */}
          <section className="ds-p-8px">
            <progress
              id="vidProgressBar"
              className="ds-w-full ds-h-10px ds-border-2 ds-rounded-2xl ds-border-multi-neutrals-white ds-bg-multi-neutrals-white"
              tabIndex="0"
              aria-live="off"
              max="100"
              value={time * 100}
              onMouseDown={changeTime}
            />
          </section>
          {/* bottom controls */}
          <section className="ds-flex sm:ds-flex-row ds-flex-col sm:ds-px-10px">
            <div className="ds-flex ds-flex-row">
              {/* rewind */}
              <button
                onClick={handleRewind}
                className="ds-media-player-buttons"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-23px ds-h-23px"
                  src={rewindIcon}
                />
              </button>
              {/* pause play controls */}
              <button
                onClick={handlePausePlay}
                className="ds-media-player-buttons"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-23px ds-h-23px"
                  src={pausePlay === false ? playBtn : pauseBtn}
                />
              </button>
              {/* fast forward */}
              <button
                onClick={handleFastForward}
                className="ds-media-player-buttons"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-23px ds-h-23px"
                  src={fastForwardIcon}
                />
              </button>

              {/* volume controls */}
              <div className="ds-flex ds-flex-row ds-ml-auto">
                <button
                  onClick={handleMute}
                  className="ds-media-player-buttons"
                >
                  <Image
                    alt="Default Image"
                    id="image"
                    className="ds-filter-color ds-w-23px ds-h-23px"
                    src={mute === true ? volumeNoneImage : volumeImage}
                  />
                </button>
                <div className="ds-mr-12px ds-my-12px">
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
              </div>
            </div>

            <div className="ds-flex ds-flex-row sm:ds-ml-auto">
              <div className="ds-m-12px ds-ml-10px ds-text-multi-neutrals-white ds-flex">
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
              {/* captions */}
              <button
                onClick={handleCaption}
                className="ds-media-player-buttons ds-ml-auto"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-23px ds-h-23px"
                  src={caption === false ? captionIcon : captionClosedIcon}
                />
                <span className="ds-hidden">Show closed captioning</span>
              </button>
              {/* playback speed */}
              {/* set up mobile breakpoints and adjust absolute positioning based mobile */}
              <div
                className={
                  speedViewState
                    ? "menuPos ds-bg-multi-neutrals-grey90 ds-flex ds-flex-col"
                    : "ds-hidden"
                }
              >
                {[2, 1.5, 1, 0.5].map((rate) => {
                  return (
                    <button
                      onClick={() => {
                        setState({ ...state, speed: rate });
                      }}
                      className={
                        rate === speed
                          ? "ds-w-44px ds-h-30px ds-bg-multi-neutrals-grey40 sm:ds-mx-10px"
                          : "ds-w-44px ds-h-30px sm:ds-mx-10px"
                      }
                    >
                      {rate}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={handleOpenSpeeds}
                className="ds-media-player-buttons"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-23px ds-h-23px"
                  src={gaugeIcon}
                />
              </button>
              {/* expand collapse */}
              <button
                onClick={handleScreen}
                className="ds-media-player-buttons"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-23px ds-h-23px"
                  src={!screen ? expandIcon : collapseIcon}
                />
              </button>
            </div>
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
};
