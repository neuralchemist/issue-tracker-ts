import { FC } from "react";
// mui 5
import { StyledIssueStack } from "./styles";
import { IIssue } from "../../../../firebase/issues/types";
import { QueryStatus } from "@tanstack/react-query";
import { ErrorMessage } from "../../../../common/components";

interface ICard {
  issue: IIssue;
}

interface Props {
  issues: IIssue[] | undefined;
  card: FC<ICard>;
  status: QueryStatus;
}

function IssueStack({ issues, card: Card, status }: Props) {
  if (status === "loading") {
    return <ErrorMessage message="loading issues" />;
  }

  if (status === "error") {
    return <ErrorMessage message="failed to load issues" />;
  }

  // empty collection message
  if (issues && issues.length === 0) {
    return <ErrorMessage message="No issues in collection" />;
  }
  return (
    <StyledIssueStack spacing={2}>
      {issues?.map((issue) => (
        <Card key={issue.id} issue={issue} />
      ))}
    </StyledIssueStack>
  );
}

export default IssueStack;
