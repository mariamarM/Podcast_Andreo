import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodios from "./pages/Episodio";
import Contacto from "./pages/Form";

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-[1000px] w-full bg-gray-200 flex justify-center p-6">
        <div className="w-full max-w-[2000px] bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl flex flex-col">
          
          <Navbar />

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