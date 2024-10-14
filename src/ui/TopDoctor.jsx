function TopDoctor({name="unknown",speciality="unknown",pathImage=""}) {
    return (
      <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
        <img className=" bg-blue-50 " src={pathImage} />
        <div className=" p-4">
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
            <p>Available</p>
          </div>
          <p className=" text-gray-900 text-lg font-medium">
          {name}
          </p>
          <p className=" text-gray-600 text-sm"> {speciality}</p>
        </div>
      </div>
    );
}

export default TopDoctor
