// // // // // import React from "react";
// // // // // import { PhoneCall } from "lucide-react";

// // // // // const FloatCallBubble = () => {
// // // // //   return (
// // // // //     <a
// // // // //       href="tel:+923359835538"
// // // // //       className="
// // // // //         fixed right-4 bottom-5 z-50
// // // // //         flex items-center space-x-3
// // // // //         bg-white shadow-xl rounded-full
// // // // //         px-5 py-3 pr-6
// // // // //         border border-gray-200
// // // // //         animate-slide-in
// // // // //         hover:shadow-2xl hover:scale-[1.03]
// // // // //         transition-all duration-200
// // // // //       "
// // // // //     >
// // // // //       {/* Icon Circle */}
// // // // //       <div className="w-8 h-8 rounded-full bg-[#00c2c7] flex items-center justify-center shadow-md">
// // // // //         <PhoneCall className="text-white w-4 h-4" />
// // // // //       </div>

// // // // //       {/* Text */}
// // // // //       <div className="flex flex-col leading-tight">
// // // // //         <span className="text-gray-600 text-sm font-medium">Call Us anytime</span>
// // // // //         <span className="text-[#0a1f44] text-lg font-bold">0335 9835538</span>
// // // // //       </div>

// // // // //       {/* Animation */}
// // // // //       <style>{`
// // // // //         @keyframes slideInRight {
// // // // //           from { transform: translateX(50px); opacity: 0; }
// // // // //           to { transform: translateX(0); opacity: 1; }
// // // // //         }
// // // // //         .animate-slide-in {
// // // // //           animation: slideInRight 0.4s ease-out;
// // // // //         }
// // // // //       `}</style>
// // // // //     </a>
// // // // //   );
// // // // // };

// // // // // export default FloatCallBubble;

// // // // "use client";

// // // // import React, { useEffect, useState } from "react";
// // // // import { PhoneCall } from "lucide-react";

// // // // const FloatAction = ({ isMenuOpen }) => {
// // // //   const [show, setShow] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       if (window.scrollY > window.innerHeight * 0.8) {
// // // //         setShow(true);
// // // //       } else {
// // // //         setShow(false);
// // // //       }
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   // ❌ If menu is open → hide bubble completely!
// // // //   if (!show || isMenuOpen) return null;

// // // //   return (
// // // //     <a
// // // //       href="tel:+923359835538"
// // // //       className="
// // // //         fixed bottom-5 right-4 z-[999]
// // // //         flex items-center gap-3
// // // //         bg-white shadow-xl rounded-full
// // // //         px-4 py-2 border border-gray-200
// // // //         transition-all duration-300 animate-slide-in
// // // //       "
// // // //     >
// // // //       <div className="absolute inset-0 -z-10 rounded-full blur-xl bg-[#00c2c7]/25"></div>

// // // //       <div className="w-7 h-7 rounded-full bg-[#00c2c7] flex items-center justify-center shadow-md">
// // // //         <PhoneCall className="text-white w-4 h-4" />
// // // //       </div>

// // // //       <div className="leading-tight">
// // // //         <span className="text-gray-600 text-xs block font-medium">
// // // //           Call Us anytime
// // // //         </span>
// // // //         <span className="text-[#0a1f44] text-base font-bold block">
// // // //           0335 9835538
// // // //         </span>
// // // //       </div>

// // // //       <style>{`
// // // //         @keyframes slideInRight {
// // // //           from { transform: translateX(40px); opacity: 0; }
// // // //           to { transform: translateX(0); opacity: 1); }
// // // //         }
// // // //         .animate-slide-in {
// // // //           animation: slideInRight 0.4s ease-out;
// // // //         }
// // // //       `}</style>
// // // //     </a>
// // // //   );
// // // // };

// // // // export default FloatAction;

// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // // We replace PhoneCall with the icons shown in your image
// // // import { Mail, Linkedin } from "lucide-react";

// // // // For WhatsApp, since lucide-react doesn't have a direct WhatsApp icon,
// // // // we'll use a simple icon like PhoneCall inside a div styled to look like WhatsApp,
// // // // or we can assume you have a custom/external component for it (here we'll use a styled div).

// // // // For a better implementation, let's use a standard social icon or find a WhatsApp-like icon.
// // // // Since the image shows a distinct WhatsApp icon (white phone on a green bubble),
// // // // we'll define a simple one here.

// // // const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
// // //   <svg
// // //     xmlns="http://www.w3.org/2000/svg"
// // //     viewBox="0 0 24 24"
// // //     fill="none"
// // //     stroke="currentColor"
// // //     strokeWidth="2"
// // //     strokeLinecap="round"
// // //     strokeLinejoin="round"
// // //     className={className}
// // //   >
// // //     {/* Simplified WhatsApp style path - this may need adjustment based on your icon library */}
// // //     <path d="M22 10.24A10.84 10.84 0 0 0 12 2a10.8 10.8 0 0 0-9.8 6.4c-1 3.5-1 7.2 0 10.7l-1 3.9 4-1.2A10.8 10.8 0 0 0 12 22a10.8 10.8 0 0 0 10-11.8z" />
// // //     <path
// // //       fill="white"
// // //       stroke="none"
// // //       d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"
// // //     />
// // //     <path
// // //       stroke="white"
// // //       strokeWidth="2.5"
// // //       d="M15.4 12.3c-.6-.3-1.8-.9-2.1-1c-.2-.1-.4-.1-.5.1-.2.2-.8 1-.9 1.2-.2.2-.3.2-.6.1-.2 0-.9-.3-1.7-.8-.6-.4-1.1-1-1.5-1.7-.4-.7-.4-1-.3-1.2.1-.2.3-.5.4-.7.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2.1-.4 0-.5-.1-.1-.5-.2-.9-.5-.4-.2-.8-.4-1-.5-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.2.1-.8.9-.8 1.9s.8 2.3 1.1 2.5c.3.2 1.5 2.4 3.5 3.3 2 .9 2.5.7 3 1.1.5.3.9.6 1.1.7.2.1.4.1.6.1.2 0 .6-.1 1-.3.4-.2.9-.6 1-.9.2-.3.2-.6.1-.8 0-.3-.4-.5-.8-.7z"
// // //     />
// // //   </svg>
// // // );

// // // // Define the contact list data
// // // const contacts = [
// // //   {
// // //     name: "Email",
// // //     href: "mailto:your_email@example.com", // Replace with actual email
// // //     icon: <Mail className="w-5 h-5 text-white" />, // Icon is white on dark background
// // //   },
// // //   {
// // //     name: "WhatsApp",
// // //     href: "https://wa.me/+923359835538?text=Hello%20...", // Replace with actual WhatsApp link
// // //     icon: (
// // //       <WhatsAppIcon className="w-5 h-5 text-white" />
// // //     ), // Use the styled WhatsApp icon
// // //   },
// // //   {
// // //     name: "LinkedIn",
// // //     href: "https://www.linkedin.com/in/yourprofile", // Replace with actual LinkedIn profile
// // //     icon: <Linkedin className="w-5 h-5 text-white" />, // Icon is white on dark background
// // //   },
// // // ];

// // // const FloatAction = ({ isMenuOpen }) => {
// // //   const [show, setShow] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       // Show when scrolled past 80% of the viewport height
// // //       if (window.scrollY > window.innerHeight * 0.8) {
// // //         setShow(true);
// // //       } else {
// // //         setShow(false);
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   // ❌ If the scroll condition is not met OR the mobile menu is open, hide completely!
// // //   if (!show || isMenuOpen) return null;

// // //   return (
// // //     <div
// // //       className="
// // //         fixed bottom-5 right-4 z-[999]
// // //         flex flex-col gap-3
// // //         transition-all duration-300 animate-slide-in
// // //       "
// // //     >
// // //       {contacts.map((contact, index) => (
// // //         <a
// // //           key={index}
// // //           href={contact.href}
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //           className="
// // //             w-10 h-10 rounded-lg 
// // //             bg-[#0a1f44] border-2 border-white // Dark background for the icons, white border for contrast
// // //             flex items-center justify-center 
// // //             shadow-xl
// // //             hover:bg-[#00c2c7] hover:scale-105 
// // //             transition-all duration-300
// // //           "
// // //           // Add a delay to the animation for a staggered effect
// // //           style={{ animationDelay: `${index * 0.1}s` }}
// // //         >
// // //           {contact.icon}
// // //         </a>
// // //       ))}

// // //       {/* Re-use the animation from the original component */}
// // //       <style>{`
// // //         @keyframes slideInRight {
// // //           from { transform: translateX(40px); opacity: 0; }
// // //           to { transform: translateX(0); opacity: 1); }
// // //         }
// // //         .animate-slide-in {
// // //           animation: slideInRight 0.4s ease-out both; // Use 'both' to keep the final state
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default FloatAction;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { Mail, Linkedin, Facebook } from "lucide-react";

// // // Simplified WhatsApp Icon Component
// // // Since the visual guide shows the icons appearing only on the mobile menu (image 2),
// // // but your original component was a scroll-activated float, we'll make this
// // // component always visible (by removing the scroll logic) and fixed to the mid-right,
// // // while still hiding it when the mobile menu is open.
// // const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     className={className}
// //   >
// //     {/* Simplified WhatsApp style path */}
// //     <path d="M22 10.24A10.84 10.84 0 0 0 12 2a10.8 10.8 0 0 0-9.8 6.4c-1 3.5-1 7.2 0 10.7l-1 3.9 4-1.2A10.8 10.8 0 0 0 12 22a10.8 10.8 0 0 0 10-11.8z" />
// //     <path
// //       fill="white"
// //       stroke="none"
// //       d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"
// //     />
// //     <path
// //       stroke="white"
// //       strokeWidth="2.5"
// //       d="M15.4 12.3c-.6-.3-1.8-.9-2.1-1c-.2-.1-.4-.1-.5.1-.2.2-.8 1-.9 1.2-.2.2-.3.2-.6.1-.2 0-.9-.3-1.7-.8-.6-.4-1.1-1-1.5-1.7-.4-.7-.4-1-.3-1.2.1-.2.3-.5.4-.7.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2.1-.4 0-.5-.1-.1-.5-.2-.9-.5-.4-.2-.8-.4-1-.5-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.2.1-.8.9-.8 1.9s.8 2.3 1.1 2.5c.3.2 1.5 2.4 3.5 3.3 2 .9 2.5.7 3 1.1.5.3.9.6 1.1.7.2.1.4.1.6.1.2 0 .6-.1 1-.3.4-.2.9-.6 1-.9.2-.3.2-.6.1-.8 0-.3-.4-.5-.8-.7z"
// //     />
// //   </svg>
// // );


// // const contacts = [
// //   {
// //     name: "Email",
// //     href: "mailto:info@bangashcontainers.com", // Replace with actual email
// //     icon: <Mail className="w-5 h-5 text-white" />,
// //   },
// //   {
// //     name: "WhatsApp",
// // href: "https://wa.me/+923359835538?text=Hello%20Bangash%20Container%20Can%20you%20tell%20more%20about%20your%20services%20This%20Message%20send%20to%20you%20through%20Revotic%20AI%20Messaging%20Service",
// // icon: <WhatsAppIcon className="w-5 h-5 text-white" />,
// //   },
// //   {
// //     name: "LinkedIn",
// //     href: "https://www.facebook.com/bangashcontainers/", // Replace with actual LinkedIn profile
// //     icon: <Facebook className="w-5 h-5 text-white" />,
// //   },
// // ];

// // const FloatAction = ({ isMenuOpen }) => {
// //   // --- REMOVING SCROLL LOGIC ---
// //   // Based on the second image, this menu seems to be permanently fixed,
// //   // not dependent on scrolling, unlike the original floating bubble.

// //   //  If the mobile menu is open, hide completely!
// //   // This is the primary condition based on your request and the second image.
// //   if (isMenuOpen) return null;

// //   return (
// //     <div
// //       className="
// //         // KEY CHANGE: Positioning for fixed middle-right
// //         fixed right-0 top-1/2 -translate-y-1/2 // Fixes it to the right, and centers it vertically

// //         // Mobile visibility control (optional: hide on large screens if desired, but keeping visible for now)
// //         // Hidden on small screens to avoid clash with mobile menu, but the logic above handles that

// //         z-[999] // High z-index
// //         flex flex-col gap-3
// //         transition-all duration-300 animate-slide-in
// //         p-2 // Added a little padding on the right for spacing
// //       "
// //     >
// //       {contacts.map((contact, index) => (
// //         <a
// //           key={index}
// //           href={contact.href}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="
// //             // Styling the container background for the icons
// //             w-10 h-10 rounded-l-lg rounded-r-none // Changed to be rounded only on the left side
// //             bg-[#0a1f44] border-2 border-white 
// //             flex items-center justify-center 
// //             shadow-xl
// //             hover:bg-[#00c2c7] hover:scale-105 hover:shadow-2xl
// //             transition-all duration-300
// //           "
// //           style={{ animationDelay: `${index * 0.1}s` }}
// //         >
// //           {contact.icon}
// //         </a>
// //       ))}

// //       {/* Re-using the animation */}
// //       <style>{`
// //         @keyframes slideInRight {
// //           from { transform: translateX(50px); opacity: 0; }
// //           to { transform: translateX(0); opacity: 1); }
// //         }
// //         .animate-slide-in {
// //           animation: slideInRight 0.4s ease-out both; 
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default FloatAction;

// "use client";

// import React from "react";
// import { Mail, Facebook } from "lucide-react";

// // --- WhatsApp SVG (clean, rounded like RevoticAI) ---
// const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//   >
//     <path d="M12 2a10 10 0 0 0-8.7 15l-1.1 4 4.2-1.1A10 10 0 1 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm4.4-5.6c-.2-.1-1.3-.7-1.5-.8s-.4-.1-.6.1-.7.8-.9 1c-.1.1-.2.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.3.1-.4s.3-.3.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4H9c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.3 3.1 2.1 3.2 5.1 4.4c2.5 1 3.1.8 3.7.7.6-.1 1.8-.7 2-1.3.2-.6.2-1.1.1-1.3s-.2-.2-.4-.3z" />
//   </svg>
// );

// // --- CONTACT BUTTONS ---
// const contacts = [
//   {
//     name: "Email",
//     href: "mailto:info@bangashcontainers.com",
//     icon: <Mail className="w-6 h-6 text-white" />,
//   },
//   {
//     name: "WhatsApp",
//     href: "https://wa.me/+923359835538?text=Hello%20Bangash%20Container%20Can%20you%20tell%20more%20about%20your%20services...%0A%0AThis%20Message%20send%20to%20you%20through%20your%20Website%20Using%20Revotic%20AI%20Messaging%20Service",
//     icon: <WhatsAppIcon className="w-6 h-6 text-white" />,
//   },
//   {
//     name: "Facebook",
//     href: "https://www.facebook.com/bangashcontainers/",
//     icon: <Facebook className="w-6 h-6 text-white" />,
//   },
// ];

// // --- MAIN FLOATING MENU ---
// const FloatAction = ({ isMenuOpen }) => {
//   if (isMenuOpen) return null;

//   return (
//     <div
//       className="
//         fixed right-0 top-1/2 -translate-y-1/2
//         flex flex-col gap-2
//         z-[9999]
//         animate-float-slide
//       "
//     >
//       {contacts.map((c, i) => (
//         <a
//           key={i}
//           href={c.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             w-12 h-12
//             bg-[#0A2A43]
//             rounded-l-xl
//             flex items-center justify-center
//             shadow-xl
//             border border-white/40
//             hover:bg-[#00C2C7]
//             hover:scale-105
//             transition-all duration-300
//           "
//           style={{ animationDelay: `${i * 0.15}s` }}
//         >
//           {c.icon}
//         </a>
//       ))}

//       <style>{`
//         @keyframes floatSlide {
//           from { transform: translate(40px, -50%); opacity: 0; }
//           to   { transform: translate(0, -50%); opacity: 1; }
//         }
//         .animate-float-slide {
//           animation: floatSlide .45s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FloatAction;


"use client";

import React, { useEffect, useState } from "react";
import { Mail, Facebook, Phone } from "lucide-react";

// --- WhatsApp SVG ---
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2a10 10 0 0 0-8.7 15l-1.1 4 4.2-1.1A10 10 0 1 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm4.4-5.6c-.2-.1-1.3-.7-1.5-.8s-.4-.1-.6.1-.7.8-.9 1c-.1.1-.2.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.3.1-.4s.3-.3.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4H9c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.3 3.1 2.1 3.2 5.1 4.4c2.5 1 3.1.8 3.7.7.6-.1 1.8-.7 2-1.3.2-.6.2-1.1.1-1.3s-.2-.2-.4-.3z" />
  </svg>
);

// --- CONTACT BUTTONS ---
const contacts = [
  {
    name: "Email",
    href: "mailto:info@bangashcontainers.com",
    icon: <Mail className="w-6 h-6 text-white" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+923359835538?text=Hello%20Bangash%20Container...",
    icon: <WhatsAppIcon className="w-6 h-6 text-white" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bangashcontainers/",
    icon: <Facebook className="w-6 h-6 text-white" />,
  },
  {
    name: "Call",
    href: "tel:+923335061973",
    icon: <Phone className="w-6 h-6 text-white" />,
  },
];

const FloatAction = ({ isMenuOpen }) => {
  const [show, setShow] = useState(false);

  // ---- Scroll Logic ----
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight; // 100vh
      if (window.scrollY > triggerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide when mobile menu is open OR scroll not reached
  if (isMenuOpen || !show) return null;

  return (
    <div
      className="
        fixed right-0 top-1/2 -translate-y-1/2
        flex flex-col gap-2
        z-[9999]
        animate-float-slide
      "
    >
      {contacts.map((c, i) => (
        <a
          key={i}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12
            bg-[#0A2A43]
            rounded-l-xl
            flex items-center justify-center
            shadow-xl
            border border-white/40
            hover:bg-[#00C2C7]
            hover:scale-105
            transition-all duration-300
          "
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {c.icon}
        </a>
      ))}

      <style>{`
        @keyframes floatSlide {
          from { transform: translate(40px, -50%); opacity: 0; }
          to   { transform: translate(0, -50%); opacity: 1; }
        }
        .animate-float-slide {
          animation: floatSlide .45s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatAction;
