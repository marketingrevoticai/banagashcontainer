// import React from "react";
// import { Link } from "react-router-dom";

// import interiorImg from "/assets/images/offer.webp";
// import ecoImg from "/assets/images/offer.webp";
// import modernImg from "/assets/images/offer.webp";
// import durableImg from "/assets/images/offer.webp";
// import transportImg from "/assets/images/offer.webp";
// import smartImg from "/assets/images/offer.webp";

// const ContainerHomes = () => {
//   const features = [
//     {
//       title: "Modern Compact Design",
//       desc: "Stylish, space-efficient container homes built for both comfort and functionality.",
//       image: modernImg,
//     },
//     {
//       title: "Eco-Friendly Construction",
//       desc: "Made with recycled materials and energy-efficient systems for a sustainable lifestyle.",
//       image: ecoImg,
//     },
//     {
//       title: "Fully Furnished Interiors",
//       desc: "Includes modern flooring, lighting, kitchen setups, and smart storage solutions.",
//       image: interiorImg,
//     },
//     {
//       title: "Smart Living Ready",
//       desc: "Integrate smart devices for climate control, lighting, and security to enhance convenience.",
//       image: smartImg,
//     },
//     {
//       title: "Strong & Durable",
//       desc: "Built using high-grade steel containers designed to withstand extreme environments.",
//       image: durableImg,
//     },
//     {
//       title: "Easy Setup & Relocation",
//       desc: "Portable and modular  can be installed, expanded, or relocated effortlessly.",
//       image: transportImg,
//     },
//   ];

//   return (
//     <main className="bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/assets/images/offer.webp')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Container Homes
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             Smart, stylish, and sustainable homes made from repurposed shipping containers.
//           </p>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-20 px-6 md:px-16 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-6 text-[#0a1f44]">
//             Redefining Modern Living
//           </h2>
//           <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             Our container homes offer a perfect blend of innovation, comfort, and sustainability. 
//             Designed for modern living, these homes provide exceptional durability and style  
//             perfect for urban dwellers, vacation spots, or off-grid lifestyles.
//           </p>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-10 text-center text-[#0a1f44]">
//             Key Features
//           </h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
//               >
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-semibold mb-3 text-[#0a1f44]">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 px-6 bg-[#0a1f44] text-white text-center">
//         <h2 className="text-3xl font-semibold mb-4">
//           Ready to Build Your Container Home?
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-gray-200">
//           Our experts will help you design a customized, energy-efficient container home 
//           that fits your style and budget. Let’s bring your modern dream home to life!
//         </p>
//         <Link
//           to="/contact"
//           className="inline-block bg-[#facc15] text-[#0a1f44] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all"
//         >
//           Contact Us
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default ContainerHomes;

// import React from "react";
// import { Link } from "react-router-dom";

// import interiorImg from "/assets/images/offer.webp";
// import ecoImg from "/assets/images/offer.webp";
// import modernImg from "/assets/images/offer.webp";
// import durableImg from "/assets/images/offer.webp";
// import transportImg from "/assets/images/offer.webp";
// import smartImg from "/assets/images/offer.webp";

// const ContainerHomes = () => {
//   const features = [
// {
//       title: "Modern Compact Design",
//       desc: "Stylish, space-efficient container homes built for both comfort and functionality.",
//       image: "/assets/images/PrefabHome/prehome1.webp",
//     },
//     {
//       title: "Eco-Friendly Construction",
//       desc: "Made with recycled materials and energy-efficient systems for a sustainable lifestyle.",
//       image: "/assets/images/PrefabHome/prehome2.webp",
//     },
//     {
//       title: "Fully Furnished Interiors",
//       desc: "Includes modern flooring, lighting, kitchen setups, and smart storage solutions.",
//       image: "/assets/images/PrefabHome/prehome3.webp",
//     },
//     {
//       title: "Smart Living Ready",
//       desc: "Integrate smart devices for climate control, lighting, and security to enhance convenience.",
//       image: "/assets/images/PrefabHome/p1-10.webp",
//     },
//     {
//       title: "Strong & Durable",
//       desc: "Built using high-grade steel containers designed to withstand extreme environments.",
//       image: "/assets/images/PrefabHome/prehome4.webp",
//     },
//     {
//       title: "Easy Setup & Relocation",
//       desc: "Portable and modular  can be installed, expanded, or relocated effortlessly.",
//       image: "/assets/images/PrefabHome/p1-main.webp",
//     },
//   ];

//   return (
//     <main className="bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/assets/images/offer.webp')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Container Homes
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             Smart, stylish, and sustainable homes made from repurposed shipping containers.
//           </p>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-20 px-6 md:px-16 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-6 text-[#0a1f44]">
//             Redefining Modern Living
//           </h2>
//           <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             Our container homes offer a perfect blend of innovation, comfort, and sustainability. 
//             Designed for modern living, these homes provide exceptional durability and style  
//             perfect for urban dwellers, vacation spots, or off-grid lifestyles.
//           </p>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-10 text-center text-[#0a1f44]">
//             Key Features
//           </h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
//               >
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-semibold mb-3 text-[#0a1f44]">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Product CTA */}
//       <section className="py-20 px-6 bg-white text-center">
//         <h2 className="text-3xl font-semibold mb-4 text-[#0a1f44]">
//           Explore Related Product
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-gray-600">
//           Discover our range of container home models built to perfection.
//         </p>
//         <Link
//           to="/product2"
//           className="inline-block bg-[#0a1f44] text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-[#0a1f44] transition-all"
//         >
//           View Product
//         </Link>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-20 px-6 bg-[#0a1f44] text-white text-center">
//         <h2 className="text-3xl font-semibold mb-4">
//           Ready to Build Your Container Home?
//         </h2>
//         <p className="max-w-2xl mx-auto mb-8 text-gray-200">
//           Our experts will help you design a customized, energy-efficient container home 
//           that fits your style and budget. Let’s bring your modern dream home to life!
//         </p>
//         <Link
//           to="/contact"
//           className="inline-block bg-[#facc15] text-[#0a1f44] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all"
//         >
//           Contact Us
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default ContainerHomes;

import React from "react";
import { Link } from "react-router-dom";

import interiorImg from "/assets/images/offer.webp";
import ecoImg from "/assets/images/offer.webp";
import modernImg from "/assets/images/offer.webp";
import durableImg from "/assets/images/offer.webp";
import transportImg from "/assets/images/offer.webp";
import smartImg from "/assets/images/offer.webp";

const ContainerHomes = () => {
  const features = [
    {
      title: "Modern Compact Home Design",
      desc: "Beautiful and space-efficient home layouts designed using high-quality shipping containers.",
      image: "/assets/PrefabHome/prehome1.webp",
    },
    {
      title: "Eco-Friendly Living",
      desc: "Built using recycled materials with energy-efficient insulation for a greener lifestyle.",
      image: "/assets/PrefabHome/prehome2.webp",
    },
    {
      title: "Luxury Fully Furnished Interiors",
      desc: "Premium interiors with custom flooring, lighting, kitchens, and modern living features.",
      image: "/assets/PrefabHome/prehome3.webp",
    },
    {
      title: "Smart Home Compatibility",
      desc: "Compatible with smart home systems including security, climate control, and lighting.",
      image: "/assets/PrefabHome/p1-10.webp",
    },
    {
      title: "Strong & Weather Resistant",
      desc: "Engineered to withstand harsh climates, heavy load, and long-term usage.",
      image: "/assets/PrefabHome/prehome4.webp",
    },
    {
      title: "Portable & Easy Installation",
      desc: "Quick installation anywhere in Pakistan with options for relocation and expansion.",
      image: "/assets/PrefabHome/p1-main.webp",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/offer.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Container Homes in Pakistan
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Modern, durable, and customizable living spaces designed using high-quality shipping containers.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#0a1f44]">
            Modern Home Solutions for Smart Living
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our container homes are a perfect combination of smart design, comfort, and long-lasting durability.
            Whether you need a family home, farmhouse, guest house, or off-grid living unit    our container homes
            are built to meet Pakistan’s climate and your lifestyle needs.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center text-[#0a1f44]">
            Key Features of Container Homes
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-[#0a1f44]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#0a1f44]">
          Explore Related Container Models
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-600">
          See more residential and commercial container solutions crafted with premium quality.
        </p>
        <Link
          to="/product2"
          className="inline-block bg-[#0a1f44] text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-[#0a1f44] transition-all"
        >
          View Product
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-[#0a1f44] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Build Your Container Home?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Our team will customize your home according to your budget, size, and design requirements.
          We deliver all over Pakistan including Islamabad, Lahore, Karachi, and Peshawar.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[#0a1f44] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default ContainerHomes;
