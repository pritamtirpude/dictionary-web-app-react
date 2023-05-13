import { TitleComponent, TitleAudio } from "../../components";

const TitleAudioWrapper = () => {
  return (
    <div className="flex justify-between items-center">
      <TitleComponent />
      <TitleAudio />
    </div>
  );
};

export default TitleAudioWrapper;
