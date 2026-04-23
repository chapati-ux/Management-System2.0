// const employees = [
//   {
//     id: "emp1",
//     name: "Jayesh",
//     role: "Developer",
//     joiningDate: "2026-03-26",
//     loginId: "jayesh01",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Build login page", status: "pending" },
//       { id: "task2", title: "Fix bugs", status: "completed" },
//     ],
//   },
//   {
//     id: "emp2",
//     name: "Rahul",
//     role: "Designer",
//     joiningDate: "2026-02-15",
//     loginId: "rahul02",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Design dashboard UI", status: "pending" },
//       { id: "task2", title: "Update icons", status: "completed" },
//     ],
//   },
//   {
//     id: "emp3",
//     name: "Priya",
//     role: "HR",
//     joiningDate: "2026-01-10",
//     loginId: "priya03",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Schedule interviews", status: "pending" },
//       { id: "task2", title: "Employee onboarding", status: "completed" },
//     ],
//   },
//   {
//     id: "emp4",
//     name: "Amit",
//     role: "Developer",
//     joiningDate: "2025-12-20",
//     loginId: "amit04",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "API integration", status: "pending" },
//       { id: "task2", title: "Fix login bug", status: "completed" },
//     ],
//   },
//   {
//     id: "emp5",
//     name: "Sneha",
//     role: "Tester",
//     joiningDate: "2026-03-01",
//     loginId: "sneha05",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Test dashboard", status: "pending" },
//       { id: "task2", title: "Report bugs", status: "completed" },
//     ],
//   },
//   {
//     id: "emp6",
//     name: "Karan",
//     role: "Developer",
//     joiningDate: "2025-11-11",
//     loginId: "karan06",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Optimize performance", status: "pending" },
//       { id: "task2", title: "Refactor code", status: "completed" },
//     ],
//   },
//   {
//     id: "emp7",
//     name: "Neha",
//     role: "Designer",
//     joiningDate: "2026-02-05",
//     loginId: "neha07",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Create landing page", status: "pending" },
//       { id: "task2", title: "Update branding", status: "completed" },
//     ],
//   },
//   {
//     id: "emp8",
//     name: "Arjun",
//     role: "Developer",
//     joiningDate: "2025-10-30",
//     loginId: "arjun08",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Setup backend", status: "pending" },
//       { id: "task2", title: "Database schema", status: "completed" },
//     ],
//   },
//   {
//     id: "emp9",
//     name: "Pooja",
//     role: "HR",
//     joiningDate: "2026-01-25",
//     loginId: "pooja09",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Employee feedback", status: "pending" },
//       { id: "task2", title: "Policy update", status: "completed" },
//     ],
//   },
//   {
//     id: "emp10",
//     name: "Vikram",
//     role: "Tester",
//     joiningDate: "2025-12-05",
//     loginId: "vikram10",
//     password: "1234",
//     isLoggedIn: false,
//     tasks: [
//       { id: "task1", title: "Regression testing", status: "pending" },
//       { id: "task2", title: "Automation scripts", status: "completed" },
//     ],
//   },
// ];

// const admin = [
//   {
//     id: "admin1",
//     name: "Admin",
//     loginId: "admin",
//     password: "admin123",
//     isLoggedIn: false, // ✅ added here
//   },
// ];

// // ✅ Initialize localStorage
// export const setLocalStorage = () => {
//   if (!localStorage.getItem("employees")) {
//     localStorage.setItem("employees", JSON.stringify(employees));
//   }

//   if (!localStorage.getItem("admin")) {
//     localStorage.setItem("admin", JSON.stringify(admin));
//   }
// };

// // ✅ Get data
// export const getLocalStorage = () => {
//   return {
//     employees: JSON.parse(localStorage.getItem("employees")) || [],
//     admin: JSON.parse(localStorage.getItem("admin")) || [],
//   };
// };

// // ✅ Save employees
// export const saveEmployees = (employees) => {
//   localStorage.setItem("employees", JSON.stringify(employees));
// };

// // ✅ Save admin (you’ll need this now)
// export const saveAdmin = (admin) => {
//   localStorage.setItem("admin", JSON.stringify(admin));
// };

// const CURRENT_USER_KEY = "currentUser";

// // ✅ Save current logged-in user
// export const setCurrentUser = (user) => {
//   localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
// };

// // ✅ Get current logged-in user
// export const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
// };

// // ✅ Remove current user (logout)
// export const removeCurrentUser = () => {
//   localStorage.removeItem(CURRENT_USER_KEY);
// };


// ==============================
// 🔹 Default Data
// ==============================

const employees = [
  {
    id: "emp1",
    name: "Jayesh",
    role: "Developer",
    joiningDate: "2026-03-26",
    loginId: "jayesh01",
    password: "1234",
    tasks: [
      { id: "task1", title: "Build login page", status: "pending" },
      { id: "task2", title: "Fix bugs", status: "completed" },
    ],
  },
  {
    id: "emp2",
    name: "Rahul",
    role: "Designer",
    joiningDate: "2026-02-15",
    loginId: "rahul02",
    password: "1234",
    tasks: [
      { id: "task1", title: "Design dashboard UI", status: "pending" },
      { id: "task2", title: "Update icons", status: "completed" },
    ],
  },
  {
    id: "emp3",
    name: "Priya",
    role: "HR",
    joiningDate: "2026-01-10",
    loginId: "priya03",
    password: "1234",
    tasks: [
      { id: "task1", title: "Schedule interviews", status: "pending" },
      { id: "task2", title: "Employee onboarding", status: "completed" },
    ],
  },
  {
    id: "emp4",
    name: "Amit",
    role: "Developer",
    joiningDate: "2025-12-20",
    loginId: "amit04",
    password: "1234",
    tasks: [
      { id: "task1", title: "API integration", status: "pending" },
      { id: "task2", title: "Fix login bug", status: "completed" },
    ],
  },
  {
    id: "emp5",
    name: "Sneha",
    role: "Tester",
    joiningDate: "2026-03-01",
    loginId: "sneha05",
    password: "1234",
    tasks: [
      { id: "task1", title: "Test dashboard", status: "pending" },
      { id: "task2", title: "Report bugs", status: "completed" },
    ],
  },
  {
    id: "emp6",
    name: "Karan",
    role: "Developer",
    joiningDate: "2025-11-11",
    loginId: "karan06",
    password: "1234",
    tasks: [
      { id: "task1", title: "Optimize performance", status: "pending" },
      { id: "task2", title: "Refactor code", status: "completed" },
    ],
  },
  {
    id: "emp7",
    name: "Neha",
    role: "Designer",
    joiningDate: "2026-02-05",
    loginId: "neha07",
    password: "1234",
    tasks: [
      { id: "task1", title: "Create landing page", status: "pending" },
      { id: "task2", title: "Update branding", status: "completed" },
    ],
  },
  {
    id: "emp8",
    name: "Arjun",
    role: "Developer",
    joiningDate: "2025-10-30",
    loginId: "arjun08",
    password: "1234",
    tasks: [
      { id: "task1", title: "Setup backend", status: "pending" },
      { id: "task2", title: "Database schema", status: "completed" },
    ],
  },
  {
    id: "emp9",
    name: "Pooja",
    role: "HR",
    joiningDate: "2026-01-25",
    loginId: "pooja09",
    password: "1234",
    tasks: [
      { id: "task1", title: "Employee feedback", status: "pending" },
      { id: "task2", title: "Policy update", status: "completed" },
    ],
  },
  {
    id: "emp10",
    name: "Vikram",
    role: "Tester",
    joiningDate: "2025-12-05",
    loginId: "vikram10",
    password: "1234",
    tasks: [
      { id: "task1", title: "Regression testing", status: "pending" },
      { id: "task2", title: "Automation scripts", status: "completed" },
    ],
  },
];

const admin = [
  {
    id: "admin1",
    name: "Admin",
    loginId: "admin",
    password: "admin123",
  },
];

// ==============================
// 🔹 Keys
// ==============================

const EMP_KEY = "employees";
const ADMIN_KEY = "admin";
const CURRENT_USER_KEY = "currentUser";

// ==============================
// 🔹 Safe JSON Parse
// ==============================

const safeParse = (key, fallback = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

// ==============================
// 🔹 Initialize LocalStorage
// ==============================

export const setLocalStorage = () => {
  if (!localStorage.getItem(EMP_KEY)) {
    localStorage.setItem(EMP_KEY, JSON.stringify(employees));
  }

  if (!localStorage.getItem(ADMIN_KEY)) {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
  }
};

// ==============================
// 🔹 Get Data
// ==============================

export const getLocalStorage = () => {
  return {
    employees: safeParse(EMP_KEY),
    admin: safeParse(ADMIN_KEY),
  };
};

// ==============================
// 🔹 Save Data
// ==============================

export const saveEmployees = (employees) => {
  localStorage.setItem(EMP_KEY, JSON.stringify(employees));
};

export const saveAdmin = (admin) => {
  localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
};

// ==============================
// 🔐 Auth (Current User)
// ==============================

export const setCurrentUser = (user) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  } catch {
    return null;
  }
};

export const removeCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// localStorage.clear()