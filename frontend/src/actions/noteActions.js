import axios from "axios";
import {
    NOTE_CREATE_FAIL,
    NOTE_CREATE_REQUEST,
    NOTE_CREATE_SUCCESS,
} from "../reducers/noteConstants";

export const createNote = (title, content) => async (dispatch) => {
    try {
        dispatch({ type: NOTE_CREATE_REQUEST });

        const { data } = await axios.post("/api/notes", { title, content });

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
