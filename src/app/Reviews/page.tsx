import { FaCheckSquare } from "react-icons/fa";
import { MdCropSquare } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaCircleRadiation } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

export default function Reviews() {
    return (
        <div className="overflow-hidden h-auto">
            {/* parent div  */}

            <div className="grid mx-3 md:mx-7 bg-gray-100 md:grid-cols-5 gap-2 ">
                {/* left section  */}
                <div className="bg-white md:row-span-10 hidden md:block pl-3 py-3 text-[14px]">
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

                    <div className="mt-10 w-36">
                        <img src="/price.png" alt="Loading" className="w-48" />
                    </div>
                </div>

                {/* left Section End  */}

                {/* 2nd Section  */}
                <div className="bg-white md:col-span-2 col-span-4 row-span-3">
                    <div className="grid grid-cols-3">
                        <div className="bg-blue-500 mx-auto md:mx-0 col-span-3 md:w-[420px] w-full h-[230px] rounded-2xl relative">
                            <img src="/bg1.png" alt="background" className="w-full h-[230px]" />
                            <div className="absolute inset-5 w-80 font-bold text-white text-2xl">Sports Car With The Best Design and acceleration</div>
                            <div className="absolute top-24 left-5 text-[16px] text-white">safety and comfort while driving a futuristics and elegant sports car</div>
                            <div className="absolute top-40 left-28"><img src="/car1.png" alt="loading" /></div>

                        </div>
                        <div className="bg-blue-500 h-[105px] w-[125px] my-4 relative rounded-md">
                            <img src="/bg1.png" alt="Loading" />
                            <img src="/car1.png" alt="Loading" className="absolute top-5" />
                        </div>
                        <div className="bg-green-500 h-24 w-[125px] my-4 rounded-md">
                            <img src="/View2.png" alt="Loading" />
                        </div>
                        <div className="bg-purple-500 h-24 w-[125px] my-4 rounded-md">
                            <img src="View3.png" alt="Loading" />
                        </div>
                    </div>
                </div>
                {/* 2nd Section Complete  */}

                {/* 3rd section  */}
                <div className="bg-white col-span-2 row-span-3 hidden md:block px-5 py-2">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">Nissan GT-R</h1>
                        <FaHeart className="text-red-600 " /></div>

                    <div className="flex items-center">
                        <FaStar className="text-orange-400 mx-1" />
                        <FaStar className="text-orange-400 mx-1" />
                        <FaStar className="text-orange-400 mx-1" />
                        <FaStar className="text-orange-400 mx-1" />
                        <FaRegStar className="text-gray-400 mx-1" />
                        <p className="text-[12px] text-gray-500">440+ reviewer</p>
                    </div>
                    <p className="mt-5">NISMO has become the embodiment of Nissan's outstanding performance.inspired by the most unforgiving proving ground the "race track"</p>
                    <div className="flex justify-between mt-7">
                        <p className="text-gray-500">TypeCar</p>
                        <p className="text-black">Sport</p>
                        <p className="text-gray-500"> Capacity</p>
                        <p className="text-black">2 Person</p>
                    </div>

                    <div className="flex justify-between mt-7">
                        <p className="text-gray-500">Steering</p>
                        <p className="text-black">Manual</p>
                        <p className="text-gray-500">Gasoline</p>
                        <p className="text-black">70L</p>
                    </div>

                    <div className="flex mt-7 justify-between items-center">
                        <div className="text-2xl font-bold">$80.00/<span className="text-sm text-gray-400 font-light">days<div className="line-through" >$100.00</div></span> </div>
                        <button className="bg-blue-500 py-2 px-3 text-white rounded-md">Rent Now</button>
                    </div>
                </div>

                {/* 3rd section complete  */}

                {/* 4th Section */}
                <div className="bg-white col-span-4 row-span-2 px-5 py-2">
                    <div className="flex gap-2 items-center">
                        <h1 className="font-bold text-2xl text-black ">Reviews</h1>
                        <p className="bg-blue-600 px-3 py-1 rounded inline text-white">13</p>
                    </div>
                    {/* Review 1 */}
                    <div>
                        <div className="flex gap-3 pt-4">
                            <img src="/image.png" alt="Loading" />
                            <div className="flex justify-between">
                                <div >
                                    <h1 className="font-bold text-xl">Alex Stanton</h1>
                                    <p className="text-gray-500 text-sm">CEO at Bukalapak</p>
                                </div>
                                <div className="relative md:left-[520px] left-20">
                                    <p className="text-gray-500">21 July 2022</p>
                                    <div className="flex gap-1">
                                        <FaStar className="text-orange-400" />
                                        <FaStar className="text-orange-400" />
                                        <FaStar className="text-orange-400" />
                                        <FaStar className="text-orange-400" />
                                        <FaRegStar className="text-orange-400" />
                                    </div>
                                </div></div>
                        </div>
                        <p className="text-[13px] pt-4 pl-14">We are very Happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities.In addition, the service provided by the officers is also very friendly and very polite</p>
                    </div>
                    {/* Review 1 Ended  */}

                    {/* Review 2 */}

                    <div>
                        <div className="flex gap-3 pt-4">
                            <img src="/Profill.png" alt="Loading" className="w-11" />
                            <div className="flex justify-between">
                                <div >
                                    <h1 className="font-bold text-xl">Skyler Dias</h1>
                                    <p className="text-gray-500 text-sm">CEO at Amazon</p>
                                </div>
                                <div className="relative md:left-[540px] left-24">
                                    <p className="text-gray-500">21 July 2022</p>
                                    <div className="flex gap-1">
                                        <FaStar className="text-orange-400" />
                                        <FaStar className="text-orange-400" />
                                        <FaStar className="text-orange-400" />
                                        <FaStar className="text-orange-400" />
                                        <FaRegStar className="text-orange-400" />
                                    </div>
                                </div></div>
                        </div>
                        <p className="text-[13px] pl-14">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                    </div>

                </div>


                <div className="bg-white row-span-5 col-span-4 relative">
                    {/* parent div  */}
                    <div>
                        {/* uppersection  */}
                        <div className="grid grid-cols-3 mx-5">
                            <div className=" w-full h-10 flex items-center justify-between col-span-3 mx-0">
                                <h1 className="text-gray-600">Recent Car</h1>
                                <h1 className="text-blue-600">View All</h1>
                            </div>
                            {/* Card 1 */}
                            <div className="bg-yellow-500 w-64 h-64">
                                <div className="bg-white w-64 h-64 grid grid-cols-5 grid-rows-10">
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

                            {/* Card 2 */}

                            <div className="bg-pink-500 w-64 relative left-36 md:left-0 h-64">
                                <div className="bg-white w-64 h-64 grid grid-cols-5 grid-rows-10">
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

                            {/* Card 2 Complete  */}

                            {/* Card 3 */}

                            <div className="bg-white hidden md:block w-64 h-64">

                                <div className="col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                                    <h1>Rolls-Royce</h1>
                                    <FaHeart className="text-red-600" />
                                </div>
                                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sedan</div>
                                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                                    <img src="/car2.png" alt="" className="mt-5 mb-6" />
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
                                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-5">
                                    <div className="font-bold">$96.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                                </div>

                            </div>

                            {/* Card 3 Complete  */}
                        </div>
                        {/* lower section  */}
                        <div className="grid grid-cols-3 mx-5 my-5">
                            {/* Card 1 */}
                            <div className="bg-white h-64 w-64">
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

                            {/* Card 1 Complete  */}

                            {/* Card 2 */}
                            <div className="bg-white h-64 w-64 relative left-36 md:left-0  ">
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

                            {/* Card 2 Complete  */}

                            {/* Card 3 */}
                            <div className="bg-white h-64 w-64 hidden md:block ">
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
                                
                            {/* Card 3 Complete  */}

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}