import React, { useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import {
  fetchWords,
  selectFilteredWords,
  selectWords,
  selectWordsError,
  selectWordsStatus,
  toggleRemembered,
  toggleRememberedWord,
} from "../../state/wordSlice";
import { useDispatch } from "react-redux";
import { selectedLanguage } from "../../state/settingsSlice";
import {
  useGetWordsQuery,
  useToggleRememberedWordMutation,
} from "../../state/apiSlice";

function Words() {
  // const words = useSelector(selectFilteredWords);
  const language = useSelector(selectedLanguage);

  const dispatch = useDispatch();

  const wordsStatus = useSelector(selectWordsStatus);
  const wordsError = useSelector(selectWordsError);

  const {
    data: words = [],
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useGetWordsQuery();

  const [toggleRemembered, { isLoading: isToggling }] =
    useToggleRememberedWordMutation();

  if (isLoading || isFetching) {
    return <div>加载中...</div>;
  }
  if (isError) {
    return <div>出现了错误！{wordsError}</div>;
  }

  return (
    <div className="words">
      {words[language].map((word) => (
        <div key={word.word} className="wordCard">
          <h3>{word.word}</h3>
          <p>{word.def}</p>
          <button
            onClick={() => toggleRemembered({ ...word, language })}
            className={`${
              word.remembered ? "remembered" : "unremembered"
            } wordStatus`}
          >
            {word.remembered ? "已记" : "未记"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Words;
