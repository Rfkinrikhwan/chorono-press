import { useState, useEffect } from 'react';
import { NewsType } from '../App';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaArrowRight } from 'react-icons/fa';
import Loader from '../Components/Loader';
import Card from "../Components/Card";
import CardLg from '../Components/CardLg';
import { CardSide } from '../Components/CardSide';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cnn, setCnn]: any = useState([])
    const [cnbc, setCnbc]: any = useState([])
    const [tribun, setOkezone]: any = useState([])
    const data = {
        okezon: { api: 'https://berita-indo-api.vercel.app/v1/okezone-news', news: 'Okezone News', img: 'okezone.svg' },
        cnn: { api: 'https://berita-indo-api.vercel.app/v1/cnn-news/', news: 'CNN Indonesia', img: 'cnnlogo.svg' },
        cnbc: { api: 'https://berita-indo-api.vercel.app/v1/cnbc-news/', news: 'CNBC News', img: 'cnbc.svg' },
    }

    const getCnnNews = async () => {
        const raw = await fetch(data.cnn.api)
        const datas = await raw.json()
        setCnn(datas.data)
        setIsLoading(false);
    }

    const getAllNews = async () => {
        const raw = await fetch(data.okezon.api)
        const raw2 = await fetch(data.cnbc.api)
        const result = await raw.json()
        const result2 = await raw2.json()
        setCnbc(result.data);
        setOkezone(result2.data);
        setIsLoading(false)
    }

    useEffect(() => {
        getAllNews()
        getCnnNews()
    }, [])


    return (
        <>
            <section className="h-max p-2 lg:p-12 sm:p-12 md:p-12">
                {isLoading ? <Loader /> :
                    <>
                        <div className="p-3 rounded-xl">
                            {cnn.slice(0, 1).map((data: NewsType, index: any) => (
                                <div key={index}>
                                    <CardLg link={data.link} title={data.title} img={data.image.large} time={data.isoDate} imgNews={`cnnlogo.svg`} newsName={"CNN Indonesia"} content={data.contentSnippet} />
                                </div>
                            ))
                            }
                        </div>
                        <div className="mt-5 p-3 h-max flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-2xl">CNN Indonesia</span>
                                <Link to={{ pathname: "/see-all" }} state={data.cnn}>
                                    <span className="text-[#EC5054] flex items-center gap-2 text-lg font-bold">See All <FaArrowRight /></span>
                                </Link>
                            </div>
                            <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box mt-5">
                                {cnn.slice(1, 15).map((data: NewsType, index: any) => (
                                    <div className="carousel-item" key={index}>
                                        <Card link={data.link} title={data.title} img={data.image.large} time={data.isoDate} imgNews={`cnnlogo.svg`} newsName={"CNN"} custom={`w-72 lg:w-80 md:w-80 sm:w-80 shadow-md`} />
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </>
                }
                {isLoading ? <Loader /> :
                    <>
                        <div className="mt-5 p-3 h-max flex flex-col">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-2xl">CNBC News</span>
                                <Link to={{ pathname: "/see-all" }} state={data.cnbc}>
                                    <span className="text-[#EC5054] flex items-center gap-2 text-lg font-bold">See All <FaArrowRight /></span>
                                </Link>
                            </div>
                            {cnbc.slice(0, 3).map((data: NewsType, index: any) => (
                                <div className="mt-5" key={index}>
                                    <CardSide title={data.title} time={data.isoDate} img={data.image.large} link={data.link} />
                                </div>
                            ))

                            }
                        </div>
                        {isLoading ? <Loader /> :
                            <div className="mt-5 p-3 h-max flex flex-col">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-2xl">Okezone News</span>
                                    <Link to={{ pathname: "/see-all" }} state={data.okezon}>
                                        <span className="text-[#EC5054] flex items-center gap-2 text-lg font-bold">See All <FaArrowRight /></span>
                                    </Link>
                                </div>
                                <div className="mt-5 flex justify-center items-center">
                                    {tribun.slice(0, 1).map((data: NewsType, index: any) => (
                                        <div className="card w-full shadow-md h-[450px] bg-no-repeat bg-cover bg-origin-content image-full" key={index} style={{ backgroundImage: `url(${data.image.large})` }}>
                                            <div className="card-body">
                                                <h2 className="card-title text-2xl lg:text-4xl xl:text-4xl md:text-4xl text-white">{data.title}</h2>
                                                <p className='text-white mt-3'>{data.contentSnippet}</p>
                                                <div className="flex gap-1">
                                                    <figure>
                                                        <img src="okezone.svg" alt="logo" className='w-4' />
                                                    </figure>
                                                    <span className='text-sm text-white'>Okezone - {moment(data.isoDate).startOf('hour').fromNow()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box mt-5">
                                    {tribun.slice(1, 15).map((data: NewsType, index: any) => (
                                        <div className="carousel-item" key={index}>
                                            <Card link={data.link} title={data.title} img={data.image.large} time={data.isoDate} imgNews={`okezone.svg`} newsName={"Okezone"} size={`h-52`} custom={`w-72 lg:w-80 md:w-80 sm:w-80 shadow-md`} />
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        }
                    </>
                }
            </section>
        </>
    );
};

export default Home;
