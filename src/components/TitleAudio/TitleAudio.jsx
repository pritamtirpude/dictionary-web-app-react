import { useWordStore, useThemeStore } from "../../store/store";
import { HiSpeakerWave } from "react-icons/hi2";
import { useState } from "react";
import useSound from "use-sound";

const TitleAudio = () => {
  const wordStore = useWordStore();
  const themeStore = useThemeStore();

  const { themeMode } = themeStore;
  const { wordInfo } = wordStore;

  const { phonetics } = wordInfo[0];

  let audioObj = phonetics?.find((item) => item.audio.length > 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play] = useSound(audioObj?.audio, {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });

  const playAudio = () => {
    play();
  };

  return (
    <button
      onClick={playAudio}
      disabled={isPlaying}
      className={`flex justify-center items-center rounded-full w-16 h-16 ${
        themeMode === "dark" ? "bg-dark-400" : "bg-light-400"
      } cursor-pointer disabled:cursor-not-allowed transition-transform ${
        isPlaying && "opacity-60 scale-110"
      }`}
    >
      <HiSpeakerWave size={35} className="text-light-100" />
    </button>
  );
};

export default TitleAudio;
