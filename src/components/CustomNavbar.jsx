"use client";
import Link from "next/link";

const CustomNavbar = () => {
  const navItem = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Add Task",
      slug: "add-task",
    },
    {
      name: "Show Task",
      slug: "show-tasks",
    },
  ];
  const navButton = [{ name: "Login" }, { name: "Logout" }];

  return (
    <nav className="w-full  bg-[#023047] h-14 flex justify-center items-center">
      <div className="ml-4 mr-auto">Work Maneger</div>
      <div>
        <ul className="flex">
          {navItem?.map((item) => (
            <li className="mx-4 cursor-pointer hover:text-cyan-50" key={item.name}>
              <Link href={`${item.slug}`} >{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex mr-2 ml-auto ">
        {navButton?.map((item, index) => (
          <button
            className="mx-2 hover:rounded-xl hover:bg-blue-300 px-4 py-2"
            key={item.name}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CustomNavbar;
