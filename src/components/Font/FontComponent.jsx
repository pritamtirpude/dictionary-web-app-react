import { useFontStore, useThemeStore } from "../../store/store";
import { GoChevronDown } from "react-icons/go";
import { SelectFont } from "../../components";
import { AnimatePresence } from "framer-motion";

const FontComponent = () => {
  const fontStore = useFontStore();
  const themeStore = useThemeStore();

  const { fontFamilyCustom, isFontOpen, toggleFont } = fontStore;
  const { themeMode } = themeStore;

  const handleFontClick = () => {
    toggleFont();
  };

  return (
    <div
      onClick={handleFontClick}
      className="flex items-center gap-2 relative cursor-pointer w-full"
    >
      <span
        className={`font-medium text-black ${
          themeMode === "dark" && "text-dark-400"
        }`}
      >
        {fontFamilyCustom}
      </span>

      <GoChevronDown
        className={`transition-all ${isFontOpen && "rotate-180"} ${
          themeMode === "dark" ? "text-dark-400" : "text-light-300"
        }`}
        size={20}
      />

      <AnimatePresence>{isFontOpen && <SelectFont />}</AnimatePresence>
    </div>
  );
};

export default FontComponent;
