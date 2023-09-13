// custom style
import { StyledUserList } from "./styles";
// custom components
import { ErrorMessage } from "../../../../common/components";
// custom hooks
import { useFindAllUsers } from "../../../../entities/user/hooks";
import { UserCard } from "../UserCard";

export function UserList() {
  const { users, status } = useFindAllUsers();

  if (status === "loading") {
    return <ErrorMessage message="loading users" />;
  }

  if (status === "error") {
    return <ErrorMessage message="failed to load users" />;
  }

  // empty collection message
  if (users && users.length === 0) {
    return <ErrorMessage message="No users in collection" />;
  }

  return (
    <StyledUserList spacing={2}>
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </StyledUserList>
  );
}
