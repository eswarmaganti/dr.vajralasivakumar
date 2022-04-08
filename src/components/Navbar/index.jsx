import React from "react";
import "./index.css";
import brain from "../../assets/images/brain.png";
import AddUser from "../utils/AddUser";
import { Link, useLocation } from "react-router-dom";
import Login from "../utils/Login";
const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="navbar">
      {/* Navbar Logo Section */}
      <div className="logo">
        <img src={brain} alt="logo" className="h-12 w-12" />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-sky-600">
            Dr. Vajrala Siva Kumar
          </h2>
          <h2 className="text-sm text-gray-700 font-medium">
            VRLS Memorial Neuro Hospital
          </h2>
        </div>
      </div>

      {/* Navbar Links Section */}

      <div className="navbar-nav">
        <NavItem to="/" title="Home" location={location} />
        <NavItem to="/about" title="About" location={location} />
        <NavItem to="/services" title="Services" location={location} />
        <NavItem to="/testimonials" title="Testimonials" location={location} />
        <NavItem to="/contact" title="Contact" location={location} />
      </div>
      <aside>
        <NavItem to="/login" title="Login" Icon={Login} location={location} />
      </aside>
    </nav>
  );
};

const NavItem = ({ to, title, location, Icon }) => (
  <div className={location.pathname === to ? "nav-item-active" : "nav-item"}>
    <Link to={to}>
      <span className="flex gap-1">
        {Icon && <Icon />}
        {title}
      </span>
    </Link>
  </div>
);

export default Navbar;
