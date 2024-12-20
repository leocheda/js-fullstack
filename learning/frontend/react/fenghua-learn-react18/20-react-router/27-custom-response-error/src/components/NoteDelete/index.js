import { redirect } from "react-router-dom";

export async function action({ params }) {
  throw new Error("删除出错了！");
  await fetch(`/api/notes/${params.noteId}`, {
    method: "DELETE",
  });
  return redirect("/");
}
