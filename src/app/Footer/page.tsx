export default function Footer(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-5 md:mx-7 mx-3">
            <div className="col-span-2 pl-3 py-6 md:h-48">
                <h1 className=" text-[24px]">Morent</h1>
                <p className="w-60 text-gray-400 text-sm pt-3 text-[12px]">Our Vision is to provide convenience and help increase your sales business</p>
            </div>
            {/* About Section  */}
            <div className="p-4 text-gray-400">
                <h1 className="text-2xl text-black py-3 text-[20px]">About</h1>
                <p className="py-1 text-[16px]">How it Works</p>
                <p className="py-1 text-[16px]">Featured</p>
                <p className="py-1 text-[16px]">Patnership</p>
                <p className="py-1 text-[16px]">Business Relation</p>
            </div>

            <div className="p-4 text-gray-400">
                <h1 className="text-2xl text-black py-3 text-[20px]">Socails</h1>
                <p className="py-1 text-[16px]">Discord</p>
                <p className="py-1 text-[16px]">instagram</p>
                <p className="py-1 text-[16px]">Twiiter</p>
                <p className="py-1 text-[16px]">Facebook</p>
            </div>

            <div className="col-span-2 md:col-span-1 p-4 text-[20px] text-gray-400">
            <h1 className="text-2xl text-black py-3">Community</h1>
                <p className="py-1 text-[16px]">Event</p>
                <p className="py-1 text-[16px]">Blog</p>
                <p className="py-1 text-[16px]">Podcast</p>
                <p className="py-1 text-[16px]">Invite a Friend</p>
            </div>
            <div className="md:col-span-3 p-3">
                Privacy and Policy
            </div>
            <div className="p-3 text-sm">Terms and Condition</div>
            <div className="col-span-2 md:col-span-1 py-3 text-sm">
                @2022 MORENT.All rights reserved</div>
        </div>
    )
}