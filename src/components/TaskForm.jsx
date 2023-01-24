import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  //Estado para guardar el valor del titulo de la tarea incia vacio
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //haciendo uso del taskcontex y accediendo createTask
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4"
      >
        <h1 className="text-white text-2xl font-bold mb-3">Crear tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-3 py-1 text-white rounded-md hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
