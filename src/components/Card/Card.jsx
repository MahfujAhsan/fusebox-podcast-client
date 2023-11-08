import { FaPlay, FaPause } from "react-icons/fa"
import "./Card.css"
import { useSelector, useDispatch } from "react-redux"
import { playSong, pauseSong } from "../../redux/Actors/SongActor";
import { useGlobalContext } from "../../redux/Context";

export default function Card({ song, Idx }) {
    const { masterSong, isPlaying } = useSelector((state) => state.mainSong)
    const { resetEverything, setSongIdx } = useGlobalContext();
    const dispatch = useDispatch()

    const handlePlay = (song) => {
        setSongIdx(Idx)
        if (isPlaying) {
            masterSong.mp3.currentTime = 0;
            masterSong.mp3.pause();
            resetEverything();
        }
        dispatch(playSong(song))
    }

    const handlePause = () => {
        dispatch(pauseSong())
    }
    return (
        song && (<div className="card col-span-1 p-4 rounded-lg">
            <div className="relative">
                <img src="/src/assets/card.webp" alt="" />
                {
                    masterSong?.id === song?.id && isPlaying ? (<button onClick={handlePause} className="flex items-center justify-center p-3 bg-green-500 rounded-full play_btn absolute bottom-0 right-0">
                        <FaPause className="text-black text-xl" />
                    </button>) : (<button onClick={() => handlePlay(song)} className="flex items-center justify-center p-3 bg-green-500 rounded-full play_btn absolute bottom-0 right-0">
                        <FaPlay className="text-black text-xl" />
                    </button>)
                }

            </div>
            <h3 className="text-sm font-semibold">{song?.title}</h3>
            <p className="text-xs text-gray-400">
                {song?.artist} - {song?.title}
            </p>
        </div>)
    )
}
