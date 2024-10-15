import Spinner from "./Spinner";

function SubmitButton({ isPending = false, children, className }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={`bg-primary  ${isPending ? "opacity-50" : ""} text-[#fff] py-2 rounded-full ${
        isPending ? "cursor-not-allowed" : ""
      } text-center ${className}`}
    >
      {isPending ? <Spinner /> : children}
    </button>
  );
}

export default SubmitButton;
