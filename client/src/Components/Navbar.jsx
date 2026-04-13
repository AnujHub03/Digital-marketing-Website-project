import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
const Navbar = () => {
  const nav = useNavigate();
  
  const { user, logout } = useAuth();
  // Ref for the mobile details element to close it programmatically
  const mobileDetailsRef = useRef(null);

  const handleLinkClick = () => {
    // 1. For Desktop: This removes focus from the active element, 
    // which hides the dropdown-hover/dropdown-content.
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // 2. For Mobile: This closes the <details> tag manually.
    if (mobileDetailsRef.current) {
      mobileDetailsRef.current.removeAttribute("open");
    }
  };

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
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Our Services</Link></li>
            <li>
              <details ref={mobileDetailsRef}>
                <summary>Advance Features</summary>
                <ul className="p-2 bg-base-200 rounded-md">
                  <li><Link to="/resume-builder" onClick={handleLinkClick}>Resume Builder</Link></li>
                  <li><Link to="/PortfolioMaker" onClick={handleLinkClick}>Portfolio Maker</Link></li>
                  <li><Link to="/influencer" onClick={handleLinkClick}>Influencer Form</Link></li>
                  <li><Link to="/jobportal" onClick={handleLinkClick}>Job Portal</Link></li>
                  <li><Link to="/buysubdomain" onClick={handleLinkClick}>Buy Domain</Link></li>
                  <li><Link to="/landing-page" onClick={handleLinkClick}>Landing Page</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <Link className="flex items-center gap-2" to="/" onClick={handleLinkClick}>
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

        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li><Link to="/" className="hover:text-orange-600" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-600" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600" onClick={handleLinkClick}>Contact</Link></li>
          <li><Link to="/services" className="hover:text-orange-600" onClick={handleLinkClick}>Our Services</Link></li>

          <li className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="flex items-center gap-1">
              <h1 className="hover:text-orange-600">Advance Features</h1>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[50] menu p-2 shadow-xl bg-base-100 rounded-box w-52 top-full border border-base-200">
              <li><Link to="/resume-builder" className="hover:text-orange-600" onClick={handleLinkClick}>Resume Builder</Link></li>
              <li><Link to="/PortfolioMaker" className="hover:text-orange-600" onClick={handleLinkClick}>Portfolio Maker</Link></li>
              <li><Link to="/influencer" className="hover:text-orange-600" onClick={handleLinkClick}>Influencer Form</Link></li>
              <li><Link to="/jobportal" className="hover:text-orange-600" onClick={handleLinkClick}>Job Portal</Link></li>
              <li><Link to="/buysubdomain" className="hover:text-orange-600" onClick={handleLinkClick}>Buy Domain</Link></li>
              <li><Link to="/landing-page" className="hover:text-orange-600" onClick={handleLinkClick}>Landing Page</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">

  {!user ? (
    // 🔹 Not logged in
    <button className="btn btn-primary btn-sm lg:btn-md p-2">
      <Link to="/auth">Login | Signup</Link>
    </button>
  ) : (
    // 🔹 Logged in
    <div className="dropdown dropdown-end">
      
      <div tabIndex={0} role="button" className="btn btn-ghost avatar">
        <div className="w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
          {user?.name ? user.name[0].toUpperCase() : "U"}
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>

    </div>
  )}

</div>
    </div>
  );
};

export default Navbar;