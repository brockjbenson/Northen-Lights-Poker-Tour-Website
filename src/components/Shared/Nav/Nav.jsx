import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Nav() {
  const history = useHistory();
  const [nav, setNav] = useState(true);

  return (
    <div className="flex max-w-[1260px] mx-auto justify-between h-24 px-4">
      <header className="flex items-center">
        <h1 className="hidden sm:block text-4xl font-bold text-blue-950 px-4">
          NLPT
        </h1>
        <img src={"/images/logo.png"} alt="" className=" w-12" />
      </header>
      <ul className="hidden xl:uppercase xl:flex text-blue-950 text-lg font-normal items-center">
        <li className="px-4">Home</li>
        <li className="px-4">Members</li>
        <li className="px-4">Stats</li>
        <li className="px-4">About</li>
      </ul>
      <div className="flex items-center">
        {nav ? (
          <RxCross2 size={20} color="blue" />
        ) : (
          <GiHamburgerMenu size={20} />
        )}
      </div>
      <div className="fixed right-0 top-0 h-full w-40 bg-black bg-opacity-70">
        <ul className="pt-20 pl-4 text-right text-white">
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
