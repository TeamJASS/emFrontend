// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const K = {
//   NAVLINKS: [
//     {
//       name: "Admin",
//       path: "/admin",
//     },
//     {
//       name: "Events",
//       path: "/admin/event-list",
//     },
//     {
//       name: "Users",
//       path: "/admin/users",
//     },
//     {
//       name: "Vendors",
//       path: "/admin/vendors",
//     },
//     {
//       name: "Bookings",
//       path: "/admin/bookings",
//     },
//   ],
// };

// const AdminNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const navbarRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     if (navbarRef.current) {
//       setNavbarHeight(navbarRef.current.offsetHeight);
//     }
//   }, []);

//   return (
//     <>
//       <nav
//         ref={navbarRef}
//         className="bg-dark p-4 fixed z-50 w-full top-0 bg-[rgba(40,20,50,0.9)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[11.2px] border border-[rgba(40,20,50,0.3)]"
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-primary text-3xl font-bold">
//             <Link to="/">TUKIO</Link>
//           </div>

//           {/* Menu */}
//           <div className="hidden md:flex space-x-6">
//             {K.NAVLINKS.map((k, index) => {
//               const isActive = location.pathname === k.path;
//               return (
//                 <Link
//                   key={index}
//                   to={k.path}
//                   className={`${
//                     isActive ? "border-b-primary text-primary" : ""
//                   } text-white border-b-2 border-b-transparent p-4 hover:text-primary hover:border-b-primary`}
//                 >
//                   {k.name}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Action Buttons */}
//           <div className="hidden md:flex space-x-4">
//             <Link
//               to="/admin/event-create"
//               className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark"
//             >
//               Add Event
//             </Link>
//             <Link
//               to="/admin/user-create"
//               className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-200"
//             >
//               Add User
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden ${
//             isMenuOpen ? "block" : "hidden"
//           } bg-primary text-white p-4 space-y-4`}
//         >
//           {K.NAVLINKS.map((k, index) => (
//             <Link
//               key={index}
//               to={k.path}
//               className="block hover:text-secondary"
//             >
//               {k.name}
//             </Link>
//           ))}
//           <Link
//             to="/admin/event-create"
//             className="block bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark"
//           >
//             Add Event
//           </Link>
//           <Link
//             to="/admin/user-create"
//             className="block bg-white text-primary px-4 py-2 rounded hover:bg-gray-200"
//           >
//             Add User
//           </Link>
//         </div>
//       </nav>
//       <div style={{ height: navbarHeight }} className="bg-dark"></div>
//     </>
//   );
// };

// export default AdminNavbar;

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const K = {
  NAVLINKS: [
    { name: "Admin", path: "/admin" },
    { name: "Events", path: "/admin/event-list" },
    { name: "Users", path: "/admin/users" },
    { name: "Vendors", path: "/admin/vendors" },
    { name: "Bookings", path: "/admin/bookings" },
  ],
};

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-dark p-4 fixed z-50 w-full top-0 bg-[rgba(40,20,50,0.9)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[11.2px] border border-[rgba(40,20,50,0.3)]"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-primary text-3xl font-bold">
            <Link to="/">TUKIO</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {K.NAVLINKS.map((k, index) => {
              const isActive = location.pathname === k.path;
              return (
                <Link
                  key={index}
                  to={k.path}
                  className={`${
                    isActive ? "border-b-primary text-primary" : ""
                  } text-white border-b-2 border-b-transparent p-4 hover:text-primary hover:border-b-primary`}
                >
                  {k.name}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/admin/event-create"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark"
            >
              Add Event
            </Link>
            <Link
              to="/admin/user-create"
              className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-200"
            >
              Add User
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-[rgba(40,20,50,0.9)] text-white p-4 space-y-4`}
        >
          {K.NAVLINKS.map((k, index) => (
            <Link
              key={index}
              to={k.path}
              className="block text-white hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              {k.name}
            </Link>
          ))}
          <Link
            to="/admin/event-create"
            className="block bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Event
          </Link>
          <Link
            to="/admin/user-create"
            className="block bg-white text-primary px-4 py-2 rounded hover:bg-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Add User
          </Link>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div style={{ height: navbarHeight }} className="bg-dark"></div>
    </>
  );
};

export default AdminNavbar;
