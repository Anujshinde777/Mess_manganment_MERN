import React from "react";
import "./App.css";
import Sidebar, { SidebarItem } from "./compoents/Sidebar";
import { LuLayoutGrid } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { FcLeave } from "react-icons/fc";
import { MdMenuBook, MdCoPresent } from "react-icons/md";

function App() {
  return (
    <div >
      <Sidebar >
        <SidebarItem
          icon={<LuLayoutGrid size={30} />}
          text="Dashboard"
          active
        />
        <SidebarItem icon={<PiStudentBold size={30} />} text="Students" alert />
        <SidebarItem icon={<FcLeave size={30} />} text="Leave" />
        <SidebarItem icon={<MdCoPresent size={25} />} text="Attendance" />
        <SidebarItem icon={<MdMenuBook size={30} />} text="Menu" />
      </Sidebar>
    </div>
  );
}

export default App;
