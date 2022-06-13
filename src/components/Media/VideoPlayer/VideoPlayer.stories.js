import { VideoPlayer } from "./VideoPlayer";
import exampleVideo from "../examples/video.mp4";
import exampleCaps from "file-loader!../examples/video.vtt";

export default {
  title: "Components/Media/VideoPlayer",
  component: VideoPlayer,
};

const Template = (args) => <VideoPlayer {...args} />;

export const English = Template.bind({});
export const French = Template.bind({});
export const captions = Template.bind({});

captions.args = {
  id: "media",
  lang: "en",
  video: exampleVideo,
  title: "job something",
  poster: "demo/video1-en.jpg",
  type: "video/mp4",
  trackProps: {
    src: exampleCaps,
  },
};

English.args = {
  id: "media",
  lang: "en",
  video: "https://wet-boew.github.io/wet-boew-attachments/videos/video1-en.mp4",
  title: "job something",
  poster: "demo/video1-en.jpg",
  transcript: [
    <div key={1}>
      <p>
        <strong>
          (Animated pen draws a red line that leads into the text Looking for A
          Job)
        </strong>
      </p>
      <p>
        <strong>
          (Cut to a medium shot of the Host. LINE DRAWING GRAPHIC: Stick person
          appears and waves.)
        </strong>
      </p>
      <p>
        <span data-begin="2.50s" data-dur="3.84s">
          Hi, my name is Eric, and I&#39;m a Service Canada employee.
        </span>
      </p>
    </div>,
  ],
  trackProps: {
    src: "",
  },
};

French.args = {
  id: "media",
  lang: "en",
  video:
    "https://wet-boew.github.io/wet-boew-attachments/videos/video1-fr.webm",
  title: "Trouver un emploi",
  poster: "demo/video1-fr.jpg",
  description: [
    <p>
      Trouver un emploi (<a href="cpts-lg-fr.html">Transcription</a>)
    </p>,
  ],
  trackProps: {
    src: "",
  },
};
