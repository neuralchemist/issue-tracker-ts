// react-query
import { MutateOptions, useMutation } from "@tanstack/react-query";
// custom api
import { authApi } from "../api";
// custom types
import { ISignup } from "../types.ts";

export function useSignup() {
  // mutation function
  const mutationFn = async ({
    email,
    password,
    username,
  }: ISignup): Promise<void> =>
    await authApi.signup({ email, password, username });

  const { mutate, status, error } = useMutation<void, Error, ISignup>({
    mutationFn: mutationFn,
  });

  const signup = (
    { email, password, username }: ISignup,

    options?: MutateOptions<void, Error, ISignup, unknown> | undefined
  ) => mutate({ email, password, username }, options);

  return {
    signup,
    status,
    error,
  };
}
