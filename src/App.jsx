import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
