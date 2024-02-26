import Link from "next/link";

export const metadata = {
  title: "hompage",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
      <h1>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </h1>
    </div>
  );
};

export default Home;