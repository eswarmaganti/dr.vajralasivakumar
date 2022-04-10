import React from "react";
import services from "../../assets/images/services.svg";
import Badge from "../../components/utils/Badge";
import Pill from "../../components/utils/Pill";
import Nurse from "../../components/utils/Nurse";
import Microscope from "../../components/utils/Microscope";
import Team from "../../components/utils/Team";
const ServicesPage = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-2 gap-4">
        <div className=" flex items-center justify-center flex-col">
          {/* ServicesPage Heading */}
          <h1 className="text-4xl font-bold">
            We provide world class services for{" "}
            <span className="font-bold text-sky-600 uppercase">Brain</span> and
            <span className="font-bold text-sky-600 uppercase"> spine</span>.
          </h1>

          {/* Services Main Content Section */}
          <section className="my-4 grid grid-cols-2 gap-2">
            <ServiceDetails
              title="Brain Services"
              services={[
                "Micro Neuro Surgery",
                "Brain Tumors",
                "Head Injury",
                "Neuro Endoscopic Surgery",
                "CT Guided Stereotactic Surgery",
                "Cerebro Vascular Surgery",
              ]}
            />
            <ServiceDetails
              title="Spine Services"
              services={[
                "Micro Neuro Surgery",
                "Brain Tumors",
                "Head Injury",
                "Neuro Endoscopic Surgery",
                "CT Guided Stereotactic Surgery",
                "Cerebro Vascular Surgery",
              ]}
            />
          </section>

          <section className="grid grid-cols-4 gap-3">
            <ServiceCard title="24/7 Pharmacy" Icon={Pill} />
            <ServiceCard title="24/7 Nursing" Icon={Nurse} />
            <ServiceCard title="24/7 Laboratory" Icon={Microscope} />
            <ServiceCard title="Critical Care" Icon={Team} />
          </section>
        </div>
        <div className="">
          <img src={services} alt="illustration" className="" />
        </div>
      </div>
    </div>
  );
};

const ServiceDetails = ({ title, services }) => (
  <div className="mt-4 bg-sky-200 px-2 py-4 shadow-inner shadow-lg rounded">
    <h3 className="text-xl font-semibold pb-2">{title}</h3>
    <ul className="ml-4">
      {services.map((service) => (
        <li className="flex gap-2 py-1">
          <Badge color="text-sky-600 " />
          <span className="font-medium uppercase">{service}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ServiceCard = ({ title, Icon }) => (
  <div className="px-2 py-3 bg-sky-600 rounded  flex justify-center flex-col items-center  shadow-lg shadow-sky-600/50 hover:bg-sky-700 ease-in duration-200">
    <Icon />
    <h3 className="text-zinc-200 mt-2">{title}</h3>
  </div>
);
export default ServicesPage;
