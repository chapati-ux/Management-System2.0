import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".login-card", {
      y: 40, opacity: 0, duration: 0.6, ease: "power3.out",
    });
    gsap.from(".login-item", {
      y: 20, opacity: 0, duration: 0.5, ease: "power2.out",
      stagger: 0.1, delay: 0.3,
    });
  }, { scope: containerRef });

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex items-center justify-center p-6">
      <div className="login-card w-full max-w-sm bg-white border border-indigo-100 rounded-2xl p-8">

        {/* Logo */}
        <div className="login-item mb-8 text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-indigo-900">Welcome back</h1>
          <p className="text-xs text-indigo-400 mt-1">Sign in to your account</p>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="login-item flex flex-col gap-1.5">
            <label className="text-xs font-medium text-indigo-400 uppercase tracking-wide">Login ID</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. jayesh01"
              className="w-full px-3 py-2.5 text-sm text-indigo-900 bg-indigo-50 border border-indigo-100 rounded-lg outline-none focus:border-indigo-400 focus:bg-white transition-colors placeholder:text-indigo-300"
            />
          </div>

          <div className="login-item flex flex-col gap-1.5">
            <label className="text-xs font-medium text-indigo-400 uppercase tracking-wide">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2.5 text-sm text-indigo-900 bg-indigo-50 border border-indigo-100 rounded-lg outline-none focus:border-indigo-400 focus:bg-white transition-colors placeholder:text-indigo-300"
            />
          </div>

          <button
            type="submit"
            className="login-item w-full py-2.5 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors mt-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;