import { useEffect, useState } from "react";
import Character from "./Character";
import NavbarAPI from "./NavbarAPI";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
      console.log(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <>
      <h1>Home component</h1>
      <h3>Rick & Morty API</h3>
      <NavbarAPI page={page} setPage={setPage} />
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
