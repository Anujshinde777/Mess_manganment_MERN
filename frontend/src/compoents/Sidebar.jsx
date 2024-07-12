import React, { useState } from "react";
import { useContext } from "react";
import logo from "../Assets/logo.webp";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const SidebarContext = React.createContext();

const Sidebar = ({ children }) => {
  const [expand, setExpand] = useState(true);
  return (
    <aside
      className={`h-screen  overflow-hidden transition-all ${
        expand ? "w-52" : "w-16"
      } 
      }`}
    >
      <nav className="h-full flex flex-col bg-white border-r-2 shadow-lg">
        <div className="p-4 pb-2 flex items-center justify-between">
          <img
            src={logo}
            alt="logo"
            className={`overflow-hidden transition-all ${
              expand ? "w-20" : "w-0"
            }`}
          />
          <button
            onClick={() => {
              setExpand(!expand);
            }}
            className="bg-blue-200 p-1.5 rounded-lg hover:bg-blue-300"
          >
            {expand ? <SlArrowLeft size={20} /> : <SlArrowRight size={20} />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expand }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3 gap-3">
          <img
            src="https://via.placeholder.com/50"
            alt="profile"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex flex-col justify-start items-start overflow-hidden transition-all ${
              expand ? "w-52" : "w-0"
            }`}
          >
            <h4 className="text-lg font-semibold">John Doe</h4>
            <p className="text-xs text-gray-600 break-words">
              anujshinde06@gmail.com
            </p>
          </div>
        </div>
      </nav>
    </aside>
  );
};
export function SidebarItem({ icon, text, active, alert }) {
  const { expand } = useContext(SidebarContext);

  return (
    <li
      className={`
      mt-3
        relative flex items-center py-1 px-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group 
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expand ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expand ? "" : "top-2"
          }`}
        />
      )}

      {!expand && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
export default Sidebar;
