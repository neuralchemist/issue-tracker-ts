import { signOut as authSignOut } from "firebase/auth";
import { auth } from "../../config";

async function signOut(): Promise<void> {
  await authSignOut(auth);
}

export default signOut;
