import { useUserAuth } from "../context/UserAuth";
import HomeProduct from "./HomeProduct";

const Home = () => {
  const { user } = useUserAuth();
  console.log("DETAIL0", user);
  //user.email.substring(0, user.email.indexOf("@"))
  const email = user.email
    ? user.email.substring(0, user.email.indexOf("@"))
    : null;
  const name = user.displayName ? user.displayName : email;

  return (
    <>
      <div className="pt-28 pb-8 space-y-2">
        <h1 className="font-display font-bold text-3xl text-slate-900 px-8">{`Welcome ${name} to ApnaMart`}</h1>
        <p className="font-display text-lg text-slate-700 mx-8">
          Explore products from different Categories and filter products at your
          wish
        </p>
      </div>
      <HomeProduct title={"Latest Mobile"} data={"mobile"} />
      <HomeProduct title={"Latest Laptop"} data={"laptop"} />
      <HomeProduct title={"Latest Watches"} data={"watch"} />
    </>
  );
};

export default Home;
