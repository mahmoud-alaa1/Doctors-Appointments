import { useParams } from "react-router-dom";

function SingleDoctor() {
  const { doctorId } = useParams();
  console.log(doctorId);
  return <div>Single DOCTOR</div>;
}

export default SingleDoctor;
