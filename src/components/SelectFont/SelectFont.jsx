import { useFontStore, useThemeStore } from "../../store/store";
import { dropdownAnimation } from "../../animation";
import { motion } from "framer-motion";

const SelectFont = () => {
  const fontStore = useFontStore();
  const themeStore = useThemeStore();

  const { themeMode } = themeStore;

  const { setFont } = fontStore;

  const fontFamilies = [
    {
      font: "Serif",
    },
    {
      font: "Sans Serif",
    },
    {
      font: "Mono",
    },
  ];

  return (
    <motion.ul
      {...dropdownAnimation}
      className="absolute z-50 w-44 h-auto bg-white top-10 right-0 rounded-md border-[1px] custom-box-shadow overflow-hidden"
    >
      {fontFamilies.map((fontItem, index) => (
        <li
          className={`p-3  font-medium border-b-[1px] border-gray-200 last-of-type:border-none transition-all hover:text-white ${
            themeMode === "dark" ? "hover:bg-dark-300" : "hover:bg-light-200"
          }`}
          key={index}
          onClick={() => setFont(fontItem.font)}
        >
          {fontItem.font}
        </li>
      ))}
    </motion.ul>
  );
};

export default SelectFont;
