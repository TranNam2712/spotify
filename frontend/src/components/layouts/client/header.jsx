import { Button } from "@material-tailwind/react";
import IconHome from "../../svg/icon.home";
import IconSpotify from "../../svg/icon.spotify";
import { FaSearch, FaFolderOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-10 px-8 py-1">
      {/* logo */}
      <IconSpotify />

      {/* menu */}
      <nav className="flex-grow flex items-center justify-between pr-28">
        <div className="flex items-center gap-4">
          {/* home */}
          <NavLink
            to="/"
            className="bg-[#1f1f1f]/80 p-[10px] rounded-full w-fit cursor-pointer hover:bg-[#1f1f1f] hover:scale-105 transition-all"
          >
            <IconHome
              color={location.pathname === "/" ? "#1DB954" : "currentColor"}
            />
          </NavLink>
          {/* search */}
          <div className="bg-[#1f1f1f] px-3 rounded-full min-w-[350px] flex items-center justify-between gap-2">
            <FaSearch
              size={16}
              title="search"
              className="cursor-pointer hover:scale-110 transition-all"
            />
            <input
              type="text"
              className="bg-transparent outline-none h-12"
              placeholder="What do you want to play"
            />

            <div className="flex items-center">
              <div className="w-[1px] h-6 bg-gray-600"></div>

              <FaFolderOpen
                size={20}
                className="ml-2 opacity-80 hover:scale-110 hover:opacity-100 transition-all cursor-pointer"
                title="library"
              />
            </div>
          </div>
        </div>

        {/* login/ signup */}
        <ul className="flex items-center gap-4">
          <NavLink
            to="/auth/signup"
            className="hover:underline hover:scale-105"
          >
            <span className="text-sm font-semibold cursor-pointer opacity-70 hover:opacity-100 transition-all">
              Sign Up
            </span>
          </NavLink>
          <NavLink
            to="/auth/login"
            className="opacity-90 hover:opacity-100 hover:scale-105 transition-all"
          >
            <Button
              className="text-black rounded-full tracking-wider"
              color="white"
            >
              Log In
            </Button>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
