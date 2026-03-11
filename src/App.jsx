import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodios from "./pages/Episodio";
import Contacto from "./pages/Form";
export default function App() {
  return (
    <BrowserRouter>
      {/* FONDO GRIS */}
      <div className="h-[950px] w-full bg-gray-200 flex justify-center p-6">
        {/* CONTENEDOR BLANCO */}
        <div className="w-full max-w-[2000px] h-screen bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl flex flex-col overflow-hidden">
          
          {/* NAVBAR FIJO */}
          <Navbar />

          {/* MAIN CON SCROLL */}
          <main className="px-12 py-10 flex-1 overflow-y-auto scrollbar-hide">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/episodios" element={<Episodios />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}