import { FC } from "react";
// mui 5
import { StyledIssueStack } from "./styles";
import { IUser } from "../../../../firebase/users/types";
import { ErrorMessage } from "../../../../common/components";
import { QueryStatus } from "@tanstack/react-query";

interface ICard {
  user: IUser;
}

interface Props {
  users: IUser[];
  card: FC<ICard>;
  status: QueryStatus;
}

function UserStack({ users, card: Card, status }: Props) {
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
    <StyledIssueStack spacing={2}>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </StyledIssueStack>
  );
}

export default UserStack;
