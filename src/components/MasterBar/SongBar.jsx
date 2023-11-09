import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineShareAlt, AiOutlineWifi } from "react-icons/ai"
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io"
import { FaPlay, FaPause } from "react-icons/fa"
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2"
import { TfiMenuAlt } from "react-icons/tfi"
import { pauseMaster, playMaster, playSong } from "../../redux/Actors/SongActor"
import { useGlobalContext } from "../../redux/Context"
import "./SongBar.css"
import { useState } from "react"
import { songs } from "../Home/Home"
import fusebox from "../../assets/fusbox.jpg"


export default function SongBar() {
    const { masterSong, isPlaying } = useSelector((state) => state.mainSong)
    const { progress, setProgress, resetEverything, currTime, setCurrTime, duration, setDuration, songIdx, setSongIdx } = useGlobalContext()

    const dispatch = useDispatch();

    const handleMaster = () => {
        if (isPlaying) {
            dispatch(pauseMaster())
        } else {
            dispatch(playMaster())
        }
    }

    useEffect(() => {
        if (masterSong.mp3) {
            setDuration(formatTime(masterSong?.mp3?.duration))
            if (isPlaying) {
                masterSong?.mp3?.play();
            } else {
                masterSong?.mp3?.pause();
            }
        }
        if (isPlaying) {
            const progressInterval = setInterval(() => {
                if (progress === 100) {
                    dispatch(pauseMaster())
                    resetEverything();
                } else {
                    setProgress(
                        Math.round(masterSong.mp3.currentTime / masterSong.mp3.duration * 100)
                    );
                    setCurrTime(formatTime(masterSong.mp3.currentTime))
                }
            }, 1000)

            return () => clearInterval(progressInterval);
        }
    }, [masterSong, isPlaying]);

    const mouseEnter = () => {
        document.querySelector(".active_progress").style.background = "green"
    }

    const mouseLeave = () => {
        document.querySelector(".active_progress").style.background = "#fff"
    }

    const enterVolume = () => {
        document.querySelector("#volume").style.background = "green"
    }

    const leaveVolume = () => {
        document.querySelector("#volume").style.background = "#fff"
    }

    const backwardSong = () => {
        if (songIdx > 0) {
            masterSong?.mp3?.pause();
            masterSong.mp3.currentTime = 0;
            resetEverything();
            setSongIdx((prevState) => prevState - 1);
            dispatch(playSong(songs[songIdx - 1]));
        }
    }

    const forwardSong = () => {
        if (songIdx < songs.length - 1) {
            masterSong?.mp3?.pause();
            masterSong.mp3.currentTime = 0;
            resetEverything();
            setSongIdx((prevState) => prevState + 1);
            dispatch(playSong(songs[songIdx + 1]));
        }
    }

    const changeProgress = (e) => {
        setProgress(e.target.value)
        masterSong.mp3.currentTime = e.target.value / 100 * masterSong.mp3.duration;
    }

    const [volume, setVolume] = useState(50)

    const changeVolume = (e) => {
        setVolume(e.target.value)
        masterSong.mp3.volume = e.target.value / 100
    }

    const formatTime = (durationInSeconds) => {
        if (!isNaN(durationInSeconds)) {
            let minutes = Math.floor(durationInSeconds / 60);
            let seconds = Math.round(durationInSeconds % 60);
            return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        } else {
            return "00:00"; // Return a default value when duration is not available
        }
    }
    return (
        <div className="px-2 top-0 left-0 py-2 bg-green-600 w-11/12 mx-auto rounded-lg flex items-center justify-between z-50 mt-2">
            <div className="w-2/12">
                <div className="flex items-center gap-2">
                    <img src={fusebox} alt="" className="h-36 rounded-lg" />
                </div>
            </div>
            <div className="flex justify-center items-center mb-2 gap-6 border-[6px] rounded-full border-green-700 ml-16">
                {
                    isPlaying ? (<button onClick={handleMaster} className="flex items-center justify-center p-7 bg-white rounded-full">
                        <FaPause className="text-green-700 text-lg" size={40} />
                    </button>) : (<button onClick={handleMaster} className="flex items-center justify-center p-7 bg-white rounded-full">
                        <FaPlay className="text-green-700 text-lg" size={40} />
                    </button>)
                }
            </div>
            <div className="w-full flex  flex-col gap-x-6 h-full">
                <h3 className="text-left w-8/12 mx-auto font-bold text-lg py-2">{masterSong.title}</h3>
                <div className="flex items-center w-8/12 gap-x-8 mx-auto">
                    <div className="relative w-full flex items-center">
                        <input
                            type="range"
                            name=""
                            min={0}
                            max={100}
                            className="w-full block"
                            value={progress}
                            onChange={changeProgress}
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                            id="progress_bar"
                            disabled={!masterSong.mp3}
                        />
                        <div className={`active_progress w-[${progress}%]`}>

                        </div>
                    </div>
                </div>
                <div className="items-center w-8/12 mx-auto pt-4 flex space-x-7 justify-between">
                    <div className="flex items-center space-x-4">
                        <div onClick={backwardSong} className="border-2 px-4 py-[3px] rounded-full cursor-pointer">
                            <IoMdSkipBackward />
                        </div>
                        <div onClick={forwardSong} className="border-2 px-4 py-[3px] rounded-full cursor-pointer">
                            <IoMdSkipForward />
                        </div>

                        <div data-tooltip="Tooltip help here!" className="flex items-center space-x-4 border-2 rounded-full cursor-pointer px-2">
                            {volume <= 0 && <HiSpeakerXMark className="text-2xl" size={24} />}
                            {volume > 0 && <HiSpeakerWave className="text-2xl" size={24} />}
                            <div className="relative w-full flex items-center">
                                <input
                                    type="range"
                                    name=""
                                    min={0}
                                    max={100}
                                    className="w-full block"
                                    value={volume}
                                    onChange={changeVolume}
                                    disabled={!masterSong.mp3}
                                    onMouseEnter={enterVolume}
                                    onMouseLeave={leaveVolume}
                                />
                                <div id="volume" className={`active_progress w-[${volume}%]`}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-[10px] w-[50px] text-base">
                            {currTime} / {duration}
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-2/12 flex items-center flex-col gap-1 pr-12">
                <button className="flex items-center gap-x-2 bg-white text-black px-5 py-2 text-xl border-[6px] rounded-full border-green-700"><AiOutlineWifi style={{ transform: 'rotate(45deg)' }} size={24} /> Subscribe</button>
                <div className="flex space-x-6 mt-4">
                    <TfiMenuAlt className="cursor-pointer" size={25} />
                    <AiOutlineShareAlt className="cursor-pointer" size={25} />
                </div>
            </div>
            <div className="hidden">
                <div className="w-[0%]"></div>
                <div className="w-[1%]"></div>
                <div className="w-[2%]"></div>
                <div className="w-[3%]"></div>
                <div className="w-[4%]"></div>
                <div className="w-[5%]"></div>
                <div className="w-[6%]"></div>
                <div className="w-[7%]"></div>
                <div className="w-[8%]"></div>
                <div className="w-[9%]"></div>
                <div className="w-[10%]"></div>
                <div className="w-[11%]"></div>
                <div className="w-[12%]"></div>
                <div className="w-[13%]"></div>
                <div className="w-[14%]"></div>
                <div className="w-[15%]"></div>
                <div className="w-[16%]"></div>
                <div className="w-[17%]"></div>
                <div className="w-[18%]"></div>
                <div className="w-[19%]"></div>
                <div className="w-[20%]"></div>
                <div className="w-[21%]"></div>
                <div className="w-[22%]"></div>
                <div className="w-[23%]"></div>
                <div className="w-[24%]"></div>
                <div className="w-[25%]"></div>
                <div className="w-[26%]"></div>
                <div className="w-[27%]"></div>
                <div className="w-[28%]"></div>
                <div className="w-[29%]"></div>
                <div className="w-[30%]"></div>
                <div className="w-[31%]"></div>
                <div className="w-[32%]"></div>
                <div className="w-[33%]"></div>
                <div className="w-[34%]"></div>
                <div className="w-[35%]"></div>
                <div className="w-[36%]"></div>
                <div className="w-[37%]"></div>
                <div className="w-[38%]"></div>
                <div className="w-[39%]"></div>
                <div className="w-[40%]"></div>
                <div className="w-[41%]"></div>
                <div className="w-[42%]"></div>
                <div className="w-[43%]"></div>
                <div className="w-[44%]"></div>
                <div className="w-[45%]"></div>
                <div className="w-[46%]"></div>
                <div className="w-[47%]"></div>
                <div className="w-[48%]"></div>
                <div className="w-[49%]"></div>
                <div className="w-[50%]"></div>
                <div className="w-[51%]"></div>
                <div className="w-[52%]"></div>
                <div className="w-[53%]"></div>
                <div className="w-[54%]"></div>
                <div className="w-[55%]"></div>
                <div className="w-[56%]"></div>
                <div className="w-[57%]"></div>
                <div className="w-[58%]"></div>
                <div className="w-[59%]"></div>
                <div className="w-[60%]"></div>
                <div className="w-[61%]"></div>
                <div className="w-[62%]"></div>
                <div className="w-[63%]"></div>
                <div className="w-[64%]"></div>
                <div className="w-[65%]"></div>
                <div className="w-[66%]"></div>
                <div className="w-[67%]"></div>
                <div className="w-[68%]"></div>
                <div className="w-[69%]"></div>
                <div className="w-[70%]"></div>
                <div className="w-[71%]"></div>
                <div className="w-[72%]"></div>
                <div className="w-[73%]"></div>
                <div className="w-[74%]"></div>
                <div className="w-[75%]"></div>
                <div className="w-[76%]"></div>
                <div className="w-[77%]"></div>
                <div className="w-[78%]"></div>
                <div className="w-[79%]"></div>
                <div className="w-[80%]"></div>
                <div className="w-[81%]"></div>
                <div className="w-[82%]"></div>
                <div className="w-[83%]"></div>
                <div className="w-[84%]"></div>
                <div className="w-[85%]"></div>
                <div className="w-[86%]"></div>
                <div className="w-[87%]"></div>
                <div className="w-[88%]"></div>
                <div className="w-[89%]"></div>
                <div className="w-[90%]"></div>
                <div className="w-[91%]"></div>
                <div className="w-[92%]"></div>
                <div className="w-[93%]"></div>
                <div className="w-[94%]"></div>
                <div className="w-[95%]"></div>
                <div className="w-[96%]"></div>
                <div className="w-[97%]"></div>
                <div className="w-[98%]"></div>
                <div className="w-[99%]"></div>
                <div className="w-[100%]"></div>
            </div>
        </div>
    )
}


