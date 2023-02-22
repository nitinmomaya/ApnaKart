const Button = ({ type, name, handle }) => {
  return (
    <>
      <button
        type={type}
        className="w-full bg-slate-700 hover:bg-slate-500 text-gray-50 font-display font-semibold px-6 py-3 rounded"
        onClick={handle}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
