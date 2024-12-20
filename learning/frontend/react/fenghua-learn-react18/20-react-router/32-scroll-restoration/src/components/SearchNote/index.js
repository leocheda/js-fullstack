import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

function SearchNote() {
  const submit = useSubmit();
  const { term } = useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    document.title = "搜索结果：" + term;
  }, [term]);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("term");

  return (
    <div className="search">
      <Form>
        <input
          name="term"
          type="search"
          placeholder="搜索笔记"
          defaultValue={term}
          onChange={(event) => {
            const isFirstSearch = term == null;
            submit(event.target.form, {
              replace: !isFirstSearch,
            });
          }}
        />
        {searching && <div>搜索中...</div>}
      </Form>
    </div>
  );
}

export default SearchNote;
