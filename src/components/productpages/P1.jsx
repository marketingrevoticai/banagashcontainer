
// import React from "react";
// import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import emailjs from "@emailjs/browser";

// const handleQuoteSubmit = (e) => {
//   e.preventDefault();

//   emailjs
//     .send(
//       "service_6has3x8",
//       "template_f3puxhq",
//       {
//         name,
//         email,
//         phone,
//         message,
//         product: productTitle, // Example: "Container Office 20ft"
//       },
//       "Rgo_4A8LrrrBIH3Tw"
//     )
//     .then(
//       () => {
//         alert("Quote request sent!");
//       },
//       (error) => {
//         console.error(error);
//         alert("Failed to send. Please try again.");
//       }
//     );
// };


// // Import all images for Product 1
// import mainImg from "/assets/WhyChooseUs/containerhall.webp";

// // Interiors
// import interior1 from "/public/assets/Product1/40_ container halls/p1-5.webp";
// import interior2 from "/public/assets/Product1/40_ container halls/p1-7.webp";
// import interior3 from "/public/assets/Product1/40_ container halls/p1-4.webp";
// import interior4 from "/public/assets/Product1/40_ container halls/p1-3.webp";

// // Engineering Cases
// import case1 from "/public/assets/Product1/40_ container halls/p1-32.webp";
// import case2 from "/public/assets/Product1/40_ container halls/p1-8.webp";
// import case3 from "/public/assets/Product1/40_ container halls/p1-10.webp";
// import case4 from "/public/assets/Product1/40_ container halls/p1-1.webp";

// // Related Section Images
// import related1 from "/public/assets/WhyChooseUs/containerhome.webp";
// import related2 from "/public/assets/WhyChooseUs/bchoffice.webp";
// import related3 from "/public/assets/WhyChooseUs/prefabhomes.webp";
// import related4 from "/public/assets/WhyChooseUs/prefabhostel.webp";

// const P1 = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
//       {/* Top Section */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-md p-6">
//         {/* Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={mainImg}
//             alt="Container Hall"
//             className="rounded-lg shadow-md w-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">
//             Modular Container Hall
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Our container halls are designed to satisfy all types of family and commercial needs. 
//             Professional designers are available to help you design your house layout, ensuring 
//             comfort, functionality, and aesthetic appeal in every project. Constructed with 
//             durable steel frames and insulated panels, these halls are ideal for Islamabad and across Pakistan.
//           </p>

//           <div className="space-y-2 text-sm">
//             <p><strong>Material:</strong> Galvanized Steel + Sandwich Panels</p>
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
//           The modular container hall is engineered for quick assembly, durability, and flexible usage. 
//           Built with corrosion-resistant galvanized steel and insulated panels, it is suitable for 
//           residential, commercial, or event purposes in Pakistan. Interiors and layouts can be customized 
//           to include rooms, halls, or storage areas depending on your needs. Quick installation and low maintenance 
//           make it an efficient and cost-effective solution.
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
//                 <td className="border px-3 py-2">Galvanized Steel + Sandwich Panels</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2 font-medium">Roof</td>
//                 <td className="border px-3 py-2">Corrugated Steel Sheet</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Wall Panel</td>
//                 <td className="border px-3 py-2">EPS / PU / Rockwool Sandwich Panel</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2 font-medium">Window</td>
//                 <td className="border px-3 py-2">PVC Sliding Window</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Door</td>
//                 <td className="border px-3 py-2">Steel Security Door</td>
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
//             Our container halls have been implemented in residential plots, event spaces, and commercial projects 
//             across Islamabad and Pakistan. These examples highlight the versatility, durability, and efficiency of the design.
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
//           <div onClick={() => navigate("/product2")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
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

// export default P1;


// import React, { useState } from "react";
// import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";

// // Import images
// import mainImg from "/assets/WhyChooseUs/containerhall.webp";
// import interior1 from "/public/assets/Product1/40_ container halls/p1-5.webp";
// import interior2 from "/public/assets/Product1/40_ container halls/p1-7.webp";
// import interior3 from "/public/assets/Product1/40_ container halls/p1-4.webp";
// import interior4 from "/public/assets/Product1/40_ container halls/p1-3.webp";
// import case1 from "/public/assets/Product1/40_ container halls/p1-32.webp";
// import case2 from "/public/assets/Product1/40_ container halls/p1-8.webp";
// import case3 from "/public/assets/Product1/40_ container halls/p1-10.webp";
// import case4 from "/public/assets/Product1/40_ container halls/p1-1.webp";
// import related1 from "/public/assets/WhyChooseUs/containerhome.webp";
// import related2 from "/public/assets/WhyChooseUs/bchoffice.webp";
// import related3 from "/public/assets/WhyChooseUs/prefabhomes.webp";
// import related4 from "/public/assets/WhyChooseUs/prefabhostel.webp";

// const P1 = () => {
//   const navigate = useNavigate();
//   const productTitle = "Modular Container Hall";
//   // Inside P1 component, add new state for message
//   const [statusMessage, setStatusMessage] = useState("");

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleQuoteSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_6has3x8", // Your EmailJS service ID
//         "template_f3puxhq", // Your EmailJS template ID
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           message: formData.message,
//           product: productTitle,
//         },
//         "Rgo_4A8LrrrBIH3Tw" // Your EmailJS public key
//       )
//       .then(
//         () => {
//           setStatusMessage("Your quote request has been sent successfully!");
//           setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
//         },
//         (error) => {
//           console.error(error);
//           setStatusMessage("Failed to send. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="bg-gray-50 text-gray-800 py-10 px-4 md:px-10">
//       {/* Top Section */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-md p-6">
//         <div className="flex justify-center items-center">
//           <img
//             src={mainImg}
//             alt={productTitle}
//             className="rounded-lg shadow-md w-full object-cover"
//           />
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">{productTitle}</h2>
//           <p className="text-gray-600 mb-4">
//             Our container halls are designed to satisfy all types of family and commercial needs. 
//             Professional designers are available to help you design your house layout, ensuring 
//             comfort, functionality, and aesthetic appeal in every project.
//           </p>

//           <div className="space-y-2 text-sm">
//             <p><strong>Material:</strong> Galvanized Steel + Sandwich Panels</p>
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
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Product Introduction</h3>
//         <p className="text-gray-600 leading-relaxed mb-6">
//           The modular container hall is engineered for quick assembly, durability, and flexible usage. 
//           Built with corrosion-resistant galvanized steel and insulated panels, it is suitable for 
//           residential, commercial, or event purposes. Interiors and layouts can be customized depending on your needs.
//         </p>

//         {/* Interior Gallery */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           <img src={interior1} alt="Interior 1" className="rounded-md shadow" />
//           <img src={interior2} alt="Interior 2" className="rounded-md shadow" />
//           <img src={interior3} alt="Interior 3" className="rounded-md shadow" />
//           <img src={interior4} alt="Interior 4" className="rounded-md shadow" />
//         </div>

//         {/* Parameter Table */}
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-3">Parameter Table</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border text-sm">
//             <tbody>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Material</td>
//                 <td className="border px-3 py-2">Galvanized Steel + Sandwich Panels</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2 font-medium">Roof</td>
//                 <td className="border px-3 py-2">Corrugated Steel Sheet</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Wall Panel</td>
//                 <td className="border px-3 py-2">EPS / PU / Rockwool Sandwich Panel</td>
//               </tr>
//               <tr>
//                 <td className="border px-3 py-2 font-medium">Window</td>
//                 <td className="border px-3 py-2">PVC Sliding Window</td>
//               </tr>
//               <tr className="bg-gray-100">
//                 <td className="border px-3 py-2 font-medium">Door</td>
//                 <td className="border px-3 py-2">Steel Security Door</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Engineering Cases */}
//         <div className="mt-12">
//           <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Engineering Cases</h3>
//           <p className="text-gray-600 mb-4">
//             Our container halls have been implemented in residential plots, event spaces, and commercial projects 
//             across Islamabad and Pakistan.
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <img src={case1} alt="Case 1" className="rounded-md shadow" />
//             <img src={case2} alt="Case 2" className="rounded-md shadow" />
//             <img src={case3} alt="Case 3" className="rounded-md shadow" />
//             <img src={case4} alt="Case 4" className="rounded-md shadow" />
//           </div>
//         </div>
//       </div>

//       {/* Get a Quote Form */}
//       <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Get A Quote</h3>
//         <form className="space-y-4" onSubmit={handleQuoteSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md p-2 w-full"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-md p-2 w-full"
//               required
//             />
//           </div>
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone/WhatsApp"
//             value={formData.phone}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-2 w-full"
//             required
//           />
//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Message/Requirements"
//             value={formData.message}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-2 w-full"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-[#0a1f44] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Related Products */}
//       <div className="max-w-6xl mx-auto mt-12">
//         <h3 className="text-xl font-semibold text-[#0a1f44] mb-6 text-center">Related Products</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <div onClick={() => navigate("/product2")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
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

// export default P1;


import React, { useState } from "react";
import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Import images
import mainImg from "/assets/Product1/containerhall.webp";
import interior1 from "/assets/Product1/p1-1.webp";
import interior2 from "/assets/Product1/p1-2.webp";
import interior3 from "/assets/Product1/p1-5.webp";
import interior4 from "/assets/Product1/p1-7.webp";
import case1 from "/assets/Product1/p1-4.webp";
import case2 from "/assets/Product1/p1-8.webp";
import case3 from "/assets/Product1/p1-3.webp";
import case4 from "/assets/Product1/p1-6.webp";
import related1 from "/assets/WhyChooseUs/containerhome.webp";
import related2 from "/assets/WhyChooseUs/bchoffice.webp";
import related3 from "/assets/WhyChooseUs/prefabhomes.webp";
import related4 from "/assets/WhyChooseUs/prefabhostel.webp";

const P1 = () => {
  const navigate = useNavigate();
  const productTitle = "Modular Container Hall";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Status message state
  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleQuoteSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6has3x8", // EmailJS service ID
        "template_f3puxhq", // EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          product: productTitle,
        },
        "Rgo_4A8LrrrBIH3Tw" // EmailJS public key
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
          <h2 className="text-2xl font-semibold mb-4 text-[#0a1f44]">{productTitle}</h2>
          <p className="text-gray-600 mb-4">
            Our container halls are designed to satisfy all types of family and commercial needs. 
            Professional designers are available to help you design your house layout, ensuring 
            comfort, functionality, and aesthetic appeal in every project.
          </p>

          <div className="space-y-2 text-sm">
            <p><strong>Material:</strong> Galvanized Steel + Sandwich Panels</p>
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
          The modular container hall is engineered for quick assembly, durability, and flexible usage. 
          Built with corrosion-resistant galvanized steel and insulated panels, it is suitable for 
          residential, commercial, or event purposes. Interiors and layouts can be customized depending on your needs.
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
                <td className="border px-3 py-2">Galvanized Steel + Sandwich Panels</td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium">Roof</td>
                <td className="border px-3 py-2">Corrugated Steel Sheet</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Wall Panel</td>
                <td className="border px-3 py-2">EPS / PU / Rockwool Sandwich Panel</td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium">Window</td>
                <td className="border px-3 py-2">PVC Sliding Window</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-3 py-2 font-medium">Door</td>
                <td className="border px-3 py-2">Steel Security Door</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Engineering Cases */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Engineering Cases</h3>
          <p className="text-gray-600 mb-4">
            Our container halls have been implemented in residential plots, event spaces, and commercial projects 
            across Islamabad and Pakistan.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={case1} alt="Case 1" className="rounded-md shadow" />
            <img src={case2} alt="Case 2" className="rounded-md shadow" />
            <img src={case3} alt="Case 3" className="rounded-md shadow" />
            <img src={case4} alt="Case 4" className="rounded-md shadow" />
          </div>
        </div>
      </div>

      {/* Get a Quote Form */}
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

          {/* Status Message */}
          {statusMessage && (
            <p className="mt-3 text-sm font-medium text-gray-700">{statusMessage}</p>
          )}
        </form>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-[#0a1f44] mb-6 text-center">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div onClick={() => navigate("/product2")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related1} alt="Container Home" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">Container Home</p>
          </div>
          <div onClick={() => navigate("/product4")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related2} alt="BCH Office" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">BCH Office</p>
          </div>
          <div onClick={() => navigate("/product5")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related3} alt="PreFab Homes" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">PreFab Homes</p>
          </div>
          <div onClick={() => navigate("/product6")} className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 text-center cursor-pointer">
            <img src={related4} alt="PreFab Hostel" className="rounded-md mb-2" />
            <p className="text-sm font-medium text-[#0a1f44]">PreFab Hostel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P1;
