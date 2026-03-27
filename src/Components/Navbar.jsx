import React from "react";

const Navbar = () => {
  return (
   <div className="navbar bg-base-100 text-base-content shadow-md px-4 lg:px-20 font-montserrat sticky top-0 z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Our Services</a></li>
            <li>
              <details>
                <summary>Advance Features</summary>
                <ul className="p-2 bg-base-200 rounded-md">
                  <li><a>AI Tools</a></li>
                  <li><a>API Access</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
     
        <a className="btn btn-ghost text-2xl font-bold font-serif tracking-tighter">LOGO</a>
      </div>

      <div className="navbar-center hidden lg:flex items-center gap-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm w-32 lg:w-48 focus:input-primary"
          />
        </div>

        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Our Services</a></li>

          <li className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="flex items-center gap-1">
              Advance Features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[50] menu p-2 shadow-xl bg-base-100 rounded-box w-52 top-full border border-base-200">
              <li><a>AI Tools</a></li>
              <li><a>API Access</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-primary btn-sm lg:btn-md p-2">
          Login | Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
