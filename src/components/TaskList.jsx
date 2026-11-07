import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../js/Actions";
import TaskModel from "./TaskModel";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const visible = tasks.filter((t) =>
    filter === "done" ? t.isDone : filter === "notDone" ? !t.isDone : true,
  );
  const doneCount = tasks.filter((t) => t.isDone).length;

  return (
    <>
      <div className="filter">
        <select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notDone">Not done</option>
        </select>
      </div>

      <p className="score">
        Score: {doneCount} / {tasks.length}
      </p>

      <ul className="task-list">
        {visible.map((task) => (
          <TaskModel key={task.id} task={task} />
        ))}
        {visible.length === 0 && (
          <li className="empty">Aucune tâche à afficher.</li>
        )}
      </ul>
    </>
  );
}
