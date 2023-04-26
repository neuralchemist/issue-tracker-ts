export interface IAuthUser {
  id: string;
  username: string | null;
  email: string | null;
}

export interface IAuthContext {
  authUser: IAuthUser | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}
