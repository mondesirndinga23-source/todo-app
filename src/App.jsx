import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Todo Application</h1>
      <div className="panel">
        <div className="panel-top">
          <AddTask />
        </div>
        <TaskList />
      </div>
    </div>
  );
}
