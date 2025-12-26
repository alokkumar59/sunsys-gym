import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

import Home from "../Pages/Home";
 import About from "../Pages/About";
 import Centers from "../Pages/Centers";
 import FranchiseEnquiry from "../Pages/FranchiseEnquiry";
 import Contacts from "../Pages/Contacts";
import Enquiry from "../Pages/Enquiry";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
       { path: "about", element: <About /> },
       { path: "centers", element: <Centers /> },
       { path: "franchise-enquiry", element: <FranchiseEnquiry /> },
       { path: "contact", element: <Contacts /> },
      { path: "enquiry", element: <Enquiry /> },
    ],
  },
]);

export { router };
