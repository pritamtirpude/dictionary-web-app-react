import {
  Header,
  Search,
  TitleAudioWrapper,
  WordInfo,
  Loading,
  Dictionary,
  NotFound,
  FollowMe,
} from "./components";
import { useState } from "react";
import { useFontStore, useThemeStore, useWordStore } from "./store/store";
import useDebounce from "./hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fecthWordMeaning } from "./api";
import { motion, AnimatePresence } from "framer-motion";
import { wordInfoAnimation } from "./animation";

const App = () => {
  const fontStore = useFontStore();
  const themeStore = useThemeStore();
  const wordStore = useWordStore();

  const { fontFamilyCustom } = fontStore;
  const { themeMode } = themeStore;
  const { setWord } = wordStore;

  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const { isInitialLoading, error, isError, refetch } = useQuery({
    queryKey: ["word", debouncedSearchValue],
    queryFn: () => fecthWordMeaning(debouncedSearchValue),
    onSuccess: (data) => {
      setWord(data);
    },
    retry: 1,
    enabled: !!debouncedSearchValue,
    refetchOnWindowFocus: false,
  });

  return (
    <main
      className={`w-full min-h-screen bg-light-100 ${
        themeMode === "dark" && "dark:bg-dark-100"
      } ${
        fontFamilyCustom === "Serif"
          ? "font-serifFont"
          : fontFamilyCustom === "Sans Serif"
          ? "font-sansSerifFont"
          : fontFamilyCustom === "Mono"
          ? "font-monoFont"
          : "font-sans"
      } transition-all relative`}
    >
      <div className="md:max-w-3xl mx-auto p-5">
        <Header />
        <Search setSearchValue={setSearchValue} refetch={refetch} />

        {debouncedSearchValue.length === 0 ? (
          <AnimatePresence mode="wait" initial={false}>
            <Dictionary key="dictionary" />
          </AnimatePresence>
        ) : isError ? (
          <AnimatePresence mode="wait" initial={false}>
            {isError && <NotFound error={error} key="dictionary" />}
          </AnimatePresence>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            {isInitialLoading && <Loading />}

            {!isInitialLoading && !error && (
              <motion.div {...wordInfoAnimation} className="mt-10">
                <TitleAudioWrapper />
                <WordInfo />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      <FollowMe />
    </main>
  );
};

export default App;
