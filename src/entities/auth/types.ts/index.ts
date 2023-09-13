import { IUser } from "../../user/types";

export interface ISignup {
  email: string;
  password: string;
  username: string;
}

export type ISignin = Omit<ISignup, "username">;

export interface IAuthContext {
  user: IUser | null;
}
