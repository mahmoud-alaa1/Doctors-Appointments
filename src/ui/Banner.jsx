import {useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary justify-between px-4 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      <div className="py-8 sm:py-10 md:py-9 lg:py-24 lg:pl-5">
        <div className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className=" mt-5"> With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-sm  mt-4 sm:text-base text-gray-600 px-8 py-3 rounded-full hover:scale-105 transition-all"
        >
          Creat account
        </button>
      </div>
      <div className=" hidden md:block md:w-1/2 lg:w-[370px] relative ">
        <img
          loading="lazy"
          className=" w-full bottom-0  absolute max-w-md"
          src="/doc10.png"
          alt=""
        />
      </div>
    </div>
  );
}
