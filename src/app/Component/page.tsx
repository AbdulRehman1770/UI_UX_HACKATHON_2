
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

export default function My1() {
  return (
    <div className="overflow-hidden">
      {/* 2 boxes */}
      <div className="flex flex-col md:flex-row justify-center py-10 md:gap-10 mx-5">
        {/* left box */}
        <div className="relative w-full md:w-[500px] h-auto bg-blue-400">
          <img
            src="/bg.png"
            alt="loading"
            className="object-cover w-full h-full"
          />

          {/* Headline */}
          <h1 className="absolute top-5 left-5 md:left-10 text-white md:text-[24px] text-[16px] w-64">
            The Best Platform For Car Rental
          </h1>

          {/* Paragraph */}
          <p className="absolute md:top-24 top-16 left-5 md:left-10 text-white md:text-[14px] text-[12px] w-52 md:w-72">
            Ease of Doing a Car rental safely and reliably. Of Course at a low price
          </p>

          {/* Button */}
          <button className="absolute md:bottom-24 bottom-5 left-5 text-[10px] md:text-[16px] md:left-10 bg-blue-800 text-white px-2 md:py-2 py-1 rounded-md">
            Rental Car
          </button>
        </div>

        {/* right box */}
        <div className="w-full md:w-[500px] h-auto bg-black mt-10 md:mt-0">
          <div className="relative w-full h-full bg-blue-600">
            <img
              src="/bg2.png"
              alt="loading"
              className="object-cover w-full h-full"
            />

            {/* Headline */}
            <h1 className="absolute top-5 left-5 md:left-10 text-white md:text-[24px] text-[16px] w-64">
              Easy way to rent a car at low price
            </h1>

            {/* Paragraph */}
            <p className="absolute md:top-24 top-16 left-5 md:left-10 text-white md:text-[14px] text-[12px] w-52 md:w-72">
              Providing cheap car rental services and safe and comfortable facilities
            </p>

            {/* Button */}
            <button className="absolute md:bottom-24 bottom-5 left-5 text-[10px] md:text-[16px] md:left-10 bg-blue-500 text-white px-2 md:py-2 py-1 rounded-md">
              Rental Car
            </button>
          </div>
        </div>
      </div>

      {/* Boxes Complete  */}
      <div className="grid md:grid-cols-7 md:mx-7 mx-3">
        {/* left section  */}
        <div className="md:col-span-3 grid grid-cols-3">
          <div className="col-span-3 flex items-center font-bold gap-1 pl-3 py-3 text-[14px]">
            <FaMapMarkerAlt />
            <p>Pick - up</p>
          </div>

          {/* locations */}
          <div className="col-span-1 px-2 py-3 mx-2">
            <h1 className="font-bold md:text-[16px] text-[14px]">Locations</h1>
            <div className="text-[12px] my-2 flex items-center justify-center md:justify-start gap-1 outline outline-gray-400 px-1 py-1">
              <p className="text-md md:hidden">Semarang</p>
              <p className="hidden md:block">Select your City</p>
              <AiOutlineDown />
            </div>
          </div>

          {/* Date */}
          <div className="col-span-1 px-2 py-3">
            <h1 className="font-bold md:text-[16px] text-[14px]">Date</h1>
            <div className="text-[12px] my-2 flex items-center justify-center md:justify-start gap-1 outline outline-gray-400 px-1 py-1">
              <p className="text-md md:hidden">20-JULY-2022</p>
              <p className="hidden md:block">Select your Date</p>
              <AiOutlineDown />
            </div>
          </div>

          {/* Time */}
          <div className="col-span-1 px-2 py-3">
            <h1 className="font-bold md:text-[16px] text-[14px]">Time</h1>
            <div className="text-[12px] my-2 flex items-center justify-center md:justify-start gap-1 outline outline-gray-400 px-1 py-1">
              <p className="text-md md:hidden">7.00</p>
              <p className="hidden md:block">Select your Time</p>
              <AiOutlineDown />
            </div>
          </div>
        </div>
        {/* Middle Section */}
        <div className="flex justify-center items-center md:text-8xl text-4xl text-blue-600">
          <MdDateRange />
        </div>

        {/* right section */}
        <div className="md:col-span-3 grid grid-cols-3">
          <div className="col-span-3">
            <div className="col-span-3 flex items-center font-bold gap-1 pl-3 py-3 text-[14px]">
              <FaMapMarkerAlt />
              <p>Drop - Off</p>
            </div>
          </div>

          {/* Location */}
          <div className="col-span-1 px-2 py-3 mx-2">
            <h1 className="font-bold md:text-[16px] text-[14px]">Locations</h1>
            <div className="text-[12px] my-2 flex items-center justify-center md:justify-start gap-1 outline outline-gray-400 px-1 py-1">
              <p className="text-md md:hidden">Semarang</p>
              <p className="hidden md:block">Select your City</p>
              <AiOutlineDown />
            </div>
          </div>
          <div className="col-span-1 px-2 py-3">
            <h1 className="font-bold md:text-[16px] text-[14px]">Date</h1>
            <div className="text-[12px] my-2 flex items-center justify-center md:justify-start gap-1 outline outline-gray-400 px-1 py-1">
              <p className="text-md md:hidden">21-JULY-2022</p>
              <p className="hidden md:block">Select your Date</p>
              <AiOutlineDown />
            </div>
          </div>

          {/* Time */}
          <div className="col-span-1 px-2 py-3">
            <h1 className="font-bold md:text-[16px] text-[14px]">Time</h1>
            <div className="text-[12px] my-2 flex items-center justify-center md:justify-start gap-1 outline outline-gray-400 px-1 py-1">
              <p className="text-md md:hidden">1.00</p>
              <p className="hidden md:block">Select your Time</p>
              <AiOutlineDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}