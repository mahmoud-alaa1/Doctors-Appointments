import Hero from "../ui/Hero";

import Banner from "../ui/Banner";
import Speciality from "../ui/Speciality";
import TopDoctors from "../ui/TopDoctors";


function Home() {
  return (
    <div>
      <Hero />
      <Speciality />
      <TopDoctors/>
      <Banner />
    </div>
  );
}

export default Home;
