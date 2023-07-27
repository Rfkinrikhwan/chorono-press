import moment from "moment";
import { Link } from "react-router-dom";

export default function CardLg({ link, title, img, time, imgNews, newsName, content }: any) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 sm:flex-col md:flex-col shadow-sm p-2 rounded-xl">
            <div className="basis-1/2 rounded-xl">
                <Link to={link}>
                    <img src={img} alt="hai" className="w-full rounded-xl" />
                </Link>
            </div>
            <div className="basis-1/2 p-2 lg:p-8 sm:p-8 md:p-8 rounded-md flex flex-col">
                <Link to={link}>
                    <div className="">
                        <p className="text-xl lg:text-4xl sm:text-4xl md:text-4xl font-PTserif font-semibold">{title}</p>
                    </div>
                    <div className="mt-5">
                        <p className="font-PTserif mt-5">{content}</p>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <figure>
                            <img src={imgNews} alt="logo" className='w-6' />
                        </figure>
                        <span className='font-bold'>{newsName}</span>
                    </div>
                    <div className="mt-5">
                        <p className="mt-12 font-bold text-[12px] float-right">{moment(time).startOf('hour').fromNow()}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
