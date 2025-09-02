// <Route path="/movie/:id">의 :id 값을 알아내기 위해 필요
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState({});
    /**
     * ex)
     * {id: '69584'}
     * <Route path="/movie/:id"> ==> 여기서 설정한 변수명(:id)이 그대로 key 값이 된다.
     */
    const {id} = useParams(); // Destructuring Assignment
    console.log(`id : ${id}`);
    useEffect(() => {
        (async () => {
            const result = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await result.json();
            setLoading(false);
            setMovieData(json);
            console.log(json);
        })(); // 즉시 실행, 따로 함수를 만들 필요 없다.
    }, []); // 최초 한 번만 실행
    return (
        <div>
            {
                loading
                ? (<h1>Loading...</h1>)
                : (
                    <div>
                        <h1>{movieData.data.movie.title}</h1>
                        <ul>
                            {
                                movieData.data.movie.genres.map(item => {
                                    return <li>{item}</li>
                                })
                            }
                        </ul>
                        <img src={movieData.data.movie.background_image} alt={movieData.data.movie.title} />
                    </div>
                )
            }
        </div>
    );
}

export default Detail;