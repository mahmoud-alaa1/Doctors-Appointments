import Spinner from "./Spinner";

function SubmitButton({ isPending = false, children }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={`bg-primary  ${
        isPending ? "opacity-50" : ""
      } text-[#fff] py-2 rounded-lg ${
        isPending ? "cursor-not-allowed" : ""
      } text-center`}
    >
      {isPending ? <Spinner /> : children}
    </button>
  );
}

export default SubmitButton;
