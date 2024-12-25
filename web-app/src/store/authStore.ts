import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

type User = Session["user"];

interface IAuthStoreProps {
  user: User | null;
  setUser: (user: User) => Promise<void>;
}

export const useAuthStore = create<IAuthStoreProps>((set) => ({
  user: null,
  setUser: async (user) => {
    set(() => ({ user }));
  },
}));
