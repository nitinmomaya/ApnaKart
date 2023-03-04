import { useFilterProductContext } from "../../context/filterProductContext";
import Button from "../../UI/Button";
import Category from "../filters/Category";
import Colors from "../filters/Colors";
import Company from "../filters/Company";
import Price from "../filters/Price";

const Filter = () => {
  const { clearFilter } = useFilterProductContext();
  return (
    <>
      <div className=" flex lg:w-1/5 w-full flex-col   space-y-4 ">
        <Category />
        <Company />
        <Colors />
        <Price />
        <Button name={"Clear Filter"} handle={clearFilter} />
      </div>
    </>
  );
};

export default Filter;
