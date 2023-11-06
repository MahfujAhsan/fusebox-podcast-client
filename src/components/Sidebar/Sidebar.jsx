import { BiSolidHome, BiLibrary } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { FaPlus } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"
import Signup from "./Signup"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="w-1/4 sidebar fixed left-0 top-0">
            <div className="nav secondary_bg rounded-lg p-6">
                <div className="flex items-center gap-4">
                    <BiSolidHome className="font-bold text-xl" />
                    <span>Home</span>
                </div>
                <div className="flex mt-4 items-center gap-4">
                    <FiSearch className="font-bold text-xl" />
                    <span>Search</span>
                </div>
            </div>

            <div className="your_library mt-2 tertiary_bg rounded-lg px-2 py-2">
                <div className="flex px-4 justify-between mb-4 items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <BiLibrary className="font-bold text-xl" />
                        <span>Your Library</span>
                    </div>
                    <button className="hover:bg-black/25 rounded-[50%] p-2">
                        <FaPlus className="font-bold text-xl" />
                    </button>
                </div>


                <div className="leading-8 mt-2 secondary_bg rounded-lg py-6 px-4">
                    <p className="font-bold">Create your first playlist</p>
                    <p className="font-semibold">It's easy, we'll help you!</p>
                    <button className="rounded-full mt-4 px-4 py-0 bg-white font-semibold text-black">
                        Create Playlist
                    </button>
                </div>


                <div className="leading-8 mt-2 secondary_bg rounded-lg py-6 px-4">
                    <p className="font-bold">Let's find some podcasts to follow</p>
                    <p className="font-semibold">We'll keep you updated on new episodes!</p>
                    <button className="rounded-full mt-4 px-4 py-0 bg-white font-semibold text-black">
                        Browse Podcast
                    </button>
                </div>
            </div>

            <div className="mt-4 px-4 flex flex-wrap gap-4">
                <a className="text-xs text-gray-500 mx-4" href="#">Legal</a>
                <a className="text-xs text-gray-500 mx-4" href="#">Privacy Center</a>
                <a className="text-xs text-gray-500 mx-4" href="#">Privacy Policy</a>
                <a className="text-xs text-gray-500 mx-4" href="#">Cookies</a>
                <a className="text-xs text-gray-500 mx-4" href="#">About Ads</a>
                <a className="text-xs text-gray-500 mx-4" href="#">Accessibility</a>
            </div>
            <button className="mx-4 mt-12 border border-white flex gap-2 px-3 text-sm py-1 items-center rounded-full text-white">
                <TbWorld />
                <span className="text-white font-bold">English</span>
            </button>

            <Signup />
        </div>
    )
}
