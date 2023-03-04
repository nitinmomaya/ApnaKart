import { lazy, Suspense, useEffect } from "react";
import { useFilterProductContext } from "../../context/filterProductContext";
import { useProductContext } from "../../context/productContext";

const Error = lazy(() => import("../Error/Error"));
const Header = lazy(() => import("./Header"));
const Filter = lazy(() => import("./Filter"));
const HeaderProduct = lazy(() => import("./HeaderProduct"));
const ProductView = lazy(() => import("./ProductView"));
import ProductShimmer from "../shimmer/ProductShimmer";

const ProductLists = () => {
  const { filterProduct } = useFilterProductContext();

  const { isLoading } = useProductContext();

  //to load page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <ProductShimmer />
      ) : (
        <div className="pt-28 flex flex-col  xl:px-24 px-8 ">
          {/* header content */}

          <Suspense>
            <Header />
          </Suspense>
          {/* 2nd row content */}
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between my-4  font-display">
            {/* filter options */}
            <Suspense>
              <Filter />
            </Suspense>
            {/* product display */}
            <div className="flex flex-col lg:w-3/4 w-full   ">
              {/* Header Content for Product */}
              <Suspense>
                <HeaderProduct />
              </Suspense>
              {/* Product List Component -name, -description */}
              {filterProduct.length === 0 ? (
                <div className=" flex justify-center items-center w-full h-full">
                  <Suspense>
                    <Error />
                  </Suspense>
                </div>
              ) : (
                <Suspense>
                  <ProductView />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLists;
