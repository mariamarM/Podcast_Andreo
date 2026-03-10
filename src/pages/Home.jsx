import { motion } from "framer-motion"
import ParallaxBlob from "../components/ParallaxBlob"
import EpisodeCard from "../components/EpisodeCard"

export default function Home() {

  return (

    <div className="py-16 ">

      {/* BLOBS FONDO */}

      <ParallaxBlob color="bg-lila" top="top-20" left="left-20" speed={0.65}/>
      <ParallaxBlob color="bg-naranja" top="top-60" left="right-20" speed={0.2}/>

      {/* CONTENEDOR CENTRAL */}

<div className="relative p-12">        {/* HERO */}

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.7}}
        >

          <h1 className="text-[110px] font-bold text-gray-400 leading-none tracking-tight">
            PODCAST
          </h1>

          <p className="max-w-md text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Cultura digital, entretenimiento, videojuegos y cine.
          </p>

        </motion.div>

        {/* GRID DASHBOARD */}

        <div className="grid grid-cols-3 gap-6 mt-12">

          {/* CARD 1 */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2}}
            className="bg-gray-100 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2">
              Último episodio
            </h3>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet
            </p>

          </motion.div>

          {/* CARD 2 */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.3}}
            className="bg-lila/20 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2">
              Categorías
            </h3>

            <p className="text-sm">
              Series, cine, videojuegos
            </p>

          </motion.div>

          {/* CARD 3 */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.4}}
            className="bg-naranja/20 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2">
              Frecuencia
            </h3>

            <p className="text-sm">
              Nuevo episodio cada semana
            </p>

          </motion.div>

          {/* CARD GRANDE */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.5}}
            className="col-span-2 bg-gray-100 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2">
              Sobre el podcast
            </h3>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

          </motion.div>

          {/* CARD PEQUEÑA */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.6}}
            className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center"
          >

            🎧

          </motion.div>

        </div>

        {/* EPISODIOS */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8">
            Featured Episodes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <EpisodeCard
              title="El futuro de los videojuegos"
              description="Lorem ipsum dolor sit amet"
              image="/images/podcast1.jpg"
            />

            <EpisodeCard
              title="Las mejores series"
              description="Lorem ipsum dolor sit amet"
              image="/images/podcast2.jpg"
            />

            <EpisodeCard
              title="Cultura digital"
              description="Lorem ipsum dolor sit amet"
              image="/images/podcast3.jpg"
            />

          </div>

        </div>

        {/* HERO FINAL */}

        <div className="mt-24 text-center">

          <h2 className="text-6xl font-bold bg-gradient-to-b from-naranja to-lila bg-clip-text text-transparent">

            NUEVOS EPISODIOS
          </h2>

          <p className="text-gray-500 mt-4">
            Cada semana un nuevo podcast disponible
          </p>

        </div>

      </div>

    </div>

  )

}