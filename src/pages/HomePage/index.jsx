import React from "react";
import "./index.css";
import services from "../../assets/images/services.svg";
import Phone from "../../components/utils/Phone";
import Login from "../../components/utils/Login";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="wrapper  home-page bg-sky-100">
      <div className="grid grid-cols-2 h-full">
        <div className="flex items-start justify-center flex-col ">
          <div className="py-3">
            <h1 className="font-semibold text-3xl text-zinc-800">
              We are experienced professionals in{" "}
              <span className="text-sky-600 uppercase font-bold">
                Neurology
              </span>{" "}
              and{" "}
              <span className="text-sky-600  uppercase font-bold">
                Neuro Surgery
              </span>
              , provides the wolrd class health services.
            </h1>
            <p className="my-3 text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi
              dicta mollitia odio quasi libero sequi necessitatibus minus!
              Itaque, dolorem. Lorem ipsum dolor sit.
            </p>

            <div className="flex gap-4 pt-3">
              <Link to="/contact">
                <button className="btn btn-primary">
                  {" "}
                  <Phone color="text-white" /> Contact Us
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary-outline">
                  <Login />
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden flex justify-center">
          <img src={services} alt="" className=" h-full" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
