// // import React, { useState } from "react";

// // import emailjs from "@emailjs/browser";

// // const handleSubmit = (e) => {
// //   e.preventDefault();

// //   emailjs
// //     .send(
// //       "service_6has3x8",
// //       "template_f3puxhq",
// //       {
// //         name: formData.name,
// //         email: formData.email,
// //         phone: formData.phone,
// //         message: formData.message,
// //         product: "Contact Form Inquiry", // Optional tag
// //       },
// //       "Rgo_4A8LrrrBIH3Tw"
// //     )
// //     .then(
// //       () => {
// //         alert("Message sent successfully!");
// //         setFormData({ name: "", email: "", phone: "", message: "" });
// //       },
// //       (error) => {
// //         console.error("Email error:", error);
// //         alert("Failed to send. Please try again.");
// //       }
// //     );
// // };


// // const ContactForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form submitted:", formData);
// //     alert("Thank you for contacting us!");
// //     setFormData({ name: "", email: "", phone: "", message: "" });
// //   };

// //   return (
// //     <section className="py-16 bg-white">
// //       <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //         {/* Form */}
// //         <div>
// //           <h2 className="text-3xl font-bold text-gray-800 mb-6">
// //             Send Us a Message
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Your Name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
// //               required
// //             />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Your Email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
// //               required
// //             />
// //             <input
// //               type="text"
// //               name="phone"
// //               placeholder="Phone Number"
// //               value={formData.phone}
// //               onChange={handleChange}
// //               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
// //             />
// //             <textarea
// //               name="message"
// //               rows="4"
// //               placeholder="Your Message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
// //               required
// //             ></textarea>
// //             <button
// //               type="submit"
// //               className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition"
// //             >
// //               Submit Message
// //             </button>
// //           </form>
// //         </div>

// //         {/* Illustration */}
// //         <div className="hidden md:block">
// //           <img
// //             src="/public/assets/images/contactus.avif"
// //             alt="Contact Illustration"
// //             className="rounded-lg shadow-lg"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactForm;


import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // New state for message
  const [statusType, setStatusType] = useState(""); // success or error for styling

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // EmailJS Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Sending..."); // Optional: show sending state
    setStatusType("");

    emailjs
      .send(
        "service_6has3x8", // Your Service ID
        "template_f3puxhq", // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          product: "Contact Form Inquiry",
        },
        "Rgo_4A8LrrrBIH3Tw" // Your Public Key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setStatusType("success");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatusMessage("Failed to send message. Please try again.");
          setStatusType("error");
        }
      );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition"
            >
              Submit Message
            </button>

            {/* Inline Status Message */}
            {statusMessage && (
              <p
                className={`mt-2 text-sm ${
                  statusType === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="/assets/contactus.avif"
            alt="Contact Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
