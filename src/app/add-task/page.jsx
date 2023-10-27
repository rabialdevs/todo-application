import React from "react";
export const metadata = {
  title: "Add Task : Work Manager",
};
const Page = () => {
  return (
    <div className="flex justify-center bg-slate-200 h-full">
      <div className="w-[50%] bg-neutral-300  my-4 px-4 py-4 rounded-xl flex   flex-col gap-4 ">
        <h1 className="text-center text-xl text-red-500">
          ADD YOUR TASK HERE !!
        </h1>
        <input
          className="rounded-lg px-2 py-2 outline-none text-black"
          type="text"
          placeholder="Add Title"
        />
        <input
          className="rounded-lg px-2 py-2 outline-none text-black"
          type="text"
          placeholder="Description"
        />
        <div className=" flex justify-center items-center gap-4">
          <button className="px-4 py-2 rounded-xl bg-blue-400 hover:bg-blue-600 ">
            Add
          </button>
          <button className="px-4 py-2 rounded-xl bg-blue-400 hover:bg-blue-600 ">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
