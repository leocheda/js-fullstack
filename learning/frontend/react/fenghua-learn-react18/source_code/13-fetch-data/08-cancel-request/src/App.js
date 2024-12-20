import { useEffect, useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import SearchNote from "./components/SearchNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [error, setError] = useState(null);

  async function getNotes(params, controller) {
    setLoading(true);

    // setTimeout(() => {
    //   controller.abort();
    // }, 500);

    let url = "/api/notes";
    if (params) {
      url += `?${new URLSearchParams({ term: params })}`;
    }

    const res = await fetch(url, {
      signal: controller.signal,
    });
    // res.ok
    if (res.status > 400) {
      setError(await res.json());
    } else {
      const data = await res.json();
      setNotes(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    const controller = new AbortController();
    getNotes(null, controller);

    return () => {
      controller.abort();
    };
  }, []);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    getNotes(event.target.value);
  }

  async function handleAdd(note) {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer SOMEJWTTOKEN",
      },
      body: JSON.stringify(note),
    });

    const data = await res.json();
    setNotes([...notes, data]);
  }

  return (
    <main className="container">
      <div>
        <h1>我的笔记本</h1>
        <SearchNote searchTerm={searchTerm} onChange={handleSearch} />
        {loading ? <div>loading...</div> : <NoteList notes={notes} />}
        {error && (
          <div style={{ color: "hsl(10deg, 100%, 70%)" }}>{error.message}</div>
        )}
        <AddNote onSubmit={handleAdd} />
      </div>
    </main>
  );
}

export default App;
