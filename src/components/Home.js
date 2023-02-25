import { lazy, Suspense } from "react";
import { useProductContext } from "../context/productContext";
import { useUserAuth } from "../context/UserAuth";

const HomeProduct = lazy(() => import("./HomeProduct"));

const Home = () => {
  const { user } = useUserAuth();

  const name = user.displayName ? user.displayName : "";

  return (
    <>
      <div className="pt-28 pb-8 space-y-2">
        <h1 className="font-display font-bold text-3xl text-slate-900 xl:px-24 px-8">{`Welcome ${
          name.charAt(0).toUpperCase() + name.slice(1)
        } to ApnaKart`}</h1>
        <p className="font-display font-medium text-lg text-slate-700 xl:px-24 px-8">
          Explore to find all the Latest and Classical Products on your Screen
        </p>
      </div>

      <Suspense>
        <HomeProduct title={"Latest Mobile"} data={"mobile"} />
      </Suspense>
      <Suspense>
        <HomeProduct title={"Latest Laptop"} data={"laptop"} />
      </Suspense>
      <Suspense>
        <HomeProduct title={"Latest Watches"} data={"watch"} />
      </Suspense>
    </>
  );
};
export default Home;
