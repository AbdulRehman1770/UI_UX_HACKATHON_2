import { IoMdHome } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdForwardToInbox } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";




export default function Admin() {
    return (
        <div>
            {/* parent div*/}
            <div className="mx-3 md:mx-7 grid md:grid-cols-3 md:grid-rows-2 gap-3">
                {/* First Section  */}
                <div className="bg-white md:row-span-2 hidden md:block p-3 w-60">
                    <p className="text-sm text-gray-600 pb-2">Main Menu</p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 bg-blue-600 text-white rounded-xl w-48 p-3">
                            <IoMdHome />
                            <p>Dashboard</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <FaCarSide />
                            <p>Car Rent</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <GoGraph />
                            <p>Insights</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <MdForwardToInbox />
                            <p>Inbox</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <SlCalender />
                            <p>Calender</p>
                        </div></div>

                    <div>
                        <h1 className="text-sm text-gray-600 mt-5">preferences</h1>
                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <IoMdSettings />
                            <p>Settings</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <IoIosHelpCircleOutline />
                            <p>Help and Center</p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <CgDarkMode />
                            <p>Dark Mode</p>
                        </div>

                    </div>

                    <div>
                        <h1 className="text-sm text-gray-600 mt-5">preferences</h1>
                        <div className="flex items-center gap-3 text-gray-600 rounded-xl w-48 p-3">
                            <CiLogout />
                            <p>Logout</p>
                        </div></div>

                </div>

                {/* Second Section  */}
                <div className="bg-white md:row-span-2 p-3 md:ml-[-120px] md:mr-[80px]">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-semibold">Details Rent</h1>
                        <img src="/Maps.png" alt="Loading" className="h-60" />
                    </div>

                    <div>
                        <div className="flex items-center gap-7 py-4">
                            <div className="bg-blue-500 h-[105px] w-[125px] my-4 relative rounded-md">
                                <img src="/bg1.png" alt="Loading" />
                                <img src="/car1.png" alt="Loading" className="absolute top-7" />
                            </div>
                            <div>
                                <p className="text-4xl font-bold">Nissan GT - R</p>
                                <div className="flex gap-1 items-center">
                                    <FaStar className="text-orange-400" />
                                    <FaStar className="text-orange-400" />
                                    <FaStar className="text-orange-400" />
                                    <FaStar className="text-orange-400" />
                                    <FaRegStar className="text-orange-400" />
                                    <p className="text-sm text-gray-600">440+ Reviewer</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-1 bg-black my-2"></div>

                        <div className="flex items-center justify-between py-3">
                            <p className="text-gray-400">Subtotal</p>
                            <p className="text-xl font-bold">$80.00</p>
                        </div>

                        <div className="flex items-center justify-between py-3">
                            <p className="text-gray-400">Tax</p>
                            <p className="text-xl font-bold">$0</p>
                        </div>

                        <div className="flex item-center justify-between p-4 bg-gray-200 rounded-2xl mt-3 ">
                            <p>Apply Promo Code</p>
                            <p>Apply Now</p>
                        </div>

                        <div className="flex items-center justify-between my-4">
                            <div>
                                <p className="text-xl font-semibold">Total Rental Price</p>
                                <p className="text-sm text-gray-600 ">Overall Price and includes rental discount</p>
                            </div>
                            <div className="text-4xl font-bold">$80.00</div>
                        </div>
                    </div>
                </div>

                {/* Third Section  */}
                <div className="bg-white p-3 md:ml-[-80px] md:mr-[20px]">
                    <div className="flex items-center justify-between text-2xl text-semibold">
                        <h1>Top 5 Rental Car</h1>
                        <HiDotsHorizontal/></div>

                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <img src="/Chart.png" alt="Laoding" className="mt-7" />
                                <div className="absolute top-[110px] left-[74px] ">
                                    <h1 className="font-semibold">72,030</h1>
                                    <p className="text-sm text-gray-600">Rental Car</p>
                                </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between space-x-12 md:space-x-16">
                                <div className="flex items-center gap-2">
                                    <FaCircle className="text-blue-900"/>
                                <p className="text-gray-600">Sport Card</p>
                            </div><p>17,439</p></div>

                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-2">
                                    <FaCircle className="text-blue-900"/>
                                <p className="text-gray-600">SUV</p>
                            </div><p>9,478</p></div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaCircle className="text-blue-900"/>
                                <p className="text-gray-600">Coupe</p>
                            </div><p>18,197</p></div>


                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-2">
                                    <FaCircle className="text-blue-900"/>
                                <p className="text-gray-600">Hatch Back</p>
                            </div><p>12,510</p></div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaCircle className="text-blue-900"/>
                                <p className="text-gray-600">MPV</p>
                            </div><p>14,406</p></div>

                    </div></div>
                </div>
                
            </div>
        </div>
    )
}