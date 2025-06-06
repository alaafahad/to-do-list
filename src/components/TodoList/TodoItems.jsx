import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  deleteTodo,
  clearCompleted,
  openModal,
  findTodo,
} from "../../redux/slices/TodoSlice";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItems = () => {
  const { items, filterMode } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Filter logic
  let filtered = items;

  if (filterMode === "Active") {
    filtered = items.filter((item) => !item.completed);
  } else if (filterMode === "Completed") {
    filtered = items.filter((item) => item.completed);
  }

  // Conditional empty states
  if (items.length === 0) {
    return (
      <div className="text-[#f87171] font-semibold italic text-lg text-center">
        Your list is currently empty.
      </div>
    );
  }

  if (filtered.length === 0 && filterMode === "Active") {
    return (
      <div className="text-[#fb7185] font-medium italic text-center">
        No active tasks found.
      </div>
    );
  }

  if (filtered.length === 0 && filterMode === "Completed") {
    return (
      <div className="text-[#fb7185] font-medium italic text-center">
        No completed tasks found.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        {filtered.map(({ id, text, completed }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="space-x-2 flex items-center w-4/5">
              <input
                type="checkbox"
                id={id}
                className="w-5 h-5"
                checked={completed}
                onChange={() => dispatch(toggle(id))}
              />
              <label
                htmlFor={id}
                className={`${
                  completed ? "line-through font-medium" : "font-bold"
                } text-custom-blue dark:text-custom-white w-4/5 overflow-hidden`}
              >
                {text}
              </label>
            </div>
            <div className="space-x-3 flex max-w-1/6">
              <span
                className="text-custom-blue cursor-pointer"
                onClick={() => {
                  dispatch(openModal());
                  dispatch(findTodo(id));
                }}
              >
                <FaEdit />
              </span>
              <span
                className="text-red-600 cursor-pointer"
                onClick={() => dispatch(deleteTodo(id))}
              >
                <MdDelete />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Hide "Clear Completed" button when viewing Active filter */}
      {filterMode !== "Active" && (
        <button
          type="button"
          onClick={() => dispatch(clearCompleted())}
          className="mt-10 float-right bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-600 rounded duration-200"
        >
          Clear Completed
        </button>
      )}
    </>
  );
};

export default TodoItems;
