import { useDispatch } from "react-redux";
import { deleteTask } from "../js/Actions";

export default function DeleteTask({ id }) {
  const dispatch = useDispatch();
  return (
    <button className="btn btn-red" onClick={() => dispatch(deleteTask(id))}>
      Delete
    </button>
  );
}
