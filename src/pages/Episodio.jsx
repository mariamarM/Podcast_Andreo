import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PodcastTranscriber from "../components/PodcastTranscriber";

const temporadas = {
  temp1: {
    nombre: "Temporada 1",
    episodios: [
      {
        id: 1,
        titulo: "Porque no se puede volver el Tecnicholor",
        duracion: "1h 24min",
        audio: "/multimedia/audio/1x1.wav",
        datosCuriosos:
          "El Technicolor era un proceso de filmación en color que se utilizó ampliamente en Hollywood desde los años 30 hasta los 50. Sin embargo, el proceso era extremadamente costoso y complicado, lo que llevó a su declive a medida que surgieron tecnologías más baratas y fáciles de usar. Además, el estilo visual del Technicolor, con sus colores saturados y vibrantes, no encajaba con las tendencias cinematográficas posteriores, lo que contribuyó a que no se volviera a utilizar en la actualidad.",
      },
      {
        id: 2,
        titulo: "VR vs AR",
        duracion: "1h 32min",
        audio: "/multimedia/audio/1x2.wav",
        datosCuriosos:
          "La realidad virtual (VR) y la realidad aumentada (AR) son dos tecnologías relacionadas pero distintas. La VR sumerge completamente al usuario en un entorno digital generado por computadora, mientras que la AR superpone elementos digitales en el mundo real a través de dispositivos como smartphones o gafas inteligentes. Aunque ambas tecnologías tienen aplicaciones en entretenimiento, educación y otras áreas, la VR tiende a ser más inmersiva, mientras que la AR es más accesible y se integra mejor con el entorno físico del usuario.",
      },
      {
        id: 3,
        titulo: "Cultura digital",
        duracion: "1h 15min",
        audio: "/multimedia/audio/1x3.wav",
        datosCuriosos:
          "La cultura digital se refiere a las formas en que las tecnologías de la información y la comunicación influyen en la vida social, cultural y económica. Esta cultura ha transformado la manera en que las personas se comunican, acceden a la información y participan en la sociedad.",
      },
    ],
  },
  temp2: {
    nombre: "Temporada 2",
    episodios: [
      {
        id: 4,
        titulo: "La evolución del cine de ciencia ficción",
        duracion: "1h 20min",
        audio: "/multimedia/audio/2x1.wav",
        datosCuriosos:
          "El cine de ciencia ficción ha evolucionado significativamente desde sus inicios, abordando temas como la tecnología, el espacio y el tiempo. A lo largo de las décadas, ha incorporado avances tecnológicos y ha explorado nuevas narrativas que reflejan las preocupaciones sociales y culturales de cada época.",
      },
    ],
  },
};

const LavaLampBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Purple Blob */}
    <div
      className="absolute -top-20 -right-20 w-[80vw] h-[60vh] sm:w-[800px] sm:h-[1000px]"
      style={{
        background:
          "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
        filter: "blur(60px)",
        borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
        animation: "floatLeftRight 12s ease-in-out infinite",
      }}
    />
    {/* Orange Blob */}
    <div
      className="absolute -bottom-20 -left-20 w-[70vw] h-[55vh] sm:w-[700px] sm:h-[900px]"
      style={{
        background:
          "radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.5) 0%, transparent 70%)",
        filter: "blur(60px)",
        borderRadius: "70% 30% 50% 50% / 30% 60% 40% 70%",
        animation: "floatRightLeft 15s ease-in-out infinite",
      }}
    />
    {/* Middle small blob */}
    <div
      className="absolute top-1/3 left-1/4 w-[60vw] h-[50vh] sm:w-[400px] sm:h-[600px]"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
        filter: "blur(70px)",
        borderRadius: "80% 20% 60% 40% / 50% 50% 50% 50%",
        animation: "floatDiagonal 18s ease-in-out infinite",
      }}
    />
    {/* Bottom right blob */}
    <div
      className="absolute bottom-1/3 right-1/4 w-[50vw] h-[45vh] sm:w-[300px] sm:h-[500px]"
      style={{
        background:
          "radial-gradient(circle at 40% 60%, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
        filter: "blur(80px)",
        borderRadius: "40% 60% 30% 70% / 60% 30% 70% 40%",
        animation: "floatBigCircle 20s ease-in-out infinite",
      }}
    />
  </div>
);

function Episodios() {
  const [selectedEp, setSelectedEp] = useState(null);
  const [temporadaActiva, setTemporadaActiva] = useState("temp1");
  const [showTranscriber, setShowTranscriber] = useState(false);
  const transcriberRef = useRef();

  const handleSelectEpisodio = (episodio) => {
    setSelectedEp(episodio);
    setShowTranscriber(false);
  };

  const handleActivarTranscripcion = () => {
    setShowTranscriber(true);
    setTimeout(() => {
      if (transcriberRef.current) {
        transcriberRef.current.startTranscription();
      }
    }, 100);
  };

  const episodiosActuales = temporadas[temporadaActiva].episodios;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <LavaLampBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12 text-center sm:text-left"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Episodios
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 mt-2 font-light inline-block">
            Escucha nuestros análisis cinematográficos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {/* Lista de episodios */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Botones de temporada */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start p-1.5">
              <button
                onClick={() => setTemporadaActiva("temp1")}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  temporadaActiva === "temp1"
                    ? "bg-gradient-to-r from-naranja to-lila text-white shadow-lg border-2 border-white/50"
                    : "text-gray-500 hover:text-gray-400 hover:bg-white/80"
                }`}
              >
                Temporada 1
              </button>
              <button
                onClick={() => setTemporadaActiva("temp2")}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  temporadaActiva === "temp2"
                    ? "bg-gradient-to-r from-naranja to-lila text-white shadow-lg border-2 border-white/80"
                    : "text-gray-700 hover:text-gray-900 hover:bg-white/40"
                }`}
              >
                Temporada 2
              </button>
            </div>

            {/* Panel de lista de episodios */}
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl border-2 border-white/50 shadow-xl overflow-hidden">
              <div className="p-4 sm:p-6 border-b-2 border-white/70">
                <h2 className="text-sm sm:text-base font-medium text-gray-700 uppercase tracking-wider">
                  {temporadas[temporadaActiva].nombre} · {episodiosActuales.length} episodios
                </h2>
              </div>

              <div className="p-4 max-h-[300px] sm:max-h-[400px] lg:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/70 scrollbar-track-transparent">
                <AnimatePresence>
                  {episodiosActuales.map((ep, index) => (
                    <motion.div
                      key={ep.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelectEpisodio(ep)}
                      className={`group relative p-3 sm:p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                        selectedEp?.id === ep.id
                          ? "bg-white/40 backdrop-blur-md border-white/90 shadow-xl"
                          : "border-transparent hover:bg-white/30 hover:border-white/70"
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-medium backdrop-blur-sm border-2 transition-all duration-200 ${
                            selectedEp?.id === ep.id
                              ? "bg-gradient-to-r from-naranja to-lila text-white border-white/90 shadow-lg"
                              : "bg-white/40 text-gray-700 border-white/70 group-hover:bg-white/60"
                          }`}
                        >
                          {index + 1}
                        </div>

                        <div className="flex-1">
                          <h3
                            className={`font-semibold transition-colors duration-200 ${
                              selectedEp?.id === ep.id
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-naranja to-lila"
                                : "text-gray-800"
                            }`}
                          >
                            {ep.titulo}
                          </h3>
                          <div className="flex items-center gap-2 sm:gap-3 mt-1">
                            <span className="text-xs sm:text-sm text-gray-600">
                              {ep.duracion}
                            </span>
                          </div>
                        </div>
                      </div>

                      {selectedEp?.id === ep.id && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/3 -translate-y-1/2 w-1 h-6 sm:h-8 bg-gradient-to-b from-naranja to-lila rounded-full border border-white/70 shadow-lg"
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

          {/* Panel de transcripción y ficha técnica */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 mt-6 lg:mt-[-10%]"
          >
            {/* Panel Transcripción */}
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl border-2 border-white/70 shadow-xl overflow-hidden">
              <div className="p-6 border-b-2 border-white/70 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Transcripción</h2>
                {selectedEp && (
                  <button
                  aria-label="Activar transcripción"
                    onClick={handleActivarTranscripcion}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border-2 ${
                      showTranscriber
                        ? "bg-gradient-to-r from-naranja to-lila text-white border-white/90 shadow-lg"
                        : "bg-white/40 text-gray-700 border-white/70 hover:bg-white/60"
                    }`}
                  >
                    {showTranscriber ? "Ocultar" : "Activar"}
                  </button>
                )}
              </div>
              <div className="p-6">
                {selectedEp ? (
                  showTranscriber ? (
                    <div className="space-y-4">
                      <div className="bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-white/70 p-4">
                        <PodcastTranscriber ref={transcriberRef} audioUrl={selectedEp.audio} />
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 text-center py-16 font-light">
                      Activa la transcripción para ver el texto del audio
                    </p>
                  )
                ) : (
                  <p className="text-gray-600 text-center py-16 font-light">
                    Selecciona un episodio de la lista
                  </p>
                )}
              </div>
            </div>

            {/* Panel Ficha Técnica */}
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl border-2 border-white/70 shadow-xl overflow-hidden">
              <div className="p-6 border-b-2 border-white/70">
                <h2 className="text-lg font-semibold text-gray-800">Sobre el capítulo de hoy</h2>
              </div>
              <div className="p-6">
                {selectedEp ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">{selectedEp.titulo}</h3>
                    {selectedEp.datosCuriosos && (
                      <div className="space-y-2">
                        {(Array.isArray(selectedEp.datosCuriosos)
                          ? selectedEp.datosCuriosos
                          : [selectedEp.datosCuriosos]
                        ).map((dato, i) => (
                          <p key={i} className="text-sm text-gray-600 font-light">{dato}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center py-16 font-light">
                    Selecciona un episodio para ver los detalles
                  </p>
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