
// import React from "react";
// import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";


// //  Import all images for Product 2
// import mainImg from "/public/assets/images/product7/off13.webp";

// // Interiors
// import interior1 from "/public/assets/images/product7/off22.webp";
// import interior2 from "/public/assets/images/product7/offer.webp";
// import interior3 from "/public/assets/images/product7/off222.webp";
// import interior4 from "/public/assets/images/product7/off13.webp";

// // Engineering Cases
// import case1 from "/public/assets/images/product7/off3.webp";
// import case2 from "/public/assets/images/product7/off8.webp";
// import case3 from "/public/assets/images/product7/off11.webp";
// import case4 from "/public/assets/images/product7/off1.webp";

// // //  Related Section Images (Same category as product1)
// // import related1 from "/public/assets/images/product7/p7-6.webp";
// // import related2 from "/public/assets/images/product7/p7-6.webp";
// // import related3 from "/public/assets/images/product7/p7-6.webp";
// // import related4 from "/public/assets/images/product7/p7-6.webp";


// // Related Section Images
// import related1 from "/public/assets/images/WhyChooseUs/containerhome.webp";
// import related2 from "/public/assets/images/WhyChooseUs/bchoffice.webp";
// import related3 from "/public/assets/images/WhyChooseUs/prefabhomes.webp";
// import related4 from "/public/assets/images/WhyChooseUs/prefabhostel.webp";

// const P7 = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
//       {/* Top Section */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-md p-6">
//         {/* Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={mainImg}
//             alt="Container Office"
//             className="rounded-lg shadow-md w-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">
//             Modern Container Office
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Our Container Offices are modular, customizable, and designed for efficiency. 
//             Built using high-quality steel frames and insulated wall panels, these offices 
//             provide comfortable and functional workspaces that can be easily relocated or expanded, 
//             ideal for businesses and projects in Islamabad and across Pakistan.
//           </p>

//           <div className="space-y-2 text-sm">
//             <p><strong>Material:</strong> High-Strength Galvanized Steel + Sandwich Panels</p>
//             <p><strong>Place of Origin:</strong> Islamabad, Pakistan</p>
//             <p><strong>Brand Name:</strong> Bangash Container</p>
//             <p><strong>MOQ:</strong> 1 Complete Unit</p>
//           </div>

//           <div className="mt-6 flex space-x-3">
//             <button className="bg-[#0a1f44] text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
//               Get a Quote
//             </button>
//             <button className="border border-[#0a1f44] text-[#0a1f44] px-5 py-2 rounded-md hover:bg-[#0a1f44] hover:text-white transition">
//               Contact Us
//             </button>
//           </div>

//           <div className="mt-6 flex space-x-4">
//             <Facebook size={18} className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
//             <Linkedin size={18} className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
//             <Twitter size={18} className="text-[#0a1f44] hover:text-blue-400 cursor-pointer" />
//             <Instagram size={18} className="text-[#0a1f44] hover:text-pink-500 cursor-pointer" />
//             <Mail size={18} className="text-[#0a1f44] hover:text-red-500 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Product Description */}
//       <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">
//           Product Introduction
//         </h3>
//         <p className="text-gray-600 leading-relaxed mb-6">
//           The modern Container Office is a modular workspace designed for speed, efficiency, and flexibility. 
//           Constructed with durable steel and insulated panels, it withstands Pakistan’s weather extremes. 
//           Interiors can be configured with offices, meeting rooms, storage, and workspaces according to your needs. 
//           Quick assembly, mobility, and low maintenance make it perfect for businesses, sites, and temporary setups.
//         </p>

//         {/* Interior Gallery */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           <img src={interior1} alt="Interior 1" className="rounded-md shadow" />
//           <img src={interior2} alt="Interior 2" className="rounded-md shadow" />
//           <img src={interior3} alt="Interior 3" className="rounded-md shadow" />
//           <img src={interior4} alt="Interior 4" className="rounded-md shadow" />
//         </div>

//         {/* Parameter Table */}
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-3">
//           Parameter Table
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border text-sm">
//             <tbody>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Material</td>
//                 <td className="border px-3 py-2">Steel Frame + EPS/PU/Rockwool Panels</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2 font-medium">Roof</td>
//                 <td className="border px-3 py-2">Insulated Steel Roof with Weather Protection</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Wall Panel</td>
//                 <td className="border px-3 py-2">50–100mm Sandwich Panels (EPS/PU/Rockwool)</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2 font-medium">Window</td>
//                 <td className="border px-3 py-2">Aluminum or UPVC Sliding Window</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Door</td>
//                 <td className="border px-3 py-2">Steel Security Door / Custom Option</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Engineering Cases */}
//         <div className="mt-12">
//           <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">
//             Engineering Cases
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Container Offices have been implemented in Islamabad, commercial projects, temporary setups, and construction sites across Pakistan. 
//             These cases showcase their flexibility, durability, and efficiency in creating functional workspaces.
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <img src={case1} alt="Case 1" className="rounded-md shadow" />
//             <img src={case2} alt="Case 2" className="rounded-md shadow" />
//             <img src={case3} alt="Case 3" className="rounded-md shadow" />
//             <img src={case4} alt="Case 4" className="rounded-md shadow" />
//           </div>
//         </div>
//       </div>

//       {/* Get a Quote */}
//       <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Get A Quote</h3>
//         <form className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md p-2 w-full" />
//             <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 w-full" />
//           </div>
//           <input type="text" placeholder="Phone/WhatsApp" className="border border-gray-300 rounded-md p-2 w-full" />
//           <textarea rows="4" placeholder="Message/Requirements" className="border border-gray-300 rounded-md p-2 w-full"></textarea>
//           <button className="bg-[#0a1f44] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">Submit</button>
//         </form>
//       </div>

//       {/* Related Products */}
//       <div className="max-w-6xl mx-auto mt-12">
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-6 text-center">Related Products</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <div onClick={() => navigate("/product1")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
//             <img src={related1} alt="Container Home" className="rounded-md mb-2" />
//             <p className="text-sm font-medium text-[#0a1f44]">Container Home</p>
//           </div>
//           <div onClick={() => navigate("/product4")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
//             <img src={related2} alt="BCH Office" className="rounded-md mb-2" />
//             <p className="text-sm font-medium text-[#0a1f44]">BCH Office</p>
//           </div>
//           <div onClick={() => navigate("/product5")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
//             <img src={related3} alt="PreFab Homes" className="rounded-md mb-2" />
//             <p className="text-sm font-medium text-[#0a1f44]">PreFab Homes</p>
//           </div>
//           <div onClick={() => navigate("/product6")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
//             <img src={related4} alt="PreFab Hostel" className="rounded-md mb-2" />
//             <p className="text-sm font-medium text-[#0a1f44]">PreFab Hostel</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default P7;


import React, { useState } from "react";
import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Images
import mainImg from "/assets/Product7/off13.webp";

import interior1 from "/assets/Product7/off22.webp";
import interior2 from "/assets/Product7/offer.webp";
import interior3 from "/assets/Product7/off222.webp";
import interior4 from "/assets/Product7/off13.webp";

import case1 from "/assets/Product7/off3.webp";
import case2 from "/assets/Product7/off8.webp";
import case3 from "/assets/Product7/off11.webp";
import case4 from "/assets/Product7/off1.webp";

// Related Images
import related1 from "/assets/WhyChooseUs/containerhome.webp";
import related2 from "/assets/WhyChooseUs/bchoffice.webp";
import related3 from "/assets/WhyChooseUs/prefabhomes.webp";
import related4 from "/assets/WhyChooseUs/off1.webp";
const P7 = () => {
  const navigate = useNavigate();

  const productTitle = "Modern Container Office";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6has3x8",
        "template_f3puxhq",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          product: productTitle,
        },
        "Rgo_4A8LrrrBIH3Tw"
      )
      .then(
        () => {
          setStatusMessage("Your quote request has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setStatusMessage("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-md p-6">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={mainImg}
            alt={productTitle}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">
            {productTitle}
          </h2>
          <p className="text-gray-600 mb-4">
            Our Container Offices are modular, customizable, and designed for
            efficiency. Built using high-quality steel frames and insulated panels,
            these offices provide comfortable and functional workspaces ideal for
            businesses across Pakistan.
          </p>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Material:</strong> High-Strength Galvanized Steel + Sandwich Panels
            </p>
            <p>
              <strong>Place of Origin:</strong> Islamabad, Pakistan
            </p>
            <p>
              <strong>Brand Name:</strong> Bangash Container
            </p>
            <p>
              <strong>MOQ:</strong> 1 Complete Unit
            </p>
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="bg-[#0a1f44] text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
              Get a Quote
            </button>
            <button className="border border-[#0a1f44] text-[#0a1f44] px-5 py-2 rounded-md hover:bg-[#0a1f44] hover:text-white transition">
              Contact Us
            </button>
          </div>

          <div className="mt-6 flex space-x-4">
            <Facebook className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
            <Linkedin className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
            <Twitter className="text-[#0a1f44] hover:text-blue-400 cursor-pointer" />
            <Instagram className="text-[#0a1f44] hover:text-pink-500 cursor-pointer" />
            <Mail className="text-[#0a1f44] hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Product Introduction</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          The Modern Container Office is built for rapid deployment and long-lasting usage.
          Made from strong steel and insulated panels, it withstands Pakistan’s weather conditions.
          Interiors can be customized for office rooms, meeting spaces, storage, or other utilities.
        </p>

        {/* Interior Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <img src={interior1} className="rounded-md shadow" />
          <img src={interior2} className="rounded-md shadow" />
          <img src={interior3} className="rounded-md shadow" />
          <img src={interior4} className="rounded-md shadow" />
        </div>

        {/* Parameter Table */}
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-3">Parameter Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Material</td>
                <td className="border px-3 py-2">Steel Frame + EPS/PU/Rockwool Panels</td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium">Roof</td>
                <td className="border px-3 py-2">Insulated Steel Roof</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Wall Panel</td>
                <td className="border px-3 py-2">50–100mm Sandwich Panels</td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium">Window</td>
                <td className="border px-3 py-2">UPVC / Aluminum Sliding Window</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Door</td>
                <td className="border px-3 py-2">Steel Door / Custom Option</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Engineering Cases */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Engineering Cases</h3>
          <p className="text-gray-600 mb-4">
            Installed across Pakistan for offices, construction sites, and commercial setups,
            these cases show the durability, speed, and flexibility of container offices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={case1} className="rounded-md shadow" />
            <img src={case2} className="rounded-md shadow" />
            <img src={case3} className="rounded-md shadow" />
            <img src={case4} className="rounded-md shadow" />
          </div>
        </div>
      </div>

      {/* Get a Quote */}
      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Get A Quote</h3>

        <form onSubmit={handleQuoteSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="Phone/WhatsApp"
            className="border border-gray-300 rounded-md p-2 w-full"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Message/Requirements"
            className="border border-gray-300 rounded-md p-2 w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-[#0a1f44] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Submit
          </button>

          {statusMessage && (
            <p className="mt-2 text-sm font-medium text-gray-700">
              {statusMessage}
            </p>
          )}
        </form>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-6 text-center">
          Related Products
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            onClick={() => navigate("/product1")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related1} className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">Container Home</p>
          </div>

          <div
            onClick={() => navigate("/product4")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related2} className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">BCH Office</p>
          </div>

          <div
            onClick={() => navigate("/product5")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related3} className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">PreFab Homes</p>
          </div>

          <div
            onClick={() => navigate("/product6")}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer"
          >
            <img src={related4} className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">PreFab Hostel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P7;
