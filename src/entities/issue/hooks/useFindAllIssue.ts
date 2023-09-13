// react-query
import { useQuery } from "@tanstack/react-query";
// custom types
import { IIssue } from "../types";
// custom api
import { issueApi } from "../api";
// custom utils
import { ISSUE_CACHENAME } from "../utils";

export function useFindAllIssue() {
  console.log("%cuseFindAllIssue", "color: orange");
  const { data, status, error } = useQuery<IIssue[], Error>({
    queryKey: [ISSUE_CACHENAME],
    queryFn: () => issueApi.findAll(),
  });

  return { issues: data, status, error };
}
