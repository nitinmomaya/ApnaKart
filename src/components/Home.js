import { useProductContext } from "../context/productContext";
import { useUserAuth } from "../context/UserAuth";
import HomeProduct from "./HomeProduct";

const Home = () => {
  const { user } = useUserAuth();
  const { isLoading } = useProductContext();

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

      <HomeProduct title={"Latest Mobile"} data={"mobile"} />
      <HomeProduct title={"Latest Laptop"} data={"laptop"} />
      <HomeProduct title={"Latest Watches"} data={"watch"} />
    </>
  );
};

export default Home;
