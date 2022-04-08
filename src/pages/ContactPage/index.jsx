import React from "react";
import "./index.css";
import Phone from "../../components/utils/Phone";
import Mail from "../../components/utils/Mail";
import Location from "../../components/utils/Location";
import Facebook from "../../components/utils/Facebook";
import Twitter from "../../components/utils/Twitter";
import Instagram from "../../components/utils/Instagram";
import Youtube from "../../components/utils/Youtube";
import Message from "../../components/utils/Message";
import contact from "../../assets/images/contact.svg";
const ContactPage = () => {
  return (
    <div className="grid grid-cols-5 contact-page">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

const ContactInfo = () => (
  <section className="col-span-2 bg-sky-600 px-12 py-4 flex items-start justify-evenly flex-col">
    <div>
      <h1 className=" text-3xl font-bold text-white py-2">
        Get in touch with us.
      </h1>
      <p className=" text-zinc-200 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod
        corrupti dolore impedit voluptatem modi sequi adipisci,
      </p>
    </div>

    {/* Contact Information */}
    <section className="my-4">
      <ContactListItem Icon={Phone} text="0866-247730 & 2492300" />
      <ContactListItem Icon={Mail} text="dr.v.sivakumar@gmail.com" />
      <ContactListItem
        Icon={Location}
        text=" sivanandha vari street , vijayawada"
      />
    </section>

    {/* Social Media Links */}
    <section className="flex gap-8">
      <a href="#">
        <Facebook
          color="fill-sky-200"
          styles="hover:-translate-y-1 ease-in duration-200"
        />
      </a>
      <a href="#">
        <Twitter
          color="fill-sky-200"
          styles="hover:-translate-y-1 ease-in duration-200"
        />
      </a>

      <a href="#">
        <Instagram
          color="fill-sky-200"
          styles="hover:-translate-y-1 ease-in duration-200"
        />
      </a>
      <a href="#">
        <Youtube
          color="fill-sky-200"
          styles="hover:-translate-y-1 ease-in duration-200"
        />
      </a>
    </section>
  </section>
);

export const ContactListItem = ({ Icon, text }) => {
  return (
    <div className="flex gap-2 items-center p-2 border-l-4 mb-4 bg-sky-700 rounded">
      <div className="p-1 bg-sky-200 flex items-center justify-center rounded-full">
        <Icon color="text-sky-600" />
      </div>
      <span className="text-white">{text}</span>
    </div>
  );
};

const ContactForm = () => (
  <section className="col-span-3 px-12 py-4 flex justify-center flex-col">
    <div className="flex gap-2 justify-center items-center">
      <Message size="h-8 w-8" color="text-sky-600" />
      <h1 className="text-2xl font-medium">send a message to contact us</h1>
    </div>

    <form className="mt-5">
      <div className="flex gap-4 ">
        <div className="w-full my-2">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="type your first name.."
          />
        </div>
        <div className="w-full my-2">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="type your last name.."
          />
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="w-full my-2">
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="type your email address.."
          />
        </div>
        <div className="w-full my-2">
          <label htmlFor="">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="type your mobile number.."
          />
        </div>
      </div>
      <div className="w-full my-2">
        <label htmlFor="">Message</label>
        <textarea
          type="text"
          className="form-control"
          placeholder="type your message here.."
        ></textarea>
      </div>

      <div className="my-4">
        <button type="submit" className="btn btn-primary">
          <Message color="text-white" />
          <span>Send Message</span>
        </button>
      </div>
    </form>
  </section>
);
export default ContactPage;
