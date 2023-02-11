import { useUserAuth } from "../context/UserAuth";
import HomeProduct from "./HomeProduct";

const Home =()=>{
    const {user}= useUserAuth();
    return(<>
    <div className="py-8 space-y-2">
        <h1 className="font-display font-bold text-3xl text-slate-900 px-8">{`Welcome ${user.displayName} to ApnaMart`}</h1>
        <p className="font-display text-lg text-slate-700 mx-8">Explore products from different Categories and filter products at your wish</p>
    </div>
<HomeProduct title={"Latest Mobile"} companyName={"Apple"} productName={"iPhone 12"} price={"23,900"}/>
<HomeProduct title={"Trending Now"} companyName={"Apple"} productName={"iPhone 12"} price={"23,900"}/>
<HomeProduct title={"Recommended For You"} companyName={"Apple"} productName={"iPhone 12"} price={"23,900"}/>
    </>)
}

export default Home;