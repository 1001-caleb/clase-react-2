const Character = ({ character }) => {
  return (
    <div className="flex">
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p>{character.name}</p>
      <span>{character.status}</span>
      <span>{character.gender}</span>
      <span>{character.species}</span>
    </div>
  );
};

export default Character;
