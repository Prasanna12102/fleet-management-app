import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";

const Protected = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<Protected roles={["admin"]}><AdminDashboard /></Protected>} />
      <Route path="/customers/dashboard" element={<Protected roles={["admin","customer"]}><CustomerDashboard /></Protected>} />
      <Route path="/admin/restaurants/update/:id" element={<Protected roles={["admin"]}><UpdateRestaurant /></Protected>} />
    </Routes>
  );
}