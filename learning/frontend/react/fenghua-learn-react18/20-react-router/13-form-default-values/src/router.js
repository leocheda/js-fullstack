import { createBrowserRouter } from "react-router-dom";
import App, { loader as appLoader } from "./App";
import Welcome from "./components/Welcome";
import NoteDetails, { loader as noteLoader } from "./components/NoteDetails";
import NoteForm, {
  action as noteFormAction,
  loader as noteFormLoader,
} from "./components/NoteForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "notes/:noteId",
        element: <NoteDetails />,
        loader: noteLoader,
      },
      {
        path: "notes/new",
        element: <NoteForm />,
        action: noteFormAction,
      },
      {
        path: "notes/:noteId/edit",
        element: <NoteForm />,
        loader: noteFormLoader,
      },
    ],
  },
]);

export default router;
