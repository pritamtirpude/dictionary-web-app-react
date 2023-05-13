import { useWordStore, useThemeStore } from "../../store/store";
import { RiShareBoxFill } from "react-icons/ri";

const WordInfo = () => {
  const wordStore = useWordStore();
  const themeStore = useThemeStore();

  const { wordInfo } = wordStore;
  const { themeMode } = themeStore;

  const nouns = wordInfo[0].meanings.filter(
    (noun) => noun.partOfSpeech === "noun"
  );

  const verbs = wordInfo[0].meanings.filter(
    (noun) => noun.partOfSpeech === "verb"
  );

  return (
    <div className="mt-10">
      {/* Nouns */}
      {nouns.map((noun, index) => (
        <div key={index}>
          <div className="flex items-center gap-5">
            <h2
              className={`font-bold text-lg ${
                themeMode === "dark" ? "text-dark-400" : "text-black"
              }`}
            >
              {noun.partOfSpeech}
            </h2>
            <div
              className={`w-full h-[0.1rem] ${
                themeMode === "dark" ? "bg-dark-400" : "bg-light-200"
              }`}
            ></div>
          </div>

          <div className="mt-5">
            <h3
              className={`font-bold text-base ${
                themeMode === "dark" ? "text-dark-300" : "text-light-300"
              }`}
            >
              Meaning
            </h3>

            {noun?.definitions.map((definition) => (
              <ul key={definition.definition} className="list-disc">
                <li
                  className={`${
                    themeMode === "dark" ? "text-dark-400" : "text-light-400"
                  } py-2 ml-10`}
                >
                  <span
                    className={`${
                      themeMode === "dark" ? "text-dark-400" : "text-black"
                    }`}
                  >
                    {definition.definition}
                  </span>
                </li>
              </ul>
            ))}
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-5">
              <h3
                className={`font-bold text-base ${
                  themeMode === "dark" ? "text-dark-300" : "text-light-300"
                }`}
              >
                Synonyms
              </h3>

              <strong
                className={`${
                  themeMode === "dark" ? "text-dark-400" : "text-light-400"
                } font-extrabold`}
              >
                {noun?.synonyms[0] ? noun?.synonyms[0] : "N/A"}
              </strong>
            </div>
          </div>
        </div>
      ))}

      {/* Verb */}
      {verbs.map((verb) => (
        <div key={verb.partOfSpeech} className="mt-10">
          <div className="flex items-center gap-5">
            <h2
              className={`font-bold text-lg ${
                themeMode === "dark" ? "text-dark-400" : "text-black"
              }`}
            >
              {verb.partOfSpeech}
            </h2>
            <div
              className={`w-full h-[0.1rem] ${
                themeMode === "dark" ? "bg-dark-400" : "bg-light-200"
              }`}
            ></div>
          </div>

          <div className="mt-5">
            <h3
              className={`font-bold text-base ${
                themeMode === "dark" ? "text-dark-300" : "text-light-300"
              }`}
            >
              Meaning
            </h3>

            {verb?.definitions.map((definition) => (
              <ul key={definition.definition} className="list-disc">
                <li
                  className={`${
                    themeMode === "dark" ? "text-dark-400" : "text-light-400"
                  } py-2 ml-10`}
                >
                  <span
                    className={`${
                      themeMode === "dark" ? "text-dark-400" : "text-black"
                    }`}
                  >
                    {definition.definition}
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-5 items-center md:flex gap-5">
        <h3
          className={`font-bold text-base ${
            themeMode === "dark" ? "text-dark-300" : "text-light-300"
          }`}
        >
          Source
        </h3>
        <a
          href={wordInfo[0]?.sourceUrls}
          className={`underline flex gap-2 items-center w-full truncate text-ellipsis ${
            themeMode === "dark" ? "text-dark-400" : "text-light-400"
          }`}
          target="_blank"
          rel="noreferrer"
        >
          {wordInfo[0]?.sourceUrls}

          <span>
            <RiShareBoxFill size={15} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default WordInfo;
