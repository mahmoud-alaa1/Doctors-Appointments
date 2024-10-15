import RightArrow from "../icons/RightArrow";
import Link from "./Link";

function Hero() {
  return (
    <div className="bg-primary  px-10 text-[#fff] rounded-lg grid xl:grid-cols-2 xl:grid-rows-1 grid-rows-[fit_fit] ">
      <div className="basis-1/2 flex gap-5 flex-col justify-center xl:py-20 py-5">
        <h1 className="text-2xl md:text-5xl font-outfit tracking-wider md:leading-relaxed leading-relaxed font-semibold">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <p className="flex gap-9 flex-col sm:flex-row ">
          <img
            src="/group_profiles.png"
            className="w-[150px] h-[56px]"
            alt=""
          />
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <Link
          to="/doctors"
          className="bg-[#fff] text-[#595959] text-lg font-semibold w-fit gap-3">
          Book appointment <RightArrow />
        </Link>
      </div>
      <div className="relative basis-1/2 h-fit xl:h-full  ">
        <img
          className=" bottom-0 xl:absolute max-h-[400px] xl:left-0 xl:right-0 m-auto "
          src="/doc-header-img.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
