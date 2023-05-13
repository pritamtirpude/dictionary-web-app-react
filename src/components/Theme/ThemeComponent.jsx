import { BiMoon, BiSun } from "react-icons/bi";
import { useThemeStore } from "../../store/store";
import { motion } from "framer-motion";
import { themeIconAnimation } from "../../animation";

const ThemeComponent = () => {
  const themeStore = useThemeStore();

  const { setTheme, themeMode } = themeStore;

  const handleTheme = () => {
    if (themeMode === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <motion.div
      {...themeIconAnimation}
      className="cursor-pointer"
      onClick={handleTheme}
      key={themeMode}
    >
      {themeMode === "dark" ? (
        <BiMoon
          className={`text-black ${themeMode === "dark" && "text-dark-400"}`}
          size={20}
        />
      ) : (
        <BiSun
          className={`text-black ${themeMode === "dark" && "text-dark-400"}`}
          size={20}
        />
      )}
    </motion.div>
  );
};

export default ThemeComponent;
