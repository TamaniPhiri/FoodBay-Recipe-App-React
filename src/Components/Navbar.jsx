import { useState } from "react";

const Navbar = () => {
    const[open,setOpen]=useState(false);

    const handleMenu = () => {
        setOpen(!open);
    };
  return (
    <div className="bg-gray-900 flex z-50 shadow-2xl top-0 sticky px-4 md:px-8 flex-row w-full items-center justify-center">
      <nav className="flex flex-row w-full py-4 md:py-6 items-center justify-between">
        <div className="text-white">MEALDB</div>
        <div className="md:flex hidden items-center">
          <ul className="md:flex hidden items-center text-orange-300 flex-row gap-3">
            <li>
              <a href="#" className=" hover:text-white">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-white">
                Random
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-white">
                Search
              </a>
            </li>
            <li className="hover:scale-105 transition-all">
              <a
                href="#"
                className="px-2 py-1 shadow-xl rounded-md bg-rose-900 text-white transition-all hover:bg-rose-800"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center justify-center">
          {open ? (
            <>
              <button onClick={handleMenu}>
                <svg
                  viewBox="0 0 470 1000"
                  fill="white"
                  height="1.5em"
                  width="1.5em"
                >
                  <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
                </svg>
              </button>
              <div className="absolute h-screen w-1/2 bg-gray-800 shadow-xl right-0 top-[100%]">
                <ul className="flex flex-col text-white w-full gap-2 p-1 items-center">
                  <li className="flex w-full">
                    <a href="#" className="w-full p-1 rounded-md hover:bg-gray-900 flex">
                      Recipes
                    </a>
                  </li>
                  <li className="flex w-full">
                    <a href="#" className="w-full p-1 rounded-md hover:bg-gray-900 flex">
                      Random
                    </a>
                  </li>
                  <li className="flex w-full">
                    <a href="#" className="w-full p-1 rounded-md hover:bg-gray-900 flex">
                      Search
                    </a>
                  </li>
                  <li className="flex w-full p-1">
                    <a
                      href="#"
                      className="px-2 py-1 shadow-xl rounded-md w-fit flex bg-rose-900 text-white hover:bg-rose-800"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button onClick={handleMenu}>
              <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                <path
                  fill="#fff"
                  d="M7 6a3 3 0 00-3 3h16a3 3 0 00-3-3H7zM7 18a3 3 0 01-3-3h16a3 3 0 01-3 3H7zM3 11a1 1 0 100 2h18a1 1 0 100-2H3z"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
