import moment from "moment"
import { Link } from "react-router-dom"

function CardSide({ img, title, time, link }: any) {
    return (
        <>
            <div className="flex p-2 gap-2 shadow-sm rounded-xl">
                <div className="basis-1/2 lg:basis-1/4">
                    <Link to={link}>
                        <figure>
                            <img src={img} alt="Haii" className="rounded-xl h-28 w-full lg:w-80 lg:h-44 md:w-80 md:h-44 xl:w-80 xl:h-44" />
                        </figure>
                    </Link>
                </div>
                <div className="basis-1/2">
                    <Link to={link}>
                        <div className="p-2">
                            <p className="font-bold line-clamp-2 md:line-clamp-none lg:line-clamp-none xl:line-clamp-none md:text-2xl lg:text-2xl xl:text-2xl">{title}</p>
                            <p className="mt-4">{moment(time).startOf('hour').fromNow()}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export { CardSide }