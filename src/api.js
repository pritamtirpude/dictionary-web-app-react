import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2",
});

export const fecthWordMeaning = async (word) => {
  const response = await BASE_URL.get(`/entries/en/${word}`);
  return response.data;
};
