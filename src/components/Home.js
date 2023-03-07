import { lazy, Suspense } from "react";
import { useUserAuth } from "../context/UserAuth";
import { isLoading } from "../context/productContext";
const HomeProduct = lazy(() => import("./HomeProduct"));
import Shimmer from "../components/shimmer/Shimmer";

const Home = () => {
  const { user } = useUserAuth();

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="pt-28 pb-8 space-y-2">
          <div>
            <h1 className="font-display font-bold text-3xl text-slate-900 xl:px-24 px-8">{`Welcome ${
              user?.displayName?.charAt(0)?.toUpperCase() +
              user?.displayName?.slice(1)
            } to ApnaKart`}</h1>
            <p className="font-display font-medium text-lg text-slate-700 xl:px-24 px-8">
              Explore to find all the Latest and Classical Products on your
              Screen
            </p>
          </div>

          <Suspense fallback={<Shimmer />}>
            <HomeProduct title={"Latest Mobile"} data={"mobile"} />
            <HomeProduct title={"Latest Laptop"} data={"laptop"} />
            <HomeProduct title={"Latest Watches"} data={"watch"} />
          </Suspense>
        </div>
      )}
    </>
  );
};
export default Home;
