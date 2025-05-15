import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../redux/slices/TodoSlice";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const { filterMode } = useSelector((state) => state.todo);

  return (
    <>
      <h1 className="hidden sm:block font-extrabold text-3xl text-center pb-7 pt-2 text-custom-blue drop-shadow-xl dark:text-custom-white">
        Filters
      </h1>
      <div className="font-bold text-black sm:space-y-3 text-lg flex flex-row justify-between sm:flex-col dark:text-custom-white">
        <div
          className={`cursor-pointer sm:hover:pl-2 duration-200 ${
            filterMode === "All" && "text-[#1d484d] dark:text-[#5dc8ab]"
          }`}
          onClick={() => dispatch(filter("All"))}
        >
          All Tasks
        </div>
        <div
          className={`cursor-pointer sm:hover:pl-2 duration-200 ${
            filterMode === "Active" && "text-[#1d484d] dark:text-[#5dc8ab]"
          }`}
          onClick={() => dispatch(filter("Active"))}
        >
          Active Tasks
        </div>
        <div
          className={`cursor-pointer sm:hover:pl-2 duration-200 ${
            filterMode === "Completed" && "text-[#1d484d] dark:text-[#5dc8ab]"
          }`}
          onClick={() => dispatch(filter("Completed"))}
        >
          Completed Tasks
        </div>
      </div>
    </>
  );
};

export default TodoFilter;
