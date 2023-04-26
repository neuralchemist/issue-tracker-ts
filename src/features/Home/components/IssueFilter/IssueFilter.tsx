import React from "react";
// mui 5
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// styled components
import { StyledIssueFilter } from "./styles";
import { IFilterValue } from "../../types";

interface Props {
  filterValue: IFilterValue;
  setFilterValue: React.Dispatch<React.SetStateAction<IFilterValue>>;
}

function IssueFilter({ filterValue, setFilterValue }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setFilterValue(event.target.value as IFilterValue);
  };
  return (
    <StyledIssueFilter>
      <Select
        labelId="select-issue-filter-label"
        id="select-issue-filter"
        value={filterValue}
        displayEmpty
        onChange={handleChange}
        sx={{ width: "150px" }}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"created"}>Created</MenuItem>
        <MenuItem value={"assigned"}>Assigned</MenuItem>
        <MenuItem value={"high"}>High Priority</MenuItem>
        <MenuItem value={"medium"}>Medium Priority</MenuItem>
        <MenuItem value={"low"}>Low Priority</MenuItem>
      </Select>
    </StyledIssueFilter>
  );
}

export default IssueFilter;
