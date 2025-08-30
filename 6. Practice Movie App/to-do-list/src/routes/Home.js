import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Home() {
    // https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // fetch(...).then(...).then(...) 구조 대신 async-await 사용
    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json.data.movies);
    }
    // App 컴포넌트가 맨 처음 렌더링 될 때만 API 정보를 가져온다. by useEffect
    useEffect(() => {
        getMovies();
        // cf) getMovies 함수를 따로 만들 필요 없이 아래와 같이 즉시 실행 함수로 해도됨
        /* 
        (
            async () => {
                const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
                const json = await response.json();
                setMovies(json.data.movies);
                setLoading(false);
                console.log(json.data.movies);
            }
        )();
        */
    }, []);
    return (
        <div>
            {
                loading
                ? (<h1>Loading...</h1>)
                : (
                    <div>
                        {
                            movies.map((item, index) => {
                                // Each child in a list should have a unique "key" prop.
                                // key prop은 동일하게 있어야 한다.
                                return <Movie
                                    key={item.id}
                                    coverImg={item.medium_cover_image}
                                    title={item.title}
                                    summary={item.summary}
                                    genres={item.genres}
                                />
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}