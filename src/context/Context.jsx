import React, { createContext, useState, useEffect } from "react";
import {
  setLocalStorage,
  getLocalStorage,
  saveEmployees,
  saveAdmin,
  setCurrentUser,
  getCurrentUser,
  removeCurrentUser,
} from "../utils/localstorage";

export const MyContext = createContext();

const Context = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [userData, setUserData] = useState({
    employees: [],
    admin: [],
  });

  // ============================
  // 🔹 Initialize data
  // ============================
  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();
    setUserData({
      employees: data.employees,
      admin: data.admin,
    });
  }, []);

  // ============================
  // 🔹 Restore user after refresh
  // ============================
  useEffect(() => {
    const current = getCurrentUser();
    if (!current) return;

    const data = getLocalStorage();

    if (current.role === "employee") {
      const emp = data.employees.find((e) => e.loginId === current.loginId);
      if (emp) {
        setUser(emp);
        setRole("employee");
      }
    }

    if (current.role === "admin") {
      const ad = data.admin.find((a) => a.loginId === current.loginId);
      if (ad) {
        setUser(ad);
        setRole("admin");
      }
    }
  }, []);

  // ============================
  // 🔐 Login Function
  // ============================
  const loginUser = (loginId, password) => {
    const data = getLocalStorage();

    const emp = data.employees.find(
      (e) => e.loginId === loginId && e.password === password
    );

    if (emp) {
      setUser(emp);
      setRole("employee");
      setCurrentUser({ loginId: emp.loginId, role: "employee" });
      setLogin(true);
      return true;
    }

    const ad = data.admin.find(
      (a) => a.loginId === loginId && a.password === password
    );

    if (ad) {
      setUser(ad);
      setRole("admin");
      setCurrentUser({ loginId: ad.loginId, role: "admin" });
      setLogin(true);
      return true;
    }

    return false;
  };

  // ============================
  // 🔐 Logout Function
  // ============================
  const logout = () => {
    setUser(null);
    setRole(null);
    setLogin(null);
    removeCurrentUser();
  };

  // ============================
  // ✅ Assign Task to Employee
  // ============================
  const assignTask = (employeeId, task) => {
    const newTask = {
      id: `task${Date.now()}`,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      status: "pending",
    };

    setUserData((prev) => {
      const updatedEmployees = prev.employees.map((emp) =>
        emp.id === employeeId
          ? { ...emp, tasks: [...(emp.tasks || []), newTask] }
          : emp
      );
      return { ...prev, employees: updatedEmployees };
    });

    // Keep selectedEmployee in sync so Info page updates instantly
    setSelectedEmployee((prev) =>
      prev?.id === employeeId
        ? { ...prev, tasks: [...(prev.tasks || []), newTask] }
        : prev
    );
  };

  // ============================
  // 💾 Sync with localStorage
  // ============================
  useEffect(() => {
    saveEmployees(userData.employees);
  }, [userData.employees]);

  useEffect(() => {
    saveAdmin(userData.admin);
  }, [userData.admin]);


  // ============================
// ✅ Update Task Status
// ============================
const updateTaskStatus = (employeeId, taskId, newStatus) => {
  setUserData((prev) => {
    const updatedEmployees = prev.employees.map((emp) =>
      emp.id === employeeId
        ? {
            ...emp,
            tasks: emp.tasks.map((task) =>
              task.id === taskId ? { ...task, status: newStatus } : task
            ),
          }
        : emp
    );
    return { ...prev, employees: updatedEmployees };
  });

  setUser((prev) => ({
    ...prev,
    tasks: prev.tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ),
  }));
};

// ============================
// 🗑️ Delete Task
// ============================
const deleteTask = (employeeId, taskId) => {
  setUserData((prev) => {
    const updatedEmployees = prev.employees.map((emp) =>
      emp.id === employeeId
        ? { ...emp, tasks: emp.tasks.filter((task) => task.id !== taskId) }
        : emp
    );
    return { ...prev, employees: updatedEmployees };
  });

  setUser((prev) => ({
    ...prev,
    tasks: prev.tasks.filter((task) => task.id !== taskId),
  }));
};
  // ============================
  // 📦 Provider
  // ============================
  return (
    <MyContext.Provider
      value={{
        userData,
        setUserData,
        login,
        setLogin,
        user,
        role,
        loginUser,
        logout,
        selectedEmployee,
        setSelectedEmployee,
        assignTask,
         updateTaskStatus, // 👈
    deleteTask,       // 👈
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;