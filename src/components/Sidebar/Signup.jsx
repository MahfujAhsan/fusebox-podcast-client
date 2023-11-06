import "./Signup.css"

export default function Signup() {
    return (
        <div className="fixed bottom-0 signup_bar text-sm mx-2 px-4 py-2 flex justify-between">
            <div>
                <p className="uppercase">
                    preview on spotify
                </p>
                <p className="font-semibold">
                    Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed
                </p>
            </div>
            <button className="rounded-full px-8 py-2 bg-white font-bold text-black">
                Sign Up Free
            </button>
        </div>
    )
}
