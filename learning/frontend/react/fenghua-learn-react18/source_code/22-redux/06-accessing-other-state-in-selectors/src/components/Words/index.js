import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { selectWords } from "../../state/wordSlice";

function Words() {
  const words = useSelector(selectWords);

  return (
    <div className="words">
      {words.map((word) => (
        <div key={word.word} className="wordCard">
          <h3>{word.word}</h3>
          <p>{word.def}</p>
          <button
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
