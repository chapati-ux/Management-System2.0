import React, { useContext } from "react";
import { MyContext } from "../../context/Context.jsx";

const EmployeeDashboard = () => {
  const { user, logout, updateTaskStatus, deleteTask } = useContext(MyContext);

  if (!user) return null;

  const completed = user.tasks?.filter((t) => t.status === "completed").length ?? 0;
  const pending = user.tasks?.filter((t) => t.status === "pending").length ?? 0;
  const total = user.tasks?.length ?? 0;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const priorityStyles = {
    high:   "bg-red-50 border-red-100 text-red-600",
    medium: "bg-amber-50 border-amber-100 text-amber-600",
    low:    "bg-green-50 border-green-100 text-green-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 md:p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">
            Employee Panel
          </p>
          <h1 className="text-2xl font-semibold text-indigo-950">My Dashboard</h1>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-200 bg-white rounded-xl hover:bg-indigo-50 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-indigo-100 rounded-2xl p-6 mb-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-2xl shrink-0">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-indigo-950">
            Welcome back, {user.name}
          </h2>
          <p className="text-xs text-indigo-400 mt-0.5">{user.role} · Joined {user.joiningDate}</p>

          {/* Progress bar */}
          <div className="mt-3 max-w-xs">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-indigo-400">Overall progress</p>
              <p className="text-xs font-medium text-indigo-600">{percent}%</p>
            </div>
            <div className="w-full h-1.5 bg-indigo-50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-400 to-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="flex-1 sm:flex-none text-center bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl px-6 py-4">
            <p className="text-2xl font-semibold text-indigo-600">{completed}</p>
            <p className="text-xs text-indigo-400 mt-0.5">Completed</p>
          </div>
          <div className="flex-1 sm:flex-none text-center bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4">
            <p className="text-2xl font-semibold text-amber-500">{pending}</p>
            <p className="text-xs text-amber-400 mt-0.5">Pending</p>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="bg-white border border-indigo-100 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-semibold text-indigo-950">Your Tasks</h3>
            <p className="text-xs text-indigo-400 mt-0.5">{total} tasks assigned</p>
          </div>
        </div>

        {total > 0 ? (
          <div className="flex flex-col gap-3">
            {user.tasks.map((task) => (
              <div
                key={task.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border transition-all ${
                  task.status === "completed"
                    ? "bg-green-50 border-green-100 opacity-75"
                    : "bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-100"
                }`}
              >
                {/* Left: Task info */}
                <div className="flex items-start gap-3 flex-1">
                  {/* Status dot */}
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                    task.status === "completed" ? "bg-green-400" : "bg-amber-400"
                  }`} />

                  <div className="flex flex-col gap-0.5">
                    <p className={`text-sm font-medium ${
                      task.status === "completed"
                        ? "line-through text-indigo-300"
                        : "text-indigo-900"
                    }`}>
                      {task.title}
                    </p>
                    {task.description && (
                      <p className="text-xs text-indigo-400">{task.description}</p>
                    )}
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      {task.dueDate && (
                        <span className="text-xs text-indigo-300">Due: {task.dueDate}</span>
                      )}
                      {task.priority && (
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${priorityStyles[task.priority]}`}>
                          {task.priority}
                        </span>
                      )}
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        task.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 shrink-0 pl-5 sm:pl-0">
                  {task.status === "pending" && (
                    <button
                      onClick={() => updateTaskStatus(user.id, task.id, "completed")}
                      className="text-xs font-medium px-4 py-1.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
                    >
                      Mark complete
                    </button>
                  )}
                  {task.status === "completed" && (
                    <button
                      onClick={() => deleteTask(user.id, task.id)}
                      className="text-xs font-medium px-4 py-1.5 bg-white border border-red-200 text-red-500 rounded-xl hover:bg-red-50 active:bg-red-100 transition-colors"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-14">
            <p className="text-indigo-300 text-sm italic">No tasks assigned yet.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default EmployeeDashboard;