import React from "react";
import services from "../../assets/images/services.svg";
import Badge from "../../components/utils/Badge";
const ServicesPage = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center flex-col">
          {/* ServicesPage Heading */}
          <h1 className="text-4xl font-bold">
            We provide world class services for{" "}
            <span className="font-bold text-sky-600 uppercase">Brain</span> and
            <span className="font-bold text-sky-600 uppercase"> spine</span>.
          </h1>

          {/* Services Main Content Section */}
          <section className="my-4 grid grid-cols-2 gap-2">
            {/* Brain Services Section */}
            <div className="mt-4 bg-sky-200 px-2 py-4 shadow-inner shadow-lg rounded">
              <h3 className="text-xl font-semibold pb-2">Brain Treatments</h3>
              <ul className="ml-4">
                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">
                    Micro Neuro Surgery
                  </span>
                </li>

                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">Brain Tumors</span>
                </li>

                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">Head Injury</span>
                </li>

                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">
                    Neuro Endoscopic Surgery
                  </span>
                </li>
                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">
                    CT Guided Stereotactic Surgery
                  </span>
                </li>
                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">
                    Cerebro Vascular Surgery
                  </span>
                </li>
              </ul>
            </div>
            {/* Spine Services Section */}

            <div className="mt-4 bg-sky-200  px-2 py-4 shadow-inner shadow-lg rounded">
              <h3 className="text-xl font-semibold pb-2">Spine Treatments</h3>
              <ul className="ml-4">
                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">
                    Micro Neuro Surgery
                  </span>
                </li>

                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">Brain Tumors</span>
                </li>

                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">Head Injury</span>
                </li>

                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">
                    Neuro Endoscopic Surgery
                  </span>
                </li>
                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium uppercase">
                    CT Guided Stereotactic Surgery
                  </span>
                </li>
                <li className="flex gap-2 py-1">
                  <Badge color="text-sky-600 " />
                  <span className="font-medium">Cerebro Vascular Surgery</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div>
          <img src={services} alt="illustration" className="contain" />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
