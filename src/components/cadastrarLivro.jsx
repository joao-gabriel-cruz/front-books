function CadastrarLivro() {
  function enviar(event) {
    event.preventDefault();

    let data = {
      nome: event.target.nome.value,
      escritor: event.target.escritor.value,
      ano: event.target.ano.value,
      genero: event.target.genero.value,
      paginas: event.target.pagina.value,
    };

    fetch('http://localhost:3333/books', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    event.target.nome.value = '';
    event.target.escritor.value = '';
    event.target.ano.value = '';
    event.target.genero.value = '';
    event.target.pagina.value = '';
  }

  return (
    <div className="">
      <div className="flex flex-col text-xl space-y-5 ">
        <h2 className="pl-6 font-bold text-3xl">Cadastror de Livros</h2>
        <form
          className="flex flex-col w-[20rem] space-y-2  rounded-xl"
          onSubmit={enviar}
        >
          <label htmlFor="">Nome do livro:</label>
          <input
            id="nome"
            className="bg-[#e3dede] rounded-lg p-2 "
            type="text"
            placeholder="Nome"
          />
          <label htmlFor="">Escritor do Livro:</label>
          <input
            id="escritor"
            className="bg-[#e3dede] rounded-lg p-2 "
            type="text"
            placeholder="Escritor"
          />
          <label htmlFor="">Ano do Livro:</label>
          <input
            id="ano"
            className="bg-[#e3dede] rounded-lg p-2 "
            type="number"
            placeholder="Ano"
          />
          <label htmlFor="">Genero do Livro:</label>
          <input
            id="genero"
            className="bg-[#e3dede] rounded-lg p-2 "
            type="text"
            placeholder="Genero"
          />
          <label htmlFor="">Paginas do Livro:</label>
          <input
            id="pagina"
            className="bg-[#e3dede] rounded-lg p-2 "
            type="number"
            placeholder="Paginas"
          />
          <button
            className="bg-black text-white p-2 rounded-lg hover:bg-[#1c1c1c] ease-in duration-300 "
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default CadastrarLivro;
