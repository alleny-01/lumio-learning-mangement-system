import { createContext } from "react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

export const AuthContext = createContext<any>(null);

function AuthProvider({ children }: any) {
  const [session, setSession] = useState<any>(undefined);
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getSession() {
      try {
        const { data , error } = await supabase.auth.getSession();

        if (error) {
          console.error("Error fetching session:", error);
          return;
        }

        if (session) {
          setSession(data.session);
          console.log(data.session)
        }
      } catch (error) {
        console.error("Unexpected error fetching session:", error);
      }
    }
    getSession();

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log("Auth state changed:", session);
    });
  }, []);

  //Sign up
  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: signUpEmail.toLowerCase(),
      password: signUpPassword,
    });

    if (error) {
      console.error("Error signing up:", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  //Sign In
  const signIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: signInEmail.toLowerCase(),
        password: signInPassword,
      });

      if (error) {
        console.error("Error signing in:", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (error) {
      console.error("an error occured:", error);
    }
  };

  // //Sign Out
  // const signOut = () => {
  //   const { error } = supabase.auth.signOut()

  //   if(error){
  //     console.error("Error signing out:", error);
  //   }
  // }

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        setLoading,
        signIn,
        signUp,
        signUpEmail,
        setSignUpEmail,
        signUpPassword,
        setSignUpPassword,
        lastName,
        setLastName,
        firstName,
        setFirstName,
        signInEmail,
        setSignInEmail,
        signInPassword,
        setSignInPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
