import React, { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { selectedLanguage } from "../../state/settingsSlice";
import { useDispatch } from "react-redux";
import { addWord } from "../../state/wordSlice";
import { setSearchTerm, setSort } from "../../state/actionSlice";

function Actions() {
  const [isShowingAddWordForm, setIsShowingAddWordForm] = useState(false);
  const [word, setWord] = useState("");
  const [def, setDef] = useState("");

  const language = useSelector(selectedLanguage);
  const searchTerm = useSelector((state) => state.action.searchTerm);
  const sort = useSelector((state) => state.action.sort);

  const dispatch = useDispatch();

  function getButtonLabel(sort) {
    if (sort === "desc") return "A-Z↓";
    if (sort === "asc") return "A-Z↑";
    return "A-Z";
  }

  function handleAddWordFormSubmit(e) {
    e.preventDefault();
    dispatch(addWord({ language, word, def }));
    setIsShowingAddWordForm(false);
    setWord("");
    setDef("");
  }

  return (
    <div className="actions">
      <input
        type="search"
        placeholder="请输入要搜索的单词"
        className="search"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <button onClick={() => setIsShowingAddWordForm(true)}>添加单词</button>
      <button className="reverse" onClick={() => dispatch(setSort())}>
        {getButtonLabel(sort)}
      </button>
      <form>
        <select name="" id="" defaultValue="">
          <option value="">全部</option>
          <option value="unremembered">未记住</option>
          <option value="remembered">已记住</option>
        </select>
      </form>
      {isShowingAddWordForm && (
        <form className="addNewWordForm" onSubmit={handleAddWordFormSubmit}>
          <input
            type="text"
            placeholder="单词"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <input
            type="text"
            placeholder="释义"
            value={def}
            onChange={(e) => setDef(e.target.value)}
          />
          <button type="submit">提交</button>
        </form>
      )}
    </div>
  );
}

export default Actions;
