import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

export default function Login() {
  const { login } = useAuthStore();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 max-w-md mx-auto">
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button className="bg-black text-white p-2 mt-3">Login</button>
    </form>
  );
}