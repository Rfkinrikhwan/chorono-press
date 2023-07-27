import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { NewsType } from "../App";
import Loader from "../Components/Loader";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

function AllNews() {
    const [isLoading, setIsLoading] = useState(true);
    const [allNews, setAllNews] = useState([]);
    const [clickState, setClickState] = useState(false);
    const [searchNews, setSearchNews] = useState("");
    const location = useLocation()

    const getNews = async () => {
        const raw = await fetch(location.state.api);
        const data = await raw.json();
        const result = data.data;
        setAllNews(result);
        setIsLoading(false);
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <>
            <Navbar setClickState={setClickState} />
            {
                isLoading ? <Loader /> :
                    <>
                        <section className="h-max p-3 lg:p-12 sm:p-12 md:p-12 flex flex-col items-center">
                            {clickState == true ?
                                <div className="fixed z-50 text-black w-full p-5 top-14 duration-700">
                                    <input
                                        type="search"
                                        name="search"
                                        placeholder="Search News Here"
                                        value={searchNews}
                                        className="bg-white h-12 px-5 pr-10 rounded-full text-sm focus:outline-none border w-full  shadow-lg"
                                        onChange={(e) => setSearchNews(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                : ''}
                            <div className="flex flex-wrap gap-5 justify-center items-center">
                                {allNews.filter((news:NewsType) => {
                                    return searchNews.toLowerCase() === "" 
                                    ? news 
                                    : news.title.toLowerCase().includes(searchNews.toLowerCase())
                                }).map((news: NewsType, index: any) => (
                                    <div key={index}>
                                        <Card link={news.link}
                                            title={news.title}
                                            img={news.image.large}
                                            time={news.isoDate}
                                            imgNews={location.state.img}
                                            newsName={location.state.news}
                                            size={location.state.news == `Okezone News` ? 'lg:h-52 md:h-52 xl:h-52' : ''}
                                            custom={`shadow-sm lg:w-80 md:w-80 xl:w-80`}
                                            more={false} />
                                    </div>
                                ))
                                }
                            </div>
                        </section>
                    </>
            }
        </>
    )
}

export default AllNews;