import { useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
 const [form, setForm] = useState({
  title: "",
  content: "",
  image: "",
});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/news", form);
    alert("News Created");
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <input placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
      <textarea placeholder="Content" onChange={(e)=>setForm({...form,content:e.target.value})}/>
      <input placeholder="Image URL" onChange={(e)=>setForm({...form,image:e.target.value})}/>
      <button className="bg-green-500 text-white p-2">Publish</button>
    </form>
  );
}