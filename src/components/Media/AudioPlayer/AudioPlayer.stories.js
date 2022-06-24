import { AudioPlayer } from "./AudioPlayer";
export default {
  title: "Components/Media/AudioPlayer",
  component: AudioPlayer,
};

const Template = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "media",
  lang: "en",
  video:
    "https://www.archive.org/download/RideOfTheValkyries/ride_of_the_valkyries_2.mp3",
  title: "Ride of the Valkyries",
  type: "audio/mp3",
  description: [
    <p key={1}>Description associated with the given audio clip</p>,
  ],
  trackProps: {
    src: "",
    dataType: "",
  },
};
