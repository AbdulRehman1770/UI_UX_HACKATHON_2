import { FaCheckSquare } from "react-icons/fa";
import { MdCropSquare } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaCircleRadiation } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

export default function Detail() {
    return (
        <div>
            {/* parent div  */}
            <div className="grid grid-cols-4 grid-rows-12 gap-3 md:mx-7 mx-3 bg-gray-200">
                {/* left side  */}
                <div className=" col-span-1 row-span-12 bg-white hidden md:block pl-5 py-3 text-[16px] ">
                    <div>
                        <p className="text-[12px] text-gray-600 py-1">Type</p>
                        <div className="flex gap-1 items-center py-1">
                            <FaCheckSquare className="text-blue-600" />
                            <p>Sport (10)</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <FaCheckSquare className="text-blue-600" />
                            <p>SUV (12)</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <MdCropSquare className="text-blue-600" />
                            <p>MPV (12)</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <MdCropSquare className="text-blue-600" />
                            <p>Sedan (12)</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <MdCropSquare className="text-blue-600" />
                            <p>Coupe (12)</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <MdCropSquare className="text-blue-600" />
                            <p>Hatchback (12)</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="text-[12px] text-gray-600 py-1">Type</p>
                        <div className="flex gap-1 items-center py-1">
                            <FaCheckSquare className="text-blue-600" />
                            <p>2 Person</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <MdCropSquare className="text-blue-600" />
                            <p>4 Person</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <MdCropSquare className="text-blue-600" />
                            <p>6 Person</p>
                        </div>

                        <div className="flex gap-1 items-center py-1">
                            <FaCheckSquare className="text-blue-600" />
                            <p>8 Person or More</p>
                        </div>

                    </div>

                    <div className="mt-10">
                        <img src="/price.png" alt="Loading" className="w-48" />
                    </div>

                </div>

                {/* 2nd Section  */}
                <div className="col-span-3 row-span-3 rounded-lg mt-4">
                    <div className="grid md:grid-cols-7 mx-5 md:mx-0">
                        {/* left section  */}
                        <div className="md:col-span-3 grid grid-cols-3 w-[360px] md:w-auto bg-white">
                            <div className=" col-span-3 flex items-center font-bold gap-1 pl-3 py-3 text-[14px]">
                                <FaMapMarkerAlt />
                                <p>Pick - up</p>
                            </div>

                            {/* locations */}
                            <div className=" grid-cols-1 px-2 py-3">
                                <h1 className="font-bold md:text-[16px]">Locations</h1>
                                <div className="md:text-[12px] text-[8px] my-2 flex items-center md:justify-start justify-center gap-1 outline outline-gray-400 md:px-1 py-1">
                                    <p className="text-md md:hidden" >Semarang</p>
                                    <p className="hidden md:block ">Select your City</p>

                                    <AiOutlineDown /> </div>
                            </div>

                            {/* Date */}

                            <div className="grid-cols-1 px-2 py-3">
                                <h1 className="font-bold md:text-[16px]">Date</h1>
                                <div className="md:text-[12px] text-[8px] my-2 flex items-center md:justify-start justify-center gap-1 outline outline-gray-400 md:px-1 py-1">
                                    <p className="text-md md:hidden" >20-JULY-2022</p>
                                    <p className="hidden md:block ">Select your Date</p>

                                    <AiOutlineDown /> </div>
                            </div>

                            {/* Time  */}
                            <div className=" grid-cols-1 px-2 py-3">
                                <h1 className="font-bold md:text-[16px]">Time</h1>
                                <div className="md:text-[12px] text-[8px] my-2 flex items-center md:justify-start justify-center gap-1 outline outline-gray-400 md:px-1 py-1">
                                    <p className="text-md md:hidden" >7.00</p>
                                    <p className="hidden md:block ">Select your Time</p>

                                    <AiOutlineDown /> </div>
                            </div>
                        </div>
                        {/* Middle Section  */}
                        <div className=" flex justify-center items-center md:text-8xl text-4xl text-blue-600">
                            <MdDateRange />
                        </div>

                        {/* right section  */}
                        <div className="md:col-span-3 grid grid-cols-3 bg-white">
                            <div className=" col-span-3">
                                <div className="0 col-span-3 flex items-center font-bold gap-1 pl-3 py-3 text-[14px]">
                                    <FaMapMarkerAlt />
                                    <p>Drop - Off</p>
                                </div>
                            </div>

                            {/* Location  */}
                            <div className=" grid-cols-1 px-2 py-3">
                                <h1 className="font-bold md:text-[16px]">Locations</h1>
                                <div className="md:text-[12px] text-[8px] my-2 flex items-center md:justify-start justify-center gap-1 outline outline-gray-400 md:px-1 py-1">
                                    <p className="text-md md:hidden" >Semarang</p>
                                    <p className="hidden md:block ">Select your City</p>

                                    <AiOutlineDown /> </div>
                            </div>
                            <div className=" grid-cols-1 px-2 py-3">
                                <h1 className="font-bold md:text-[16px]">Date</h1>
                                <div className="md:text-[12px] text-[8px] my-2 flex items-center md:justify-start justify-center gap-1 outline outline-gray-400 md:px-1 py-1">
                                    <p className="text-md md:hidden" >21-JULY-2022</p>
                                    <p className="hidden md:block ">Select your Date</p>

                                    <AiOutlineDown /> </div>
                            </div>

                            {/* Time  */}
                            <div className=" grid-cols-1 px-2 py-3">
                                <h1 className="font-bold md:text-[16px]">Time</h1>
                                <div className="md:text-[12px] text-[8px] my-2 flex items-center md:justify-start justify-center gap-1 outline outline-gray-400 md:px-1 py-1">
                                    <p className="text-md md:hidden" >1.00</p>
                                    <p className="hidden md:block ">Select your Time</p>

                                    <AiOutlineDown /> </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3rd Section */}

                <div className="col-span-3 row-span-8 mx-5 relative md:top-[-70px] top-[-270px]">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                        {/* First Card  */}
                        <div className="md:w-64 w-[360px] h-60 bg-white hidden md:block">
                            <div className="bg-white md:w-64 w-[360px] h-56 grid grid-cols-5 grid-rows-10">
                                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                    <h1>Koenigsegg</h1>
                                    <FaHeart className="text-red-600" />
                                </div>
                                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sport</div>
                                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                    <img src="/car.png" alt="" />
                                </div>
                                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                        <FaGasPump />
                                        <p>90L</p>
                                    </div>
                                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                        <FaCircleRadiation />
                                        <p>Manual</p>
                                    </div>
                                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                        <IoIosPeople />
                                        <p>2 People</p>
                                    </div>
                                </div>
                                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                    <div className="font-bold">$99.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                                </div></div>
                        </div>

                        {/* First Card Complete  */}

                        {/* Second Card  */}

                        <div className=" md:w-64 w-[360px] h-60 bg-white hidden md:block">
                            <div className="bg-white md:w-64 w-[360px] h-56 grid grid-cols-5 grid-rows-10">
                                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                    <h1>Nissan GT-R</h1>
                                    <CiHeart />
                                </div>
                                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sport</div>
                                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                    <img src="/car1.png" alt="" />
                                </div>
                                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                        <FaGasPump />
                                        <p>80L</p>
                                    </div>
                                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                        <FaCircleRadiation />
                                        <p>Manual</p>
                                    </div>
                                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                        <IoIosPeople />
                                        <p>2 People</p>
                                    </div>
                                </div>
                                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                    <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day <div className="text-gray-500 line-through">$100.00</div></span></div>
                                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                                </div></div>
                        </div>

                        {/* Second Card Complete  */}

                        {/* Third Card  */}
                        <div className="bg-white md:w-64 w-[360px] h-60">
                            <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                <h1>Rolls-Royce</h1>
                                <FaHeart className="text-red-600" />
                            </div>
                            <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sedan</div>
                            <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                <img src="/car2.png" alt="" />
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between ">
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaGasPump />
                                    <p>70L</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaCircleRadiation />
                                    <p>Manual</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <IoIosPeople />
                                    <p>2 People</p>
                                </div>
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                <div className="font-bold">$96.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                                <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                            </div>
                        </div>

                        {/* Third Card Complete  */}

                        {/* Fourth Card */}
                        <div className="bg-white md:w-64 w-[360px] h-64 ">
                            <div className=" col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
                                <h1>All New Terios</h1>
                                <CiHeart />
                            </div>
                            <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                            <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                <img src="/car4.png" alt="" />
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaGasPump />
                                    <p>90L</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaCircleRadiation />
                                    <p>Manual</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <IoIosPeople />
                                    <p>2 People</p>
                                </div>
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                <div className="font-bold">$74.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                                <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                            </div>
                        </div>

                        {/* Fifth Card  */}

                        <div className="bg-white md:w-64 w-[360px] h-64">
                            <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                <h1>CR -V</h1>
                                <FaHeart className="text-red-600" />
                            </div>
                            <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                            <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                <img src="/car3.png" alt="" />
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaGasPump />
                                    <p>80L</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaCircleRadiation />
                                    <p>Manual</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <IoIosPeople />
                                    <p>2 People</p>
                                </div>
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                                <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                            </div>
                        </div>

                        {/* Fifth Card end */}
                        <div className="bg-white md:w-64 w-[360px] h-64">
                            <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                <h1>All new Rush</h1>
                                <CiHeart />
                            </div>
                            <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                            <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                <img src="/Car5.png" alt="" />
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaGasPump />
                                    <p>70L</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaCircleRadiation />
                                    <p>Manual</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <IoIosPeople />
                                    <p>2 People</p>
                                </div>
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                <div className="font-bold">$72.00/<span className="font-light text-[10px] text-gray-400">day<div className="text-gray-500 line-through">$100.00</div></span></div>
                                <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                            </div>
                        </div>
                        {/* Fifth Card End  */}

                        {/* Sixth Card  */}
                        <div className="bg-white md:w-64 w-[360px] h-64">
                            <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                <h1>MG ZX Exclusive</h1>
                                <FaHeart className="text-red-600" />
                            </div>
                            <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                            <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                <img src="/Car6.png" alt="" />
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaGasPump />
                                    <p>70L</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaCircleRadiation />
                                    <p>Manual</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <IoIosPeople />
                                    <p>2 People</p>
                                </div>
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                <div className="font-bold">$76.00/<span className="font-light text-[10px] text-gray-400">day<div className="text-gray-500 line-through">$80.00</div></span></div>
                                <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                            </div>
                        </div>

                        {/* Sixth Card End  */}

                        {/* Seventh Card */}
                        <div className="bg-white md:w-64 w-[360px] h-64 ">
                            <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                <h1>CR -V</h1>
                                <FaHeart className="text-red-600" />
                            </div>
                            <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                            <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                <img src="/Car8.png" alt="" />
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaGasPump />
                                    <p>80L</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaCircleRadiation />
                                    <p>Manual</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <IoIosPeople />
                                    <p>2 People</p>
                                </div>
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                                <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                            </div>
                        </div>

                        {/* Seventh Card Complete  */}

                        {/* Eight Card  */}
                        <div className="bg-white md:w-64 w-[360px] h-64">
                            <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                <h1>MG ZX Excite</h1>
                                <FaHeart className="text-red-600" />
                            </div>
                            <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">Hatchback</div>
                            <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                <img src="/Car6.png" alt="" />
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaGasPump />
                                    <p>90L</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <FaCircleRadiation />
                                    <p>Manual</p>
                                </div>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <IoIosPeople />
                                    <p>2 People</p>
                                </div>
                            </div>
                            <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                                <div className="font-bold">$74.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                                <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 flex justify-center items-center ">
                    <button className="bg-blue-600 text-white py-2 px-3 rounded-xl relative md:top-[-70px] top-[-340px] left-12 md:left-0 ">Show More Card</button>
                </div>
            </div>
        </div>
    )
}