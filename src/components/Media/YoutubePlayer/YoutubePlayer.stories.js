import { YoutubePlayer } from "./YoutubePlayer";
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
  videoURL: "https://www.youtube.com/embed/LLg-UsTr7us",
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
};
