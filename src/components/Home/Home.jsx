import Layout from "../../Layout/Layout";
import { FaLessThan, FaGreaterThan, FaUser } from "react-icons/fa"
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../redux/Actors/UserActor";

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
  // const { user, isAuthenticated } = useSelector((state) => state.account)
  // const dispatch = useDispatch();


  // const getUser = async () => {
  //   const token = JSON.parse(localStorage.getItem("token"))
  //   if (token) {
  //     const res = await fetch('http://localhost:5000/api/user/me', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         token
  //       }
  //     })

  //     const dataRes = await res.json();
  //     if (dataRes.success) {
  //       toast.success(dataRes.message)
  //       localStorage.setItem("token", JSON.stringify(dataRes.token))
  //       dispatch(userActor(dataRes.user));
  //     } else {
  //       toast.error(dataRes.message)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])
  return (
    <Layout>
      {/* <div className="flex justify-between items-center mt-4 mb-4 mx-8 border-b pb-5 pt-1 border-b-gray-50">
        <div className="flex gap-2 items-center">
          <FaLessThan className="bg-white/10 rounded-full text-3xl p-1" />
          <FaGreaterThan className="bg-white/10 rounded-full text-3xl p-1" />
        </div>
        <div>
          {
            !isAuthenticated ? <div>
              <Link to="/signup" className="rounded-full px-8 py-2 font-bold text-white">
                Sign Up
              </Link>

              <Link to="/login" className="rounded-full px-8 py-3 font-bold text-black bg-white text-base">
                Log In
              </Link>
            </div> : <FaUser />
          }

        </div>
      </div> */}
      <SongBar />
      <div className="tertiary_bg px-4 py-4 pt-12 w-11/12 mx-auto my-4 rounded-lg">
        {/* <div className="flex justify-between items-center my-4">
          <span className="text-xl font-bold hover:underline">Focus</span>
          <span>Show All</span>
        </div> */}
        <div className="grid gap-6 grid-cols-1">
          <p className="ml-5 text-2xl text-black font-semibold border-b-2 border-black w-[150px] pb-1">All Episodes</p>
          {
            songs.map((song, i) => {
              return <Card key={song?.id} Idx={i} song={song} />
            })
          }
        </div>
        {/* <div className="flex justify-between items-center my-4">
          <span className="text-xl font-bold hover:underline">Spotify List</span>
          <span>Show All</span>
        </div> */}
        {/* <div className="grid gap-6 grid-cols-5 tertiary_bg px-4 py-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
      </div>
      
    </Layout>
  )
}
