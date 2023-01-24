import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
//clg para el snippet de console.log
//Se manda por consola el arreglo que se importa desde task.js
//console.log(data);

function App() {
  return (
    <main className="bg-zinc-800 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
