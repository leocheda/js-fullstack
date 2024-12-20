import "./App.css";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./contexts/NoteContext";
import AddNote from "./components/AddNote";

function App() {
  return (
    <NotesProvider>
      <main className="container">
        <NoteList />
        <AddNote />
      </main>
    </NotesProvider>
  );
}

export default App;
