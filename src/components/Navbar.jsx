import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 m-4 bg-white rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-naranja">Maria Andreo</h1>

      <div className="flex gap-6 text-gray-600">
        <Link to="/" className="hover:text-black transition">
          Home
        </Link>

        <Link to="/episodios" className="hover:text-black transition">
          Episodios
        </Link>

        <Link to="/contacto" className="hover:text-black transition">
          Participa
        </Link>
        <Link to="/produccion" className="hover:text-black transition">
          Produccion
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
