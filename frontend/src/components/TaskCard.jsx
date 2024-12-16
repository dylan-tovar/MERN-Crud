import React from "react";
import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async (taskDone) => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-slate-700 rounded-lg p-4">
      <header className="flex justify-between">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-sm">{task.description}</p>
      <span className="text-xs text-gray-400">{task.creatAt}</span>
      <div className="flex gap-x-2 justify-between mt-2">
        <button
          className="border border-gray-300 text-gray-300 px-4 py-1 rounded-md"
          onClick={() => handleDone(task.done)}
        >
          Task satus
        </button>
        <div className="flex justify-end gap-x-2">
          <button
            className="border border-white px-4 py-1 rounded-md"
            onClick={() => navigate(`/edit/${task.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 px-4 py-1 rounded-md"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
