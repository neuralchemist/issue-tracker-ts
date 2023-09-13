import React from "react";
// mui 5
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// custom styles
import { StyledIssueFilter } from "./styles";
// custom types
import { IFilterValue } from "../../types";
import { filterOptions } from "../../utils";

interface Props {
  filterValue: IFilterValue;
  setFilterValue: React.Dispatch<React.SetStateAction<IFilterValue>>;
}

export function IssueFilter({ filterValue, setFilterValue }: Props) {
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
        {filterOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledIssueFilter>
  );
}
