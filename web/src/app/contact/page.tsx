export default function Contact() {
  return (
    <div className="w-2/4 h-full mt-48 flex justify-items-center gap-3 flex-col">
      <h1 className="text-4xl tracking-wider py-2 text-center uppercase font-bold text-mainPalette-text">
        Envie um <span className="highlight">email</span> para nós
      </h1>
      <form className=" flex flex-col gap-10 flex-1 p-10">
        <h2 className="text-2xl text-semibold tracking-wide text-mainPalette-text text-center">
          Entre em contato e descreva aqui as ideias iniciais
        </h2>
        <div className="flex w-full justify-around">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-mainPalette-text">
              Qual o seu nome?
            </label>
            <input type="text" className="w-44 h-6 rounded" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-mainPalette-text">
              Texto do Input Aqui
            </label>
            <input type="text" className="w-44 h-6 rounded" />
          </div>
        </div>
      </form>
    </div>
  )
}
