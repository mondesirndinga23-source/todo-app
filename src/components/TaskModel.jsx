import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../js/Actions";
import DoneTask from "./DoneTask";
import DeleteTask from "./DeleteTask";

export default function TaskModel({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.description);

  const startEditing = () => {
    setText(task.description);
    setEditing(true);
  };

  const save = () => {
    if (!text.trim()) return;
    dispatch(editTask(task.id, text.trim()));
    setEditing(false);
  };

  const cancel = () => {
    setText(task.description);
    setEditing(false);
  };

  return (
    <li className={`task ${task.isDone ? "task-done" : ""}`}>
      <div className="task-text">
        {editing ? (
          <input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") cancel();
            }}
          />
        ) : (
          <span className={task.isDone ? "strike" : ""}>
            {task.description}
          </span>
        )}
      </div>

      <div className="task-actions">
        <DoneTask task={task} />
        {editing ? (
          <>
            <button className="btn btn-black" onClick={save}>
              Save
            </button>
            <button className="btn btn-black" onClick={cancel}>
              Cancel
            </button>
          </>
        ) : (
          <button className="btn btn-black" onClick={startEditing}>
            Edit
          </button>
        )}
        <DeleteTask id={task.id} />
      </div>
    </li>
  );
}
