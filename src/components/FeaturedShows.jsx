import EpisodeCard from "./EpisodeCard"
import ParallaxBlob from "./ParallaxBlob"

export default function FeaturedShows(){

  return(

<section className="relative py-32 flex justify-center">
<ParallaxBlob color="bg-lila" speed={0.15}/>
<ParallaxBlob color="bg-naranja" speed={0.25}/>
<ParallaxBlob color="bg-lila" size="w-[500px] h-[500px]" speed={0.1}/>

  <div className="max-w-6xl w-full bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-sm">

      <h2 className="text-4xl font-bold mb-10">
        Featured Shows
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="hover:-translate-y-2 transition">
          <EpisodeCard
          title="El futuro de los videojuegos"
          description="Analizamos los juegos más esperados"
          image="/images/podcast1.jpg"
          />
        </div>

        <div className="hover:-translate-y-2 transition">
          <EpisodeCard
          title="Series que debes ver"
          description="Las mejores series del año"
          image="/images/podcast2.jpg"
          />
        </div>

        <div className="hover:-translate-y-2 transition">
          <EpisodeCard
          title="Cultura digital"
          description="El impacto de internet"
          image="/images/podcast3.jpg"
          />
        </div>

      </div>

  </div>

</section>

  )
}