// firestore
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// custom auth
import { auth } from "@firebase/index";
// custom api
import { userApi } from "@entities/user/api";
// custom types
import { IUser } from "@entities/user/types";
import { ISignin, ISignup } from "../types";

class AuthApi {
  async signup({ email, password, username }: ISignup): Promise<void> {
    // 1. Sign up the user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    console.log("AuthApi -> signup -> createUserWith...", user.displayName);

    // 2. Update the user's profile with the new username
    await updateProfile(user, {
      displayName: username,
    });

    console.log("AuthApi -> signup -> updateProfile", user.displayName);

    // // 3. Reload the user to get the updated information
    // await user.reload();
    // console.log('AuthApi -> signup -> reload', user.displayName)

    // 4. add  to 'users' collection in firestore
    const _user: IUser = { id: user.uid, email, username };
    await userApi.create(_user);
  }

  async signin({ email, password }: ISignin): Promise<void> {
    console.log("%cauthApi -> signin:", "color: orange");
    await signInWithEmailAndPassword(auth, email, password);
  }

  async signout(): Promise<void> {
    console.log("%cauthApi -> signout:", "color: orange");
    await signOut(auth);
  }
}

export const authApi = new AuthApi();
