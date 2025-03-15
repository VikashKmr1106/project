import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";

const TodoApp = () => {
	const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">To-Do List</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
          >
            <AiOutlinePlus size={20} />
          </button>
        </div>
        <ul>
          {tasks.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center p-2 bg-gray-200 rounded-md mb-2"
            >
              <span
                onClick={() => toggleComplete(t.id)}
                className={`cursor-pointer ${t.completed ? "line-through text-gray-500" : ""}`}
              >
                {t.text}
              </span>
              <button onClick={() => deleteTask(t.id)} className="text-red-500 hover:text-red-700">
                <AiFillDelete size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp