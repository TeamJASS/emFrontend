import { useLocation } from "react-router-dom";
import K from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log("Location---->", location.pathname);
  return (
    <div>
      <div>
        {K.NAVLINKS.map((item, index) => {
          return (
            <Link
              className={`${
                location.pathname.includes(`/${item.name.toLowerCase()}`) ||
                (location.pathname === "/" && item.name === "Home")
                  ? "text-white"
                  : "text-black"
              }`}
              key={index}
              to={item.path}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
