import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import K from "../constants";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);
  const location = useLocation();
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            {K.NAVLINKS.map((k, index) => {
              const isActive = location.pathname === k.path;
              return (
                <Link
                  onClick={scrollToTop}
                  key={index}
                  to={k.path}
                  className={`${
                    isActive
                      ? "text-primary border-b-primary border-b-2"
                      : "text-white border-b-transparent"
                  } p-4 hover:text-primary hover:border-b-primary hover:border-b-2`}
                >
                  {k.name}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-200"
            >
              Sign Up
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
          ref={menuRef}
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-primary text-white p-4 space-y-4`}
        >
          {K.NAVLINKS.map((k, index) => {
            const isActive = location.pathname === k.path;
            return (
              <Link
                key={index}
                to={k.path}
                className={`block hover:text-secondary ${
                  isActive ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {k.name}
              </Link>
            );
          })}
          <Link
            to="/login"
            className="block bg-secondary text-white px-6 py-2 rounded hover:bg-secondary-dark w-[80%] sm:w-[60%] mx-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="block bg-white text-primary px-6 py-2 rounded hover:bg-gray-200 w-[80%] sm:w-[60%] mx-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>

          {/* Social Media Icons Section */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </nav>
      <div style={{ height: navbarHeight }} className="bg-dark"></div>
    </>
  );
};

export default Navbar;
