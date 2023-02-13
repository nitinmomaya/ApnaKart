import img from "../assest/Apple-Mobile.jpg";
import { useProductContext } from "../context/productContext";
import ProductCard from "../UI/ProductCard";
import Shimmer from "./Shimmer";

const HomeProduct = ({ title, data }) => {
  const { isLoading, products } = useProductContext();

  const mobile = products.filter((product) => {
    return product?.category === "mobile";
  });

  const laptop = products.filter((product) => {
    return product?.category === "laptop";
  });
  const watch = products.filter((product) => {
    return product?.category === "watch";
  });

  if (isLoading) {
    return <Shimmer />;
  } else {
    console.log("HOME", data);
    console.log("MOBILE", mobile);
  }

  return (
    <>
      <div className=" w-full bg-red-100">
        <div className="py-4 bg-white">
          <h1 className="font-display font-bold text-2xl text-slate-900 px-24">
            {title}
          </h1>

          <div className=" flex-col flex flex-wrap sm:flex-row sm:justify-between  item-center py-4 px-24  ">
            {data === "mobile"
              ? mobile.map((data) => (
                  <ProductCard
                    key={data.id}
                    productName={data.name}
                    companyName={data.company}
                    price={data.price}
                    img={data.image}
                    id={data.id}
                  />
                ))
              : null}

            {data === "laptop"
              ? laptop.map((data) => (
                  <ProductCard
                    key={data.id}
                    productName={data.name}
                    companyName={data.company}
                    price={data.price}
                    img={data.image}
                    id={data.id}
                  />
                ))
              : null}

            {data === "watch"
              ? watch.map((data) => (
                  <ProductCard
                    key={data.id}
                    productName={data.name}
                    companyName={data.company}
                    price={data.price}
                    img={data.image}
                    id={data.id}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
