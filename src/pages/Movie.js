import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [currentMovie, setCurrentMovie] = useState({})
  const movieParam = useParams()
  const movieId = movieParam.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then((data) => {
        setCurrentMovie(data)
      })
  }, [movieId])

  const movieGenre = currentMovie.genres?.map(genre => <span key={genre}>{genre}</span>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{currentMovie.title}</h1>
        <p>{currentMovie.time} minutes</p>
        {movieGenre}
      </main>
    </>
  );
};

export default Movie;
