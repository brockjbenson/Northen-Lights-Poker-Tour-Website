import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Nav() {
  const history = useHistory();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex max-w-[1260px] mx-auto justify-between h-24 px-4">
      <header className="flex items-center">
        <h1 className="hidden md:block text-4xl font-bold text-blue-950 px-4">
          NLPT
        </h1>
        <img src={"/images/logo.png"} alt="" className=" w-12" />
      </header>
      <ul className="hidden md:uppercase md:flex text-blue-950 text-lg font-normal items-center">
        <li className="px-4">Home</li>
        <li className="px-4">Members</li>
        <li className="px-4">Stats</li>
        <li className="px-4">About</li>
      </ul>
      <div onClick={handleNav} className="flex items-center  md:hidden">
        {!nav && <GiHamburgerMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 h-full w-40 bg-black bg-opacity-70"
            : "fixed right-[-100%]"
        }
      >
        <div
          onClick={handleNav}
          className={nav ? "fixed top-9 right-4" : "fixed right-[-100%]"}
        >
          <RxCross2 size={20} />
        </div>

        <ul className="pt-20 pl-4 text-right text-white md:hidden">
          <li className="p-4">Home</li>
          <li className="p-4">Members</li>
          <li className="p-4">Stats</li>
          <li className="p-4">About</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
