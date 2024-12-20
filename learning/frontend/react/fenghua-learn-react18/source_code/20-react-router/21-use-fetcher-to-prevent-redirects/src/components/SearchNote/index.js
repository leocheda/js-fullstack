import { Form, useLoaderData, useSubmit } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

function SearchNote() {
  const submit = useSubmit();
  const { term } = useLoaderData();

  useEffect(() => {
    document.title = "搜索结果：" + term;
  }, [term]);

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
      </Form>
    </div>
  );
}

export default SearchNote;
