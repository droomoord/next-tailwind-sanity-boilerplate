import Navbar from "../navigation/Navbar";
import Drawer from "../navigation/Drawer";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import { useEffect, useState } from "react";
import { fetchPageTitles } from "../../functions";

const Navigation = ({ startLoading }) => {
  const [navItems, setNavItems] = useState([]);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    async function init() {
      const { data } = await fetchPageTitles();
      setNavItems(data);
    }
    init();
  }, []);
  function clicked() {
    if (drawer) setDrawer(false);
    startLoading();
  }
  function clickHandler() {
    setDrawer(!drawer);
  }
  return (
    <>
      <nav>
        <div className="block md:hidden">
          <div className="z-10 border-b-2 w-screen h-20 flex justify-end items-center fixed bg-white">
            <button
              className="border-2 border-black rounded p-1.5 bg-gray-100 m-2 w-14 h-14 flex justify-center items-center"
              onClick={clickHandler}
            >
              {drawer ? <GrClose size="2em"></GrClose> : <FaBars size="2em" />}
            </button>
          </div>
          {drawer && (
            <Drawer
              drawerItems={navItems}
              clicked={clicked}
              closeDrawer={clickHandler}
            />
          )}
        </div>
        <div className="hidden md:block">
          <Navbar navItems={navItems} clicked={clicked} />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
