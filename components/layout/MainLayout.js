import Navigation from "./Navigation";
import Spinner from "../util/Spinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Layout = (props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(false);
  }, [router.query.page]);
  return (
    <>
      <Navigation startLoading={() => setLoading(true)} />
      {loading ? <Spinner /> : <div className="p-2">{props.children}</div>}
    </>
  );
};

export default Layout;
