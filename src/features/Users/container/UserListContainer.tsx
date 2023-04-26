import { UserCard, UserStack } from "../components";
import { useFindAllUsers } from "../hooks";

function UserListContainer() {
  const { users, status } = useFindAllUsers();

  return (
    <>
      {users ? (
        <UserStack users={users} card={UserCard} status={status} />
      ) : null}
    </>
  );
}

export default UserListContainer;
