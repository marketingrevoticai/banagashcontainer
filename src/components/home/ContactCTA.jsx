// import React from "react";
// import catalogImg from "/assets/catalog.webp";
// import customizedImg from "/assets/contact-customized.webp";

// const ContactSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* Catalog Card */}
//         <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-between hover:shadow-xl transition-all">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-3">Catalog</h3>
//             <p className="text-gray-600 mb-6">
//               The catalog covers our company profile, capabilities, and products
//               to help you know more about us and our services.
//             </p>
//             <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
//               Download
//             </button>
//           </div>
//           <div className="mt-6">
//             <img
//               src={catalogImg}
//               alt="Catalog Preview"
//               className="rounded-lg w-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Online Message Card */}
//         <div className="bg-blue-900 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
//           <div>
//             <h3 className="text-2xl font-bold mb-3">Online Message</h3>
//             <p className="text-gray-200 text-sm mb-6">
//               Please complete this form, and we will contact you by the next
//               business day.
//             </p>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-4 py-2 rounded-md text-gray-900"
//               />
//               <input
//                 type="email"
//                 placeholder="*E-mail"
//                 className="w-full px-4 py-2 rounded-md text-gray-900"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone/WhatsApp"
//                 className="w-full px-4 py-2 rounded-md text-gray-900"
//               />
//               <textarea
//                 rows="4"
//                 placeholder="*Message"
//                 className="w-full px-4 py-2 rounded-md text-gray-900"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="bg-white text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Customized Card */}
//         <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-between hover:shadow-xl transition-all">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-3">
//               Customized
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Each optimal solution is determined by its design and installation
//               parameters combined with our experience and modular construction
//               technology know-how.
//             </p>
//             <a href="/contact">
//               <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
//                 Contact
//               </button>
//             </a>
//           </div>
//           <div className="mt-6">
//             <img
//               src={customizedImg}
//               alt="Customized Design"
//               className="rounded-lg w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import catalogImg from "/assets/catalog.webp";
import customizedImg from "/assets/contact-customized.webp";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");
    setStatusType("");

    emailjs
      .send(
        "service_6has3x8", // Your EmailJS Service ID
        "template_f3puxhq", // Your template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          product: "Online Message Card",
        },
        "Rgo_4A8LrrrBIH3Tw" // Public Key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setStatusType("success");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("EmailJS Error:", error);
          setStatusMessage("Failed to send message. Please try again.");
          setStatusType("error");
        }
      );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Catalog Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Catalog</h3>
            <p className="text-gray-600 mb-6">
              The catalog covers our company profile, capabilities, and products
              to help you know more about us and our services.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
              Download
            </button>
          </div>
          <div className="mt-6">
            <img
              src={catalogImg}
              alt="Catalog Preview"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Online Message Card (EmailJS Active) */}
        <div className="bg-blue-900 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3">Online Message</h3>
            <p className="text-gray-200 text-sm mb-6">
              Please complete this form, and we will contact you by the next business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="*E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone/WhatsApp"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="*Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-gray-900"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-white text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                SUBMIT
              </button>

              {/* Status message */}
              {statusMessage && (
                <p
                  className={`mt-2 text-sm ${
                    statusType === "success" ? "text-green-400" : "text-red-300"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Customized Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Customized</h3>
            <p className="text-gray-600 mb-6">
              Each optimal solution is determined by its design and installation
              parameters combined with our experience and modular construction technology know-how.
            </p>
            <a href="/contact">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
                Contact
              </button>
            </a>
          </div>

          <div className="mt-6">
            <img
              src={customizedImg}
              alt="Customized Design"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
