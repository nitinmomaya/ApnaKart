import { useProductContext } from "../context/productContext";

import Shimmer from "../components/shimmer/Shimmer";
import { lazy, Suspense } from "react";
const ProductCard = lazy(() => import("../UI/ProductCard"));
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

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className=" w-full py-4 bg-white">
          <h1 className="font-display font-bold text-2xl text-slate-900 xl:px-24 px-8">
            {title}
          </h1>

          <div className=" w-full flex-col flex flex-wrap sm:flex-row sm:justify-between  item-center py-4 xl:px-24 px-8  ">
            {data === "mobile"
              ? mobile.map((data) => (
                  <Suspense fallback={<Shimmer />} key={data?.id}>
                    <ProductCard
                      key={data?.id}
                      productName={data?.name}
                      companyName={data?.company}
                      price={data?.price}
                      img={data?.image}
                      id={data?.id}
                    />
                  </Suspense>
                ))
              : null}

            {data === "laptop"
              ? laptop.map((data) => (
                  <Suspense fallback={<Shimmer />} key={data?.id}>
                    <ProductCard
                      key={data?.id}
                      productName={data?.name}
                      companyName={data?.company}
                      price={data?.price}
                      img={data?.image}
                      id={data?.id}
                    />
                  </Suspense>
                ))
              : null}

            {data === "watch"
              ? watch.map((data) => (
                  <Suspense fallback={<Shimmer />} key={data?.id}>
                    <ProductCard
                      key={data?.id}
                      productName={data?.name}
                      companyName={data?.company}
                      price={data?.price}
                      img={data?.image}
                      id={data?.id}
                    />
                  </Suspense>
                ))
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeProduct;
