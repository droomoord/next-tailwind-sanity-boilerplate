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
  return (
    <>
      <nav>
        <div className="block md:hidden">
          <div className="w-screen flex justify-end">
            <button
              className="border-2 border-black rounded p-1.5 bg-gray-100 m-2"
              onClick={() => setDrawer(!drawer)}
            >
              {drawer ? <GrClose size="2em"></GrClose> : <FaBars size="2em" />}
            </button>
          </div>
          {drawer && (
            <Drawer
              drawerItems={navItems}
              clicked={clicked}
              closeDrawer={() => setDrawer(false)}
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
