export default function EpisodeCard({title, description, image}) {

  return (

    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">

      <img
        src={image}
        className="rounded-xl mb-4"
      />

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {description}
      </p>

      <button className="mt-4 text-naranja font-semibold">
        Escuchar →
      </button>

    </div>

  )
}