
import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { toast } from "react-toastify";
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        username: "",
        day: "",
        year: "",
        month: "",
        password: "",
        gender: ""
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const index = months.indexOf(userDetails.month)
        let DOB = `${index}-${userDetails.day}-${userDetails.year}`;

        const { email, password, gender, username } = userDetails;

        let data = JSON.stringify({
            email,
            password,
            gender,
            DOB,
            username
        })

        const res = await fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })

        const dataRes = await res.json();
        if (dataRes.success) {
            setUserDetails({
                email: "",
                username: "",
                day: "",
                year: "",
                month: "",
                password: "",
                gender: ""
            })
            toast.success(dataRes.message);

            localStorage.setItem("token", data.token)
        } else {
            toast.error(dataRes.message)
        }
        console.log(dataRes)
    }

    const onChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
        if (e.target.name === "gender") {
            if (e.target.id === "male") {
                setUserDetails({ ...userDetails, gender: 'M' })
            }
            if (e.target.id === "female") {
                setUserDetails({ ...userDetails, gender: 'F' })
            }
            if (e.target.id === "other") {
                setUserDetails({ ...userDetails, gender: 'O' })
            }
            return;
        }
    }
    return (
        <>
            <div className="container py-8 bg-white">
                <div className="logo text-center">
                    <Link to="/">
                        <img
                            src="/src/assets/logo.png"
                            className="mx-auto rounded-full"
                            width={100}
                            alt=""
                        />
                    </Link>
                </div>
                <div className=" text-black">
                    <div className="py-10 text-center w-1/2 mx-auto">
                        <h1 className="text-3xl tracking-tighter my-4 font-semibold">
                            Sign up for free to start listening.
                        </h1>
                        <span className="or__">or</span>
                        <p className="my-4 font-bold">
                            Sign up with your email address
                        </p>
                        <form onSubmit={registerUser} className="text-center mx-auto w-3/4 ">
                            <div className="w-4/5 mx-auto text-left py-4">
                                <label
                                    htmlFor="email"
                                    className="font-semibold mb-2 text-sm inline-block"
                                >
                                    What's your email?{" "}
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={userDetails.email}
                                    onChange={onChange}
                                    placeholder="Enter your email"
                                    className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                />
                            </div>
                            <div className="w-4/5 mx-auto text-left py-4">
                                <label
                                    htmlFor="password"
                                    className="font-semibold mb-2 text-sm inline-block"
                                >
                                    Create a password{" "}
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    value={userDetails.password}
                                    onChange={onChange}
                                    placeholder="Create a password"
                                    className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                />
                            </div>
                            <div className="w-4/5 mx-auto text-left py-4">
                                <label
                                    htmlFor="username"
                                    className="font-semibold mb-2 text-sm inline-block"
                                >
                                    What should we call you?{" "}
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={userDetails.username}
                                    onChange={onChange}
                                    placeholder="Create a password"
                                    className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                />
                                <small>it will appear on your profile</small>
                            </div>
                            <div className="text-left"></div>
                            <div className="w-4/5 mx-auto text-left py-4">
                                <label
                                    htmlFor="date"
                                    className="font-semibold mb-2 text-sm inline-block"
                                >
                                    What's your date of birth?
                                </label>
                                <div className="flex gap-8">
                                    <div className="w-1/4">
                                        <label
                                            htmlFor="day"
                                            className="ml-2 inline-block"
                                        >
                                            Day
                                        </label>
                                        <input
                                            type="text"
                                            id="day"
                                            name="day"
                                            placeholder="DD"
                                            value={userDetails.day}
                                            onChange={onChange}
                                            className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                        />
                                    </div>
                                    <div className="w-2/4">
                                        <label
                                            htmlFor="month"
                                            className="ml-2 inline-block"
                                        >
                                            Month
                                        </label>
                                        <select
                                            type="radio"
                                            id="month"
                                            name="month"
                                            value={userDetails.month}
                                            onChange={onChange}
                                            placeholder="Password"
                                            className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                        >
                                            {months.map((m) => {
                                                return (
                                                    <option key={m} value={m}>
                                                        {m}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="w-1/4">
                                        <label
                                            htmlFor="year"
                                            className="ml-2 inline-block"
                                        >
                                            Year
                                        </label>
                                        <input
                                            type="text"
                                            id="year"
                                            name="year"
                                            value={userDetails.year}
                                            onChange={onChange}
                                            placeholder="YYYY"
                                            className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-8 mt-4">
                                    <div className="">
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            value={userDetails.gender}
                                            onChange={onChange}
                                            placeholder="gender"
                                            className=""
                                        />
                                        <label
                                            htmlFor="male"
                                            className="ml-2 inline-block"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div className="">
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            value={userDetails.gender}
                                            onChange={onChange}
                                            placeholder="gender"
                                            className=""
                                        />
                                        <label
                                            htmlFor="female"
                                            className="ml-2 inline-block"
                                        >
                                            Female
                                        </label>
                                    </div>
                                    <div className="">
                                        <input
                                            type="radio"
                                            id="other"
                                            name="gender"
                                            value={userDetails.gender}
                                            onChange={onChange}
                                            placeholder="Password"
                                            className=""
                                        />
                                        <label
                                            htmlFor="other"
                                            className="ml-2 inline-block"
                                        >
                                            Prefer not to say
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-4/5 mx-auto text-left py-4">
                                <div className="my-4 flex items-center gap-4" >
                                    <input
                                        type="checkbox"
                                        className="green-checkbox relative"
                                        name=""
                                        id=""
                                    />
                                    <p className="text-sm">
                                        I would prefer not to receive marketing
                                        messages from Spotify
                                    </p>
                                </div>
                                <div className="my-4 flex items-center gap-4" >
                                    <input
                                        type="checkbox"
                                        className="green-checkbox relative"
                                        name=""
                                        id=""
                                    />
                                    <p className="text-sm">
                                        Share my registration data with Spotify's content providers for marketing purposes.
                                    </p>
                                </div>
                                <p className="my-4 text-xs">
                                    By clicking on sign-up, you agree to{" "}
                                    <Link to="/" className="text-green-400">
                                        Spotify's Terms and Condition
                                    </Link>{" "}
                                    of Use.
                                </p>
                                <p className="my-4 text-xs">
                                    To learn more about how Spotify collects,
                                    uses, shares and protects your personal
                                    data, please see
                                    <Link to="/" className="text-green-400">
                                        Spotify's Privacy Policy.
                                    </Link>{" "}
                                </p>
                            </div>

                            <div className="w-full text-left py-4">
                                <input
                                    type="submit"
                                    value="Sign up"
                                    className="block cursor-pointer w-1/2 mx-auto outline-none bg-green-400 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full "
                                />
                            </div>
                        </form>
                        <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
                        <p className="pt-8">
                            <span className="text-gray-300 font-semibold">
                                Don't have an account?{" "}
                            </span>

                            <Link
                                to="/login"
                                className="text-green-400 hover:text-green-400/90 font-semibold underline mx-auto"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
