'use client'
import React, { useState } from 'react';


const App=()=> {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-500 ease-in-out transform">
        {isLogin ? (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">Login into R/F</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
                  onClick={toggleForm}
                >
                  Register
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">Register into R/F</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Register
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800 cursor-pointer"
                  onClick={toggleForm}
                >
                  Sign In
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;