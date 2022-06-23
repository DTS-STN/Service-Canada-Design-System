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
import screenfull from "screenfull";
import { Image } from "../../Image/Image";
import "../styles.css";

export function Video(props) {
  const { id, videoURL, poster, description, trackProps } = props;
  const [state, setState] = React.useState({
    pausePlay: false,
    mute: false,
    volume: 50 / 100,
    caption: false,
    time: 0,
    curTimeDisplay: "00:00:00",
    totalTimeDisplay: "00:00:00",
    totalTime: 0,
    screen: false,
    speed: 1.0,
    speedViewState: false,
    volumeViewState: false,
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
    volumeViewState,
  } = state;
  // const [, setPlayerRef] = React.useState(playerRef1);
  const playerRef1 = React.useRef(null);
  const playerRef2 = React.useRef(null);

  // pausing and playing the video
  const handlePausePlay = () => {
    setState({ ...state, pausePlay: !state.pausePlay });
  };

  // handle opening/closing volume toggle
  const handleOpenVolume = () => {
    setState({ ...state, volumeViewState: !state.volumeViewState });
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
      <div
        id={id}
        className="ds-relative ds-w-full ds-pt-56.25% ds-border ds-border-multi-neutrals-grey85a"
      >
        <div className={`${!caption ? "ds-hidden" : ""} `}>
          <ReactPlayer
            ref={playerRef1}
            className={`ds-absolute ds-top-0 ds-left-0 `}
            url={videoURL}
            playing={pausePlay}
            width="100%"
            height="100%"
            volume={caption ? volume : 0}
            muted={mute}
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
                time = new Date(e * 1000).toISOString().substring(11, 19);
              } else {
                time = "00:00:00";
              }
              setState({
                ...state,
                totalTime: e,
                totalTimeDisplay: time,
              });
            }}
            onEnded={handleEnd}
            config={{
              file: {
                attributes: { poster: poster },
                tracks: [
                  {
                    kind: trackProps.kind,
                    src: trackProps.src,
                    srcLang: trackProps.srcLang,
                    default: true,
                  },
                ],
              },
            }}
          />
        </div>
        <div className={`${caption ? "ds-hidden" : ""} `}>
          <ReactPlayer
            ref={playerRef2}
            className={`ds-absolute ds-top-0 ds-left-0`}
            url={videoURL}
            playing={pausePlay}
            width="100%"
            height="100%"
            volume={!caption ? volume : 0}
            muted={mute}
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
                time = new Date(e * 1000).toISOString().substring(11, 19);
              } else {
                time = "00:00:00";
              }
              setState({
                ...state,
                totalTime: e,
                totalTimeDisplay: time,
              });
            }}
            config={{
              file: {
                attributes: { poster: poster },
              },
            }}
            onEnded={handleEnd}
          />
        </div>
        {/* center play button */}
        <div>
          <button
            onClick={handlePausePlay}
            className="pauseScreen ds-absolute ds-left-0 ds-top-0 ds-w-full ds-pt-56.25%"
          >
            {!pausePlay ? (
              <Image
                alt="Default Image"
                id="image"
                className="ds-absolute ds-inset-1/2 ds-w-23px ds-h-23px"
                src={playBtn}
              />
            ) : null}
          </button>
        </div>
        <div className="ds-absolute ds-w-full ds-bg-multi-neutrals-grey100 ds-pb-10px ds-h-fit">
          {/* top controls */}
          <section className="ds-p-8px progressBar">
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
          <section className="bottomControls ds-flex">
            {/* volume controls */}
            <div className="ds-flex">
              {/* rewind */}
              <button
                onClick={handleRewind}
                className="ds-media-player-buttons ds-p-12px"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color active:ds-filter-none ds-w-23px ds-h-23px"
                  src={rewindIcon}
                />
              </button>
              {/* pause play controls */}
              <button
                onClick={handlePausePlay}
                className="ds-media-player-buttons ds-p-12px"
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
                className="ds-media-player-buttons ds-p-12px"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-23px ds-h-23px"
                  src={fastForwardIcon}
                />
              </button>
            </div>
            <div className="newLayout ds-flex">
              <div>
                <button
                  onClick={handleOpenVolume}
                  className="ds-media-player-buttons ds-p-12px"
                >
                  <Image
                    alt="Default Image"
                    id="image"
                    className="ds-filter-color ds-w-23px ds-h-23px"
                    src={mute === true ? volumeNoneImage : volumeImage}
                  />
                </button>
                <div
                  className={
                    volumeViewState ? "volumePos ds-volume-bar" : "ds-hidden"
                  }
                >
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

              <div className="timePos ds-m-12px ds-ml-10px ds-text-multi-neutrals-white ds-flex">
                <p>
                  <span className="ds-hidden">Current position:</span>
                  <span>{curTimeDisplay}</span>
                </p>
                <p className="ds-pl-2px ds-pr-2px">/</p>
                <p>
                  <span className="ds-hidden">Total time:</span>
                  <span>{totalTimeDisplay}</span>
                </p>
              </div>
            </div>

            {/* captions */}
            <div className="ds-flex ds-ml-auto ds-flex-end">
              <button
                onClick={handleCaption}
                className="ds-media-player-buttons ds-p-10px"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-filter-color ds-w-25px ds-h-25px"
                  src={caption === false ? captionClosedIcon : captionIcon}
                />
                <span className="ds-hidden">Show closed captioning</span>
              </button>
              {/* caption active state indicator */}
              <div
                className={
                  caption ? `capIndicator ds-bg-multi-blue-blue15` : ""
                }
              />
              {/* playback speed */}
              <button
                onClick={handleOpenSpeeds}
                className="ds-playbackButton ds-py-12px ds-px-6px ds-playback-font"
              >
                <p className="ds-w-33px ds-h-23px">{speed}x</p>
              </button>
              <div
                className={
                  speedViewState
                    ? "menuPos ds-playback-font ds-bg-multi-neutrals-grey90a ds-flex ds-flex-col"
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
                          ? "ds-w-44px ds-h-30px ds-bg-multi-blue-blue15 ds-text-multi-neutrals-grey100"
                          : "ds-w-44px ds-h-30px"
                      }
                    >
                      {rate}x
                    </button>
                  );
                })}
              </div>
              {/* expand collapse */}
              <button
                onClick={handleScreen}
                className="ds-media-player-buttons ds-p-12px"
              >
                <Image
                  alt="Default Image"
                  id="image"
                  className="ds-w-23px ds-h-23px"
                  src={!screen ? expandIcon : collapseIcon}
                />
              </button>
            </div>
          </section>
        </div>
      </div>
      <>
        {description ? (
          <div className="desPos">
            <figcaption className="ds-body">{description}</figcaption>
          </div>
        ) : null}
      </>
    </>
  );
}

Video.propTypes = {
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

  /** track props (captions)
   * src: if using a .vtt file add 'file-loader!' infront of file path
   * so .vtt can be loaded correctly.
   *
   * kind: captions, subtitles, etc
   *
   * srcLang: what language are the video captions for
   **/
  trackProps: PropTypes.shape({
    src: PropTypes.string,
    srcLang: PropTypes.oneOf(["en", "fr"]),
    kind: PropTypes.string,
  }),
};
