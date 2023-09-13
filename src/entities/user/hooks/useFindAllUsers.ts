// react query
import { useQuery } from "@tanstack/react-query";
// custom types
import { IUser } from "../types";
// custom api
import { userApi } from "../api";

export function useFindAllUsers() {
  // Queries: UseQueryResult<TQueryFnData, Error>
  const { data, status, error } = useQuery<IUser[], Error>({
    queryKey: ["users"],
    queryFn: () => userApi.findAll(),
  });

  return { users: data, status, error };
}
