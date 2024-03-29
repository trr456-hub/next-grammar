import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../constants";

export const metadata = {
  title: "hompage",
};

async function getMoives() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

const Home = async () => {
  const movies = await getMoives();
  return (
    <div>
      <h1 className={styles.container}>
        {movies.map((movie) => (
          // <li key={movie.id}>
          //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          // </li>
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </h1>
    </div>
  );
};

export default Home;
