import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// const blogs = [
//   {
//     id: 1,
//     title: "Transforming Shipping Containers into Modern Workspaces",
//     image: "/public/assets/offer.webp",
//     date: "October 20, 2025",
//     content: `
//       At Bangash Containers, we believe innovation starts with simplicity.
//       Shipping containers have transformed from simple steel boxes into dynamic workspaces that inspire creativity and efficiency.

//       Our modular container offices are designed to adapt to any business environment  whether it's a construction site, startup hub, or remote office setup.
//       Built with eco-friendly materials, these spaces offer flexibility, cost-effectiveness, and durability.

//       Each container workspace is fully customizable  from insulation and HVAC systems to glass facades and interior furnishings.
//       We focus on delivering both function and aesthetics to match your brand’s identity and work culture.

//       Discover the future of work  sustainable, mobile, and smart.
//     `,
//   },
//   {
//     id: 2,
//     title: "Why Container Homes Are the Future of Sustainable Living",
//     image: "/public/assets/offer.webp",
//     date: "September 10, 2025",
//     content: `
//       Container homes are redefining modern architecture  merging sustainability with affordability.
//       With increasing awareness of eco-conscious living, Bangash Containers crafts homes that are stylish, energy-efficient, and durable.

//       Every container home is built using recycled materials and designed to reduce carbon footprint while maintaining luxury and comfort.
//       From single-unit homes to multi-story residences, our designs offer modular flexibility.

//       It's not just housing; it's a lifestyle  one that promotes environmental responsibility and innovation in living spaces.
//     `,
//   },
//   {
//     id: 3,
//     title: "Storage Solutions That Save You Space and Money",
//     image: "/public/assets/offer.webp",
//     date: "August 22, 2025",
//     content: `
//       Bangash Containers offers cost-effective storage solutions for businesses and individuals.
//       Our storage containers are engineered for durability, weather resistance, and security.

//       Whether you need temporary storage for construction materials or long-term warehousing, our containers are customizable to fit your exact needs.

//       Optimize your operations with flexible and scalable storage systems that save both space and money.
//     `,
//   },
// ];

const blogs = [
  {
    id: 1,
    title: "Transforming Shipping Containers into Modern Workspaces",
    image: "/assets/WhyChooseUs/containerhome.webp",
    date: "October 20, 2025",
    content: `
      At Bangash Containers, we believe innovation starts with simplicity.
      Shipping containers have transformed from simple steel boxes into dynamic workspaces that inspire creativity and efficiency.

      Our modular container offices are designed to adapt to any business environment—whether it's a construction site, startup hub, or remote office setup.
      Built with eco-friendly materials, these spaces offer flexibility, cost-effectiveness, and durability.
        
      Each container workspace is fully customizable—from insulation and HVAC systems to glass facades and interior furnishings.
      We focus on delivering both function and aesthetics to match your brand’s identity and work culture.

      Discover the future of work—sustainable, mobile, and smart.
    `,
  },
  {
    id: 2,
    title: "Why Container Homes Are the Future of Sustainable Living",
    image: "/assets/WhyChooseUs/containeroffice.webp",
    date: "September 10, 2025",
    content: `
      Container homes are redefining modern architecture—merging sustainability with affordability.
      With increasing awareness of eco-conscious living, Bangash Containers crafts homes that are stylish, energy-efficient, and durable.

      Every container home is built using recycled materials and designed to reduce carbon footprint while maintaining luxury and comfort.
      From single-unit homes to multi-story residences, our designs offer modular flexibility.

      It's not just housing; it's a lifestyle—one that promotes environmental responsibility and innovation in living spaces.
    `,
  },
  {
    id: 3,
    title: "Storage Solutions That Save You Space and Money",
    image: "/assets/WhyChooseUs/ContainerHall.webp",
    date: "August 22, 2025",
    content: `
      Bangash Containers offers cost-effective storage solutions for businesses and individuals.
      Our storage containers are engineered for durability, weather resistance, and security.

      Whether you need temporary storage for construction materials or long-term warehousing, our containers are customizable to fit your exact needs.

      Optimize your operations with flexible and scalable storage systems that save both space and money.
    `,
  },

  // -----------------------------------------
  // ⭐ NEW BLOGS YOU REQUESTED
  // -----------------------------------------

  {
    id: 4,
    title: "Innovative Prefab Designs for Modern Offices",
    image: "/assets/WhyChooseUs/bchoffice.webp",
    date: "July 15, 2025",
    content: `
      Prefabricated office solutions are revolutionizing how businesses build work environments.
      At Bangash Containers, we transform shipping containers into modern, stylish, and fully equipped office spaces tailored for productivity.

      Our prefab offices include smart insulation, electrical fittings, large windows, and ergonomic layouts designed to support employee well-being.
      Businesses can expand quickly without the delays of traditional construction.

      From compact site offices to executive suites, our prefab designs offer unmatched flexibility, affordability, and visual appeal.
      Work smarter with a modern office built for efficiency.
    `,
  },
  {
    id: 5,
    title: "Eco-Friendly Solutions: The Rise of Green Containers",
    image: "/assets/WhyChooseUs/prefabhomes.webp",
    date: "June 02, 2025",
    content: `
      Sustainability is no longer a trend—it's a responsibility.
      At Bangash Containers, we prioritize eco-friendly practices by reusing and repurposing steel containers into functional living and working units.

      Our green container solutions include renewable energy integration, low-energy cooling systems, recycled materials, and water-efficient designs.

      These environmentally conscious builds significantly reduce waste and energy consumption while offering modern comfort.
      Join the movement toward sustainable development with our innovative green container solutions.
    `,
  },
  {
    id: 6,
    title: "From Site Offices to Luxury Cabins: Container Evolution",
    image: "/assets/Services/off13.webp",
    date: "May 10, 2025",
    content: `
      Shipping containers have come a long way from simple storage units.
      Today, they are transformed into luxury cabins, retail spaces, cafés, and even hospitality solutions.

      At Bangash Containers, we specialize in turning containers into beautifully designed spaces that balance durability with high-end finishes.
      Modern insulation, premium materials, stylish interiors, and innovative layouts bring a new level of sophistication to portable architecture.

      Whether you need a luxury cabin for a resort, a mobile retail kiosk, or a fully customizable living unit—our team delivers designs that exceed expectations.
    `,
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
        <h1 className="text-3xl font-bold text-[#0a1f44] mb-4">
          Blog Not Found 😕
        </h1>
        <Link
          to="/blogs"
          className="text-blue-700 font-semibold hover:underline"
        >
          ← Back to Blogs
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#f9fafb] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Blog Image */}
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />

          {/* Blog Content */}
          <div className="p-10">
            <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
            <h1 className="text-4xl font-bold text-[#0a1f44] mb-6 leading-snug">
              {blog.title}
            </h1>
            <div className="border-l-4 border-blue-700 pl-4 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-10">
              <Link
                to="/blogs"
                className="inline-flex items-center bg-[#0a1f44] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-all shadow-md hover:shadow-lg"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
