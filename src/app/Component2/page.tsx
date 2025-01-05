<<<<<<< HEAD
=======
"use client"
>>>>>>> 341a056 (first commit)
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaCircleRadiation } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
<<<<<<< HEAD
export default function My2(){
    return(
        <div>
            {/* Popular Car */}
        <div className="md:mx-7 mx-3 grid md:grid-cols-4 grid-cols-2 gap-2 mb-14 " >
            <div className=" md:col-span-2 text-gray-400 px-4 text-[15px] py-2">
                Popular car
            </div>
            <div className=" md:col-span-2 text-blue-700 px-4 ml-20 md:ml-96 text-[15px] py-2">
                View all
            </div>
            {/* Card 1  */}
            <div className="w-[260px] bg-white h-48 grid grid-cols-5 grid-rows-10">
                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                    <h1>Koenigsegg</h1> 
                    <FaHeart className="text-red-600"/>
                </div>
                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sport</div>
                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                    <img src="/car.png" alt="" />
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
                    <div className="font-bold">$99.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div></div>
           {/* First Card Complete */}

           {/* Card 2 */}
           
            <div className="w-[260px] h-48 relative left-16 md:left-0">
                <div className="w-[260px] bg-white h-48 grid grid-cols-5 grid-rows-10">
                <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                    <h1>Nissan GT-R</h1> 
                    <CiHeart/>
                </div>
                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sport</div>
                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                    <img src="/car1.png" alt="" />
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
                    <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day <div className="text-gray-500 line-through">$100.00</div></span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div></div></div>

                {/* Card 2 Complete  */}

                {/* Card 3  */}
            <div className="w-[260px] h-48 hidden md:block">
            <div className=" col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
                    <h1>Rolls-Royce</h1> 
                    <FaHeart className="text-red-600"/>
                </div>
                <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sedan</div>
                <div className=" col-span-5 row-span-3 flex justify-center pt-3 items-center ">
                    <img src="/car2.png" alt="" />
                </div>
                <div className=" col-span-5 row-span-2 mx-4 flex items-center justify-between ">
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
                    <div className="font-bold">$96.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div>
            </div>

            {/* Third Car Card Complete  */}

            {/* Card 4 */}
            <div className="bg-orange-600 w-[260px] h-48 hidden md:block">
            <div className="w-[260px] bg-white h-48 grid grid-cols-5 grid-rows-10">
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
                    <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day <div className="text-gray-500 line-through">$100.00</div></span></div>
                    <button className=" px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
                </div></div>
            </div>
        </div>
        </div>
    )
=======
import Image from 'next/image';
import { useState } from 'react';

export default function My2() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="md:mx-7 mx-3 grid md:grid-cols-4 grid-cols-2 gap-2 mb-14">
        <div className="md:col-span-2 text-gray-400 text-[15px] py-2 text-center md:text-left">
          Popular car
        </div>
        <div className="md:col-span-2 text-blue-700 px-4 ml-auto text-[15px] py-2 text-center md:text-right">
          View all
        </div>

        {/* First Box */}
        <div className="w-full bg-white h-56 grid grid-cols-5 grid-rows-10 shadow-md pb-4">
          <div className="col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
            <h1>Koenigsegg</h1>
            <FaHeart className="text-red-600" />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sport</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center w-40 md:w-52 mx-auto">
            <Image
              src="/car1.png"
              alt="Koenigsegg"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 md:text-[12px] text-[10px] row-span-2 mx-4 flex items-center justify-between mt-4 ">
            <div className=" text-gray-400 flex items-center gap-1">
              <FaGasPump />
              <p>90L</p>
            </div>
            <div className=" text-gray-400 flex items-center gap-1">
              <FaCircleRadiation />
              <p>Manual</p>
            </div>
            <div className=" text-gray-400 flex items-center gap-1">
              <IoIosPeople />
              <p>2 People</p>
            </div>
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$99.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white md:text-[15px] text-[10px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Second Box */}
        <div className="w-full bg-white h-56 grid grid-cols-5 grid-rows-10 shadow-md pb-2">
          <div className="col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
            <h1>Nissan GT-R</h1>
            <CiHeart />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sport</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center w-40 md:w-52 mx-auto">
            <Image
              src="/car2.png"
              alt="Nissan GT-R"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 md:text-[12px] text-[10px] row-span-2 mx-4 flex items-center justify-between mt-4 ">
            <div className=" text-gray-400 flex items-center gap-1">
              <FaGasPump />
              <p>80L</p>
            </div>
            <div className=" text-gray-400 flex items-center gap-1">
              <FaCircleRadiation />
              <p>Manual</p>
            </div>
            <div className=" text-gray-400 flex items-center gap-1">
              <IoIosPeople />
              <p>2 People</p>
            </div>
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white md:text-[15px] text-[10px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Third Box */}
        <div className="w-full bg-white h-56 grid grid-cols-5 grid-rows-10 shadow-md pb-4">
          <div className="col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
            <h1>Rolls-Royce</h1>
            <FaHeart className="text-red-600" />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sedan</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-8 items-center w-40 md:w-52 mx-auto ">
            <Image
              src="/car3.png"
              alt="Rolls-Royce"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 md:text-[12px] text-[10px] row-span-2 mx-4 flex items-center justify-between mt-10 ">
            <div className=" text-gray-400 flex items-center gap-1">
              <FaGasPump />
              <p>80L</p>
            </div>
            <div className=" text-gray-400 flex items-center gap-1">
              <FaCircleRadiation />
              <p>Manual</p>
            </div>
            <div className=" text-gray-400 flex items-center gap-1">
              <IoIosPeople />
              <p>2 People</p>
            </div>
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-5">
            <div className="font-bold">$96.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white md:text-[15px] text-[10px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="w-full bg-white h-56 grid grid-cols-5 grid-rows-10 shadow-md pb-4">
          <div className="col-span-5 row-span-2 flex items-center pt-3 justify-between mx-4 font-bold">
            <h1>Nissan GT-R</h1>
            <CiHeart />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4 items-center">sport</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-8 items-center w-40 md:w-52 mx-auto">
            <Image
              src="/car4.png"
              alt="Nissan GT-R"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 md:text-[12px] text-[10px] mx-4 flex items-center justify-between mt-10 ">
            <div className="text-gray-400 flex items-center gap-1">
              <FaGasPump />
              <p>80L</p>
            </div>
            <div className="text-gray-400 flex items-center gap-1">
              <FaCircleRadiation />
              <p>Manual</p>
            </div>
            <div className="text-gray-400 flex items-center gap-1">
              <IoIosPeople />
              <p>2 People</p>
            </div>
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-5">
            <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white md:text-[15px] text-[10px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 341a056 (first commit)
}