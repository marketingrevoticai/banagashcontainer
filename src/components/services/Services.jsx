import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Prefabricated Homes",
      desc: "Durable, modern, and fully customizable prefab homes designed for quick installation.",
      img: "/assets/PrefabHome/prehome3.webp",
      link: "/services/prefabricated-homes",
    },
    {
      title: "Prefabricated Office",
      desc: "Cost-efficient and relocatable prefab office solutions ideal for businesses and construction sites.",
      img: "/assets/Services/off13.webp",
      link: "/services/fabricated-office",
    },
    {
      title: "Container Caravan",
      desc: "Portable container caravans built for travel, accommodation, and on-site mobility.",
      img: "/assets/Services/cc4.webp",
      link: "/services/container-caravan",
    },
    {
      title: "Container Homes",
      desc: "Stylish, strong, and eco-friendly container homes crafted for modern living.",
      img: "/assets/Services/prehome3.webp",
      link: "/services/container-home",
    },
    {
      title: "Container Offices",
      desc: "Smart, relocatable container office units suitable for corporate and on-site working environments.",
      img: "/assets/Services/off22.webp",
      link: "/services/container-offices",
    },
    {
      title: "Security Cabins",
      desc: "Guard cabins, security booths, and entry-point kiosks built with durable steel structures.",
      img: "/assets/Services/sec7.webp",
      link: "/services/security-cabins",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Page Hero */}
      <section
        className="relative bg-cover bg-center h-[45vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/offer.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Explore our range of prefabricated and container-based living and working solutions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#0a1f44]">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0a1f44]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{service.desc}</p>

                  <Link
                    to={service.link}
                    className="inline-block px-5 py-2 rounded-lg bg-[#0a1f44] text-white hover:bg-white hover:text-[#0a1f44] transition-all"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
