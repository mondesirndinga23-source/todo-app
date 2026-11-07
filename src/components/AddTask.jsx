import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/Actions";

export default function AddTask() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask(text.trim()));
    setText("");
    setOpen(false);
  };

  if (!open) {
    return (
      <button className="btn btn-black" onClick={() => setOpen(true)}>
        Add Task
      </button>
    );
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        autoFocus
        value={text}
        placeholder="Description de la tâche"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-blue">
        Save
      </button>
      <button
        type="button"
        className="btn btn-black"
        onClick={() => setOpen(false)}
      >
        Cancel
      </button>
    </form>
  );
}
