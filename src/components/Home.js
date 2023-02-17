import { useProductContext } from "../context/productContext";
import { useUserAuth } from "../context/UserAuth";
import HomeProduct from "./HomeProduct";

const Home = () => {
  const { user } = useUserAuth();
  const { isLoading, products } = useProductContext();
  //user.email.substring(0, user.email.indexOf("@"))
  const email = user.email
    ? user.email.substring(0, user.email.indexOf("@"))
    : " ";
  const name = user.displayName ? user.displayName : email;

  const mobile = products.filter((product) => {
    return product?.category === "mobile";
  });

  const laptop = products.filter((product) => {
    return product?.category === "laptop";
  });
  const watch = products.filter((product) => {
    return product?.category === "watch";
  });

  return (
    <>
      {!isLoading ? (
        <div className="pt-28 pb-8 space-y-2">
          <h1 className="font-display font-bold text-3xl text-slate-900 sm:px-24 px-8">{`Welcome ${
            name.charAt(0).toUpperCase() + name.slice(1)
          } to ApnaKart`}</h1>
          <p className="font-display text-lg text-slate-700 sm:px-24 px-8">
            Explore to find all the Latest and Classical Products on your Screen
          </p>
        </div>
      ) : null}
      <HomeProduct title={"Latest Mobile"} data={"mobile"} />
      <HomeProduct title={"Latest Laptop"} data={"laptop"} />
      <HomeProduct title={"Latest Watches"} data={"watch"} />
    </>
  );
};

export default Home;
