import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import DashBoard from "../Views/Dashboard/Index";
import Students from "../Views/Students/index";
import Leave from "../Views/Leave/index";
import Attendance from "../Views/Attendance/index";
import Menu from "../Views/Menu/index";
import Sidebar, { SidebarItem } from "./Sidebar";
import { LuLayoutGrid } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { FcLeave } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { MdMenuBook, MdCoPresent } from "react-icons/md";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigating = (path) => {
    console.log(path);
    navigate(path);
  };

  return (
    <div className="flex">
     
        <Sidebar>
          <SidebarItem
            icon={<LuLayoutGrid size={30} />}
            text="Dashboard"
            active={location.pathname === "/dashboard"}
            onClick={() => navigating("/dashboard")}
          />
          <SidebarItem
            icon={<PiStudentBold size={30} />}
            text="Students"
            active={location.pathname === "/students"}
            alert
            onClick={() => navigating("/students")}
          />
          <SidebarItem
            icon={<FcLeave size={30} />}
            text="Leave"
            active={location.pathname === "/leave"}
            onClick={() => navigating("/leave")}
          />
          <SidebarItem
            icon={<MdCoPresent size={25} />}
            text="Attendance"
            active={location.pathname === "/attendance"}
            onClick={() => navigating("/attendance")}
          />
          <SidebarItem
            icon={<MdMenuBook size={30} />}
            text="Menu"
            active={location.pathname === "/menu"}
            onClick={() => navigating("/menu")}
          />
          <SidebarItem
            icon={<VscFeedback size={30} />}
            text="Feedback"
            active={location.pathname === "/Feedback"}
            onClick={() => navigating("/Feedback")}
          />
        </Sidebar>
    
      <div className="content w-full  ">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
