import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

const Drawer = ({ drawerItems, clicked, closeDrawer }) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const page = router.query.page;
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`h-screen w-screen bg-white m-0 pt-40 flex flex-col justify-start items-center gap-10 text-2xl fixed opacity-${
        mounted ? "1" : "0"
      } transition-opacity duration-300`}
    >
      {drawerItems.map((item) => {
        const active = item.slug === page;
        return active ? (
          <a
            onClick={closeDrawer}
            className="font-bold underline cursor-pointer"
            key={item.slug}
          >
            {item.title}
          </a>
        ) : (
          <Link key={item.slug} href={"/" + item.slug}>
            <a onClick={clicked}>{item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Drawer;
