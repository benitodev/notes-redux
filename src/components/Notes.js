import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id));
  };
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportant(note.id)}>
          {note.content}
          <strong>{note.important ? " important" : " not important"}</strong>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
