"use client";
import Link from "next/link";
import { useState } from "react";

export default function MainHead() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-5 text-blue flex items-center justify-between relative">

      <h1 className="text-3xl font-bold">AutoHaven Car Rental</h1>
      <button
        className="md:hidden text-4xl focus:outline-none"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        &#8801;
      </button>
      <nav
        className={`absolute md:static bg-blue-500 md:bg-transparent w-full md:w-auto left-0 z-50 ${isMenuOpen ? "top-[60px]" : "top-[-400px]"
          } transition-all duration-300 ease-in-out md:flex md:items-center`}
      >
        <ul className="md:flex md:space-x-6 text-center">
          <li className="text-md hover:text-gray-200 p-3 bg-blue-600 rounded-md text-white">
            <Link href="/Home">Home</Link>
          </li>
          <li className="text-md hover:text-gray-200 p-3 bg-blue-600 rounded-md text-white">
            <Link href="/AllCars">Available Cars</Link>
          </li>
          <li className="text-md hover:text-gray-200 p-3 bg-blue-600 rounded-md text-white">
            <Link href="/BookCar">Book Car</Link>
          </li>
          <li className="text-md hover:text-gray-200 p-3 bg-blue-600 rounded-md text-white">
            <Link href="/Reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
