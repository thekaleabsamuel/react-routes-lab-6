import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [director, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then(data => {
        setDirectors(data)
      })
  }, [])

  const directorInfo = director.map((director) => {
    const directorMovie = director.movies.map((movie, index) => { return <li key={index}>{movie}</li> })
    return <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        {directorMovie}
      </ul>
    </article>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorInfo}
      </main>
    </>
  );
};

export default Directors;
