import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Services from "./pages/Services";
import SubCategoriesByCategory from "./pages/SubCategoriesByCategory";
import ServicesBySubCategory from "./pages/ServicesBySubCategory";
import ServiceDetails from "./pages/ServiceDetails";
import "./style.css";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/subcategoriesbycategory/:id" element={<SubCategoriesByCategory />} />
          <Route path="/servicesbysubcategory/:id" element={<ServicesBySubCategory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails/:id" element={<ServiceDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
