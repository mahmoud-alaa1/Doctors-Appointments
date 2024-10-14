
export default function TopDoctors() {

  return (
    <div className="flex  flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors
      </p>
      <div className=" w-full grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3  xl:grid-cols-5  gap-4 pt-5  px-2 sm:px-0">
        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc1.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>
        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc4.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>
        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc2.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>
        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc3.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>

        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc5.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>
        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc6.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>
        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc7.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>
        <div className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500">
          <img className=" bg-blue-50 " src="/public/doc8.png" />
          <div className=" p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <p className=" text-gray-900 text-lg font-medium">
              Dr. Richard James
            </p>
            <p className=" text-gray-600 text-sm"> General physician</p>
          </div>
        </div>
      </div>
      <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">
        More
      </button>
    </div>
  );
}



