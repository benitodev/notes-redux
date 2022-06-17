import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NewNote = () => {
  const dispatch = useDispatch();
  const addNote = async (e) => {
    e.preventDefault();
    const { target } = e;
    const content = target.note.value;
    target.note.value = "";
    dispatch(createNote(content));
  };
  return (
    <form onSubmit={(e) => addNote(e)}>
      <input name="note" />
      <button>add</button>
    </form>
  );
};

export default NewNote;
