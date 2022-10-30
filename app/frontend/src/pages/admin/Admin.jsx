import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../homepage/HomePage.jsx";
import "./Admin.css";
import AdminMealPlan from "./adminPages/mealplan/AdminMealPlan.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const Admin = () => {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div id="page-wrapper" class="gray-bg dashboard-1">
          <div class="row">
            <a
              class="navbar-minimalize minimalize-styl-2 btn btn-primary "
              href="#"
            >
              <i class="fa fa-bars"></i>{" "}
            </a>
          </div>
          <Routes>
            <Route path="/admin" element={<HomePage />} />
            <Route path="/admin/mealplan" element={<AdminMealPlan />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Admin;
