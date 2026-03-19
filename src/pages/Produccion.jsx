import flores from "../assets/img/flores.gif";

export default function Produccion() {
  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-start p-8">
      <div
        className="
        relative w-full max-w-[1600px] p-6 rounded-[40px]
        backdrop-blur-2xl
        bg-white/40
        p-10
        border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.15)]
      "
      >
        <div
          className="
          pointer-events-none absolute inset-0 rounded-[40px]
          border border-white/40
          bg-gradient-to-br from-white/20 via-transparent to-white/10
        "
        />

        <div className="grid lg:grid-cols-2 gap-8 relative z-10">
          <div className="flex flex-col gap-[12%]">
            <div>
              <h1 className="text-4xl font-bold mb-3">
                Como producimos el Podcast
              </h1>
              <p className="text-gray-700">
                Resumen del proceso de creación del podcast, herramientas
                utilizadas y decisiones tomadas.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/40 border border-white/30 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Proceso</h2>
              <p className="text-gray-700 mb-3">
                La grabacion ha sido realizada con el programa de Notas de
                Audio, la edición en Ocenaudio y montaje en DaVinci Resolve.
              </p>
              <p className="text-gray-700">
                Uso de recursos de Pexels y Lummi para enriquecer el contenido
                visual y auditivo.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/40 border border-white/30 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Informe y Licencia
              </h2>
              <p className="text-gray-700 mb-3">
                Herramientas accesibles priorizando calidad y simplicidad.
              </p>
              <p className="text-gray-700">
                Licencia Creative Commons con atribución correcta.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 auto-rows-[180px]">
            {/* OCENAUDIO */}
            <a
              href="https://www.ocenaudio.com/"
              target="_blank"
              className="col-span-2 relative backdrop-blur-3xl bg-white/30 border border-white/40 rounded-3xl p-6 shadow-xl flex flex-col justify-center hover:scale-[1.02] transition group"
            >
              <h3 className="text-2xl text-gray-700 font-semibold mb-2">Ocenaudio</h3>
              <p className="text-gray-700">Edición de audio</p>

              {/* flecha */}
             <span className="
  absolute bottom-4 right-4
  w-20 h-20 flex items-center justify-center
  rounded-full
  group-hover:scale-110
  group-hover:translate-x-1 group-hover:-translate-y-1
  transition
">
  <i className="fa-solid fa-arrow-up text-gray-700 text-[40px]  rotate-45"></i>
</span>
            </a>

            {/* DAVINCI */}
            <a
              href="https://www.blackmagicdesign.com/products/davinciresolve"
              target="_blank"
              className="relative backdrop-blur-3xl bg-white/30 border border-white/40 rounded-3xl p-6 shadow-xl flex flex-col justify-center hover:scale-[1.02] transition group"
            >
              <h3 className="text-xl text-gray-700 font-semibold mb-2">DaVinci</h3>
              <p className="text-gray-700">Edición de vídeo</p>
          <span className="
  absolute bottom-4 right-4
  w-20 h-20 flex items-center justify-center
  rounded-full
  group-hover:scale-110
  group-hover:translate-x-1 group-hover:-translate-y-1
  transition
">
  <i className="fa-solid fa-arrow-up text-naranja text-[40px]  rotate-45"></i>
</span>
            </a>

            {/* IPHONE (SIN LINK) */}
            <div className="relative backdrop-blur-3xl bg-white/30 border border-white/40 rounded-3xl p-6 shadow-xl flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">iPhone</h3>
              <p className="text-gray-700">Grabación</p>
            </div>

            {/* RECURSOS */}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              className="col-span-2 relative backdrop-blur-3xl bg-white/30 border border-white/40 rounded-3xl p-6 shadow-xl flex flex-col justify-center hover:scale-[1.02] transition group"
            >
              <h3 className="text-xl text-gray-700 font-semibold mb-2">Recursos</h3>
              <p className="text-gray-700">Pexels + Lummi</p>

                       <span className="
  absolute bottom-4 right-4
  w-20 h-20 flex items-center justify-center
  rounded-full
  group-hover:scale-110
  group-hover:translate-x-1 group-hover:-translate-y-1
  transition
">
  <i className="fa-solid fa-arrow-up text-lilac text-[40px] rotate-45"></i>
</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
