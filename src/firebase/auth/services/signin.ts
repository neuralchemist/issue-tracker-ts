import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "../../config";

async function signIn(email: string, password: string): Promise<void> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    const err = error as AuthError;

    throw new Error(err.code);
  }
}

export default signIn;
