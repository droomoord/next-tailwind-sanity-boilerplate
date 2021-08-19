import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ navItems, clicked }) => {
  const router = useRouter();
  const page = router.query.page;
  return (
    <div className="z-1 relative">
      {navItems.map((item) => {
        return (
          <Link key={item.slug} href={item.slug}>
            <a
              className={item.slug === page ? "font-bold" : null}
              onClick={clicked}
            >
              {item.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default Navbar;
