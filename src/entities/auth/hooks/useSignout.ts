// react-query
import { MutateOptions, useMutation } from "@tanstack/react-query";
// custom api
import { authApi } from "../api";

export function useSignout() {
    console.log("%cuseSignout", "color: orange");
  // mutation function
  const mutationFn = async (): Promise<void> => await authApi.signout();

  const { mutate, status, error } = useMutation<void, Error, void>({
    mutationFn: mutationFn,
  });

  const signout = (options?: MutateOptions<void, Error> | undefined) =>
    mutate(undefined, options);

  return {
    signout,
    status,
    error,
  };
}
