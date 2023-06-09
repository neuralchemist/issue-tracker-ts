import {
  createUserWithEmailAndPassword,
  updateProfile,
  AuthError,
} from "firebase/auth";
import { auth } from "../../config";
import UsersService from "../../users/services";
import signOut from "./signout";
import signIn from "./signin";

const usersService = new UsersService();

async function signUp(
  email: string,
  password: string,
  username: string
): Promise<void> {
  try {
    // create user in firebase authentication
    const UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const authUser = UserCredential.user;

    // update profile
    await updateProfile(authUser, {
      displayName: username,
    });

    // add  to 'users' collection in firestore
    const user = { id: authUser.uid, username, email };
    await usersService.create(user);
    // simple hack to cause user state change on profile update
    await signOut();
    await signIn(email, password);
  } catch (error: unknown) {
    const err = error as AuthError;

    throw new Error(err.message);
  }
}

export default signUp;
