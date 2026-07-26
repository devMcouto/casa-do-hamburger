const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-[350px] rounded-md border border-gray-300 bg-white py-[11px] text-xs text-[#32343E] focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  );
};

export default Input;
