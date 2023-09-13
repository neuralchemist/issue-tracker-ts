// custom styls 
import { StyledIssueStack } from "./styles";
// custom components
import { IssueCard } from "../IssueCard";
// custom types
import { IIssue } from "@entities/issue/types";


interface Props {
  issues: IIssue[] | undefined;
}

export function IssueStack({ issues }: Props) {
  return (
    <StyledIssueStack spacing={2}>
      {issues?.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </StyledIssueStack>
  );
}
