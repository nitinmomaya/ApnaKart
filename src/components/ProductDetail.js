import { useEffect, useState } from "react";
import ProductShimmer from "./shimmer/ProductShimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../../contant";
import { useProductContext } from "../context/productContext";
import ProductContent from "./ProductContent";
import ProductImage from "./ProductImage";

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;
  const { getProduct, isLoading, product } = useProductContext();

  //to load page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    id: alias,
    name = "",
    price,
    description,
    stars,
    stock,
    colors,
    reviews,
    image = [{ url: "" }],
  } = product;

  const [mainImg, setMainImg] = useState(image[0].url);
  console.log("COLOR", colors);

  //Rating stars

  useEffect(() => {
    getProduct(`${API_URL}?id=${id}`);
  }, []);
  return (
    <>
      {isLoading ? (
        <ProductShimmer />
      ) : (
        <div className="pt-28 flex  flex-col sm:px-24 px-8 py-20 justify-between md:flex-row">
          <ProductImage
            mainImg={mainImg}
            setMainImg={setMainImg}
            image={image}
          />
          <ProductContent
            name={name}
            price={price}
            description={description}
            stars={stars}
            reviews={reviews}
            stock={stock}
            colors={colors}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
