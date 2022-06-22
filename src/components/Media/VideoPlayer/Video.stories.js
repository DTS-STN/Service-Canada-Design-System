import { Video } from "./Video";
// import exampleVideo from "../examples/video.mp4";
import exampleCaps from "file-loader!../examples/video.vtt";

export default {
  title: "Components/Media/Video",
  component: Video,
};

const Template = (args) => <Video {...args} />;

export const VideoPlayer = Template.bind({});

VideoPlayer.args = {
  id: "wetboew",
  videoURL:
    "https://wet-boew.github.io/wet-boew-attachments/videos/video1-en.mp4",
  poster:
    "https://github.com/wet-boew/wet-boew/blob/master/src/plugins/multimedia/demo/video1-en.jpg",
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
    kind: "subtitles",
    src: exampleCaps,
    srcLang: "en",
  },
};
