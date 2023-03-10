import { lazy, Suspense, useEffect, useState } from "react";
import ProductShimmer from "../shimmer/ProductShimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../contant";
import { useProductContext } from "../../context/productContext";

import { useFilterProductContext } from "../../context/filterProductContext";
import Shimmer from "../shimmer/Shimmer";

const ProductImage = lazy(() => import("./ProductImage"));
const ProductContent = lazy(() => import("./ProductContent"));

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;
  const { getProduct, isLoading, product } = useProductContext();
  const { filterProduct } = useFilterProductContext();

  //to load page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    id: alias,

    colors,

    image = [{ url: "" }],
  } = product;

  const [mainImg, setMainImg] = useState(image[0]?.url);

  //Rating stars

  useEffect(() => {
    getProduct(`${API_URL}?id=${id}`);
  }, [ProductImage]);
  return (
    <>
      {isLoading ? (
        <ProductShimmer />
      ) : (
        <div className="pt-28 flex  flex-col sm:px-24 px-8 py-20 justify-between md:flex-row">
          <Suspense fallback={<Shimmer />}>
            <ProductImage
              mainImg={mainImg}
              setMainImg={setMainImg}
              image={image}
            />
          </Suspense>
          <Suspense fallback={<Shimmer />}>
            <ProductContent product={product} />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
