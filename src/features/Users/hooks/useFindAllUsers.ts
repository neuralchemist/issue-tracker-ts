import { useQuery } from "@tanstack/react-query";
import { IUser } from "../../../firebase/users/types";
import UsersService from "../../../firebase/users/services";

const usersService = new UsersService();

function useFindAllUsers() {
  // Queries: UseQueryResult<TQueryFnData, Error>
  const {
    data: users,
    status,
    error,
  } = useQuery<IUser[], Error>({
    queryKey: ["users"],
    queryFn: () => usersService.findAll(),
  });

  return { users, status, error };
}

export default useFindAllUsers;
