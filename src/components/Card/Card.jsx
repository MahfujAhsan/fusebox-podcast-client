import { FaPlay } from "react-icons/fa"
import "./Card.css"

export default function Card() {
    return (
        <div className="card col-span-1 p-4 rounded-lg">
            <div className="relative">
                <img src="/src//assets/card.webp" alt="" />
                <button className="flex items-center justify-center p-3 bg-green-500 rounded-full play_btn absolute bottom-0 right-0">
                    <FaPlay className="text-black text-xl"/>
                </button>
            </div>
            <h3 className="text-sm font-semibold">Peaceful Piano</h3>
            <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}
