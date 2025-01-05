"use client"
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaCircleRadiation } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import { useState } from 'react';

export default function My3() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="grid md:grid-cols-4 md:mx-7 mx-3 gap-2 align-items-center">
        {/* First Box */}
        <div className="w-full h-64 col-span-1 my-4 shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>All New Terios</h1>
            <CiHeart />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">Hatchback</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car1.png`}
              alt="Car1"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$76.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Second Box */}
        <div className="w-full h-64 col-span-1 my-4 shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>CR -V</h1>
            <FaHeart className="text-red-600" />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">SUV</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car2.png`}
              alt="Car2"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Third Box */}
        <div className="w-full h-64 col-span-1 my-4 shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>All new Rush</h1>
            <CiHeart />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">Hatchback</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car3.png`}
              alt="Car3"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$76.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="w-full h-64 col-span-1 my-4 shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>New MG ZS</h1>
            <FaHeart className="text-red-600" />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">SUV</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car4.png`}
              alt="Car4"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Fifth Box (hidden on smaller screens) */}
        <div className="w-full h-64 col-span-1 my-4 hidden md:block shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>MG ZX Exclusive</h1>
            <CiHeart />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">Hatchback</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car5.png`}
              alt="Car5"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$76.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Sixth Box (hidden on smaller screens) */}
        <div className="w-full h-64 col-span-1 my-4 hidden md:block shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>CR -V</h1>
            <FaHeart className="text-red-600" />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">SUV</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car6.png`}
              alt="Car6"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Seventh Box (hidden on smaller screens) */}
        <div className="w-full h-64 col-span-1 my-4 hidden md:block shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>MG ZX Excite</h1>
            <CiHeart />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">Hatchback</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car7.png`}
              alt="Car7"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$76.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>

        {/* Eighth Box (hidden on smaller screens) */}
        <div className="w-full h-64 col-span-1 my-4 hidden md:block shadow-md">
          <div className="col-span-5 row-span-2 flex items-center justify-between mx-4 font-bold">
            <h1>New MG ZX</h1>
            <FaHeart className="text-red-600" />
          </div>
          <div className="text-gray-400 col-span-5 text-[12px] mx-4">SUV</div>
          <div className="col-span-5 row-span-3 flex justify-center pt-3 items-center ">
            <Image
              src={`/Car8.png`}
              alt="Car8"
              width={200}
              height={100}
              className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </div>
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-4 ">
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
          <div className="col-span-5 row-span-2 mx-4 flex items-center justify-between mt-2">
            <div className="font-bold">$80.00/<span className="font-light text-[10px] text-gray-400">day</span></div>
            <button className="px-2 py-1 text-white text-[15px] rounded-sm bg-blue-600">Rent Now</button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Show More Car</button>
      </div>
    </div>
  );
}