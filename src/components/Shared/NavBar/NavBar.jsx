import { NavLink } from "react-router-dom";
import avatar from "../../../assets/others/profile.png";

const NavBar = () => {
  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-[#FFF]"
        }
      >
        <li
          className="text-base font-semibold
 hover:text-[#EEFF25] hover:transition hover:duration-500 cursor-pointer uppercase"
        >
          Home
        </li>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-[#FFF]"
        }
      >
        <li
          className="text-base font-semibold
 hover:text-[#EEFF25] hover:transition hover:duration-500 cursor-pointer uppercase"
        >
          Contact
        </li>
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-[#FFF]"
        }
      >
        <li
          className="text-base font-semibold
 hover:text-[#EEFF25] hover:transition hover:duration-500 cursor-pointer uppercase"
        >
          Dashboard
        </li>
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-[#FFF]"
        }
      >
        <li
          className="text-base font-semibold
 hover:text-[#EEFF25] hover:transition hover:duration-500 cursor-pointer uppercase"
        >
          Our Menu
        </li>
      </NavLink>

      <NavLink
        to="/order"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-[#FFF]"
        }
      >
        <li
          className="text-base font-semibold
 hover:text-[#EEFF25] hover:transition hover:duration-500 cursor-pointer uppercase"
        >
          Order Food
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar font-inter fixed z-10 bg-opacity-30 bg-slate-800 max-w-screen-xl">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="text-xl md:text-2xl text-white font-cinzel font-black uppercase">
          Bistro Boos <br />
          <span className="md:text-xl font-bold tracking-widest">
            Restaurant
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-[#FFF]"
          }
        >
          <button
            className="text-base font-semibold
 hover:text-[#EEFF25] hover:transition hover:duration-500 cursor-pointer uppercase"
          >
            Login
          </button>
        </NavLink>
        <img
          src={avatar}
          alt="avatar"
          className="w-8 rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2 ml-3"
        />
      </div>
    </div>
  );
};

export default NavBar;
