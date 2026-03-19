import { motion } from "framer-motion";
import ParallaxBlob from "../components/ParallaxBlob";
import EpisodeCard from "../components/EpisodeCard";
import ScrollImages from "../components/ScrollImages";

export default function Home() {
  return (
    <div className="py-16">
      {/* Blobs */}
      <ParallaxBlob color="bg-lila" top="top-20" left="left-20" speed={0.65} />
      <ParallaxBlob color="bg-naranja" top="top-60" left="right-20" speed={0.2} />

      <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-bold text-gray-700 leading-none tracking-tight">
            POCKETMOVIE
          </h1>

          <p className="max-w-md text-gray-500 mt-4 text-sm sm:text-base">
            Plataforma para enviarnos podcasts sobre cine y la tecnologia junto con nosotros.
          </p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-200 rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-2 text-gray-700">Último episodio</h3>
            <p className="text-sm text-gray-500">
              Sobre porque los videojuegos son la forma de arte más importante del siglo XXI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-lila/50 rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-2">Categorías</h3>
            <p className="text-sm">
              Series, cine, videojuegos, cortos, cultura digital y mucho más.
            </p>
          </motion.div>

          <ScrollImages />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-1 sm:col-span-2 bg-gray-500 rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-2 text-gray-200">Sobre el nuestro podcast</h3>
            <p className="text-sm text-gray-200">
              Hacemos cultura digital, entretenimiento, videojuegos y cine. Cada semana un nuevo episodio disponible en todas las plataformas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-naranja/50 rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-2">Frecuencia</h3>
            <p className="text-sm">Nuevo episodio cada viernes a las 18:00</p>
          </motion.div>
        </div>

        {/* Episodios destacados */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-naranja to-lila bg-clip-text text-transparent">
            Episodios destacados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <EpisodeCard
              title="Porque no se puede volver el Tecnicholor"
              description="Porque nadie puede recrear el Tennicholor y es imposible grabar con esa calidad en la actualidad."
              image="/multimedia/popcorn.png"
            />
            <EpisodeCard
              title="VR vs AR"
              description="Comparando las tecnologías de realidad virtual y aumentada."
              image="/multimedia/popcorn.png"
            />
            <EpisodeCard
              title="Cultura digital"
              description="Cultura segun como se conoce hoy dia."
              image="/multimedia/popcorn.png"
            />
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-24 text-center px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-naranja to-lila bg-clip-text text-transparent">
            NUEVA TEMPORADA YA DISPONIBLE
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Ya puedes escuchar la nueva temporada en todas las plataformas.
          </p>
        </div>
      </div>
    </div>
  );
}