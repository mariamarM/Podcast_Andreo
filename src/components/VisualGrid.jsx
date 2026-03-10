export default function VisualGrid() {

  return (

    <section className="px-12 grid grid-cols-4 gap-4">

      <div className="aspect-square bg-black rounded-2xl"></div>

      <div className="aspect-square bg-naranja rounded-2xl flex items-center justify-center">
        👁
      </div>

      <div className="aspect-square bg-lila rounded-2xl"></div>

      <div className="aspect-square bg-gray-200 rounded-2xl"></div>

      <div className="aspect-square col-span-2 bg-gray-100 rounded-2xl"></div>

      <div className="aspect-square bg-lila rounded-2xl"></div>

    </section>

  )
}