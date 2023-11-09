import { FaPlay, FaPause } from "react-icons/fa"
import "./Card.css"
import { useSelector, useDispatch } from "react-redux"
import { playSong, pauseSong } from "../../redux/Actors/SongActor";
import { useGlobalContext } from "../../redux/Context";
import { useEffect } from "react";

export default function Card({ song, Idx }) {
    const { masterSong, isPlaying } = useSelector((state) => state.mainSong)
    const { resetEverything, setSongIdx, duration, setDuration } = useGlobalContext();
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

    // useEffect(() => {
    //     // dispatch(playSong(song))
    //     dispatch(pauseSong())
    // }, [song, dispatch])

    const handlePause = () => {
        dispatch(pauseSong())
    }

    // useEffect(() => {
    //     if (masterSong.mp3) {
    //         setDuration(formatTime(masterSong?.mp3?.duration))
    //         if (isPlaying) {
    //             masterSong?.mp3?.play();
    //         } else {
    //             masterSong?.mp3?.pause();
    //         }
    //     }
    // }, [])

    // console.log(duration)

    const formatTime = (durationInSeconds) => {
        let minutes = Math.floor(durationInSeconds / 60);
        let seconds = Math.round(durationInSeconds % 60);
        let formattedDuration = `${minutes < 10 ? "0" + minutes : minutes}: ${seconds < 9 ? "0" + seconds : seconds}`;

        return formattedDuration;
    }
    return (
        song && (<div className="card p-4 rounded-lg flex items-center justify-between">
            
            <div className="flex items-center space-x-12">
                <div className="">
                    {/* <img src="/src/assets/card.webp" alt="" /> */}
                    {
                        masterSong?.id === song?.id && isPlaying ? (<button onClick={handlePause} className="flex items-center justify-center p-3 bg-green-700 rounded-full play_btn bottom-0 right-0">
                            <FaPause className="text-white text-sm" />
                        </button>) : (<button onClick={() => handlePlay(song)} className="flex items-center justify-center p-3 bg-green-700 rounded-full play_btn  bottom-0 right-0">
                            <FaPlay className="text-white text-sm" />
                        </button>)
                    }

                </div>
                <h3 className="text-sm font-semibold text-black">{song?.title}</h3>
                {/* <p className="text-xs text-gray-400">
                    {song?.artist} - {song?.title}
                </p> */}
            </div>
            <p className="text-black text-sm bg-black/25 px-3 py-1 rounded-lg">{
                formatTime(song?.mp3?.duration)
            }</p>
        </div>)
    )
}
