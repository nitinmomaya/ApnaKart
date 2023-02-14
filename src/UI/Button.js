const Button = ({ type, name }) => {
  return (
    <>
      <button
        type={type}
        className="w-full bg-slate-700 text-gray-50 font-display font-semibold px-6 py-3 rounded"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
