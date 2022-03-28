import {
  NOTE_CREATE_FAIL,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
} from "./noteConstants";

export const noteListReducers = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_SUCCESS:
      return {
        notes: action.payload.notes,
      };
    case NOTE_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const createNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_CREATE_REQUEST:
      return { loading: true };
    case NOTE_CREATE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case NOTE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
