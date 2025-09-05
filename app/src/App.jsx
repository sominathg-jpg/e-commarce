import Register from "./components/Register";
import Header from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import BlogPage from "./components/Blogs";
import ProductPage from "./components/ProductDetails";
import FiletesPage from "./components/Filters";
import CartPage from "./components/CartPage";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/Editprofile";
import AboutPage from "./components/AboutPage";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/filters" element={<FiletesPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/edit-Profile/:id" element={<EditProfilePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products-details/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
