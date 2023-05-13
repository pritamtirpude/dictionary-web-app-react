import Lottie from "react-lottie-player";
import educationJson from "../../assets/education.json";
import { useThemeStore } from "../../store/store";
import { motion } from "framer-motion";
import { dictionaryAnimation } from "../../animation";

const lottieStyles = {
  width: 300,
  height: 300,
};

const Dictionary = () => {
  const themeStore = useThemeStore();
  const { themeMode } = themeStore;
  return (
    <motion.div
      {...dictionaryAnimation}
      className="flex justify-center items-center flex-col mt-4"
    >
      <Lottie
        loop
        animationData={educationJson}
        play
        style={lottieStyles}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />

      <div className="text-center">
        <h1
          className={`${
            themeMode === "dark" ? "text-dark-400" : "text-light-400"
          } text-xl font-bold`}
        >
          Online Dictionary
        </h1>
        <p
          className={`text-base font-medium ${
            themeMode === "dark" ? "text-dark-400" : "text-black"
          }`}
        >
          Hi there, search any word to find the nouns, verbs, synonyms, meanings
          and much more.😊
        </p>
      </div>
    </motion.div>
  );
};

export default Dictionary;
