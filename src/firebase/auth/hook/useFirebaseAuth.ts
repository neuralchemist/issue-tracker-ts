import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
// custom types
import { auth } from "../../config";
import { signUp, signIn, signOut } from "../services";
import { IAuthUser } from "../types";

function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Listen for Firebase Auth state change
  useEffect(() => {
    const reset = () => {
      setAuthUser(null);
      setIsLoading(false);
    };
    const authStateChanged = async (user: User | null) => {
      setIsLoading(true);
      if (!user) {
        reset();
        return;
      }

      setAuthUser({
        id: user.uid,
        email: user.email,
        username: user.displayName,
      });

      setIsLoading(false);
    };
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signUp,
    signIn,
    signOut,
  };
}

export default useFirebaseAuth;
