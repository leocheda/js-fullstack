import { Form } from "react-router-dom";
import "./style.css";

export async function action({ request }) {
  const formData = await request.formData();
  const note = Object.fromEntries(formData);
  return fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SOMEJWTTOKEN",
    },
    body: JSON.stringify(note),
  });
}

function NoteForm() {
  const note = null;

  return (
    <div className="addNote">
      <h2>{note ? "编辑笔记" : "添加新笔记"}</h2>
      <Form method="POST">
        <input name="title" type="text" placeholder="请输入笔记标题" />
        <textarea
          name="content"
          rows="6"
          placeholder="请输入笔记内容"
        ></textarea>
        <div className="formActions">
          <button type="submit">{note ? "保存笔记" : "添加笔记"}</button>
        </div>
      </Form>
    </div>
  );
}

export default NoteForm;
