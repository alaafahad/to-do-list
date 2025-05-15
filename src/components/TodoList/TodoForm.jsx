import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/TodoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    dispatch(addTodo({ id: Date.now(), text: todo, completed: false }));
    setTodo("");
  };

  return (
    <>
      <h1 className="text-custom-blue text-4xl font-black italic uppercase drop-shadow-2xl dark:text-custom-white">
        To-Do List
      </h1>

      <form onSubmit={handleSubmit} className="py-5 flex space-x-2">
        <input
          type="text"
          className="border-b-4 border-custom-blue rounded-lg px-3 py-2 outline-blue-500 w-full dark:text-custom-white dark:bg-slate-700 dark:border-custom-white"
          placeholder="Add a new task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#1d484d] dark:bg-[#5dc8ab] hover:opacity-90 text-white font-bold py-2 px-4 rounded duration-200 transition-transform hover:scale-105"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
