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

    document.location.reload(true);
  }

  return (
    <div className="">
      <div className="flex flex-col text-xl space-y-5 ">
        <h2 className="titulo">Cadastror de Livros</h2>
        <form
          className="flex flex-col w-[20rem] space-y-2  rounded-xl"
          onSubmit={enviar}
        >
          <label className="subTitulo" htmlFor="">
            Nome do livro:
          </label>
          <input id="nome" type="text" placeholder="Nome" />
          <label className="subTitulo" htmlFor="">
            Escritor do Livro:
          </label>
          <input id="escritor" type="text" placeholder="Escritor" />
          <label className="subTitulo" htmlFor="">
            Ano do Livro:
          </label>
          <input id="ano" type="number" placeholder="Ano" />
          <label className="subTitulo" htmlFor="">
            Genero do Livro:
          </label>
          <input id="genero" type="text" placeholder="Genero" />
          <label className="subTitulo" htmlFor="">
            Paginas do Livro:
          </label>
          <input id="pagina" type="number" placeholder="Paginas" />
          <button className="button " type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default CadastrarLivro;
