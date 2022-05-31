import { VideoPlayer } from "./VideoPlayer";
export default {
  title: "Components/Media/VideoPlayer",
  component: VideoPlayer,
};

const Template = (args) => <VideoPlayer {...args} />;

export const English = Template.bind({});
export const French = Template.bind({});

English.args = {
  id: "media",
  lang: "en",
  video: "https://wet-boew.github.io/wet-boew-attachments/videos/video1-en.mp4",
  title: "job something",
  poster: "demo/video1-en.jpg",
  type: "video/mp4",
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
    src: "#inline-captions",
    dataType: "text/html",
  },
};

French.args = {
  id: "media",
  lang: "en",
  video:
    "https://wet-boew.github.io/wet-boew-attachments/videos/video1-fr.webm",
  title: "Trouver un emploi",
  poster: "demo/video1-fr.jpg",
  type: "video/webm",
  description: [
    <p>
      Trouver un emploi (<a href="cpts-lg-fr.html">Transcription</a>)
    </p>,
  ],
  trackProps: {
    src: "cpts-lg-fr.html",
    dataType: "text/html",
  },
};
