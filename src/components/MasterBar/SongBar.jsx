import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineHeart, AiOutlinePlaySquare } from "react-icons/ai"
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io"
import { CgScreen } from "react-icons/cg"
import { BiShuffle, BiRepeat } from "react-icons/bi"
import { FaPlay, FaPause } from "react-icons/fa"
import { PiMicrophoneStageDuotone } from "react-icons/pi"
import { HiOutlineQueueList, HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2"
import { BsSpeakerFill, BsArrowsAngleContract } from "react-icons/bs"
import { pauseMaster, playMaster } from "../../redux/Actors/SongActor"


export default function SongBar() {
    const { masterSong, isPlaying } = useSelector((state) => state.mainSong)

    const dispatch = useDispatch();

    const handleMaster = () => {
        if(isPlaying) {
            dispatch(pauseMaster())
        } else {
            dispatch(playMaster())
        }
    }

    useEffect(() => {
        if (masterSong) {
            if (isPlaying) {
                masterSong?.mp3?.play();
            } else {
                masterSong?.mp3?.pause();
            }
        }
    }, [masterSong, isPlaying])
    return (
        <div className="fixed bottom-0 left-0 h-20 bg-black w-full flex items-center justify-between">
            <div className="w-2/12">
                <div className="flex items-center gap-2">
                    <img src="/src/assets/card.webp" alt="" className="h-20" />
                    <div>
                        <h3 className="text-xs font-medium mb-1">{masterSong.title || "Arijit Singh"}</h3>
                        <span className="text-[10px]">{masterSong?.artist || "Arijit Singh"}</span>
                    </div>
                    <AiOutlineHeart className="ml-3" />
                    <CgScreen className="ml-3" />
                </div>
            </div>
            <div className="w-5/12">
                <div className="flex justify-center items-center mb-2 gap-6">
                    <BiShuffle />
                    <IoMdSkipBackward />
                    {
                        isPlaying ? (<button onClick={handleMaster} className="flex items-center justify-center p-2 bg-white rounded-full">
                            <FaPause className="text-black text-lg" />
                        </button>) : (<button onClick={handleMaster} className="flex items-center justify-center p-2 bg-white rounded-full">
                            <FaPlay className="text-black text-lg" />
                        </button>)
                    }
                    <IoMdSkipForward />
                    <BiRepeat />
                </div>
                <div className="flex items-center">
                    <span className="text-xs">
                        00:00
                    </span>
                    <input type="range" name="" min={0} max={100} className="w-full block" />
                    <span className="text-xs">
                        00:00
                    </span>
                </div>
            </div>
            <div className="w-2/12 flex items-center">
                <AiOutlinePlaySquare className="text-2xl" />
                <PiMicrophoneStageDuotone className="text-2xl" />
                <HiOutlineQueueList className="text-2xl" />
                <BsSpeakerFill className="text-2xl" />
                <HiSpeakerWave className="text-2xl" />
                {/* <HiSpeakerXMark className="text-2xl"/> */}
                <input type="range" name="" min={0} max={100} className="w-1/2 block" />
                <BsArrowsAngleContract />
            </div>
        </div>
    )
}
