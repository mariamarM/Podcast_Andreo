function Home() {
  return (
    <div className="bg-background text-text">

      <section className="min-h-screen flex flex-col justify-center items-center text-center">

        <h1 className="text-5xl font-bold">
          Podcast Cultura & Entretenimientoa
        </h1>

        <p className="mt-4 max-w-xl">
          Hablamos de series, videojuegos y cultura digital.
        </p>

        <div className="mt-8">
          <audio controls>
            <source src="/audio/episodio1.mp3" type="audio/mpeg"/>
          </audio>
        </div>

      </section>

    </div>
  )
}

export default Home