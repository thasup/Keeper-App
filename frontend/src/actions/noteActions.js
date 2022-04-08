import axios from "axios";
import {
  NOTE_CREATE_FAIL,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_SUCCESS,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
  NOTE_DELETE_SUCCESS,
  NOTE_DELETE_FAIL,
} from "../reducers/noteConstants";

export const listNotes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/notes/`);

    console.log("All Notes : ", data);

    dispatch({
      type: NOTE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNote =
  ({ id, title, content }) =>
  async (dispatch) => {
    try {
      dispatch({ type: NOTE_CREATE_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/notes",
        JSON.stringify({ id, title, content }),
        config
      );

      dispatch({
        type: NOTE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NOTE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteNote = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTE_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.delete(`/api/notes/${id}`, config);

    dispatch({
      type: NOTE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: NOTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
