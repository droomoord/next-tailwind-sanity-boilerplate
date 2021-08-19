import { useRouter } from "next/router";
import Link from "next/link";

const Drawer = ({ drawerItems, clicked, closeDrawer }) => {
  const router = useRouter();
  const page = router.query.page;
  return (
    <div className="h-screen w-screen bg-white m-0 pt-20 flex flex-col justify-start items-center gap-10 text-2xl fixed">
      {drawerItems.map((item) => {
        const active = item.slug === page;
        return active ? (
          <a
            onClick={closeDrawer}
            className="font-bold underline"
            key={item.slug}
          >
            {item.title}
          </a>
        ) : (
          <Link key={item.slug} href={item.slug}>
            <a onClick={clicked}>{item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Drawer;
