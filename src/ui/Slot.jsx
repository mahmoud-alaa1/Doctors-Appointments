function Slot({ children, active = false, className = "", disabled = false }) {
  return (
    <label
      className={`${disabled ? "cursor-not-allowed bg-gray-300" : "cursor-pointer"} ${
        active ? "bg-primary text-white shadow-xl" : ""
      } text-center gap-5 font-normal border border-stone-400 rounded-full hover:shadow-lg hover:border-stone-500   text-lg w-[5rem]  transition-all  ${className}`}
    >
      {children}
    </label>
  );
}

export default Slot;
