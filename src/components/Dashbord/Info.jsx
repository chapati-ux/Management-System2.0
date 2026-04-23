import React, { useContext } from "react";
import { MyContext } from "../../context/Context.jsx";
import { Link } from "react-router-dom";

const Info = () => {
  const { selectedEmployee } = useContext(MyContext);

  const total     = selectedEmployee?.tasks?.length ?? 0;
  const completed = selectedEmployee?.tasks?.filter((t) => t.status === "completed").length ?? 0;
  const pending   = total - completed;
  const percent   = total > 0 ? Math.round((completed / total) * 100) : 0;

  const priorityStyles = {
    high:   "bg-red-50 border-red-100 text-red-600",
    medium: "bg-amber-50 border-amber-100 text-amber-600",
    low:    "bg-green-50 border-green-100 text-green-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 md:p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/"
          className="text-sm text-indigo-400 hover:text-indigo-600 transition-colors"
        >
          ← Back
        </Link>
        <Link to="/assigntask">
          <button className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:bg-indigo-800 transition-colors">
            + Assign Task
          </button>
        </Link>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-indigo-100 rounded-2xl p-6 mb-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-2xl shrink-0">
          {selectedEmployee?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1">
          <h1 className="text-xl font-semibold text-indigo-950">{selectedEmployee?.name}</h1>
          <p className="text-xs text-indigo-400 mt-0.5">
            {selectedEmployee?.role} · Joined {selectedEmployee?.joiningDate}
          </p>

          {/* Progress bar */}
          <div className="mt-3 max-w-xs">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-indigo-400">Task progress</p>
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
            <h2 className="text-sm font-semibold text-indigo-950">Assigned Tasks</h2>
            <p className="text-xs text-indigo-400 mt-0.5">{total} tasks total</p>
          </div>
        </div>

        {total > 0 ? (
          <div className="flex flex-col gap-3">
            {selectedEmployee.tasks.map((task) => (
              <div
                key={task.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border transition-all ${
                  task.status === "completed"
                    ? "bg-green-50 border-green-100 opacity-80"
                    : "bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-100"
                }`}
              >
                {/* Left: info */}
                <div className="flex items-start gap-3 flex-1">
                  <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
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
                    </div>
                  </div>
                </div>

                {/* Right: status badge */}
                <span className={`self-start sm:self-center text-xs font-medium px-3 py-1 rounded-full shrink-0 ${
                  task.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {task.status}
                </span>
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

export default Info;