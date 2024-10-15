import VerifiedIcon from "../icons/VerifiedIcon";
import InformationIcon from "../icons/InformationIcon";
import { imagePath } from "../constants";

function DoctorAvatar({ doctor }) {
  return (
    <div className="bg-primary lg:min-w-96 flex items-end max-h-96 justify-center rounded-lg">
      <img loading="lazy" className="  " src={`${imagePath}doc-${doctor.id}.png`} />
    </div>
  );
}

function DoctorDetails({ doctor }) {
  return (
    <div className="border border-stone-300 rounded-xl p-10 flex-grow">
      <h2 className="text-5xl gap-5 flex items-baseline mb-3">
        Dr. {doctor.name} <VerifiedIcon />
      </h2>
      <h3 className="mb-5 ">
        {doctor.speciality} &nbsp; <span className="px-3 py-1 rounded-full border">{doctor.experience} Years </span>
      </h3>
      <h3 className="flex font-semibold items-center gap-2">
        About <InformationIcon />
      </h3>
      <p className="mb-5 text-lg leading-relaxed">{doctor.description}</p>
      <h2 className="font-semibold text-xl">Appointment fee: ${doctor.fee}</h2>
    </div>
  );
}

function DoctorBio({ doctor }) {
  return (
    <section className="flex gap-10 flex-col lg:flex-row justify-center text-stone-700 text-xl mb-10">
      <DoctorAvatar doctor={doctor} />
      <DoctorDetails doctor={doctor} />
    </section>
  );
}

export default DoctorBio;
