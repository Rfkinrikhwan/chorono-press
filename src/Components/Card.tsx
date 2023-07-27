import moment from "moment";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({ link, title, img, time, imgNews, newsName, size, more, custom }: any) {
    return (
        <>
            <div className={`card ${custom}`}>
                <Link to={link}>
                    <figure className="px-1 pt-1"><img src={img} alt="Shoes" className={`rounded-xl ${size}`} /></figure>
                </Link>
                <div className="card-body">
                    <div className="flex gap-1">
                        <figure>
                            <img src={imgNews} alt="logo" className='w-4' />
                        </figure>
                        <span className='text-sm'>{newsName} - {moment(time).startOf('hour').fromNow()}</span>
                    </div>
                    <Link to={link}>
                        <h2 className="font-semibold text-[17px] mt-3 line-clamp-2">
                            {title}
                        </h2>
                    </Link>
                    <p></p>
                    { more == false ? '' :
                        <Link to={link}>
                            <div className="card-actions justify-end mt-5">
                                <div className="badge text-white gap-2 flex items-center p-3">Selengkapnya <FaArrowRight /></div>
                            </div>
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}


