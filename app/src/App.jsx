import Register from "./components/Register";
import Header from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
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
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthStore } from "./store/authStore";
// import Dashboard from "./components/vender/VenderDashboard";
function App() {
  const { isLogin } = useAuthStore(); // ✅ check auth state

  return (
    <>
      <Header />

      <Routes>
        {/* Public Routes (block if already logged in) */}
        <Route
          path="/"
          element={!isLogin ? <Register /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/login"
          element={!isLogin ? <Login /> : <Navigate to="/home" replace />}
        />

        {/* Always Public */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/filters" element={<FiletesPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/vender-dashboard" element={<Dashboard />} /> */}
        <Route path="/products-details/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile/:id"
          element={
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
