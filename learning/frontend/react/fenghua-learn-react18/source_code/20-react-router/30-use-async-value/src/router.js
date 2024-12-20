import { createBrowserRouter } from "react-router-dom";
import App, { loader as appLoader } from "./App";
import Welcome from "./components/Welcome";
import NoteDetails, {
  loader as noteLoader,
  action as noteAction,
} from "./components/NoteDetails";
import NoteForm, {
  action as noteFormAction,
  loader as noteFormLoader,
} from "./components/NoteForm";
import { action as noteDeleteAction } from "./components/NoteDelete";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Welcome />,
          },
          {
            path: "notes/:noteId",
            element: <NoteDetails />,
            loader: noteLoader,
            action: noteAction,
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
            action: noteFormAction,
          },
          {
            path: "notes/:noteId/delete",
            action: noteDeleteAction,
            errorElement: (
              <p style={{ color: "var(--secondary-color)" }}>删除出错了</p>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
