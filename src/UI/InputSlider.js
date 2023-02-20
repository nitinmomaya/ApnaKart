import { useFilterProductContext } from "../context/filterProductContext";

const InputSlider = ({ min, max, price }) => {
  const { filterType } = useFilterProductContext();

  return (
    <div className="w-full  ">
      <input
        type="range"
        min={min}
        max={max}
        value={price}
        onChange={(e) => {
          e.preventDefault();
          const val = e.target.value;
          filterType("price", val);
        }}
        className={
          "appearance-none w-full bg-slate-200 h-2 outline-none opacity-70 rounded-lg "
        }
      />
    </div>
  );
};

export default InputSlider;
