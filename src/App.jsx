import React, { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { v4 } from "uuid";
import Title from "./components/InputTitle";

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // SALVAR NO LOCAL-STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   async function fecthTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=5"
  //     );
  //     const data = await response.json();

  //     setTasks(data);
  //   };

  //   fecthTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      }
      return tasks;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(tasksId) {
    setTasks(tasks.filter((task) => task.id !== tasksId));
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title> Gerenciador de Tarefas </Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
