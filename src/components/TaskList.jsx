import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center pt-3">No hay tareas....</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
