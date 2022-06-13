import { YoutubePlayer } from "./YoutubePlayer";
import exampleCaps from "file-loader!../examples/video.vtt";

export default {
  title: "Components/Media/YoutubePlayer",
  component: YoutubePlayer,
};

const Template = (args) => <YoutubePlayer {...args} />;

export const Youtube = Template.bind({});

Youtube.args = {
  id: "youtube",
  title: "Suspect",
  type: "video/youtube",
  videoURL: "https://www.youtube.com/watch?v=LLg-UsTr7us",
  description: [
    <div key={1}>
      <p>
        Suspect (
        <a href="https://healthycanadians.gc.ca/video/suspect-eng.php#trans">
          Transcript
        </a>
        )
      </p>
    </div>,
  ],
  trackProps: {
    src: exampleCaps,
    srcLang: "en",
    kind: "subtitles",
  },
};
