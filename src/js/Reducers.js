import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  SET_FILTER,
} from "./ActionTypes";

const STORAGE_KEY = "todo-app-state";

const defaultState = {
  filter: "all",
  tasks: [
    { id: 1, description: "Learn React", isDone: false },
    { id: 2, description: "Learn React from scratch", isDone: true },
    { id: 3, description: "Learn Redux", isDone: false },
    { id: 4, description: "Learn Node", isDone: false },
    { id: 5, description: "Learn Docker", isDone: false },
  ],
};

const loadFromStorage = () => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : defaultState;
  } catch {
    return defaultState;
  }
};

const initialState = loadFromStorage();

const saveToStorage = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors silently.
  }
};

export default function reducer(state = initialState, action) {
  let nextState;

  switch (action.type) {
    case ADD_TASK: {
      const nextId = state.tasks.reduce(
        (maxId, task) => Math.max(maxId, task.id),
        0,
      ) + 1;

      nextState = {
        ...state,
        tasks: [
          ...state.tasks,
          { id: nextId, description: action.payload, isDone: false },
        ],
      };
      break;
    }
    case TOGGLE_TASK:
      nextState = {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, isDone: !t.isDone } : t,
        ),
      };
      break;
    case EDIT_TASK:
      nextState = {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id
            ? { ...t, description: action.payload.description }
            : t,
        ),
      };
      break;
    case DELETE_TASK:
      nextState = {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
      break;
    case SET_FILTER:
      nextState = { ...state, filter: action.payload };
      break;
    default:
      return state;
  }

  saveToStorage(nextState);
  return nextState;
}
