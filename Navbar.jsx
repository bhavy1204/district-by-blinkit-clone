import { MapPin, CircleUserRound, Search } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="flex justify-between px-4  h-16 items-center mb-7 bg-white">
            <div className="nav flex justify-between items-center">
                <div className="static flex justify-between p-1 items-center gap-3">
                    <div className="logo">
                        <img src="logo.svg" className="h-10 " alt="" />
                    </div>

                    <div className="flex border-l-1 border-gray-400 items-center justify-around ml-2 pl-2 h-7">
                        <MapPin className=' align-middle text-indigo-600 mr-2' />
                        <div className="city flex flex-col">
                            <p className="font-bold text-sm">Gurugram</p>
                            <p className="text-sm">Haryana</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="nav-links flex justify-between font-medium text-sm text-gray-700 gap-5 ">
                <div className="link  mx-3 bg-indigo-200 py-1 px-2 rounded-2xl text-indigo-950">
                    For you
                </div>
                <div className="link mx-3  py-1 px-2 rounded-2xl">
                    Dining
                </div>
                <div className="link mx-3 py-1 px-2 rounded-2xl">
                    Event
                </div>
                <div className="link mx-3 py-1 px-2 rounded-2xl">
                    Movies
                </div>
                <div className="link mx-3 py-1 px-2 rounded-2xl">
                    Activites
                </div>
            </div>
            <div className="user flex justify-between items-center gap-2">
                <div className="search text-sm w-75 border border-gray-500 px-2 py-1 rounded-md flex gap-1 items-center">
                    <Search className='text-indigo-600 '/>
                    <input type="text" placeholder="Search for events, movies and restaurents" className='w-full focus:outline-none' />
                </div>
                <div className="user-menu">
                    <CircleUserRound className='size-8 bg-gray-500 text-white stroke-1 rounded-full'/>
                </div>
            </div>
        </header>
    )
}