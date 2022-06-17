import { create, getAll } from "../services/notes";

const noteReducer = (state = [], action) => {
  if (action.type === "@notes/init") {
    return action.payload;
  }
  if (action.type === "@notes/created") {
    console.log(action.payload);
    return [...state, action.payload];
  }
  if (action.type === "@notes/toggle_important") {
    const { id } = action.payload;

    return state.map((note) => {
      if (note.id === id) {
        return { ...note, important: !note.important };
      }
      return note;
    });
  }
  return state;
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await create(content)
    dispatch({ type: "@notes/created", payload: newNote });
  };
};

export const toggleImportanceOf = (id) => ({
  type: "@notes/toggle_important",
  payload: {
    id,
  },
});

export const initNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    dispatch({ type: "@notes/init", payload: notes });
  };
};

export default noteReducer;
