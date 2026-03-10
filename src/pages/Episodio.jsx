function Episodios() {

const episodios = [
  {
    title: "Episodio 1 - Mejores videojuegos 2025",
    audio: "/audio/ep1.mp3"
  },
  {
    title: "Episodio 2 - Series recomendadas",
    audio: "/audio/ep2.mp3"
  }
]

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Episodios
      </h1>

      {episodios.map((ep,i)=>(
        <div key={i} className="mb-6 p-6 border rounded-xl">

          <h2 className="text-xl font-semibold">
            {ep.title}
          </h2>

          <audio controls className="mt-4 w-full">
            <source src={ep.audio} type="audio/mpeg"/>
          </audio>

        </div>
      ))}

    </div>
  )
}

export default Episodios