import { Link } from "react-router-dom"

export default function EpisodeCard({title, description, image}) {
  return (
    <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-4 shadow-2xl hover:shadow-3xl transition border border-white/30 flex flex-row-reverse gap-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
      
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-lila/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-naranja/30 rounded-full blur-3xl"></div>
      
      <img
        src={image}
        className="rounded-xl w-24 h-24 object-cover flex-shrink-0 relative z-10"
      />
      
      <div className="flex flex-col flex-grow relative z-10">
        <h3 className="font-semibold text-lg text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          {description}
        </p>

        <Link to="/episodios" className="inline-block mt-2">
          <button className="text-naranja font-semibold bg-gray-300/80 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-gray-200/80 transition text-sm">
            Escuchar →
          </button>
        </Link>
      </div>
    </div>
  )
}