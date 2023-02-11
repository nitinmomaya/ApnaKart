import { Link } from "react-router-dom"

const ProductCard=({productName, companyName,price,img})=>{

    return(<>
    <Link to="/about">
   <div className="bg-white px-4 rounded-lg border-slate-100 border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img className="w-60 h-60" src={img} alt="Mobile Phone" />

        <div className="flex flex-col py-4 space-y-1">
            <h1 className="font-display font-semibold text-gray-700 text-2xl">{productName}</h1>
            <p className="font-display font-medium text-gray-700 text-lg">{companyName}</p>
            <p className="font-display font-semibold text-gray-700 text-xl">${price}</p>
        </div>
        </div>
   </Link></>)
}

export default ProductCard;