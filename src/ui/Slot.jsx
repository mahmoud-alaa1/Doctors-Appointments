function Slot({ children, active = false, className = "" }) {
  return (
    <label
      className={` ${
        active ? "bg-primary text-white shadow-xl" : ""
      } text-center gap-5 font-normal border border-stone-400 rounded-full hover:shadow-lg hover:border-stone-500   text-lg w-[5rem] cursor-pointer transition-all  ${className}`}
    >
      {children}
    </label>
  );
}

export default Slot;
