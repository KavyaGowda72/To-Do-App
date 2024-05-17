import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(["Meditate", "Take Bath", "EatBreakfast"]);
  const [newTask, setNewTask] = useState("");
  const onInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const onDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div>
        <h1>To-Do-List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a Task..."
            value={newTask}
            onChange={onInputChange}
          />
          <button className="btn-add" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-btn"
                onClick={() => onDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
