import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SET_FILTER,
} from "./ActionTypes";

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: description,
});
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
