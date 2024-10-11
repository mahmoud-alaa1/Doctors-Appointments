import Brand from "../icons/Brand"

function Logo({className=""}) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <Brand />
      <p className="text-[#000B6D] tracking-widest text-4xl font-medium ">Shifaa</p>
    </div>
  );
}

export default Logo
