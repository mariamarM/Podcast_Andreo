import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PodcastTranscriber from '../components/PodcastTranscriber';

const temporadas = {
  temp1: {
    nombre: 'Temporada 1',
    episodios: [
      {
        id: 1,
        titulo: 'Solo en Casa (1990)',
        duracion: '1h 24min',
        audio: '/multimedia/audio/P1-SoloEnCasa.mp4',
        pelicula: {
          año: 1990,
          datosCuriosos: [
            'Joe Pesci aceptó el papel para que sus hijos pequeños pudieran verlo en una película',
            'La casa utilizada en la película existe realmente en Illinois',
            'La secuencia de trampas costó más que el presupuesto de muchas películas independientes'
          ]
        }
      },
      {
        id: 2,
        titulo: 'Solo en Casa 2: Perdido en Nueva York',
        duracion: '1h 32min',
        audio: '/multimedia/audio/P2-SoloEnCasa2.mp3',
        invitados: ['Champi', 'Pablo López'],
        pelicula: {
          titulo: 'Solo en Casa 2: Perdido en Nueva York',
          año: 1992,
          director: 'Chris Columbus',
          protagonistas: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'],
          datosCuriosos: [
            'El Plaza Hotel de Nueva York permitió grabar con la condición de que Macaulay Culkin se quedara allí durante el rodaje',
            'Las palomas fueron entrenadas durante meses'
          ]
        }
      },
      {
        id: 3,
        titulo: 'El fenómeno Solo en Casa: Impacto cultural',
        duracion: '1h 15min',
        audio: '/multimedia/audio/P3-FenomenoSoloEnCasa.mp3',
        invitados: ['Domingo Dark Vinyl', 'Pablo López'],
        pelicula: {
          titulo: 'Especial: Legado de Solo en Casa',
          datosCuriosos: [
            'Es la película navideña más taquillera de la historia',
            'John Hughes escribió el guion en solo 9 días',
            'La frase "¡Tenéis los cabezales limpios?" se volvió un meme antes de internet'
          ]
        }
      }
    ]
  },
  temp2: {
    nombre: 'Temporada 2',
    episodios: [
      {
        id: 4,
        titulo: 'Mi Pobre Angelito (1990) - Análisis',
        duracion: '1h 20min',
        audio: '/multimedia/audio/ep2.mp3',
        invitados: ['Champi', 'Invitado Especial'],
        pelicula: {
          titulo: 'Mi Pobre Angelito',
          año: 1990,
          director: 'Chris Columbus'
        }
      }
    ]
  }
};

const LavaLampBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute -top-20 -right-20 w-[600px] h-[800px] md:w-[800px] md:h-[1000px] opacity-4"
      style={{
        background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
        filter: 'blur(60px)',
        transform: 'scale(1.2) rotate(15deg)',
        borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
        animation: 'lavaLamp 25s ease-in-out infinite'
      }}
    />
    
   
    <div 
      className="absolute -bottom-20 -left-20 w-[500px] h-[700px] md:w-[700px] md:h-[900px] opacity-3"
      style={{
        background: 'radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.5) 0%, transparent 70%)',
        filter: 'blur(60px)',
        transform: 'scale(1.1) rotate(-10deg)',
        borderRadius: '70% 30% 50% 50% / 30% 60% 40% 70%',
        animation: 'lavaLampReverse 20s ease-in-out infinite'
      }}
    />
    
    <div 
      className="absolute top-1/3 left-1/4 w-[400px] h-[600px] opacity-3"
      style={{
        background: 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246,) 0%, transparent 70%)',
        filter: 'blur(70px)',
        transform: 'scale(1.3)',
        borderRadius: '80% 20% 60% 40% / 50% 50% 50% 50%',
        animation: 'lavaLampSlow 30s ease-in-out infinite'
      }}
    />
    
    <div 
      className="absolute bottom-1/3 right-1/4 w-[300px] h-[500px] opacity-4"
      style={{
        background: 'radial-gradient(circle at 40% 60%, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
        filter: 'blur(80px)',
        transform: 'scale(1.4)',
        borderRadius: '40% 60% 30% 70% / 60% 30% 70% 40%',
        animation: 'lavaLampMedium 22s ease-in-out infinite'
      }}
    />
  </div>
);

function Episodios() {
  const [selectedEp, setSelectedEp] = useState(null);
  const [temporadaActiva, setTemporadaActiva] = useState('temp1');
  const [showTranscriber, setShowTranscriber] = useState(false);

  const handleSelectEpisodio = (episodio) => {
    setSelectedEp(episodio);
    setShowTranscriber(false);
  };

  const episodiosActuales = temporadas[temporadaActiva].episodios;

  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
      <LavaLampBlobs />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Episodios
          </h1>
          <p className="text-lg text-gray-600 mt-2 font-light inline-block ">
            Escucha nuestros análisis cinematográficos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex gap-2 p-1.5 ">
              <button
                onClick={() => setTemporadaActiva('temp1')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  temporadaActiva === 'temp1'
                    ? 'bg-gradient-to-r from-naranja to-lila text-white shadow-lg border-2 border-white/50'
                    : 'text-gray-500 hover:text-gray-400 hover:bg-white/80'
                }`}
              >
                Temporada 1
              </button>
              <button
                onClick={() => setTemporadaActiva('temp2')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  temporadaActiva === 'temp2'
                    ? 'bg-gradient-to-r from-naranja to-lila text-white shadow-lg border-2 border-white/80'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/40'
                }`}
              >
                Temporada 2
              </button>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-3xl border-2 border-white/50 shadow-xl overflow-hidden">
              <div className="p-6 border-b-2 border-white/70">
                <h2 className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  {temporadas[temporadaActiva].nombre} · {episodiosActuales.length} episodios
                </h2>
              </div>
              
              <div className="p-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/70 scrollbar-track-transparent">
                <AnimatePresence>
                  {episodiosActuales.map((ep, index) => (
                    <motion.div
                      key={ep.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelectEpisodio(ep)}
                      className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                        selectedEp?.id === ep.id
                          ? 'bg-white/40 backdrop-blur-md border-white/90 shadow-xl'
                          : 'border-transparent hover:bg-white/30 hover:border-white/70'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Número de episodio con glass effect y borde blanco */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium backdrop-blur-sm border-2 transition-all duration-200 ${
                          selectedEp?.id === ep.id
                            ? 'bg-gradient-to-r from-naranja to-lila text-white border-white/90 shadow-lg'
                            : 'bg-white/40 text-gray-700 border-white/70 group-hover:bg-white/60'
                        }`}>
                          {index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`font-semibold transition-colors duration-200 ${
                            selectedEp?.id === ep.id
                              ? 'text-transparent bg-clip-text bg-gradient-to-r from-naranja to-lila'
                              : 'text-gray-800'
                          }`}>
                            {ep.titulo}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm text-gray-600">{ep.duracion}</span>
                            {ep.invitados && (
                              <span className="text-sm text-gray-500">
                                · {ep.invitados.length} participantes
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {selectedEp?.id === ep.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-naranja to-lila rounded-full border border-white/70 shadow-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 mt-[-10%]"
          >
            {/* Panel de Transcripción con glass effect y bordes blancos marcados */}
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl border-2 border-white/70 shadow-xl overflow-hidden">
              <div className="p-6 border-b-2 border-white/70">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Transcripción
                  </h2>
                  {selectedEp && (
                    <button
                      onClick={() => setShowTranscriber(!showTranscriber)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border-2 ${
                        showTranscriber
                          ? 'bg-gradient-to-r from-naranja to-lila text-white border-white/90 shadow-lg'
                          : 'bg-white/40 text-gray-700 border-white/70 hover:bg-white/60'
                      }`}
                    >
                      {showTranscriber ? 'Ocultar' : 'Activar'}
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6">
                {selectedEp ? (
                  showTranscriber ? (
                    <div className="space-y-4">
                      
                      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-white/70 p-4">
                        <PodcastTranscriber audioUrl={selectedEp.audio} />
                      </div>
                    </div>
                  ) : (
                    <div className="py-16 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/40 backdrop-blur-sm border-2 border-white/70 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-light">
                        Activa la transcripción para ver el texto del audio
                      </p>
                    </div>
                  )
                ) : (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/40 backdrop-blur-sm border-2 border-white/70 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-light">
                      Selecciona un episodio de la lista
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-xl rounded-3xl border-2 border-white/70 shadow-xl overflow-hidden">
              <div className="p-6 border-b-2 border-white/70">
                <h2 className="text-lg font-semibold text-gray-800">
                  Ficha técnica
                </h2>
              </div>

              <div className="p-6">
                {selectedEp ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {selectedEp.pelicula.titulo}
                      </h3>
                      {selectedEp.pelicula.año && (
                        <p className="text-sm text-gray-600 mt-1 font-light">
                          {selectedEp.pelicula.año}
                        </p>
                      )}
                    </div>

                    
                    {selectedEp.pelicula.datosCuriosos && (
                      <div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Datos curiosos
                        </span>
                        <ul className="mt-2 space-y-2">
                          {selectedEp.pelicula.datosCuriosos.map((dato, i) => (
                            <li key={i} className="text-sm text-gray-600 font-light flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-naranja to-lila mt-1.5 flex-shrink-0 border border-white/70" />
                              {dato}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  
                    <div className="pt-4 border-t-2 border-white/70">
                      <audio controls >
                        <source src={selectedEp.audio} type="audio/mpeg" />
                      </audio>
                    </div>
                  </div>
                ) : (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/40 backdrop-blur-sm border-2 border-white/70 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-light">
                      Selecciona un episodio para ver los detalles
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Episodios;