import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import Card from "../Card/Card";
import SongBar from "../MasterBar/SongBar";
import { useDispatch } from "react-redux";
import { setInitialSong } from "../../redux/Actors/SongActor";
export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Music One",
    mp3: new Audio("/assets/mp3/audio.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Music Two",
    mp3: new Audio("/assets/mp3/audio2.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Music Three",
    mp3: new Audio("/assets/mp3/musicOne.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Music Four",
    mp3: new Audio("/assets/mp3/musicTwo.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Music Five",
    mp3: new Audio("/assets/mp3/musicThree.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Music Six",
    mp3: new Audio("/assets/mp3/musicFour.mp3"),
  },
];


export default function Home() {
  
  const dispatch = useDispatch();
  const [loadedDurations, setLoadedDurations] = useState([]);
  const [selectedSongDuration, setSelectedSongDuration] = useState(null);

  useEffect(() => {
    const initializeAudio = (song) => {
      const audio = song.mp3;

      audio.addEventListener("loadedmetadata", () => {
        setLoadedDurations((prevDurations) => [
          ...prevDurations,
          { id: song.id, duration: audio.duration },
        ]);
      });

      const initialSong = songs[0];
      dispatch(setInitialSong(initialSong));
      setSelectedSongDuration(audio.duration); // Set initial duration
    };

    songs.forEach((song) => {
      initializeAudio(song);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      songs.forEach((song) => {
        song.mp3.removeEventListener("loadedmetadata", () => { });
      });
    };
  }, [dispatch]);

  return (
    <Layout>
      <SongBar selectedSongDuration={selectedSongDuration} />
      <div className="tertiary_bg px-4 py-4 pt-12 w-11/12 mx-auto my-4 rounded-lg">
        <div className="grid gap-6 grid-cols-1">
          <p className="ml-5 text-2xl text-black font-semibold border-b-2 border-black w-[150px] pb-1">All Episodes</p>
          {
            songs.map((song, i) => {
              return <Card key={song?.id} Idx={i} song={song} />
            })
          }
        </div>
      </div>

    </Layout>
  )
}
