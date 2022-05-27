import { Media } from "./Media";
export default {
  title: "Components/Media",
  component: Media,
};

const Template = (args) => <Media {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "media",
  video: "https://wet-boew.github.io/wet-boew-attachments/videos/video1-en.mp4",
  title: "job something",
  poster: "demo/video1-en.jpg",
  type: "video/mp4",
  transcript: [
    <>
      <p class="wet-boew-vd">
        <strong>
          (Animated pen draws a red line that leads into the text Looking for A
          Job)
        </strong>
      </p>
      <p class="wet-boew-vd">
        <strong>
          (Cut to a medium shot of the Host. LINE DRAWING GRAPHIC: Stick person
          appears and waves.)
        </strong>
      </p>
      <p>
        <span class="wb-tmtxt" data-begin="2.50s" data-dur="3.84s">
          Hi, my name is Eric, and I&#39;m a Service Canada employee.
        </span>
      </p>
    </>,
  ],
  description: [
    <p>
      <b>Caption:</b> Caption or description associated with the given video
    </p>,
  ],
};
