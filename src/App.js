import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { initNotes } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const initialNotes = async () => {
      dispatch(initNotes());
    };
    initialNotes();
  }, [dispatch]);
  return (
    <div>
      <NewNote />
      <LoginForm/>
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
