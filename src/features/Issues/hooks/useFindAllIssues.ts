import { useQuery } from "@tanstack/react-query";
import { IIssue } from "../../../firebase/issues/types";
import IssuesService from "../../../firebase/issues/services";
import { ISSUE_CACHENAME } from "../utils";

const issuesService = new IssuesService();

function useFindAllIssues() {
  const {
    data: issues,
    status,
    error,
  } = useQuery<IIssue[], Error>({
    queryKey: [ISSUE_CACHENAME],
    queryFn: () => issuesService.findAll(),
  });

  return { issues, status, error };
}

export default useFindAllIssues;
