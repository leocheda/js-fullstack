import { useState } from "react";
import "./App.css";
import NoteCount from "./components/NoteCount";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  function addNote() {
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        note: note,
      },
    ]);
    setNote("");
  }

  return (
    <main className="container">
      <NoteList notes={notes} />
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        type="text"
        placeholder="输入笔记内容"
      />
      <button onClick={addNote}>添加笔记</button>
      <NoteCount count={notes.length} />
    </main>
  );
}

export default App;
