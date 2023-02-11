import { Link } from "react-router-dom";
import img from "../assest/Apple-Mobile.jpg"
import ProductCard from "./ProductCard";
const HomeProduct=({title})=>{

    return(<>
    <div className="py-16 bg-white">
    <h1 className="font-display font-bold text-2xl text-slate-900 px-8">{title}</h1>

<div className="flex justify-between py-4 px-8">
   
   <ProductCard productName={"iphone"} companyName={"Apple"} price={"23,900"} img={img}/>
   <ProductCard productName={"iphone"} companyName={"Apple"} price={"23,900"} img={img}/>
   <ProductCard productName={"iphone"} companyName={"Apple"} price={"23,900"} img={img}/>
   <ProductCard productName={"iphone"} companyName={"Apple"} price={"23,900"} img={img}/>
   <ProductCard productName={"iphone"} companyName={"Apple"} price={"23,900"} img={img}/>
  
</div>
    </div>
    
    </>)
}

export default HomeProduct;