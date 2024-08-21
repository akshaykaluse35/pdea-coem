/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FiSettings, FiUsers, FiLogOut } from "react-icons/fi"; // Import additional icons
import axios from "axios";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import SettingsContent from "../Components/adminpanel/SettingsContent";
import CreateNotification from "../Components/adminoptions/CreateNotification"; // Import CreateNotification component
import CreateEvent from "../Components/adminoptions/CreateEvent"; // Import CreateEvent component
import AdminOptionContent from "../Components/adminpanel/AdminOptionContent";
import Logo from "../assets/images/pdea1.png";

import AddFaculty from "../Components/adminoptions/AddFaculty";
import UpdateFaculty from "../Components/adminoptions/UpdateFaculty";
import DeleteFaculty from "../Components/adminoptions/DeleteFaculty";
import AddGallery from "../Components/adminoptions/AddGallery";

const AdminPanel = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("admin-options");
  const navigate = useNavigate();

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar (hidden on mobile) */}
      <div className="bg-gray-800 w-16 md:w-64 min-h-screen text-white shadow-lg hidden md:block">
        {/* Logo and Text */}
        <div className="flex items-center justify-center mt-4 mb-6">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <span className="hidden md:block text-xl font-bold ml-2">
            Pdea Coem
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="py-4">
          <li className="px-6 py-3">
            <Link
              to="/admin/admin-options"
              onClick={() => handleNavItemClick("admin-options")}
              className={`flex items-center ${
                selectedNavItem === "admin-options"
                  ? "text-white bg-gray-900"
                  : "text-gray-300 hover:bg-gray-700"
              } px-2 py-1 rounded`}
            >
              <FiUsers className="mr-2" />
              <span className="hidden md:flex">Admin Options</span>
            </Link>
          </li>
          <li className="px-6 py-3">
            <Link
              to="/admin/settings"
              onClick={() => handleNavItemClick("settings")}
              className={`flex items-center ${
                selectedNavItem === "settings"
                  ? "text-white bg-gray-900"
                  : "text-gray-300 hover:bg-gray-700"
              } px-2 py-1 rounded`}
            >
              <FiSettings className="mr-2" />
              <span className="hidden md:flex">Settings</span>
            </Link>
          </li>
          <li className="px-6 py-3">
            <a
              href="#"
              onClick={handleLogout}
              className="flex items-center text-gray-300 hover:bg-gray-700 px-2 py-1 rounded"
            >
              <FiLogOut className="mr-2" />
              <span className="hidden md:flex">Logout</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Bar for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white shadow-lg">
        <ul className="flex justify-around py-2">
          <li>
            <Link
              to="/admin/admin-options"
              onClick={() => handleNavItemClick("admin-options")}
              className={`flex flex-col items-center py-2 ${
                selectedNavItem === "admin-options"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiUsers />
              <span className="text-xs">Admin Options</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              onClick={() => handleNavItemClick("settings")}
              className={`flex flex-col items-center py-2 ${
                selectedNavItem === "settings"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FiSettings />
              <span className="text-xs">Settings</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={handleLogout}
              className="flex flex-col items-center py-2 text-gray-300 hover:text-white"
            >
              <FiLogOut />
              <span className="text-xs">Logout</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-background-color overflow-y-auto">
        <div className="p-6">
          <Routes>
            <Route path="admin-options" element={<AdminOptionContent />} />
            <Route
              path="create-notification"
              element={<CreateNotification />}
            />
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="settings" element={<SettingsContent />} />
            <Route path="add-faculty" element={<AddFaculty />} />
            <Route path="update-faculty" element={<UpdateFaculty />} />
            <Route path="delete-faculty" element={<DeleteFaculty />} />
            <Route path="add-gallery" element={<AddGallery />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
