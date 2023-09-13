import { ReactNode, createContext, useEffect, useState } from "react";
// firebase
import { User, onAuthStateChanged } from "firebase/auth";
// custom types
import { IAuthContext } from "../types.ts/index.js";
// custom types
import { IUser } from "../../user/types/index.js";
import { auth } from "../../../firebase/index.js";

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({ user: null });

export function AuthProvider({ children }: Props) {

  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Listen for Firebase Auth state change
  useEffect(() => {
    const reset = () => {
      setUser(null);
      setIsLoading(false);
    };

    const authStateChanged = async (user: User | null) => {
      setIsLoading(true);
      if (!user) {
        reset();
        return;
      }

      setUser({
        id: user.uid,
        email: user.email || "",
        username: user.displayName || "",
      });

      setIsLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, authStateChanged);

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
