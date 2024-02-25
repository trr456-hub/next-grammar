"use client";

import { useEffect, useState } from "react";

// export const metadata = {
//   title: "qweqwe",
// };

const Home = () => {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const respnse = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await respnse.json();
    setMovies(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Hello{JSON.stringify(movies)}</h1>
    </div>
  );
};

export default Home;
