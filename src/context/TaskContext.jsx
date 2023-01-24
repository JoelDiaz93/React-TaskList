import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //El estado para las tareas
  const [tasks, setTasks] = useState([]);

  //Cargamos la informacion que tiene el task.js al cargar por primera vez este componente
  useEffect(() => {
    setTasks(data);
  }, []);

  //Funcion para anadir una tarea, se la pasamos a TaskForm
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  //Funcion para eliminar tareas que se encuentran en el estado
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
