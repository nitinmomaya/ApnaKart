import { lazy, Suspense } from "react";
import { useFilterProductContext } from "../../context/filterProductContext";
const ProductCard = lazy(() => import("../../UI/ProductCard"));
const ProductList = lazy(() => import("../../UI/ProductList"));

const ProductView = () => {
  const { filterProduct, listView } = useFilterProductContext();
  return (
    <>
      <div className="w-full">
        {listView ? (
          filterProduct.map((filter) => (
            <Suspense key={filter?.id}>
              <ProductList
                key={filter?.id}
                productName={filter?.name}
                price={filter?.price}
                id={filter?.id}
                description={filter?.description}
                img={filter?.image}
              />
            </Suspense>
          ))
        ) : (
          <div className="flex flex-wrap justify-between">
            {filterProduct.map((filter) => (
              <Suspense key={filter?.id}>
                <ProductCard
                  key={filter?.id}
                  productName={filter?.name}
                  companyName={filter?.company}
                  price={filter?.price}
                  img={filter?.image}
                  id={filter?.id}
                />
              </Suspense>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductView;
