

export default function Layout({ children }) {
    return (
        <div className="flex gap-2">
            {/* <Sidebar /> */}
            <div className="w-full border border-s-white absolute right-0 top-0 -z-10">
                {children}
            </div>
        </div>
    )
}
