import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-dark p-2 d-flex gap-3 justify-content-center w-100">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default Navbar;
