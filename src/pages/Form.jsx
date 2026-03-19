import naturalVideo from "/multimedia/natural.mp4";

export default function Form() {
  return (
    <div className="bg-purple-200 p-8 flex justify-center items-start">
      <div className="w-full max-w-[2000px] grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
          <h2 className="text-4xl font-bold mb-4">Sigue creando contenido con nosotros</h2>
          <p className="text-gray-700 mb-8">
            Como pagina colaborativa con el publico nuestro contenido resume la
            tecnologia y el mundo del cine pasando por teorias y actualidad sobre este mundo. Si tienes una idea para un episodio o quieres compartir tu opinión, no dudes en contactarnos a través de este formulario.
          </p>

          <form className="grid grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1 uppercase">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1 uppercase">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-semibold mb-1 uppercase">
                Mensaje 
              </label>
              <textarea
                placeholder="Write your message..."
                rows={6}
                className="border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            <button className="bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition">
              Enviar
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <video
            width="100%"
            height="315px"
              src={naturalVideo}
           autoPlay
  muted
  loop
  controls
              className="w-full h-[315px] object-cover rounded-2xl"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between items-center">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Direccion 
                </span>
                <span>C/Monlau 123, Barcelona, España</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Correo
                </span>
                <span>info@pockertmovie.es</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Movil
                </span>
                <span>+34 600 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
