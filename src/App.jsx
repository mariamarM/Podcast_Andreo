import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodios from "./pages/Episodio";
import Contacto from "./pages/Form";

function AppWrapper() {
  const location = useLocation();

  const containerBg = location.pathname === "/contacto" ? "bg-purple-100" : "bg-gray-200";

  return (
    <div className="h-[clamp(954px,80vh,900px)] w-full flex justify-center p-6">
      <div className={`w-full max-w-[2000px] ${containerBg} backdrop-blur-xl rounded-3xl shadow-xl flex flex-col`}  >
        
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}