import { useState } from "react";

const Input = ({
  label,
  placeholder,
  type,
  icon,
  name,
  value,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-4 text-sm font-medium font-display text-gray-900"
      >
        {label}
      </label>
      <input
        type={show ? "text" : type}
        name={name}
        id={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="my-2 bg-gray-50 border font-display border-gray-300 text-gray-900 text-sm rounded focus:bg-white focus:border-slate-400 focus:outline-none block w-full p-2.5"
        placeholder={placeholder}
      />
      <div className="mb-4">
        {icon && (
          <button
            className="text-slate-900 font-display font-semibold"
            onClick={(e) => {
              e.preventDefault();

              setShow(!show);
            }}
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
        {touched && errors ? (
          <p className=" text-red-700 font-display font-semibold">{errors}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
