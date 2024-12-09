import Image from "next/image";
import { FaSearch } from "react-icons/fa";


export default function Header() {
  return (

    <div className="grid md:grid-cols-4 grid-cols-2 mx-3 mb-4 md:mx-7">
      <div className="bg-white">
      <p className="text-blue-600 text-xl md:text-3xl font-semibold p-4">
        Morent
        </p>
      </div>

      {/* 2nd section  */}
      <div className="bg-white col-span-2 order-3 md:order-none">

      <div className="relative mx-7">
  <input
    type="text"
    placeholder="Search Something Here"
    className="w-96 border p-3 pl-10 bg-gray-200 rounded-lg outline-none"
  />
  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
</div>

      </div>

      <div className="bg-white order-2 md:order-none">
      <div className="md:flex md:gap-6 p-3">
    {/* //     Icons */}
        <img
          src="/Like.png"
          alt="Like"
          className="hidden md:block"
        />
        <img
          src="/Notification.png"
          alt="Notification"
          className="hidden md:block"
        />
        <img
          src="/Settings.png"
          alt="Settings"
          className="hidden md:block"
        />
        {/* Profile Image */}
        <img
          src="/Image.png"
          alt="Profile"
          className=" relative left-36 w-8 md:left-0 md:w-auto"
        />
      </div> 
      </div>
    </div>
    // <header className="bg-white w-full h-24 lg:flex lg:items-center lg:justify-between lg:px-10">
    //   {/* Left Section of Header */}
    //   <div className="lg:flex lg:items-center lg:justify-between lg:gap-36">
        
    //     <input
    //       type="text"
    //       placeholder="Search Something Here"
    //       className="border p-3 ml-7 lg:pr-32 lg:pl-7 lg:rounded-lg"
    //     />
    //   </div>

    //   {/* Right Section of Header */}
    //   <div className="lg:flex lg:gap-6">
    //     {/* Icons */}
    //     <img
    //       src="/Like.png"
    //       alt="Like"
    //       className="hidden lg:block"
    //     />
    //     <img
    //       src="/Notification.png"
    //       alt="Notification"
    //       className="hidden lg:block"
    //     />
    //     <img
    //       src="/Settings.png"
    //       alt="Settings"
    //       className="hidden lg:block lg:mr-10"
    //     />
    //     {/* Profile Image */}
    //     <img
    //       src="/Image.png"
    //       alt="Profile"
    //       className="relative bottom-28 left-[410px] w-6 lg:w-10 lg:fixed lg:bottom-[515px] lg:ml-[780px]"
    //     />
    //   </div>
    // </header>
  );
}
