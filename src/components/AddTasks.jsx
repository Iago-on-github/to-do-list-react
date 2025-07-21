import { useState } from "react";
import Input from "./Input";

export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-blue-50 rounded-md shadow-md flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-blue-300 outline-none focus:outline-blue-400 px-4 py-2 rounded-md text-gray-800 placeholder-gray-500"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da terefa"
        className="border border-blue-300 outline-none focus:outline-blue-400 px-4 py-2 rounded-md text-gray-800 placeholder-gray-500"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha o title e a descrição.");
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Adicionar
      </button>
    </div>
  );
}
