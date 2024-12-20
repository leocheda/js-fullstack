import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: { English: [], Spanish: [] },
  status: "idle",
  error: null,
};

export function addWordThunk(word) {
  return (dispatch, getState) => {
    const language = getState().settings.selectedLanguage;
    dispatch(addWord({ language, ...word }));
  };
}

export const fetchWords = createAsyncThunk("word/fetchWords", async () => {
  const response = await fetch("/api/words");
  const data = await response.json();
  return data;
});

export const addNewWord = createAsyncThunk("word/addNewWord", async (word) => {
  const response = await fetch("/api/words", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(word),
  });
  const data = await response.json();
  return data;
});

export const toggleRememberedWord = createAsyncThunk(
  "word/toggleRememberedWord",
  async (word, { getState }) => {
    const response = await fetch(`/api/words/${word.word}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        remembered: !word.remembered,
        language: getState().settings.selectedLanguage,
      }),
    });
    const data = await response.json();
    return data;
  }
);

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addWord: (state, action) => {
      const { language, word, def } = action.payload;
      state.words[language].push({
        word,
        def,
        remembered: false,
      });
    },
    toggleRemembered(state, action) {
      const { language, word } = action.payload;
      const wordToFind = state.words[language].find((w) => w.word === word);
      wordToFind.remembered = !wordToFind.remembered;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWords.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.words = action.payload;
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewWord.fulfilled, (state, action) => {
        state.words[action.payload.language].push(action.payload);
      })
      .addCase(toggleRememberedWord.fulfilled, (state, action) => {
        const { language, word } = action.payload;
        const wordToFind = state.words[language].find((w) => w.word === word);
        wordToFind.remembered = !wordToFind.remembered;
      });
  },
});

export const selectWordsStatus = (state) => state.word.status;
export const selectWordsError = (state) => state.word.error;

export const selectWords = (state) =>
  state.word.words[state.settings.selectedLanguage];

export const selectFilteredWords = (state) => {
  const words = selectWords(state);
  return words
    .filter((word) =>
      state.action.searchTerm
        ? word.word.startsWith(state.action.searchTerm)
        : word
    )
    .filter((word) => {
      if (state.action.filter === "remembered") return word.remembered;
      if (state.action.filter === "unremembered") return !word.remembered;
      return true;
    })
    .sort((wordA, wordB) => {
      if (state.action.sort === "asc")
        return wordA.word.localeCompare(wordB.word);
      if (state.action.sort === "desc")
        return wordB.word.localeCompare(wordA.word);
      return 0;
    });
};

export const selectRememberedWords = (state) =>
  state.word.words[state.settings.selectedLanguage].filter(
    (word) => word.remembered
  ).length;

export const selectRemainingWords = (state) =>
  state.word.words[state.settings.selectedLanguage].length -
  selectRememberedWords(state);

export const { toggleRemembered, addWord } = wordSlice.actions;
export default wordSlice.reducer;
