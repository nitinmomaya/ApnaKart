import { useEffect } from "react";

const ProductImage = ({ mainImg, setMainImg, image }) => {
  useEffect(() => {
    setMainImg(image[0]?.url);
  }, []);
  return (
    <>
      <div className="md:w-1/2 w-full flex flex-col md:pr-20">
        <img
          loading="lazy"
          className=" w-full sm:h-96 h-86  rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src={mainImg}
        />
        <div className="flex  flex-wrap justify-between  py-8 ">
          {image.map((img, index) => {
            return (
              <img
                loading="lazy"
                className="sm:w-20 sm:h-20 w-14 h-14 my-2 rounded-md cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={img?.url}
                key={index}
                onClick={() => setMainImg(img?.url)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
