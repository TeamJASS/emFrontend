import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/rootLayout";
import Home from "./pages/Home";
import EventList from "./pages/eventList";
import Event from "./pages/event";
import Admin from "./pages/admin";
import Vendor from "./pages/vendor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/event-list", element: <EventList /> },
        { path: "/events/:id", element: <Event /> },
        { path: "/admin", element: <Admin /> },
        { path: "/vendor", element: <Vendor /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
