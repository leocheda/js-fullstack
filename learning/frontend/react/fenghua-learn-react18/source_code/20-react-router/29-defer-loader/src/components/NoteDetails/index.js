import {
  Await,
  Form,
  Link,
  defer,
  json,
  useFetcher,
  useLoaderData,
} from "react-router-dom";
import "./style.css";
import React from "react";

export async function loader({ params }) {
  return defer({
    note: fetch(`/api/notes/${params.noteId}`).then((res) => res.json()),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  return fetch(`/api/notes/${params.noteId}`, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      likes: Number(formData.get("likes")) + 1,
    }),
  });
}

function NoteDetails() {
  const data = useLoaderData();
  const fetcher = useFetcher();
  // let likes = note.likes;
  // if (fetcher.formData) {
  //   likes = Number(fetcher.formData.get("likes")) + 1;
  // }

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Await resolve={data.note} errorElement={<p>出现错误！</p>}>
        {(note) => {
          return (
            <div>
              <h2 className="noteTitle">{note.title}</h2>
              <div className="noteActions">
                <Link to="edit">编辑</Link>
                <Form action="delete" method="DELETE">
                  <button type="submit">删除</button>
                </Form>
                <fetcher.Form method="PUT">
                  <button name="likes" type="submit" value={note.likes}>
                    点赞 {note.likes}
                  </button>
                </fetcher.Form>
              </div>
              <article>{note.content}</article>
            </div>
          );
        }}
      </Await>
    </React.Suspense>
  );
}

export default NoteDetails;
