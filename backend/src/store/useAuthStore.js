import { create } from "zustand";
import API from "../api/axios";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  login: async (data) => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    set({ user: res.data.user, token: res.data.token });
  },

  register: async (data) => {
    await API.post("/auth/register", data);
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));