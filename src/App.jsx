import { useContext } from "react";
import "./App.css";
import { MyContext } from "./context/Context.jsx";

import Login from "./components/Auth/Login.jsx";
import AdminDashbord from "./components/Dashbord/AdminDashbord.jsx";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord.jsx";
import Info from "./components/Dashbord/Info.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import AsignTask from "./components/Tasklist/AsignTask.jsx";

function App() {
  const { user, role, loginUser } = useContext(MyContext);

  const handleLogin = (email, password) => {
    const success = loginUser(email, password);

    if (!success) {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <Routes>
      {/* 🔐 Login Route */}
      <Route
        path="/"
        element={
          !user ? (
            <Login handleLogin={handleLogin} />
          ) : role === "admin" ? (
            <Navigate to="/admin" />
          ) : (
            <Navigate to="/employee" />
          )
        }
      />

      {/* 👑 Admin Route */}
      <Route
        path="/admin"
        element={
          user && role === "admin" ? (
            <AdminDashbord />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      {/* 👨‍💻 Employee Route */}
      <Route
        path="/employee"
        element={
          user && role === "employee" ? (
            <EmployeeDashbord />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/info" element={<Info />} />
      <Route path="/assigntask" element={<AsignTask/>} />

    </Routes>
  );
}

export default App;