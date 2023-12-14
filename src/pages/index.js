import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";

export default function Home({ results }) {
  //   console.log("results 데이터를 잘 받아오고 있는지 확인 : ", results);
  const router = useRouter();
  const clk = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />

      {results?.map((movie) => (
        <div
          onClick={() => clk(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              {movie.original_title}
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointerl;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
