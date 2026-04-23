import React, { useContext, useState } from "react";
import { MyContext } from "../../context/Context.jsx";
import { useNavigate } from "react-router-dom";

const AssignTask = () => {
  const { selectedEmployee, assignTask } = useContext(MyContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    assignTask(selectedEmployee.id, form);
    navigate("/info");
  };

  return (
    <div className="min-h-screen bg-indigo-50 p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/info")}
          className="text-sm text-indigo-400 hover:text-indigo-600 transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-sm font-medium text-indigo-400">Assign New Task</h1>
        <div className="w-16" />
      </div>

      {/* Employee Badge */}
      <div className="flex items-center gap-3 bg-white border border-indigo-100 rounded-xl px-4 py-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold text-sm shrink-0">
          {selectedEmployee?.name?.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-medium text-indigo-900">{selectedEmployee?.name}</p>
          <p className="text-xs text-indigo-400">{selectedEmployee?.role}</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white border border-indigo-100 rounded-xl p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Review Q3 report"
              required
              className="w-full px-3 py-2.5 text-sm text-indigo-900 bg-indigo-50 border border-indigo-100 rounded-lg outline-none focus:border-indigo-400 focus:bg-white transition-colors placeholder:text-indigo-300"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="What needs to be done?"
              rows={4}
              className="w-full px-3 py-2.5 text-sm text-indigo-900 bg-indigo-50 border border-indigo-100 rounded-lg outline-none focus:border-indigo-400 focus:bg-white transition-colors resize-none placeholder:text-indigo-300"
            />
          </div>

          {/* Due Date + Priority */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm text-indigo-900 bg-indigo-50 border border-indigo-100 rounded-lg outline-none focus:border-indigo-400 focus:bg-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-xs font-medium text-indigo-400 uppercase tracking-wide">
                Priority
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full px-3 py-2.5 text-sm text-indigo-900 bg-indigo-50 border border-indigo-100 rounded-lg outline-none focus:border-indigo-400 focus:bg-white transition-colors"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors mt-2"
          >
            Assign Task
          </button>

        </form>
      </div>

    </div>
  );
};

export default AssignTask;