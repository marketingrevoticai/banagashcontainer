// // // // bangash-containers\src\router\AppRouter.jsx
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Home from "../pages/Home";
// // // import About from "../pages/About";
// // // import Products from "../pages/Products";
// // // import Contact from "../pages/Contact";
// // // import NotFound from "../pages/NotFound";
// // // import MainLayout from "../layouts/MainLayout";

// // // const AppRouter = () => (
// // //   <Router>
// // //     <MainLayout>
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/about" element={<About />} />
// // //         <Route path="/products" element={<Products />} />
// // //         <Route path="/contact" element={<Contact />} />
// // //         <Route path="*" element={<NotFound />} />
// // //       </Routes>
// // //     </MainLayout>
// // //   </Router>
// // // );

// // // export default AppRouter;

// // // src/router/AppRouter.jsx
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "../pages/Home";
// // import About from "../pages/About";
// // import Products from "../pages/Products";
// // import Contact from "../pages/Contact";
// // import NotFound from "../pages/NotFound";
// // import MainLayout from "../layouts/MainLayout";
// // import Projects from "../pages/Projects";
// // import Services from "../pages/Services";



// // const AppRouter = () => (
// //   <Router>
// //     <Routes>
// //       {/* All routes share the MainLayout */}
// //       <Route path="/" element={<MainLayout />}>
// //         <Route index element={<Home />} />
// //         <Route path="about" element={<About />} />
// //         <Route path="products" element={<Products />} />
// //         <Route path="contact" element={<Contact />} />
// //         <Route path="*" element={<NotFound />} />
// //         <Route path="projects" element={<Projects />} />
// //         <Route path="projects" element={<Services />} />
// //       </Route>
// //     </Routes>
// //   </Router>
// // );

// // export default AppRouter;


// // src/router/AppRouter.jsx

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Page Imports
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Products from "../pages/Products";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";
// import MainLayout from "../layouts/MainLayout";
// import Projects from "../pages/Projects";
// import Blog from "../pages/Blog";  

// // Service Pages
// import PrefabricatedHomes from "../pages/services/PrefabricatedHomes";
// import PrefabricatedOffice from "../pages/Services/PrefabricatedOffice";
// import ContainerCaravan from "../pages/services/ContainerCaravan";
// import ContainerHomes from "../pages/services/ContainerHomes";
// import ContainerOffices from "../pages/services/ContainerOffices";
// import SecurityCabins from "../pages/services/SecurityCabins";


// const AppRouter = () => (
//   <Router>
//     <Routes>
//       {/* All routes share the MainLayout */}
//       <Route path="/" element={<MainLayout />}>
//         {/* Core Pages */}
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="products" element={<Products />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="projects" element={<Projects />} />
//         <Route path="/blog" element={<Blog />} />


//         {/* Service Pages */}
//         <Route path="services/prefabricated-homes" element={<PrefabricatedHomes />} />
//         <Route path="services/fabricated-office" element={<PrefabricatedOffice />} />
//         <Route path="services/container-caravan" element={<ContainerCaravan />} />
//         <Route path="services/container-homes" element={<ContainerHomes />} />
//         <Route path="services/container-offices" element={<ContainerOffices />} />
//         <Route path="services/security-cabins" element={<SecurityCabins />} />

//         {/* 404 Page */}
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   </Router>
// );

// export default AppRouter;



// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Core Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";

// Blog Pages
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";

// All services folder imports are now lowercase
import PrefabricatedHomes from "../components/services/PrefabricatedHomes";
import PrefabricatedOffice from "../components/services/PrefabricatedOffice";
import ContainerCaravan from "../components/services/ContainerCaravan";
import ContainerHomes from "../components/services/ContainerHomes";
import ContainerOffices from "../components/services/ContainerOffices";
import SecurityCabins from "../components/services/SecurityCabins";

import Services from "../components/services/Services";
import OurExperts from "../components/experts/OurExperts";

// Product Details Linker
import Product1 from "../components/productpages/P1";
import Product2 from "../components/productpages/P2";
import Product3 from "../components/productpages/P3";
import Product4 from "../components/productpages/P4";
import Product5 from "../components/productpages/P5";
import Product6 from "../components/productpages/P6";
import Product7 from "../components/productpages/P7";


import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import RefundPolicy from "../pages/RefundPolicy";

const AppRouter = () => (
  <Router>
    <Routes>
      {/* All routes share the MainLayout */}
      <Route path="/" element={<MainLayout />}>
        {/* Core Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="our-experts" element={<OurExperts />} />

        {/* Blog Pages */}
        <Route path="blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* Service Pages */}
        <Route path="services/prefabricated-homes" element={<PrefabricatedHomes />} />
        <Route path="/services/fabricated-office" element={<PrefabricatedOffice />} />
        <Route path="services/container-caravan" element={<ContainerCaravan />} />
        <Route path="services/container-homes" element={<ContainerHomes />} />
        <Route path="services/container-offices" element={<ContainerOffices />} />
        <Route path="services/security-cabins" element={<SecurityCabins />} />

        {/* project Product Linker */}
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
        <Route path="/product5" element={<Product5 />} />
        <Route path="/product6" element={<Product6 />} />
        <Route path="/product7" element={<Product7 />} />

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
