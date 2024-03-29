import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => {
        setActors(data)
      })
  }, [])

  const actorInfo = actors.map((actor) => {
    const actorMovie = actor.movies.map((movie, index) => { return <li key={index}>{movie}</li> })
    return <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actorMovie}
      </ul>
    </article>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorInfo}
      </main>
    </>
  );
};

export default Actors;
