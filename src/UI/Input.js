const Input = ({ label, placeholder, type }) => {
  return (
    <div>
      <label
        for="first_name"
        class="mb-4 text-sm font-medium font-display text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        class="my-2 bg-gray-50 border font-display border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
