import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "./layouts/rootLayout";
import Home from "./pages/Home";
import EventList from "./pages/eventList";
import Event from "./pages/event";
import Admin from "./pages/admin";
import Vendor from "./pages/vendor";
import AllEvents from "./pages/admin/allEvents";
import EventCreate from "./pages/admin/eventCreate";
import EditEvent from "./pages/admin/editEvent";
import VendorEventList from "./pages/vendor/eventList";
import VendorEventCreate from "./pages/vendor/eventCreate";
import VendorEditEvent from "./pages/vendor/editEvent";
import VendorLayout from "./layouts/vendorLayout";
import AdminLayout from "./layouts/adminLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/event-list", element: <EventList /> },
        { path: "/events/:id", element: <Event /> },
      ],
    },
    {
      path: "/vendor",
      element: <VendorLayout />,
      children: [
        { index: true, element: <Vendor /> },
        { path: "/vendor/event-list", element: <VendorEventList /> },
        { path: "/vendor/event-create", element: <VendorEventCreate /> },
        { path: "/vendor/event-edit/:id", element: <VendorEditEvent /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, element: <Admin /> },
        { path: "/admin/event-list", element: <AllEvents /> },
        { path: "/admin/event-create", element: <EventCreate /> },
        { path: "/admin/event-edit/:id", element: <EditEvent /> },
      ],
    },
  ]);
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
