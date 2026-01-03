import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    const ok = login(email, password);
    if (!ok) return alert("Invalid credentials");
    navigate(email.includes("admin") ? "/admin/dashboard" : "/customers/dashboard");
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}