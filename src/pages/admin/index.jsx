// import React from "react";
// import { Link } from "react-router-dom"; // Adjust routing as necessary
// import { FaCalendarAlt, FaPlusCircle, FaListAlt, FaEdit } from "react-icons/fa"; // Icons for event-specific cards

// import EventEdit from "./editEvent/index";
// import AllEvents from "./allEvents/index";
// import EventCreate from "./eventCreate/index";

// const Admin = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-primary text-white flex flex-col">
//         <div className="text-center py-4 text-xl font-bold">EventManager</div>
//         <nav className="flex flex-col px-4 space-y-4">
//           <Link to="/admin/dashboard" className="hover:text-secondary">
//             Dashboard
//           </Link>
//           <Link to="/admin/event-list" className="hover:text-secondary">
//             All Events
//           </Link>
//           <Link to="/admin/event-create" className="hover:text-secondary">
//             Create Event
//           </Link>
//           <Link to="/admin/event-edit" className="hover:text-secondary">
//             Edit Event
//           </Link>
//           <Link to="/admin/attendees" className="hover:text-secondary">
//             Manage Attendees
//           </Link>
//           <Link to="/admin/settings" className="hover:text-secondary">
//             Settings
//           </Link>
//         </nav>
//         <div className="mt-auto p-4">
//           <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-2xl font-bold mb-6">
//           Welcome to the Event Dashboard!
//         </h1>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white p-4 shadow rounded flex items-center">
//             <FaCalendarAlt className="text-primary text-2xl mr-4" />
//             <div>
//               <p className="text-sm font-medium">Total Events</p>
//               <p className="text-lg font-bold">25</p>
//             </div>
//           </div>
//           <div className="bg-white p-4 shadow rounded flex items-center">
//             <FaPlusCircle className="text-primary text-2xl mr-4" />
//             <div>
//               <p className="text-sm font-medium">Upcoming Events</p>
//               <p className="text-lg font-bold">7</p>
//             </div>
//           </div>
//           <div className="bg-white p-4 shadow rounded flex items-center">
//             <FaListAlt className="text-primary text-2xl mr-4" />
//             <div>
//               <p className="text-sm font-medium">Completed Events</p>
//               <p className="text-lg font-bold">15</p>
//             </div>
//           </div>
//           <div className="bg-white p-4 shadow rounded flex items-center">
//             <FaEdit className="text-primary text-2xl mr-4" />
//             <div>
//               <p className="text-sm font-medium">Pending Approvals</p>
//               <p className="text-lg font-bold">3</p>
//             </div>
//           </div>
//         </div>

//         {/* Charts and Activities */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Chart: Event Attendance */}
//           <div className="bg-white p-4 shadow rounded col-span-2">
//             <h2 className="text-lg font-semibold mb-2">
//               Event Attendance Trends
//             </h2>
//             <div className="h-48">
//               {/* Add Chart Component or Library Here */}
//             </div>
//           </div>

//           {/* Chart: Event Types Distribution */}
//           <div className="bg-white p-4 shadow rounded">
//             <h2 className="text-lg font-semibold mb-2">Event Types</h2>
//             <div className="h-48">{/* Add Pie Chart Component Here */}</div>
//           </div>

//           {/* Recent Activities */}
//           <div className="col-span-3 bg-white p-4 shadow rounded">
//             <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Event "Tech Conference" created by Admin (2025-01-01)</li>
//               <li>Event "Music Fest" updated (2025-01-03)</li>
//               <li>Event "Art Workshop" canceled (2025-01-04)</li>
//             </ul>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Admin;

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  Plus,
  Edit,
  List,
  Search,
  Bell,
} from "lucide-react";

const EventDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Navigation functions
  const navigateTo = (path) => {
    window.location.href = path;
  };

  // Sample data for event types
  const eventTypeData = [
    { type: "Conferences", attendance: 85 },
    { type: "Workshops", attendance: 78 },
    { type: "Seminars", attendance: 82 },
  ];

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT/events");
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Event Management</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={() => navigateTo("/admin/event-create")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
            >
              <Plus className="h-5 w-5" />
              <span>Create Event</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="p-6 space-y-6">
        {/* Tab Navigation */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex space-x-4 border-b">
            <button
              className={`pb-4 px-4 ${
                activeTab === "overview"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`pb-4 px-4 ${
                activeTab === "events"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("events")}
            >
              Events List
            </button>
            <button
              className={`pb-4 px-4 ${
                activeTab === "analytics"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Events
                </p>
                <h3 className="text-2xl font-bold">124</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Attendees
                </p>
                <h3 className="text-2xl font-bold">1,234</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-purple-500 mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Venues</p>
                <h3 className="text-2xl font-bold">15</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-500 mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Upcoming Events
                </p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Overview */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Monthly Overview</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span>This Month's Events</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span>Active Registrations</span>
                  <span className="font-semibold">245</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span>Completed Events</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <span>Cancelled Events</span>
                  <span className="font-semibold">2</span>
                </div>
              </div>
            </div>

            {/* Event Type Distribution */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">
                Event Type Distribution
              </h2>
              <div className="space-y-4">
                {eventTypeData.map((item) => (
                  <div key={item.type} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{item.type}</span>
                      <span className="text-sm text-gray-500">
                        {item.attendance}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.attendance}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "events" && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Events List</h2>
                <button
                  onClick={() => navigateTo("/admin/event-create")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create Event</span>
                </button>
              </div>
              {loading ? (
                <div className="text-center py-4">Loading events...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Event Name</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Venue</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Sample event row - replace with actual data */}
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">Tech Conference 2025</td>
                        <td className="py-3 px-4">Jan 15, 2025</td>
                        <td className="py-3 px-4">Convention Center</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            Active
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => navigateTo("/admin/event-list")}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() =>
                                navigateTo("/admin/event-details/1")
                              }
                              className="text-gray-600 hover:text-gray-800"
                            >
                              <List className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <p className="text-sm flex-grow">
                New event registration: Tech Conference 2025 (10:00 AM)
              </p>
              <button
                onClick={() => navigateTo("/admin/event-list/1")}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View
              </button>
            </div>
            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              <p className="text-sm flex-grow">
                Event updated: Workshop on AI (09:30 AM)
              </p>
              <button
                onClick={() => navigateTo("/admin/event-details/2")}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View
              </button>
            </div>
            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
              <p className="text-sm flex-grow">
                Venue changed for: Digital Marketing Seminar (09:00 AM)
              </p>
              <button
                onClick={() => navigateTo("/admin/event-details/3")}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
