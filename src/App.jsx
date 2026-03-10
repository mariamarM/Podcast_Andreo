import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Episodio from "./pages/Episodio"
import Form from "./pages/Form"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodios" element={<Episodio />} />
        <Route path="/contacto" element={<Form />} />
      </Routes>
<div className="min-h-screen flex items-center justify-center bg-background">

      <h1 className="text-5xl font-bold text-naranja">
        Podcast Cultura
      </h1>

    </div>
    </BrowserRouter>
  )
}

export default App