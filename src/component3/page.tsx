import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaCircleRadiation } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
export default function My3() {
    return (
        <div>
            {/* parent div */}
            <div className="grid md:grid-cols-4 md:mx-7 mx-3 align-items-center">
              
                {/* <div className=" md:col-span-4 text-gray-400 text-[14px] col-span-1">
                    <p>Recommendation Car </p>
                </div> */}

                {/* Card 1 */}
                
                <div className="md:w-64 w-[360px] h-64 col-span-1 my-4 ">
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
                        <FaGasPump/>
                        <p>90L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
                        <p>2 People</p>
                    </div>
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                    <div className="font-bold">$74.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
                </div>

                {/* Card 1 Complete */}

                {/* Card 2 */}

                <div className="md:w-64 w-[360px] h-64 col-span-1">
                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                    <h1>CR -V</h1> 
                    <FaHeart className="text-red-600"/>
                </div>
                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                    <img src="/car3.png" alt="" />
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaGasPump/>
                        <p>80L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
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

                 <div className="md:w-64 w-[360px] h-64 col-span-1">
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
                        <FaGasPump/>
                        <p>70L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
                        <p>2 People</p>
                    </div>  
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                    <div className="font-bold">$72.00/<span className="font-light text-[10px] text-gray-400">day<div className="text-gray-500 line-through">$100.00</div></span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
                </div>
                {/* Card 3 Complete  */}

                 {/* Card 4 */}

                 <div className="md:w-64 w-[360px] h-64 col-span-1">
                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                    <h1>New MG ZS</h1> 
                    <CiHeart />
                </div>
                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                    <img src="/Car7.png" alt="" />
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaGasPump/>
                        <p>80L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
                        <p>2 People</p>
                    </div>  
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                    <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
                </div>
                {/* Card 4 Complete  */}

                {/* Card 5 */}

                <div className="md:w-64 w-[360px] h-64 col-span-1">
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
                        <FaGasPump/>
                        <p>70L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
                        <p>2 People</p>
                    </div>  
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                    <div className="font-bold">$76.00/<span className="font-light text-[10px] text-gray-400">day<div className="text-gray-500 line-through">$80.00</div></span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
                </div>
                {/* Card 5 Complete  */}

                  {/* Card 6 */}

                  <div className="md:w-64 w-[360px] h-64 col-span-1 hidden md:block">
                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                    <h1>CR -V</h1> 
                    <FaHeart className="text-red-600"/>
                </div>
                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                    <img src="/Car8.png" alt="" />
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaGasPump/>
                        <p>80L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
                        <p>2 People</p>
                    </div>
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                    <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
                </div>
                {/* Card 6 Complete  */}
                {/* Card 7 */}

                <div className="md:w-64 w-[360px] h-64 col-span-1 hidden md:block">
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
                        <FaGasPump/>
                        <p>90L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
                        <p>2 People</p>
                    </div>  
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                    <div className="font-bold">$74.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
                </div>
                {/* Card 7 Complete  */}

                {/* Card 8 */}

                <div className="md:w-64 w-[360px] h-64 col-span-1 hidden md:block">
                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                    <h1>New MG ZX</h1> 
                    <FaHeart className="text-red-600" />
                </div>
                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">SUV</div>
                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                    <img src="/Car9.png" alt="" />
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaGasPump/>
                        <p>80L</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <FaCircleRadiation/>
                        <p>Manual</p>
                    </div>
                    <div className="text-[12px] text-gray-400 flex items-center gap-1">
                        <IoIosPeople/>
                        <p>2 People</p>
                    </div>  
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
                    <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
                </div>
                {/* Card 8 Complete  */}

                
                
            </div>
            <div className="mt-10 flex justify-center items-center ">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md ">Show More Car</button>
                </div>
        </div>
    );
}
