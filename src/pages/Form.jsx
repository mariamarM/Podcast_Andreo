function Form() {
  return (

    <div className="flex justify-center items-center min-h-screen">

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

        <button className="bg-primary text-white p-3 rounded-lg">
          Enviar
        </button>

      </form>

    </div>
  )
}

export default Form