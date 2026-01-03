import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const ADMIN = { email: "admin@gmail.com", password: "admin1234", role: "admin" };
const CUSTOMER = { email: "customer@gmail.com", password: "customer1234", role: "customer" };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    let found = null;
    if (email === ADMIN.email && password === ADMIN.password) found = ADMIN;
    if (email === CUSTOMER.email && password === CUSTOMER.password) found = CUSTOMER;
    if (!found) return false;
    setUser(found);
    localStorage.setItem("loggedUser", JSON.stringify(found));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);