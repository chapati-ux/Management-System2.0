import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/Context.jsx";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { userData, logout, setSelectedEmployee } = useContext(MyContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSelectedEmployee(null);
  }, []);

  const filtered = userData.employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.role.toLowerCase().includes(search.toLowerCase())
  );

  const totalTasks = userData.employees.reduce((acc, e) => acc + (e.tasks?.length ?? 0), 0);
  const totalCompleted = userData.employees.reduce(
    (acc, e) => acc + (e.tasks?.filter((t) => t.status === "completed").length ?? 0), 0
  );

  const roleColor = (role) => {
    switch (role) {
      case "Developer": return "bg-indigo-100 text-indigo-700";
      case "Designer":  return "bg-pink-100 text-pink-700";
      case "HR":        return "bg-teal-100 text-teal-700";
      case "Tester":    return "bg-amber-100 text-amber-700";
      default:          return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 md:p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">
            Admin Panel
          </p>
          <h1 className="text-2xl font-semibold text-indigo-950">Dashboard</h1>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 bg-white rounded-xl hover:bg-indigo-50 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-white border border-indigo-100 rounded-2xl p-4">
          <p className="text-2xl font-semibold text-indigo-600">{userData.employees.length}</p>
          <p className="text-xs text-indigo-400 mt-1">Total employees</p>
        </div>
        <div className="bg-white border border-indigo-100 rounded-2xl p-4">
          <p className="text-2xl font-semibold text-violet-600">{totalTasks}</p>
          <p className="text-xs text-violet-400 mt-1">Total tasks</p>
        </div>
        <div className="bg-white border border-indigo-100 rounded-2xl p-4">
          <p className="text-2xl font-semibold text-green-600">{totalCompleted}</p>
          <p className="text-xs text-green-400 mt-1">Completed</p>
        </div>
        <div className="bg-white border border-indigo-100 rounded-2xl p-4">
          <p className="text-2xl font-semibold text-amber-500">{totalTasks - totalCompleted}</p>
          <p className="text-xs text-amber-400 mt-1">Pending</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300"
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search by name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm text-indigo-900 bg-white border border-indigo-100 rounded-xl outline-none focus:border-indigo-400 transition-colors placeholder:text-indigo-300"
        />
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((employee) => {
          const done = employee.tasks?.filter((t) => t.status === "completed").length ?? 0;
          const total = employee.tasks?.length ?? 0;
          const percent = total > 0 ? Math.round((done / total) * 100) : 0;

          return (
            <Link
              to="/info"
              key={employee.id}
              onClick={() => setSelectedEmployee(employee)}
              className="group bg-white border border-indigo-100 rounded-2xl p-5 hover:shadow-lg hover:shadow-indigo-100 hover:border-indigo-200 transition-all block"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-base shrink-0">
                    {employee.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-indigo-900">{employee.name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${roleColor(employee.role)}`}>
                      {employee.role}
                    </span>
                  </div>
                </div>
                <span className="text-indigo-200 group-hover:text-indigo-400 transition-colors text-lg">›</span>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs text-indigo-400">Task progress</p>
                  <p className="text-xs font-medium text-indigo-600">{done}/{total}</p>
                </div>
                <div className="w-full h-1.5 bg-indigo-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>

              {/* Task pills */}
              {total > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {employee.tasks.slice(0, 3).map((task) => (
                    <span
                      key={task.id}
                      className={`text-xs px-2 py-0.5 rounded-full border ${
                        task.status === "completed"
                          ? "bg-green-50 border-green-100 text-green-600"
                          : "bg-amber-50 border-amber-100 text-amber-600"
                      }`}
                    >
                      {task.title.length > 18 ? task.title.slice(0, 18) + "…" : task.title}
                    </span>
                  ))}
                  {total > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-400">
                      +{total - 3} more
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-xs text-indigo-300 italic">No tasks assigned</p>
              )}
            </Link>
          );
        })}

        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 text-indigo-300 text-sm italic">
            No employees match your search.
          </div>
        )}
      </div>

    </div>
  );
};

export default AdminDashboard;