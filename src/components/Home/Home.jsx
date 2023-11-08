import Layout from "../../Layout/Layout";
import { FaLessThan, FaGreaterThan, FaUser } from "react-icons/fa"
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/audio.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/audio2.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Mirchi Awards",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/audio.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Judaiyaan",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/audio.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Heeriye",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/audio.mp3"),
  },
  {
    id: Math.random() * Date.now(),
    title: "Tu hi Hai Aashiqui",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/audio.mp3"),
  },
];


export default function Home() {
  return (
    <Layout>
      <div className="flex justify-between items-center mt-4 mb-4">
        <div className="flex gap-2 items-center">
          <FaLessThan className="bg-white/10 rounded-full text-3xl p-1" />
          <FaGreaterThan className="bg-white/10 rounded-full text-3xl p-1" />
        </div>
        <div>
          {
            localStorage.getItem("token") ? <div>
              <Link to="/signup" className="rounded-full px-8 py-2 font-bold text-white">
                Sign Up
              </Link>

              <Link to="/login" className="rounded-full px-8 py-3 font-bold text-black bg-white text-base">
                Log In
              </Link>
            </div> : <FaUser />
          }
          
        </div>
      </div>
      <div className="tertiary_bg mx-4 px-4 py-4">
        <div className="flex justify-between items-center my-4">
          <span className="text-xl font-bold hover:underline">Focus</span>
          <span>Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5 tertiary_bg">
          {
            songs.map((song, i) => {
              return <Card key={song?.id} Idx={i} song={song} />
            })
          }
        </div>
        <div className="flex justify-between items-center my-4">
          <span className="text-xl font-bold hover:underline">Spotify List</span>
          <span>Show All</span>
        </div>
        <div className="grid gap-6 grid-cols-5 tertiary_bg px-4 py-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <SongBar />
    </Layout>
  )
}
