import React from "react";
import { useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const VisibilityFilter = () => {
  const dispatch = useDispatch();
  const filterSelected = (value) => {
    dispatch(toggleImportanceOf())
  };
  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("ALL")}
      />
      important
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("IMPORTANT")}
      />
      not Important
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("NOT IMPORTANT")}
      />
    </div>
  );
};

export default VisibilityFilter;
