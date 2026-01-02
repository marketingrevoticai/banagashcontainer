// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


// const products = [
//   {
//     title: "20-foot expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "Satisfies any family needs. Professional designers are available to help you design your house layout.",
//   },
//   {
//     title: "40-foot expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "Satisfies any family needs. You only need to tell us your needs, and we will help you solve them.",
//   },
//   {
//     title: "Customizable expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "The visible parts of the house can be customized, including doors, windows, and walls.",
//   },
//   {
//     title: "Tourism viewing homestay room",
//     img: "/assets/images/offer.webp",
//     desc: "A modular green building that can be assembled on-site, saving time and cost.",
//   },
// ];

// const WhatWeOffer = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-[#0a1f44]">WHAT WE OFFER</h2>
//         <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
//           The modular houses produced and installed by the company are excellent products that are environmentally friendly, easy to install, easy to export, and can be disassembled and used multiple times.
//         </p>
//       </div>

//       <div className="px-8">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           className="mySwiper"
//         >
//           {products.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-5">
//                   <h3 className="text-lg font-semibold text-[#0a1f44] mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
//                   <a
//                     href="#"
//                     className="text-[#0a1f44] font-medium hover:underline"
//                   >
//                     View Details &gt;
//                   </a>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="text-center mt-10">
//         <button className="bg-[#0a1f44] text-white py-2 px-6 rounded-full hover:bg-[#112d5e] transition">
//           All Products
//         </button>
//       </div>
//     </section>
//   );
// };

// export default WhatWeOffer;

// src/components/sections/WhatWeOffer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const products = [
//   {
//     title: "20-foot expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "Satisfies any family needs. Professional designers are available to help you design your house layout.",

//   },
//   {
//     title: "40-foot expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "Satisfies any family needs. You only need to tell us your needs, and we will help you solve them.",
//   },
//   {
//     title: "Customizable expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "The visible parts of the house can be customized, including doors, windows, and walls.",
//   },
//   {
//     title: "Tourism viewing homestay room",
//     img: "/assets/images/offer.webp",
//     desc: "A modular green building that can be assembled on-site, saving time and cost.",
//   },
//   {
//     title: "40-foot expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "Satisfies any family needs. You only need to tell us your needs, and we will help you solve them.",
//   },
//   {
//     title: "Customizable expandable container house",
//     img: "/assets/images/offer.webp",
//     desc: "The visible parts of the house can be customized, including doors, windows, and walls.",
//   },
//   {
//     title: "Tourism viewing homestay room",
//     img: "/assets/images/offer.webp",
//     desc: "A modular green building that can be assembled on-site, saving time and cost.",
//   },
// ];

const products = [
  {
    title: "Container Hall",
    img: "/assets/Product1/containerhall.webp",
    desc: "Satisfies any family needs. Professional designers are available to help you design your house layout.",
    link: "/product1",
  },
  {
    title: "Container Home",
    img: "assets/PrefabHome/prehome1.webp",
    desc: "Satisfies any family needs. You only need to tell us your needs, and we will help you solve them.",
    link: "/product2",
  },
  {
    title: "PreFabricated Cabin",
    img: "/assets/Product3/p3-2.webp",
    desc: "The visible parts of the house can be customized, including doors, windows, and walls.",
    link: "/product3",
  },
  {
    title: "Bch Office",
    img: "/assets/WhyChooseUs/bchoffice.webp",
    desc: "A modular green building that can be assembled on-site, saving time and cost.",
    link: "/product4",
  },
  {
    title: "PreFab Homes", //5
    img: "/assets/PrefabHome/prehome3.webp",
    desc: "The visible parts of the house can be customized, including doors, windows, and walls.",
    link: "/product5",
  },
  {
    title: "PreFab Hostel", //6
    img: "/assets/WhyChooseUs/prefabhostel.webp",
    desc: "A modular green building that can be assembled on-site, saving time and cost.",
    link: "/product6",
  },
  {
    title: "Container Office",       //7
    img: "/assets/Product7/off13.webp",
    desc: "The visible parts of the house can be customized, including doors, windows, and walls.",
    link: "/product7",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-16 bg-gray-100 relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#0a1f44]">WHAT WE OFFER</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          The modular houses produced and installed by the company are excellent
          products that are environmentally friendly, easy to install, easy to
          export, and can be disassembled and used multiple times.
        </p>
      </div>

      <div className="px-8 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#0a1f44] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <Link
                    to={item.link}
                    className="inline-block bg-[#0a1f44] text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#112d5e] transition"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination - positioned below cards */}
        <div className="custom-pagination flex justify-center gap-2 mt-6"></div>

        {/* Custom Navigation Buttons */}
        <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 bg-[#0a1f44] text-white p-3 rounded-full hover:bg-[#112d5e] transition z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 bg-[#0a1f44] text-white p-3 rounded-full hover:bg-[#112d5e] transition z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="text-center mt-16">
        <a href="/services">
          <button className="bg-[#0a1f44] text-white py-2 px-6 rounded-full hover:bg-[#112d5e] transition">
            All Products
          </button>
        </a>
      </div>
    </section>
  );
};

export default WhatWeOffer;
