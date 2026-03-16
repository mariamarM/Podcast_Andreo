function Form() {

  return (

    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="mb-8 text-center">Si tienes alguna pregunta o comentario, no dudes en contactarnos.</p>
      <form className="flex flex-col gap-4 w-96">

        <input
          type="text"
          placeholder="Nombre"
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
        />

        <textarea
          placeholder="Mensaje"
          className="border p-3 rounded-lg"
        />

        <button className="bg-naranja text-white p-3 rounded-lg">
          Enviar
        </button>

      </form>

    </div>

  )
}

export default Form