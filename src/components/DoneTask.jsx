import { useDispatch } from "react-redux";
import { toggleTask } from "../js/Actions.js";

export default function DoneTask({ task }) {
  const dispatch = useDispatch();

  return (
    <button
      className="rounded bg-done px-2.5 py-2 text-[11px] font-semibold text-white transition hover:brightness-95"
      type="button"
      onClick={() => dispatch(toggleTask(task.id))}
    >
      {task.isDone ? "Annuler" : "Terminer"}
    </button>
  );
}

