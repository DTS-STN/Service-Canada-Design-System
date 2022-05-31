import { YoutubePlayer } from "./YoutubePlayer";
export default {
  title: "Components/Media/YoutubePlayer",
  component: YoutubePlayer,
};

const Template = (args) => <YoutubePlayer {...args} />;

export const Youtube = Template.bind({});

Youtube.args = {
  id: "youtube",
  lang: "en",
  title: "Suspect",
  type: "video/youtube",
  video: "https://www.youtube.com/watch?v=9znKJqnFuuY&t=2s",
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
    src: "cpts-lg-fr.html",
    dataType: "text/html",
  },
};
