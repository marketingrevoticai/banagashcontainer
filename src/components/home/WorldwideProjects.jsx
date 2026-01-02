import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// import offerImg from "/assets/Product1/containerhallint2.webp";
// Project data with route links
const projects = [
  {
    img: "/assets/WhyChooseUs/containerhome.webp",
    title: "Container Homes",
    link: "services/container-homes",
  },
  {
    img: "/assets/Services/off22.webp",
    title: "Container Offices",
    link: "services/container-offices",
  },
  {
    img: "/assets/WhyChooseUs/cafe.webp",
    title: "Container Cafe",
    link: "services/container-caravan",
  },
  {
    img: "/assets/PrefabHome/prehome3.webp",
    title: "Prefabricated Homes",
    link: "services/prefabricated-homes",
  },
  {
    img: "/assets/SecurityCabin/sec7.webp",
    title: "Security Cabins",
    link: "services/security-cabins",
  },
  {
    img: "/assets/Product7/off13.webp",
    title: "Prefabricated Office",
    link: "/services/fabricated-office",
  },

];

const WorldwideProjects = () => {
  return (
    <section
      className="py-20 bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg-blueprint.webp')", // optional public background
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44]">
          WORLDWIDE PROJECTS
        </h2>
        <div className="mx-auto w-24 h-1 bg-blue-700 mt-3 mb-5"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Our container-based structures are used globally  in construction
          sites, resorts, corporate offices, worker accommodations, and
          sustainable housing projects.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <Link
                to={project.link}
                className="block bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative w-full h-64  overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute  inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                    <span className="text-white font-semibold text-lg">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute rounded-2xl bottom-0 left-0 w-full bg-[#0a1f44]/80 py-3">
                  <p className="text-center text-white text-sm md:text-base font-medium group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorldwideProjects;
