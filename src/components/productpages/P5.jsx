
// import React from "react";
// import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// //  Import all images for Product 2
// import mainImg from "/public/assets/images/PrefabHome/prehome1.webp";

// // Interiors
// import interior1 from "/public/assets/images/Product2/p2-33.webp";
// import interior2 from "/public/assets/images/Product2/p2-8.webp";
// import interior3 from "/public/assets/images/Product2/p2-6.webp";
// import interior4 from "/public/assets/images/Product2/p2-4.webp";

// // Engineering Cases
// import case1 from "/public/assets/images/Product2/p2-10.webp";
// import case2 from "/public/assets/images/Product2/p2-11.webp";
// import case3 from "/public/assets/images/Product2/p2-12.webp";
// import case4 from "/public/assets/images/Product2/p2-2.webp";
// //  Related Section Images (Same category as product1)
// // import related1 from "/public/assets/images/product5/p5-6.webp";
// // import related2 from "/public/assets/images/product5/p5-6.webp";
// // import related3 from "/public/assets/images/product5/p5-6.webp";
// // import related4 from "/public/assets/images/product5/p5-6.webp";

// // Related Section Images
// import related1 from "/public/assets/images/WhyChooseUs/containerhome.webp";
// import related2 from "/public/assets/images/WhyChooseUs/bchoffice.webp";
// import related3 from "/public/assets/images/WhyChooseUs/prefabhomes.webp";
// import related4 from "/public/assets/images/product4/off10.webp";

// const P5 = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
//       {/* Top Section */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-md p-6">
//         {/* Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={mainImg}
//             alt="PreFab Homes"
//             className="rounded-lg shadow-md w-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">
//             PreFab Homes
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Our PreFab Homes are fully customizable modular houses, allowing
//             you to select doors, windows, walls, and interiors according to
//             your needs. Built with high-quality steel and insulation panels,
//             they provide durable, comfortable, and modern living solutions
//             across Pakistan.
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
//           PreFab Homes are engineered for easy assembly and high durability.
//           Designed for all weather conditions in Pakistan, they feature
//           corrosion-resistant steel frames, insulated walls, and flexible
//           interior layouts. Whether for residential, office, or temporary
//           housing, these homes are fast to install, low maintenance, and
//           fully adaptable to your requirements.
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
//                 <td className="border px-3 py-2">Customizable Sandwich Panels (50–100mm)</td>
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
//             PreFab Homes have been successfully installed throughout Islamabad
//             and other cities in Pakistan. They serve as residential homes, temporary
//             accommodations, and office units, demonstrating the flexibility,
//             strength, and customization possibilities of our modular designs.
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
//           <div onClick={() => navigate("/product2")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
//             <img src={related2} alt="Container Office" className="rounded-md mb-2" />
//             <p className="text-sm font-medium text-[#0a1f44]">Container Office</p>
//           </div>
//           <div onClick={() => navigate("/product3")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
//             <img src={related3} alt="Prefabricated Cabin" className="rounded-md mb-2" />
//             <p className="text-sm font-medium text-[#0a1f44]">Prefabricated Cabin</p>
//           </div>
//           <div onClick={() => navigate("/product5")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
//             <img src={related4} alt="PreFab Homes" className="rounded-md mb-2" />
//             <p className="text-sm font-medium text-[#0a1f44]">PreFab Homes</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default P5;


import React, { useState } from "react";
import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Images for Product 5
import mainImg from "/assets/Product2/p2-main.webp";

// Interiors
import interior1 from "/assets/Product2/p2-33.webp";
import interior2 from "/assets/Product2/p2-8.webp";
import interior3 from "/assets/Product2/p2-6.webp";
import interior4 from "/assets/Product2/p2-4.webp";

// Engineering Cases
import case1 from "/assets/Product2/p2-10.webp";
import case2 from "/assets/Product2/p2-11.webp";
import case3 from "/assets/Product2/p2-12.webp";
import case4 from "/assets/Product2/p2-2.webp";

// Related Products
import related1 from "/assets/WhyChooseUs/containerhome.webp";
import related2 from "/assets/WhyChooseUs/bchoffice.webp";
import related3 from "/assets/WhyChooseUs/prefabhomes.webp";
import related4 from "/assets/WhyChooseUs/off1.webp";

const P5 = () => {
  const navigate = useNavigate();
  const productTitle = "PreFab Homes";

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
        (error) => {
          console.error(error);
          setStatusMessage("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center">
          <img
            src={mainImg}
            alt={productTitle}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">
            {productTitle}
          </h2>
          <p className="text-gray-600 mb-4">
            Our PreFab Homes are fully customizable modular houses, allowing
            you to select doors, windows, walls, and interiors according to
            your needs. Built with high-quality steel and insulation panels,
            they provide durable, comfortable, and modern living solutions
            across Pakistan.
          </p>

          <div className="space-y-2 text-sm">
            <p><strong>Material:</strong> High-Strength Galvanized Steel + Sandwich Panels</p>
            <p><strong>Place of Origin:</strong> Islamabad, Pakistan</p>
            <p><strong>Brand Name:</strong> Bangash Container</p>
            <p><strong>MOQ:</strong> 1 Complete Unit</p>
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
            <Facebook size={18} className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
            <Linkedin size={18} className="text-[#0a1f44] hover:text-blue-600 cursor-pointer" />
            <Twitter size={18} className="text-[#0a1f44] hover:text-blue-400 cursor-pointer" />
            <Instagram size={18} className="text-[#0a1f44] hover:text-pink-500 cursor-pointer" />
            <Mail size={18} className="text-[#0a1f44] hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Product Introduction</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          PreFab Homes are engineered for easy assembly and high durability.
          Designed for all weather conditions in Pakistan, they feature
          corrosion-resistant steel frames, insulated walls, and flexible
          interior layouts. Whether for residential, office, or temporary
          housing, these homes are fast to install, low maintenance, and
          fully adaptable to your requirements.
        </p>

        {/* Interior Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <img src={interior1} alt="Interior 1" className="rounded-md shadow" />
          <img src={interior2} alt="Interior 2" className="rounded-md shadow" />
          <img src={interior3} alt="Interior 3" className="rounded-md shadow" />
          <img src={interior4} alt="Interior 4" className="rounded-md shadow" />
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
                <td className="border px-3 py-2">Insulated Steel Roof with Weather Protection</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Wall Panel</td>
                <td className="border px-3 py-2">Customizable Sandwich Panels (50–100mm)</td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium">Window</td>
                <td className="border px-3 py-2">Aluminum or UPVC Sliding Window</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Door</td>
                <td className="border px-3 py-2">Steel Security Door / Custom Option</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Engineering Cases */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Engineering Cases</h3>
          <p className="text-gray-600 mb-4">
            PreFab Homes have been successfully installed throughout Islamabad
            and other cities in Pakistan. They serve as residential homes, temporary
            accommodations, and office units, demonstrating the flexibility,
            strength, and customization possibilities of our modular designs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={case1} alt="Case 1" className="rounded-md shadow" />
            <img src={case2} alt="Case 2" className="rounded-md shadow" />
            <img src={case3} alt="Case 3" className="rounded-md shadow" />
            <img src={case4} alt="Case 4" className="rounded-md shadow" />
          </div>
        </div>
      </div>

      {/* Get a Quote */}
      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Get A Quote</h3>
        <form className="space-y-4" onSubmit={handleQuoteSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone/WhatsApp"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message/Requirements"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#0a1f44] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Submit
          </button>

          {statusMessage && (
            <p className="mt-3 text-sm font-medium text-gray-700">{statusMessage}</p>
          )}
        </form>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-6 text-center">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div onClick={() => navigate("/product1")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related1} alt="Container Home" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">Container Home</p>
          </div>
          <div onClick={() => navigate("/product2")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related2} alt="Container Office" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">Container Office</p>
          </div>
          <div onClick={() => navigate("/product3")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related3} alt="Prefabricated Cabin" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">Prefabricated Cabin</p>
          </div>
          <div onClick={() => navigate("/product5")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related4} alt={productTitle} className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">{productTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P5;
