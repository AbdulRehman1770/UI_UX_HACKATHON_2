import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

export default function Book() {
    return (
        <div className="bg-gray-100">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mx-3 md:mx-7">
                {/* first Box  */}
                <div className="bg-white p-5">
                    <h1 className="text-xl font-semibold">Billing Info</h1>
                    <div className="flex text-[12px] text-gray-400 justify-between items-center">
                       <p>Please Enter Your Billing info</p>
                       <p>Step 1 of 4</p>
                    </div>

                    <div className="grid grid-cols-2 pt-2">
                        <div>
                            <h1 className="py-2 font-semibold">Locations</h1>
                            <input type="input" placeholder="Your Name" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-gray-200 text-[12px]" />
                            
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Phone Number</h1>
                            <input type="input" placeholder="Phone Number" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-gray-200 text-[12px]" />
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Address</h1>
                            <input type="input" placeholder="Address" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-gray-200 text-[12px]" />
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Town/City</h1>
                            <input type="input" placeholder="Town/City" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-gray-200 text-[12px]" />
                        </div>
                    </div>
                </div>
                {/* First Box Complete  */}

                {/* Second Box  */}
                <div className="bg-white order-first md:order-none md:row-span-4 p-5">
                    <h1 className="font-semibold text-xl">Rental Summary</h1>
                    <p className="text-gray-600 text-sm">Prices may change depending on the length of the rental and the price of your rental car.</p>

                    <div className="flex items-center gap-7 py-4">
                    <div className="bg-blue-500 h-[105px] w-[125px] my-4 relative rounded-md">
                            <img src="/bg1.png" alt="Loading" />
                            <img src="/car1.png" alt="Loading" className="absolute top-7" />
                        </div>
                        <div>
                            <p className="text-4xl font-bold">Nissan GT - R</p>
                            <div className="flex gap-1 items-center">
                                <FaStar className="text-orange-400"/>
                                <FaStar className="text-orange-400"/>
                                <FaStar className="text-orange-400"/>
                                <FaStar className="text-orange-400"/>
                                <FaRegStar className="text-orange-400"/>
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

                {/* Second Box Complete  */}
                {/* parent div  */}

                {/* Third Box  */}
                <div className="bg-white p-5">

                <h1 className="text-xl font-semibold">Rental Info</h1>
                    <div className="flex text-[12px] text-gray-400 justify-between items-center">
                       <p>Please Enter Your Billing info</p>
                       <p>Step 2 of 4</p>
                    </div>

                {/* Pickup  */}
                <div className="flex items-center gap-2 mt-3">
                    <FaDotCircle className="text-blue-600 text-sm"/>
                    <p>Pick-up</p>
                </div>

                <div className="grid grid-cols-2 pt-2 ">
                        <div>
                            <h1 className="py-2 font-semibold">Locations</h1>
                             <div className="px-3 w-40 md:w-48 py-2 rounded-xl bg-gray-200 text-[12px] flex justify-between items-center" >
                                <h1>Select your city</h1>
                            <IoIosArrowDown /></div>
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Date</h1>
                             <div className="px-3 w-40 md:w-48 py-2 rounded-xl bg-gray-200 text-[12px] flex justify-between items-center" >
                                <h1>Select your Date</h1>
                            <IoIosArrowDown /></div>
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Time</h1>
                             <div className="px-3 w-40 md:w-48 py-2 rounded-xl bg-gray-200 text-[12px] flex justify-between items-center" >
                                <h1>Select your Time</h1>
                            <IoIosArrowDown /></div>
                        </div>
                        </div>

                {/* Drop off  */}
                <div className="flex items-center gap-2 mt-3">
                    <FaDotCircle className="text-blue-600 text-sm"/>
                    <p>Drop OFF</p>
                </div>

                <div className="grid grid-cols-2 pt-2 ">
                        <div>
                            <h1 className="py-2 font-semibold">Locations</h1>
                             <div className="px-3 w-40 md:w-48 py-2 rounded-xl bg-gray-200 text-[12px] flex justify-between items-center" >
                                <h1>Select your city</h1>
                            <IoIosArrowDown /></div>
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Date</h1>
                             <div className="px-3 w-40 md:w-48 py-2 rounded-xl bg-gray-200 text-[12px] flex justify-between items-center" >
                                <h1>Select your Date</h1>
                            <IoIosArrowDown /></div>
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Time</h1>
                             <div className="px-3 w-40 md:w-48 py-2 rounded-xl bg-gray-200 text-[12px] flex justify-between items-center" >
                                <h1>Select your Time</h1>
                            <IoIosArrowDown /></div>
                        </div>
                        </div>

                </div>
                {/* Third Box Complete  */}

                {/* Fourth Box  */}
                <div className="bg-white p-5">
                <h1 className="text-xl font-semibold">Payment Method</h1>
                    <div className="flex text-[12px] text-gray-400 justify-between items-center">
                       <p>Please Enter Payment Method</p>
                       <p>Step 3 of 4</p>
                    </div>

                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 mt-3">
                    <FaDotCircle className="text-blue-600 text-sm"/>
                    <p>Pick-up</p>
                     </div>
                     <img src="/Visa.png" alt="Loading" />
                    </div>

                    <div className="grid grid-cols-2 p-3 mt-2 bg-gray-200 ">
                        <div>
                            <h1 className="py-2 font-semibold">Card Number</h1>
                            <input type="input" placeholder="Card Number" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-white text-[12px]" />
                            
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Expiration Date</h1>
                            <input type="input" placeholder="DD/MM/YY" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-white-200 text-[12px]" />
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">Card Holder</h1>
                            <input type="input" placeholder="Card Holder" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-white-200 text-[12px]" />
                        </div>
                        <div>
                            <h1 className="py-2 font-semibold">CVC</h1>
                            <input type="input" placeholder="CVC" className="px-3 w-40 md:w-auto py-2 rounded-xl bg-white-200 text-[12px]" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-5 bg-gray-200 rounded-xl px-5 py-2">
                    <div className="flex items-center gap-3">
                    <FaCircle className="text-white"/>
                    <p className="font-semi-bold">Paypal</p>
                    </div>
                    <img src="/Paypal.png" alt="Loading" />
                    </div>

                    <div className="flex items-center justify-between mt-5 bg-gray-200 rounded-xl px-5 py-2">
                    <div className="flex items-center gap-3">
                    <FaCircle className="text-white"/>
                    <p className="font-semi-bold">Bitcoin</p>
                    </div>
                    <img src="/Bitcoin.png" alt="Loading" />
                    </div>
                </div>

                {/* Fifth Box  */}
                <div className="bg-white p-5">
                <h1 className="text-xl font-semibold">Confirmation</h1>
                    <div className="flex text-[12px] text-gray-400 justify-between items-center">
                       <p>We are getting to the end. Just few clicks and your rental is ready!</p>
                       <p>Step 4 of 4</p>
                </div>

                <div className="flex items-center gap-3 mt-5 bg-gray-200 rounded-xl px-5 py-2">
                    <FaCircle className="text-white"/>
                    <p className="font-semi-bold text-[13px]">I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                    </div>

                    <div className="flex items-center gap-3 mt-5 bg-gray-200 rounded-xl px-5 py-2">
                    <FaCircle className="text-white"/>
                    <p className="font-semi-bold text-[13px]">I agree with our terms and conditions and privacy policy.</p>
                    </div>

                    <button className="text-white bg-blue-600 mt-6 py-2 px-3 rounded-xl">Rent Now</button>
                    <img src="/Layer.png" alt="Loading" className="mt-5"/>
                    <h1 className="font-semibold text-xl">All your data are safe</h1>
                    <p className="text-sm text-gray-600">We are using the most advanced security to provide you the best experience ever.</p>

                
                </div>
            </div>
        </div>
    );
}
