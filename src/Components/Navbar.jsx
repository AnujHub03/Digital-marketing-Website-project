import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate()
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
            <li><Link to="/">Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Our Services</Link></li>
            <li>
              <details>
                <summary>Advance Features</summary>
                <ul className="p-2 bg-base-200 rounded-md">
                  <li><Link>Influncer Form</Link></li>
                  <li><Link to="/jobportal">Job Portal</Link></li>
                  <li><Link>Buy Domain</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
     
        <Link className="flex items-center gap-2" to="/">
            <img 
              src="src/assets/logo (2).png" 
              alt="WebTech Logo" 
              className="h-10 w-auto object-contain lg:h-16 rounded" 
            />
          </Link>
        </div>

      <div className="navbar-center hidden lg:flex items-center gap-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm w-32 lg:w-48 focus:input-primary"
          />
        </div>

        <ul className="menu menu-horizontal px-1 gap-2 font-medium ">
          <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
          <li><Link to="/services" className="hover:text-orange-600">Our Services</Link></li>

          <li className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="flex items-center gap-1">
             <h1 className="hover:text-orange-600">Advance Features</h1>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[50] menu p-2 shadow-xl bg-base-100 rounded-box w-52 top-full border border-base-200">
              <li><Link to="/influencer" className="hover:text-orange-600">Influencer Form</Link></li>
                  <li><Link to="/jobportal" className="hover:text-orange-600">Job Portal</Link></li>
                  <li><Link to="/buysubdomain" className="hover:text-orange-600" >Buy Domain</Link></li>
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
