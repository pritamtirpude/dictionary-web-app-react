import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFontStore = create(
  persist(
    (set) => ({
      isFontOpen: false,
      fontFamilyCustom: "Serif",
      toggleFont: () => set((state) => ({ isFontOpen: !state.isFontOpen })),
      setFont: (font) => set(() => ({ fontFamilyCustom: font })),
    }),
    { name: "font-store" }
  )
);

export const useWordStore = create(
  persist(
    (set) => ({
      wordInfo: [],
      setWord: (word) => set(() => ({ wordInfo: word })),
    }),
    { name: "word-store" }
  )
);

export const useThemeStore = create(
  persist(
    (set) => ({
      themeMode: "light",
      setTheme: (theme) => set(() => ({ themeMode: theme })),
    }),
    { name: "theme-store" }
  )
);
