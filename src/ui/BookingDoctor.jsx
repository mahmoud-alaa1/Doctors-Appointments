import BookingForm from "./BookingForm";

function BookingDoctor({ doctor }) {
  return (
    <section>
      <h1 className="text-center text-3xl">Booking slots</h1>
      <BookingForm doctor={doctor} />
    </section>
  );
}

export default BookingDoctor;
