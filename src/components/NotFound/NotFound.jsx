import Lottie from "react-lottie-player";
import noSearchJson from "../../assets/no-search.json";
import { useThemeStore } from "../../store/store";
import { motion } from "framer-motion";
import { dictionaryAnimation } from "../../animation";

const lottieStyles = {
  width: 300,
  height: 300,
};

const NotFound = ({ error }) => {
  const themeStore = useThemeStore();

  const { themeMode } = themeStore;

  return (
    <motion.div
      {...dictionaryAnimation}
      className="flex justify-center items-center flex-col mt-4"
    >
      <Lottie
        loop
        animationData={noSearchJson}
        play
        style={lottieStyles}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />

      <div className="text-center mt-5">
        <p
          className={`text-base font-medium ${
            themeMode === "dark" ? "text-dark-400" : "text-black"
          }`}
        >
          {error?.response?.data?.message}
        </p>
      </div>
    </motion.div>
  );
};

export default NotFound;
