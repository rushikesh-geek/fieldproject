import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/main">Main</NavLink></li>
        {user ? (
          <>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><NavLink to="/login">Login</NavLink></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
