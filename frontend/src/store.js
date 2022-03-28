import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createNoteReducer,
  noteListReducers,
} from "./reducers/noteReducers.js";

// combine all Reducers
const reducer = combineReducers({
  createNoteState: createNoteReducer,
  noteList: noteListReducers,
});

const initialState = {};

const middleware = [thunk];

// create Store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
