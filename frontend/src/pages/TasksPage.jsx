import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTask } = useTasks();

  useEffect(() => {
    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length == 0) return <h2>aun no tienes tareas</h2>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Tasks</h1>
      <div className="grid grid-cols-3 gap-4 py-6">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
