// App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HireUs from "./pages/HireUs";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hireus" element={<HireUs />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;