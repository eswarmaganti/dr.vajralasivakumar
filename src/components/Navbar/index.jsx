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
      <div className="navbar-nav">
        <div
          className={location.pathname === "/" ? "nav-item-active" : "nav-item"}
        >
          <Link to="/"> Home</Link>
        </div>
        <div
          className={
            location.pathname === "/about" ? "nav-item-active" : "nav-item"
          }
        >
          <Link to="/about">About</Link>
        </div>
        <div
          className={
            location.pathname === "/services" ? "nav-item-active" : "nav-item"
          }
        >
          <Link to="/services">Services</Link>
        </div>
        <div
          className={
            location.pathname === "/contact" ? "nav-item-active" : "nav-item"
          }
        >
          <Link to="/contact">Contact</Link>
        </div>
        <div
          className={
            location.pathname === "/login" ? "nav-item-active" : "nav-item"
          }
        >
          <Link to="/login">
            <span className="flex gap-1">
              <Login />
              LogIn
            </span>
          </Link>
        </div>
        <div
          className={
            location.pathname === "/signup" ? "nav-item-active" : "nav-item"
          }
        >
          <Link to="/signup">
            <span className="flex gap-1">
              <AddUser />
              SignUp
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
