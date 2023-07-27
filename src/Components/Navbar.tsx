import { useState } from "react"
import { FaHome } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

export default function Navbar({ setClickState }:any) {
    const [click, setClick] = useState(false)
    const location = useLocation()

    const handleClick = () => {
        setClick(!click)
        setClickState(!click); 
    }

    return (
        <>
            <div className="navbar bg-white sticky top-0 z-50 shadow-md">
                <div className="navbar-start">
                    <div className="btn btn-ghost">
                        <Link to={`/`}>
                            <span className="text-2xl">
                                <FaHome />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="font-bold normal-case text-xl text-red-600">Chrono Press</a>
                </div>
                <div className="navbar-end">
                    {location.pathname == '/' ? '' :
                        <button className="btn btn-ghost btn-circle" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    }
                </div>
            </div>
        </>
    )
}
