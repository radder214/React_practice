import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// 부모 컴포넌트(App)로부터 prop을 받는다.
export default function Movie({id, year, coverImg, title, summary, genres}) { // Destructuring Assignment
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <h2 className={styles.movie__title}>
                {/* anchor 태그 사용 시 브라우저 새로고침 발생 */}
                {/* <a href="/movie">{title}</a> */}
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{String(summary).length > 235 ? `${String(summary).slice(0, 235)}...` : (summary === "" ? "No Contents" : summary)}</p>
            <ul className={styles.movie__genres}>
                {
                    genres.map(genre => {
                        return <li key={genre}>{genre}</li>
                    })
                }
            </ul>
        </div>
    );
}

// 관례적으로 컴포넌트 선언 이후에 propTypes 붙이는 것을 권장
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}