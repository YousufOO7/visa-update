import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Logo from "../assets/visa1.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#user-menu")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Apply theme classes to the <html> element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save theme to localStorage
  }, [theme]);

  // Toggle theme
  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Handle user logout
  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        console.log("User logged out!");
      })
      .catch((error) => console.log("Error during logout:", error.message));
  };

  // Navigation links
  const links = (
    <ul className="menu flex-col md:flex-row ">
      <li className="">
        <NavLink to="/" className="hover:text-white dark:text-white">
          Home
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to="/about-us"
          className="hover:text-white dark:text-white "
        >
          About Us
        </NavLink>
      </li>
      {
        user && user?.email ? <>
          <li className="">
            <NavLink
              to="/all-visas"
              className="hover:text-white dark:text-white "
            >
              All Visas
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-visa" className="hover:text-white dark:text-white">
              Add Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-added-visas"
              className="hover:text-white dark:text-white"
            >
              My Added Visas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-applications"
              className="hover:text-white dark:text-white"
            >
              My Applications
            </NavLink>
          </li>
        </>
          :
          <></>
      }
    </ul>
  );

  return (
    <nav
      className={`bg-blue-500 text-white dark:bg-gray-800 shadow-lg transition-colors duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Hamburger Menu */}
        {/* Dropdown for mobile */}
        <div className="dropdown lg:hidden">
          <button className="btn btn-ghost dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-700 dark:text-gray-200 dark:shadow-gray-800">
            {links}
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-8 h-8 lg:w-10 lg:h-10 mr-1"
            />
            <p className="hidden sm:flex text-lg  lg:text-2xl font-bold text-white dark:text-purple-400">
              Visa Navigator
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex">{links}</div>

        {/* User Section */}
        <div className="flex items-center gap-2">
          <button onClick={themeToggle}>
            {theme === "light" ? (
              <MdDarkMode className="text-2xl text-gray-800 dark:text-gray-200" />
            ) : (
              <MdLightMode className="text-2xl text-gray-800 dark:text-gray-200" />
            )}
          </button>
          {user ? (
            <div
              className="relative group "
              id="user-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* User Avatar with hover */}
              <img
                src={user.photoURL}
                alt="User Avatar"
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full border-2 p-[1px] border-green-400 cursor-pointer"
              />
              {/* Display Name and Logout Button */}
              {(menuOpen || isHovered) && ( // Show menu if menuOpen is true
                <div className="absolute z-50 top-12 -left-16 bg-white p-2 rounded-lg shadow-lg dark:bg-gray-700">
                  <p className="text-sm dark:text-gray-200 mb-2">
                    {user.displayName}
                  </p>
                  <button
                    onClick={handleLogOut}
                    className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-pink-400 to-blue-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink
                to="/login"
                className="px-2 py-1 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-2 py-1 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
