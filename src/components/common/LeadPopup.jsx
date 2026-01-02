// import React, { useEffect, useState } from "react";

// const handleSubmit = (e) => {
//   e.preventDefault();

//   emailjs
//     .send(
//       "service_6has3x8",
//       "template_f3puxhq",
//       {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         message: "Lead Popup — 30% Discount Offer",
//         product: "Lead Popup",
//       },
//       "Rgo_4A8LrrrBIH3Tw"
//     )
//     .then(
//       () => {
//         alert("Thank you! Our team will contact you soon.");
//         setShowPopup(false);
//       },
//       (error) => {
//         console.error(error);
//         alert("Something went wrong. Try again.");
//       }
//     );
// };


// export default function LeadPopup() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 10000); // popup after 10 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you! Our team will contact you soon.");
//     setShowPopup(false);
//   };

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000]">
//       <div className="bg-white text-[#0a1f44] rounded-2xl shadow-2xl w-[90%] max-w-md p-8 relative animate-fadeIn">
//         {/* Close button */}
//         <button
//           onClick={() => setShowPopup(false)}
//           className="absolute top-2 right-3 text-gray-500 hover:text-[#0a1f44] text-4xl font-bold"
//         >
//           ×
//         </button>

//         {/* Offer Header */}
//         <div className="text-center mb-5">
//           <p className="text-sm font-semibold bg-[#facc15] inline-block px-4 py-1 rounded-full mb-3">
//             Limited Time Offer
//           </p>
//           <h2 className="text-2xl font-extrabold text-[#0a1f44]">
//             Get <span className="text-[#facc15]">30% OFF</span> on Your First Container Order!
//           </h2>
//           <p className="text-sm text-gray-600 mt-2">
//             Don’t miss out fill in your details and our team will contact you within 24 hours.
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
//           />

//           <button
//             type="submit"
//             className="bg-[#facc15] hover:bg-yellow-400 text-[#0a1f44] font-bold py-2 rounded-lg transition-all"
//           >
//             Claim My 30% OFF →
//           </button>
//         </form>

//         {/* Footer Note */}
//         <p className="text-xs text-gray-500 text-center mt-4">
//           *Offer valid for a limited time only. T&C apply.
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");
    setStatusType("");

    emailjs
      .send(
        "service_6has3x8", // Service ID
        "template_f3puxhq", // Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: "Lead Popup — 30% Discount Offer",
          product: "Lead Popup",
        },
        "Rgo_4A8LrrrBIH3Tw" // Public Key
      )
      .then(
        () => {
          setStatusMessage("Thank you! Our team will contact you soon.");
          setStatusType("success");
          setFormData({ name: "", email: "", phone: "" });
          setTimeout(() => setShowPopup(false), 5000); // auto-close after 5s
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatusMessage("Something went wrong. Please try again.");
          setStatusType("error");
        }
      );
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000]">
      <div className="bg-white text-[#0a1f44] rounded-2xl shadow-2xl w-[90%] max-w-md p-8 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-[#0a1f44] text-4xl font-bold"
        >
          ×
        </button>

        {/* Offer Header */}
        <div className="text-center mb-5">
          <p className="text-sm font-semibold bg-white border border-gray-200 inline-block px-4 py-1 rounded-full mb-3">
            Limited Time Offer
          </p>
          <h2 className="text-2xl font-extrabold text-[#0a1f44]">
            Get <span className="text-blue-700">30% OFF</span> on Your First Container Order!
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Don’t miss out! Fill in your details and our team will contact you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <button
            type="submit"
            className="bg-[#0a1f44] hover:bg-blue-900 text-white font-bold py-2 rounded-lg transition-all"
          >
            Claim My 30% OFF →
          </button>

          {/* Inline Status Message */}
          {statusMessage && (
            <p
              className={`mt-2 text-sm ${statusType === "success" ? "text-green-600" : "text-red-600"
                }`}
            >
              {statusMessage}
            </p>
          )}
        </form>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center mt-4">
          *Offer valid for a limited time only. T&C apply.
        </p>
      </div>
    </div>
  );
}
