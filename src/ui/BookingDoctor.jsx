import { useState } from "react";
import { days } from "../constants";

function DaySlot() {
  const [active, setActive] = useState(null);
  const date = new Date();
  date.setDate(date.getDate() - 1);

  return (
    <div className="flex flex-wrap justify-center my-5 gap-5">
      {Array.from({ length: 7 }).map((_, i) => {
        date.setDate(date.getDate() + 1);
        return (
          <div
            className={`text-center gap-5 font-semibold border border-stone-400 rounded-full hover:border-stone-500  py-8 px-5 text-lg w-[5rem] cursor-pointer`}
            key={new Date().getDate + i}
          >
            <label>
              <span className="uppercase">{days[date.getDay()].substring(0, 3)}</span>
              <br />
            </label>
            {date.getDate()}

            <input className="invisible" name="day" type="radio" />
          </div>
        );
      })}
    </div>
  );
}

function BookingDoctor() {
  return (
    <section>
      <h1 className="text-center text-3xl">Booking slots</h1>
      <form action="">
        <DaySlot />
      </form>
    </section>
  );
}

export default BookingDoctor;
