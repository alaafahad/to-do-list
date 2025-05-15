import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoFilter from "./TodoFilter";
import Modal from "./Modal";

import { useSelector } from "react-redux";

const TodoList = () => {
  const { isOpenModal } = useSelector((state) => state.todo);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Set initial theme
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isOpenModal && <Modal />}

      <div
        className="min-h-screen pt-16 sm:pt-24 font-nunito transition-colors duration-500"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(to right, #374151, #1f2937, #111827)"
            : "linear-gradient(to right, #ffcbd0, #c1efe1, #f6f5f3)",
        }}
      >
        <div className="bg-[#fefefe] dark:bg-[#2b2d3a] flex flex-col-reverse sm:flex-row justify-center w-11/12 sm:w-5/6 md:w-2/3 mx-auto rounded-3xl shadow-lg dark:shadow-[#3b3d4f] transition-all duration-500">
          <div className="w-full sm:w-1/3 p-7 border-t-2 sm:border-t-0 sm:border-r-2 border-custom-blue dark:border-[#6b7280]">
            <TodoFilter />
          </div>
          <div className="w-full sm:w-2/3 p-5 md:p-7 dark:text-custom-white">
            <TodoForm />
            <TodoItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
