import { Form, useSubmit } from "react-router-dom";
import "./style.css";

function SearchNote() {
  const submit = useSubmit();

  return (
    <div className="search">
      <Form>
        <input
          name="term"
          type="search"
          placeholder="搜索笔记"
          onChange={(event) => {
            submit(event.target.form);
          }}
        />
      </Form>
    </div>
  );
}

export default SearchNote;
