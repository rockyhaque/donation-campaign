import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl ">

      <nav className="flex justify-between items-center py-5">

        <Logo></Logo>

        <ul className="flex gap-2 md:gap-4 lg:gap-5 px-2 font-bold">

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>

          
        </ul>

      </nav>

    </div>
  );
};

export default Navbar;
