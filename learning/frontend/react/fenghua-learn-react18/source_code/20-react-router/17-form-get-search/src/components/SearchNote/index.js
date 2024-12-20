import { Form } from "react-router-dom";
import "./style.css";

function SearchNote() {
  return (
    <div className="search">
      <Form>
        <input name="term" type="search" placeholder="搜索笔记" />
      </Form>
    </div>
  );
}

export default SearchNote;
