import { motion } from "framer-motion"
import ParallaxBlob from "../components/ParallaxBlob"
import EpisodeCard from "../components/EpisodeCard"
import ScrollImages from "../components/ScrollImages";

export default function Home() {

  return (

    <div className="py-16 ">


      <ParallaxBlob color="bg-lila" top="top-20" left="left-20" speed={0.65}/>
      <ParallaxBlob color="bg-naranja" top="top-60" left="right-20" speed={0.2}/>


<div className="relative p-12">        

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.7}}
        >

          <h1 className="text-[110px] font-bold text-gray-700 leading-none tracking-tight">
            POCKETMOVIE
          </h1>

          <p className="max-w-md text-gray-500 mt-4">
            Tomando el futuro de la cultura de obras cinematográficas, videojuegos y series.
          </p>

        </motion.div>

       

        <div className="grid grid-cols-3 gap-6 mt-12">

         

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2}}
            className="bg-gray-200 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2 text-gray-700">
              Último episodio
            </h3>

            <p className="text-sm text-gray-500">
              Sobre porque los videojuegos son la forma de arte más importante del siglo XXI.
            </p>

          </motion.div>

        

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.3}}
            className="bg-lila/50 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2">
              Categorías
            </h3>

            <p className="text-sm">
              Series, cine, videojuegos, cortos, cultura digital y mucho más.
            </p>

          </motion.div>

          

        <ScrollImages />

          

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.5}}
            className="col-span-2 bg-gray-500 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2">
              Sobre el nuestro podcast
            </h3>

            <p className="text-sm text-gray-200">
              Hacemos cultura digital, entretenimiento, videojuegos y cine. Cada semana un nuevo episodio disponible en todas las plataformas.
            </p>

          </motion.div>

  <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.4}}
            className="bg-naranja/50 rounded-2xl p-6"
          >

            <h3 className="font-semibold mb-2">
              Frecuencia
            </h3>

            <p className="text-sm">
              Nuevo episodio cada viernes a las 18:00 
            </p>

          </motion.div>
        

        </div>

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-naranja to-lila bg-clip-text text-transparent">
            Episodios destacados
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <EpisodeCard
              title="El futuro de los videojuegos"
              description="Lorem ipsum dolor sit amet"
              image="/multimedia/popcorn.png"
            />

            <EpisodeCard
              title="Las mejores series"
              description="Lorem ipsum dolor sit amet"
              image="/multimedia/popcorn.png"
            />

            <EpisodeCard
              title="Cultura digital"
              description="Lorem ipsum dolor sit amet"
              image="/multimedia/popcorn.png"
            />

          </div>

        </div>

        {/* HERO FINAL */}

        <div className="mt-24 text-center">

          <h2 className="text-6xl font-bold bg-gradient-to-b from-naranja to-lila bg-clip-text text-transparent">

            NUEVA TEMPORADA YA DISPONIBLE
          </h2>

          <p className="text-gray-500 mt-4">
            Ya puedes escuchar la nueva temporada con nuevos colaboradores.
          </p>

        </div>

      </div>

    </div>

  )

}