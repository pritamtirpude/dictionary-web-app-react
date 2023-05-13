import { useWordStore, useThemeStore } from "../../store/store";

const TitleComponent = () => {
  const wordStore = useWordStore();
  const themeStore = useThemeStore();

  const { themeMode } = themeStore;
  const { wordInfo } = wordStore;

  const { phonetics } = wordInfo[0];

  const phoneticObj = phonetics?.filter((item) => item.text);

  return (
    <>
      {wordInfo[0] && (
        <div>
          <h1
            className={`capitalize text-4xl font-extrabold ${
              themeMode === "dark" ? "dark:text-dark-400" : "text-light-400"
            }`}
          >
            {wordInfo[0].word}
          </h1>
          <span
            className={`text-md font-bold ${
              themeMode === "dark" ? "dark:text-dark-400" : "text-light-400"
            }`}
          >
            {wordInfo[0]?.phonetic || phoneticObj?.text}
          </span>
        </div>
      )}
    </>
  );
};

export default TitleComponent;
