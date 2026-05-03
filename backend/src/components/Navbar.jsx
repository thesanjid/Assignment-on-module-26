import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Navbar() {
  const { user, logout } = useAuthStore();

  return (
    <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">NewsPortal</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}