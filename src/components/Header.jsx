import { BrowserRouter, Link } from "react-router-dom";

function Header() {
  return (

      <div className="navbar bg-slate-950 text-primary-content border-b-2 border-yellow-600 sticky top-0 z-50 tracking-widest">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/champions">Champions</Link>
              </li>

              <li>
              <Link to="/regions">Regions</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="mx-5">
              <Link to="/champions">Champions</Link>
            </li>

            <li className="mx-5">
              <a><img src="./assets/logo.png" alt="logo" width="100px"/></a>
            </li>

            <li className="mx-5">
            <Link to="/regions">Regions</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>

  );
}

export default Header;
