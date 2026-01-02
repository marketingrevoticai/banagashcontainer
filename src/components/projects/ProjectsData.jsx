// import React, { useState } from "react";
// import { Home, MessageCircle, Mail, PhoneCall, Globe, X } from "lucide-react";
// import banner from "/assets/WhyChooseUs/bchoffice.webp";; // banner image
// import proj1 from"/assets/WhyChooseUs/ContainerHall.webp"; // replace these with your real images
// import proj2 from "/assets/WhyChooseUs/containerhome.webp";
// import proj3 from "/assets/WhyChooseUs/containeroffice.webp";
// import proj4 from "/assets/WhyChooseUs/prefabcabin.webp";
// import proj5 from "/assets/WhyChooseUs/prefabhomes.webp";
// import proj6 from "/assets/WhyChooseUs/prefabhostel.webp";
// import proj7 from "/assets/WhyChooseUs/ContainerCafe.webp";
// import proj8 from "/assets/WhyChooseUs/HujraContainer.webp";
// import proj9 from "/assets/WhyChooseUs/Container2.webp";
// import proj10 from "/assets/WhyChooseUs/Cont3.webp";

// const Projects = () => {
//   const projects = [
//     { img: proj1, title: "Modular Office Units" },
//     { img: proj2, title: "Prefab Container Housing" },
//     { img: proj3, title: "Expandable Modular Villa" },
//     { img: proj4, title: "Steel Structure Warehouse" },
//     { img: proj5, title: "Quick Assembly Modular House" },
//     { img: proj6, title: "Prefab Medical Unit" },
//     { img: proj7, title: "Container Café Project" },
//     { img: proj8, title: "Emergency Shelter Module" },
//     { img: proj9, title: "Portable School Unit" },
//     { img: proj10, title: "Construction Site Camp" },
//     // Add more as needed
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 8;
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Pagination logic
//   const indexOfLast = currentPage * projectsPerPage;
//   const indexOfFirst = indexOfLast - projectsPerPage;
//   const currentProjects = projects.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   return (
//     <div className="relative bg-white text-[#0a1f44]">
//       {/* Hero Section */}
//       <div className="relative h-[350px] md:h-[400px] w-full">
//         <img src={banner} alt="Project Banner" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">PROJECT</h1>
//           <p className="text-sm md:text-base">
//             We Provide Modular Construction Solutions for Global Customers
//           </p>
//         </div>
//       </div>

//       {/* Breadcrumb */}
//       <div className="bg-gray-100 text-sm px-6 py-3 flex items-center space-x-2">
//         <Home size={16} className="text-blue-600" />
//         <span className="text-gray-500">Home</span>
//         <span className="text-gray-400">{">"}</span>
//         <span className="text-gray-700 font-medium">Project</span>
//       </div>

//       {/* Project Description */}
//       <section className="max-w-6xl mx-auto px-6 py-10 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0a1f44]">
//           Our Project
//         </h2>
//         <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
//           The integrated house consists of structural, ground, wall and roof systems. 
//           Each unit is completed in the factory and assembled on site. Integrated houses 
//           can be dismantled and moved without land damage  transforming housing into 
//           movable property, separating "house" and "land" in real estate.
//         </p>
//       </section>

//       {/* Project Grid */}
//       <section className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {currentProjects.map((project, idx) => (
//           <div
//             key={idx}
//             onClick={() => setSelectedImage(project.img)}
//             className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
//             />
//             <div className="p-3 text-center text-sm font-medium text-[#0a1f44]">
//               {project.title}
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Pagination */}
//       <div className="flex justify-center pb-10 space-x-2">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//           className={`px-3 py-1 border rounded ${currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"}`}
//         >
//           {"<"}
//         </button>
//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-3 py-1 rounded ${
//               currentPage === i + 1
//                 ? "bg-blue-900 text-white"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage(currentPage + 1)}
//           className={`px-3 py-1 border rounded ${
//             currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"
//           }`}
//         >
//           {">"}
//         </button>
//       </div>

//       {/* Lightbox Popup */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <img
//             src={selectedImage}
//             alt="Project"
//             className="max-w-3xl max-h-[80vh] object-contain rounded"
//           />
//           <button
//             className="absolute top-6 right-6 text-white text-2xl"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X size={28} />
//           </button>
//         </div>
//       )}

//       {/* Floating Icons */}
//       {/* <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
//         <a href="#" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
//           <MessageCircle size={18} />
//         </a>
//         <a href="mailto:sales@hbfzlx.com" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
//           <Mail size={18} />
//         </a>
//         <a href="tel:+8619030279888" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
//           <PhoneCall size={18} />
//         </a>
//         <a href="https://www.hbfzlx.com" className="bg-[#0a1f44] p-3 rounded-full text-white hover:bg-blue-700 transition">
//           <Globe size={18} />
//         </a>
//       </div> */}
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { Home, ShieldCheck, ArrowUpRight, X } from "lucide-react";

import banner from "/assets/WhyChooseUs/bchoffice.webp";

// Project Images
import proj1 from "/assets/WhyChooseUs/ContainerHall.webp";
import proj2 from "/assets/WhyChooseUs/containerhome.webp";
import proj3 from "/assets/WhyChooseUs/containeroffice.webp";
import proj4 from "/assets/WhyChooseUs/prefabcabin.webp";
import proj5 from "/assets/WhyChooseUs/prefabhomes.webp";
import proj6 from "/assets/WhyChooseUs/prefabhostel.webp";
import proj7 from "/assets/WhyChooseUs/ContainerCafe.webp";
import proj8 from "/assets/WhyChooseUs/HujraContainer.webp";
import proj9 from "/assets/WhyChooseUs/Container2.webp";
import proj10 from "/assets/WhyChooseUs/Cont3.webp";

const Projects = () => {
  const projects = [
    { img: proj1, title: "Modular Office Units", protected: true },
    { img: proj2, title: "Prefab Container Housing", protected: false },
    { img: proj3, title: "Expandable Modular Villa", protected: true },
    { img: proj4, title: "Steel Structure Warehouse", protected: false },
    { img: proj5, title: "Quick Assembly Modular House", protected: false },
    { img: proj6, title: "Prefab Medical Unit", protected: true },
    { img: proj7, title: "Container Café Project", protected: false },
    { img: proj8, title: "Emergency Shelter Module", protected: true },
    { img: proj9, title: "Portable School Unit", protected: false },
    { img: proj10, title: "Construction Site Camp", protected: false },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const projectsPerPage = 8;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  return (
    <div className="bg-white text-[#0a1f44]">
      {/* HERO SECTION */}
      <div className="relative h-[350px] md:h-[420px] w-full">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            PROJECTS
          </h1>
          <p className="text-sm md:text-base mt-2 opacity-90">
            Premium Modular Construction Solutions for Global Clients
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-gray-100 px-6 py-3 flex items-center space-x-2 text-sm">
        <Home size={16} className="text-blue-600" />
        <span className="text-gray-500">Home</span>
        <span className="text-gray-400">{">"}</span>
        <span className="font-medium text-gray-700">Projects</span>
      </div>

      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our modular buildings are designed using advanced structural,
          flooring, wall, and roofing systems. Each unit is manufactured in the
          factory and assembled on-site with zero land damage—ensuring mobility,
          durability, and premium quality.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(project.img)}
            className="relative cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden group transition-all"
          >
            <img
              src={project.img}
              alt={project.title}
              loading="lazy"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* TITLE + PROTECTION TAG */}
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#0a1f44]">
                {project.title}
              </h3>

              {/* Protection Badge */}
              {project.protected && (
                <div className="flex items-center bg-blue-900 text-white px-2 py-1 rounded-full text-xs">
                  <ShieldCheck size={14} className="mr-1" />
                  Protected
                </div>
              )}
            </div>

            {/* Hover Arrow */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
              <ArrowUpRight size={40} className="text-white" />
            </div>
          </div>
        ))}
      </section>

      {/* PAGINATION */}
      <div className="flex justify-center pb-10 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-3 py-1 border rounded-md ${currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
            }`}
        >
          {"<"}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md ${currentPage === i + 1
                ? "bg-blue-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-3 py-1 border rounded-md ${currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
            }`}
        >
          {">"}
        </button>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Project"
            className="max-w-3xl max-h-[80vh] object-contain rounded-lg"
          />

          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
