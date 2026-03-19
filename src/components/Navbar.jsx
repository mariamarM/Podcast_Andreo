import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ParallaxBlob from "./ParallaxBlob"; // Asegúrate de tener este componente

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 m-4 bg-white rounded-2xl shadow-sm z-50">
      <h1 className="text-2xl font-bold text-naranja">Maria Andreo</h1>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 text-gray-600">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/episodios" className="hover:text-black transition">Episodios</Link>
        <Link to="/contacto" className="hover:text-black transition">Participa</Link>
        <Link to="/produccion" className="hover:text-black transition">Producción</Link>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex justify-center items-center">
          {/* BLOBS detrás */}
          <ParallaxBlob color="bg-lila/40" top="top-[-20%]" left="left-[-20%]" speed={0.2} />
          <ParallaxBlob color="bg-naranja/30" top="top-[60%]" left="right-[-20%]" speed={0.3} />

          {/* CONTENEDOR GLASS */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl flex flex-col justify-center items-center gap-10 p-6">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black transition">
              Home
            </Link>
            <Link to="/episodios" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black transition">
              Episodios
            </Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black transition">
              Participa
            </Link>
            <Link to="/produccion" onClick={() => setIsOpen(false)} className="text-3xl font-semibold hover:text-black transition">
              Producción
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;