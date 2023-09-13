// react-query
import { MutateOptions, useMutation } from "@tanstack/react-query";
// custom api
import { authApi } from "../api";
// custom types
import { ISignin } from "../types.ts";

export function useSignin() {
  console.log("%cuseSignin:", "color: orange");
  // mutation function
  const mutationFn = async ({ email, password }: ISignin): Promise<void> =>
    await authApi.signin({ email, password });

  const { mutate, status, error } = useMutation<void, Error, ISignin>({
    mutationFn: mutationFn,
  });

  const signin = (
    { email, password }: ISignin,
    options?: MutateOptions<void, Error, ISignin, unknown> | undefined
  ) => mutate({ email, password }, options);

  return {
    signin,
    status,
    error,
  };
}
