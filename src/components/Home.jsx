import { useEffect, useState } from "react";
import Character from "./Character";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=1`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
      console.log(data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Home component</h1>
      <h3>Rick & Morty API</h3>

      {loading ? (
        <h1 className="text-danger">Cargandooooo.... </h1>
      ) : (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      )}
    </>
  );
};

export default Home;
