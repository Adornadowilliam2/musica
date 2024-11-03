import { rows } from "./index.js";
import "./App.css";
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Ado from "./pages/Ado.jsx";
import Album from "./pages/Album.jsx";
import RadWimps from "./pages/RadWimps.jsx";
import Aizen from "./pages/Aizen.jsx";
import Artist from "./pages/Artist.jsx";
import Persona from "./pages/Persona.jsx";
import Twice from "./pages/Twice.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/musica",
      element: <Ado rows={rows} Link={Link} />,
    },
    {
      path: "/album",
      element: <Album Link={Link} />,
    },
    {
      path: "/radwimps",
      element: <RadWimps Link={Link} rows={rows} />,
    },
    {
      path: "/aizen",
      element: <Aizen Link={Link} rows={rows} />,
    },
    {
      path: "/artist",
      element: <Artist />,
    },
    {
      path: "/twice",
      element: <Twice Link={Link} rows={rows} />,
    },
    {
      path: "/persona",
      element: <Persona Link={Link} rows={rows} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
