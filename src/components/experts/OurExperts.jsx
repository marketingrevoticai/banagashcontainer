import React from "react";
import { Link } from "react-router-dom";

const experts = [
  {
    name: "MUNIR HUSSAIN",
    role: "Founder",
    img: "/assets/Experts/munir.webp",
  },
  {
    name: "AITEZAZ ZAREEN",
    role: "Chief Executive Officer (CEO)",
    img: "/assets/Experts/aitezaz.webp",
  },
  {
    name: "ALI ZAREEN",
    role: "Co-Founder",
    img: "/assets/Experts/ali.webp",
  },
  {
    name: "SHAFI UR REHMAN",
    role: "Porject Manager",
    img: "/assets/Experts/shafi.webp",
  },
  {
    name: "SAQIB SEMAAB",
    role: "Marketing Head",
    img: "/assets/Experts/saqib.webp",
  },
  {
    name: "ZIA KHAN",
    role: "Marketing Executive",
    img: "/assets/Experts/zia.webp",
  },
];

const OurExperts = () => {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* ===========================
          HERO SECTION
      ============================ */}
      <section
        className="relative bg-cover bg-center h-[45vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/assets/offer.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Meet Our Experts
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            The team behind your prefabricated and container-based solutions.
          </p>
        </div>
      </section>

      {/* ===========================
          ABOUT TEAM
      ============================ */}
      <section className="py-16 px-6 md:px-14 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#0a1f44]">
          Who We Are
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Bangash Container Home (BCH), our team of experienced engineers,
          architects, developers, and designers bring innovation to container-based
          and prefabricated structures. Our experts ensure modern, sustainable,
          and cost-efficient solutions for residential, commercial, and industrial projects.
        </p>
      </section>

      {/* ===========================
          TEAM GRID
      ============================ */}
      <section className="py-10 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#0a1f44]">
            Our Professional Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="text-center rounded-xl cursor-pointer p-6 hover:shadow-sm transition-all"
              >
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-60 h-60 rounded-full object-cover mx-auto mb-4 border-4 border-gray-200"
                />
                <h3 className="text-xl font-bold text-[#0a1f44]">
                  {expert.name}
                </h3>
                <p className="text-gray-600 mt-1 italic">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          WHY CHOOSE US
      ============================ */}
      <section className="py-16 px-6 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#0a1f44]">
            Why Choose Our Team?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-[#0a1f44]">
                Experienced Professionals
              </h3>
              <p className="text-gray-700">
                Our team has years of experience in prefabrication, container engineering, and modern design.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-[#0a1f44]">
                Innovation & Technology
              </h3>
              <p className="text-gray-700">
                We use cutting-edge tools and sustainable materials to deliver the best results.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-[#0a1f44]">
                Customer-Focused
              </h3>
              <p className="text-gray-700">
                Every structure is built with precision, following your exact requirements and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          CTA BANNER
      ============================ */}
      <section className="py-16 bg-[#0a1f44] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to Work With Our Experts?
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Contact us today for high-quality prefab and container solutions.
        </p>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-[#0a1f44] font-semibold rounded-lg hover:bg-gray-200"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default OurExperts;
