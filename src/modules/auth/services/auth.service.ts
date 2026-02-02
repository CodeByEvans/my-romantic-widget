import { supabase } from "@/services/supabaseClient";

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      return;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  register: async (username: string, email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,

        options: {
          data: {
            username,
          },
        },
      });
      if (error) {
        throw error;
      }

      return;
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    await supabase.auth.signOut();
  },
};
