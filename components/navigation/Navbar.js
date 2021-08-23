import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ navItems, clicked }) => {
  const router = useRouter();
  const page = router.query.page;

  return (
    <div className="w-screen h-20 bg-gray-100 flex justify-center items-center gap-10 fixed">
      {navItems.map((item) => {
        const active = item.slug === page || (item.slug === "home" && !page);
        return active ? (
          <a
            className="font-bold underline cursor-pointer uppercase"
            key={item.slug}
          >
            {item.title}
          </a>
        ) : (
          <Link key={item.slug} href={"/" + item.slug}>
            <a className="uppercase hover:underline" onClick={clicked}>
              {item.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default Navbar;
