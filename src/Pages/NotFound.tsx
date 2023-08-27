import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
            <Link to={`/`}>
                <button className="flex justify-center items-center gap-2 btn no-animation text-white bg-[#afa4a3] border-[#afa4a3]"><FaArrowLeft />Kembali Ke Halaman Home</button>
            </Link>
            <img src="notFound.svg" alt="Not Found" className="lg:w-1/3 mx-auto" />
        </div>
    )
}

export default NotFound;