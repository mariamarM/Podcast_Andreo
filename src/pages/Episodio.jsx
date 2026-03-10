function Episodios() {

  const episodios = [
    {
      titulo: "Episodio 1 - Videojuegos",
      audio: "/audio/ep1.mp3"
    },
    {
      titulo: "Episodio 2 - Series",
      audio: "/audio/ep2.mp3"
    }
  ]

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Episodios
      </h1>

      <div className="flex flex-col gap-8">

        {episodios.map((ep, i) => (

          <div key={i} className="p-6 border rounded-xl">

            <h2 className="text-xl font-semibold mb-4">
              {ep.titulo}
            </h2>

            <audio controls className="w-full">
              <source src={ep.audio} type="audio/mpeg" />
            </audio>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Episodios