import useDoctor from "../hooks/useDoctor";

import PageLoader from "../ui/PageLoader";
import DoctorBio from "../ui/DoctorBio";
import BookingDoctor from "../ui/BookingDoctor";

function SingleDoctor() {
  const { doctor, error, isPending } = useDoctor();
  console.log(doctor);
  if (isPending) return <PageLoader />;
  return (
    <>
      <DoctorBio doctor={doctor} />
      <BookingDoctor doctor={doctor} />
    </>
  );
}

export default SingleDoctor;
